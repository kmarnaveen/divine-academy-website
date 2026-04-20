"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AlertTriangle, BellRing, CheckCircle2 } from "lucide-react";

import {
  ErpToast,
  ErpToastClose,
  ErpToastDescription,
  ErpToastProvider,
  ErpToastTitle,
  ErpToastViewport,
} from "@/components/admin/ui";
import {
  adminLeads,
  getLeadStageLabel,
  type AdminLead,
  type AdminLeadActivity,
  type AdminLeadTask,
  type LeadPriority,
  type LeadStage,
  type LeadTaskStatus,
} from "@/lib/admin-leads";

const leadsStorageKey = "dia-admin-leads-workspace-v1";

const stageScoreMap: Record<LeadStage, number> = {
  new: 52,
  contacted: 61,
  qualified: 76,
  "visit-scheduled": 82,
  "docs-pending": 72,
  negotiation: 86,
  enrolled: 95,
};

const priorityScoreMap: Record<LeadPriority, number> = {
  hot: 10,
  high: 6,
  medium: 0,
  low: -6,
};

const toastIconMap = {
  default: BellRing,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: AlertTriangle,
} as const;

type ToastVariant = keyof typeof toastIconMap;

type LeadsToast = {
  id: number;
  variant: ToastVariant;
  title: string;
  description: string;
};

export type WorkspaceLead = AdminLead & {
  archivedAt?: string | null;
};

export type CreateLeadInput = {
  parentName: string;
  studentName: string;
  phone: string;
  email: string;
  classInterest: string;
  location: string;
  campusPreference: string;
  session: string;
  source: string;
  ownerName: string;
  stage: LeadStage;
  priority: LeadPriority;
};

export type SaveLeadRecordInput = {
  parentName: string;
  studentName: string;
  phone: string;
  email: string;
  classInterest: string;
  campusPreference: string;
  location: string;
  session: string;
  source: string;
  ownerName: string;
  stage: LeadStage;
  priority: LeadPriority;
  summary: string;
  nextActionType: string;
  nextActionAt: string;
  notes: string[];
  requirements: string[];
  tasks: AdminLeadTask[];
};

type LeadsWorkspaceContextValue = {
  hydrated: boolean;
  leads: WorkspaceLead[];
  ownerOptions: string[];
  sourceOptions: string[];
  getLeadById: (leadId: string) => WorkspaceLead | null;
  resolveOwnerProfile: (ownerName: string) => WorkspaceLead["owner"];
  createLead: (input: CreateLeadInput) => WorkspaceLead | null;
  saveLeadRecord: (leadId: string, input: SaveLeadRecordInput) => WorkspaceLead | null;
  logLeadCall: (
    leadId: string,
    input: { summary: string; nextActionType?: string; nextActionAt?: string },
  ) => void;
  sendLeadEmail: (leadId: string, input: { subject: string; body: string }) => void;
  addLeadNote: (leadId: string, note: string) => void;
  reassignLeadOwner: (leadId: string, ownerName: string) => void;
  moveLeadStage: (leadId: string, stage: LeadStage) => void;
  archiveLead: (leadId: string) => void;
  pushToast: (toast: Omit<LeadsToast, "id">) => void;
};

const LeadsWorkspaceContext = createContext<LeadsWorkspaceContextValue | null>(null);

function getOwnerInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part.trim()[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function normalizeLead(lead: AdminLead | WorkspaceLead): WorkspaceLead {
  return {
    ...lead,
    archivedAt: "archivedAt" in lead ? lead.archivedAt ?? null : null,
  };
}

function formatWorkspaceTimestamp(date: Date) {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfTarget = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diffInDays = Math.round(
    (startOfTarget.getTime() - startOfToday.getTime()) / 86_400_000,
  );

  const timeLabel = new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);

  if (diffInDays === 0) {
    return `Today, ${timeLabel}`;
  }

  if (diffInDays === -1) {
    return `Yesterday, ${timeLabel}`;
  }

  if (diffInDays === 1) {
    return `Tomorrow, ${timeLabel}`;
  }

  const weekdayLabel = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
  }).format(date);

  return `${weekdayLabel}, ${timeLabel}`;
}

export function calculateLeadScore(stage: LeadStage, priority: LeadPriority) {
  return Math.max(20, Math.min(99, stageScoreMap[stage] + priorityScoreMap[priority]));
}

function createActivity(
  input: Omit<AdminLeadActivity, "id" | "at"> & { at?: string },
): AdminLeadActivity {
  return {
    id: `activity-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    at: input.at ?? formatWorkspaceTimestamp(new Date()),
    type: input.type,
    title: input.title,
    detail: input.detail,
    owner: input.owner,
  };
}

function buildOwnerProfile(ownerName: string, leads: WorkspaceLead[]) {
  const knownOwner =
    leads.find((lead) => lead.owner.name === ownerName)?.owner ??
    adminLeads.find((lead) => lead.owner.name === ownerName)?.owner;

  if (knownOwner) {
    return knownOwner;
  }

  return {
    name: ownerName,
    initials: getOwnerInitials(ownerName),
    team: "Admissions Desk",
  };
}

function createLeadId(parentName: string, studentName: string, leads: WorkspaceLead[]) {
  const base = `${parentName}-${studentName}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

  let candidate = base || `lead-${Date.now()}`;
  let suffix = 2;

  while (leads.some((lead) => lead.id === candidate)) {
    candidate = `${base}-${suffix}`;
    suffix += 1;
  }

  return candidate;
}

function isStoredLeadArray(value: unknown): value is WorkspaceLead[] {
  return Array.isArray(value);
}

type LeadsWorkspaceProviderProps = {
  children: ReactNode;
  initialLeads?: AdminLead[];
};

export function LeadsWorkspaceProvider({
  children,
  initialLeads = adminLeads,
}: LeadsWorkspaceProviderProps) {
  const normalizedInitialLeads = useMemo(
    () => initialLeads.map((lead) => normalizeLead(lead)),
    [initialLeads],
  );

  const [leads, setLeads] = useState<WorkspaceLead[]>(normalizedInitialLeads);
  const [hydrated, setHydrated] = useState(false);
  const [toasts, setToasts] = useState<LeadsToast[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") {
      setHydrated(true);
      return;
    }

    try {
      const storedValue = window.localStorage.getItem(leadsStorageKey);

      if (storedValue) {
        const parsedValue = JSON.parse(storedValue) as unknown;

        if (isStoredLeadArray(parsedValue)) {
          setLeads(parsedValue.map((lead) => normalizeLead(lead)));
        }
      }
    } catch {
      setLeads(normalizedInitialLeads);
    } finally {
      setHydrated(true);
    }
  }, [normalizedInitialLeads]);

  useEffect(() => {
    if (!hydrated || typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(leadsStorageKey, JSON.stringify(leads));
  }, [hydrated, leads]);

  const pushToast = useCallback((toast: Omit<LeadsToast, "id">) => {
    setToasts((current) => [
      ...current,
      {
        ...toast,
        id: Date.now() + Math.floor(Math.random() * 1000),
      },
    ].slice(-4));
  }, []);

  const removeToast = useCallback((toastId: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== toastId));
  }, []);

  const ownerOptions = useMemo(
    () =>
      Array.from(
        new Set([
          ...adminLeads.map((lead) => lead.owner.name),
          ...leads.map((lead) => lead.owner.name),
        ]),
      ),
    [leads],
  );

  const sourceOptions = useMemo(
    () => Array.from(new Set([...adminLeads.map((lead) => lead.source), ...leads.map((lead) => lead.source)])),
    [leads],
  );

  const getLeadById = useCallback(
    (leadId: string) => leads.find((lead) => lead.id === leadId) ?? null,
    [leads],
  );

  const resolveOwnerProfile = useCallback(
    (ownerName: string) => buildOwnerProfile(ownerName, leads),
    [leads],
  );

  const createLead = useCallback(
    (input: CreateLeadInput) => {
      let createdLead: WorkspaceLead | null = null;

      setLeads((current) => {
        const owner = buildOwnerProfile(input.ownerName, current);
        const leadId = createLeadId(input.parentName, input.studentName, current);
        const nextActionAt = formatWorkspaceTimestamp(new Date(Date.now() + 60 * 60 * 1000));

        createdLead = normalizeLead({
          id: leadId,
          parentName: input.parentName.trim(),
          studentName: input.studentName.trim(),
          classInterest: input.classInterest.trim(),
          source: input.source.trim(),
          stage: input.stage,
          priority: input.priority,
          owner,
          phone: input.phone.trim(),
          email: input.email.trim(),
          location: input.location.trim(),
          campusPreference: input.campusPreference.trim(),
          session: input.session.trim(),
          score: calculateLeadScore(input.stage, input.priority),
          lastContactAt: "Not contacted yet",
          nextActionAt,
          nextActionType: "Place first discovery call",
          summary: `${input.studentName.trim()} enquiry added locally. Continue qualification from the lead record.`,
          valueBand: "To be qualified",
          tags: ["New enquiry", input.source.trim()],
          requirements: [],
          notes: [],
          tasks: [
            {
              id: `task-${Date.now()}`,
              title: "Place first discovery call",
              due: nextActionAt,
              status: "open",
            },
          ],
          activities: [
            createActivity({
              type: "system",
              title: "Lead created",
              detail: `${input.source.trim()} enquiry added to the local leads workspace.`,
              owner: owner.name,
            }),
          ],
        });

        return createdLead ? [createdLead, ...current] : current;
      });

      if (createdLead) {
        pushToast({
          variant: "success",
          title: "Lead created",
          description: `${createdLead.parentName} is now available in the local leads workspace.`,
        });
      }

      return createdLead;
    },
    [pushToast],
  );

  const saveLeadRecord = useCallback(
    (leadId: string, input: SaveLeadRecordInput) => {
      let savedLead: WorkspaceLead | null = null;

      setLeads((current) =>
        current.map((lead) => {
          if (lead.id !== leadId) {
            return lead;
          }

          const owner = buildOwnerProfile(input.ownerName, current);

          savedLead = {
            ...lead,
            parentName: input.parentName.trim(),
            studentName: input.studentName.trim(),
            phone: input.phone.trim(),
            email: input.email.trim(),
            classInterest: input.classInterest.trim(),
            campusPreference: input.campusPreference.trim(),
            location: input.location.trim(),
            session: input.session.trim(),
            source: input.source.trim(),
            owner,
            stage: input.stage,
            priority: input.priority,
            score: calculateLeadScore(input.stage, input.priority),
            summary: input.summary.trim(),
            nextActionType: input.nextActionType.trim(),
            nextActionAt: input.nextActionAt.trim(),
            notes: input.notes,
            requirements: input.requirements,
            tasks: input.tasks,
            activities: [
              ...lead.activities,
              createActivity({
                type: "system",
                title: "Lead record saved",
                detail: "Profile and pipeline changes were saved on this device.",
                owner: owner.name,
              }),
            ],
          };

          return savedLead;
        }),
      );

      if (savedLead) {
        pushToast({
          variant: "success",
          title: "Changes saved",
          description: `${savedLead.parentName} has been updated in the local leads workspace.`,
        });
      }

      return savedLead;
    },
    [pushToast],
  );

  const logLeadCall = useCallback(
    (
      leadId: string,
      input: { summary: string; nextActionType?: string; nextActionAt?: string },
    ) => {
      setLeads((current) =>
        current.map((lead) => {
          if (lead.id !== leadId) {
            return lead;
          }

          return {
            ...lead,
            lastContactAt: formatWorkspaceTimestamp(new Date()),
            nextActionType: input.nextActionType?.trim() || lead.nextActionType,
            nextActionAt: input.nextActionAt?.trim() || lead.nextActionAt,
            activities: [
              ...lead.activities,
              createActivity({
                type: "call",
                title: "Call logged",
                detail: input.summary.trim(),
                owner: lead.owner.name,
              }),
            ],
          };
        }),
      );

      const lead = getLeadById(leadId);

      if (lead) {
        pushToast({
          variant: "success",
          title: "Call logged",
          description: `${lead.parentName} now has a fresh call update in the activity timeline.`,
        });
      }
    },
    [getLeadById, pushToast],
  );

  const sendLeadEmail = useCallback(
    (leadId: string, input: { subject: string; body: string }) => {
      setLeads((current) =>
        current.map((lead) => {
          if (lead.id !== leadId) {
            return lead;
          }

          return {
            ...lead,
            lastContactAt: formatWorkspaceTimestamp(new Date()),
            activities: [
              ...lead.activities,
              createActivity({
                type: "email",
                title: input.subject.trim(),
                detail: input.body.trim(),
                owner: lead.owner.name,
              }),
            ],
          };
        }),
      );

      const lead = getLeadById(leadId);

      if (lead) {
        pushToast({
          variant: "success",
          title: "Email logged",
          description: `${lead.parentName} now has an email update in the activity timeline.`,
        });
      }
    },
    [getLeadById, pushToast],
  );

  const addLeadNote = useCallback(
    (leadId: string, note: string) => {
      setLeads((current) =>
        current.map((lead) => {
          if (lead.id !== leadId) {
            return lead;
          }

          return {
            ...lead,
            notes: [note.trim(), ...lead.notes],
            activities: [
              ...lead.activities,
              createActivity({
                type: "note",
                title: "Note added",
                detail: note.trim(),
                owner: lead.owner.name,
              }),
            ],
          };
        }),
      );

      const lead = getLeadById(leadId);

      if (lead) {
        pushToast({
          variant: "default",
          title: "Note added",
          description: `${lead.parentName} now has a new internal note.`,
        });
      }
    },
    [getLeadById, pushToast],
  );

  const reassignLeadOwner = useCallback(
    (leadId: string, ownerName: string) => {
      setLeads((current) =>
        current.map((lead) => {
          if (lead.id !== leadId || lead.owner.name === ownerName) {
            return lead;
          }

          const owner = buildOwnerProfile(ownerName, current);

          return {
            ...lead,
            owner,
            activities: [
              ...lead.activities,
              createActivity({
                type: "system",
                title: "Owner updated",
                detail: `Lead moved to ${owner.name}.`,
                owner: owner.name,
              }),
            ],
          };
        }),
      );

      const lead = getLeadById(leadId);

      if (lead && lead.owner.name !== ownerName) {
        pushToast({
          variant: "success",
          title: "Owner changed",
          description: `${lead.parentName} is now assigned to ${ownerName}.`,
        });
      }
    },
    [getLeadById, pushToast],
  );

  const moveLeadStage = useCallback(
    (leadId: string, stage: LeadStage) => {
      const currentLead = getLeadById(leadId);

      if (!currentLead || currentLead.stage === stage) {
        return;
      }

      setLeads((current) =>
        current.map((lead) => {
          if (lead.id !== leadId) {
            return lead;
          }

          return {
            ...lead,
            stage,
            score: calculateLeadScore(stage, lead.priority),
            activities: [
              ...lead.activities,
              createActivity({
                type: "system",
                title: "Stage updated",
                detail: `Lead moved from ${getLeadStageLabel(lead.stage)} to ${getLeadStageLabel(stage)}.`,
                owner: lead.owner.name,
              }),
            ],
          };
        }),
      );

      pushToast({
        variant: "success",
        title: "Stage updated",
        description: `${currentLead.parentName} moved to ${getLeadStageLabel(stage)}.`,
      });
    },
    [getLeadById, pushToast],
  );

  const archiveLead = useCallback(
    (leadId: string) => {
      const currentLead = getLeadById(leadId);

      if (!currentLead || currentLead.archivedAt) {
        return;
      }

      setLeads((current) =>
        current.map((lead) =>
          lead.id === leadId
            ? {
                ...lead,
                archivedAt: new Date().toISOString(),
              }
            : lead,
        ),
      );

      pushToast({
        variant: "warning",
        title: "Lead archived",
        description: `${currentLead.parentName} has been removed from the active pipeline on this device.`,
      });
    },
    [getLeadById, pushToast],
  );

  const contextValue = useMemo<LeadsWorkspaceContextValue>(
    () => ({
      hydrated,
      leads,
      ownerOptions,
      sourceOptions,
      getLeadById,
      resolveOwnerProfile,
      createLead,
      saveLeadRecord,
      logLeadCall,
      sendLeadEmail,
      addLeadNote,
      reassignLeadOwner,
      moveLeadStage,
      archiveLead,
      pushToast,
    }),
    [
      hydrated,
      leads,
      ownerOptions,
      sourceOptions,
      getLeadById,
      resolveOwnerProfile,
      createLead,
      saveLeadRecord,
      logLeadCall,
      sendLeadEmail,
      addLeadNote,
      reassignLeadOwner,
      moveLeadStage,
      archiveLead,
      pushToast,
    ],
  );

  return (
    <LeadsWorkspaceContext.Provider value={contextValue}>
      <ErpToastProvider swipeDirection="right">
        {children}

        {toasts.map((toast) => {
          const Icon = toastIconMap[toast.variant];

          return (
            <ErpToast
              key={toast.id}
              variant={toast.variant}
              open
              onOpenChange={(open) => {
                if (!open) {
                  removeToast(toast.id);
                }
              }}
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-current/10 bg-white/60 text-current">
                <Icon className="h-4.5 w-4.5" />
              </div>

              <div className="min-w-0 flex-1 pr-7">
                <ErpToastTitle>{toast.title}</ErpToastTitle>
                <ErpToastDescription variant={toast.variant}>
                  {toast.description}
                </ErpToastDescription>
              </div>

              <ErpToastClose variant={toast.variant} />
            </ErpToast>
          );
        })}

        <ErpToastViewport />
      </ErpToastProvider>
    </LeadsWorkspaceContext.Provider>
  );
}

export function useLeadsWorkspace() {
  const context = useContext(LeadsWorkspaceContext);

  if (!context) {
    throw new Error("useLeadsWorkspace must be used within LeadsWorkspaceProvider.");
  }

  return context;
}