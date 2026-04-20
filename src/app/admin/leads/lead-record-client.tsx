"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarClock,
  CircleOff,
  Clock3,
  Mail,
  MessageSquareMore,
  Phone,
  Plus,
  Save,
  Trash2,
} from "lucide-react";

import {
  ErpAvatar,
  ErpBadge,
  ErpBreadcrumb,
  ErpBreadcrumbCurrent,
  ErpBreadcrumbItem,
  ErpBreadcrumbLink,
  ErpBreadcrumbList,
  ErpBreadcrumbSeparator,
  ErpButton,
  ErpCard,
  ErpCardContent,
  ErpCardDescription,
  ErpCardHeader,
  ErpCardTitle,
  ErpEmptyState,
  ErpEmptyStateActions,
  ErpEmptyStateDescription,
  ErpEmptyStateMedia,
  ErpEmptyStateTitle,
  ErpProgressSteps,
  ErpSelect,
  ErpSelectContent,
  ErpSelectGroup,
  ErpSelectItem,
  ErpSelectLabel,
  ErpSelectTrigger,
  ErpSelectValue,
  ErpTabs,
  ErpTabsContent,
  ErpTabsList,
  ErpTabsTrigger,
} from "@/components/admin/ui";
import {
  getLeadPriorityLabel,
  getLeadStageLabel,
  leadPriorityLabels,
  leadStageFlow,
  type AdminLeadTask,
  type LeadPriority,
  type LeadStage,
} from "@/lib/admin-leads";

import {
  calculateLeadScore,
  type WorkspaceLead,
  useLeadsWorkspace,
} from "./leads-workspace";

type LeadRecordClientProps = {
  leadId: string;
};

type LeadRecordFormState = {
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
  notesText: string;
  requirementsText: string;
  tasks: AdminLeadTask[];
};

const fieldLabelClass =
  "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500";

const fieldInputClass =
  "mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 shadow-sm outline-none transition-colors focus:border-slate-300";

const fieldTextareaClass =
  "mt-2 min-h-[132px] w-full rounded-[24px] border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-950 shadow-sm outline-none transition-colors focus:border-slate-300";

const stageDescriptions: Record<LeadStage, string> = {
  new: "First-touch enquiry captured and ready for discovery.",
  contacted: "Initial conversation started and qualification is in progress.",
  qualified: "Lead intent is clear and ready for a stronger handoff.",
  "visit-scheduled": "Campus visit is booked and should be executed cleanly.",
  "docs-pending": "Missing documents are blocking the next move.",
  negotiation: "Final objections or payment clarity are holding the decision.",
  enrolled: "Lead is converted and retained for onboarding follow-up.",
};

function getStageBadgeVariant(stage: LeadStage) {
  if (stage === "qualified" || stage === "visit-scheduled") {
    return "accent" as const;
  }

  if (stage === "docs-pending" || stage === "negotiation") {
    return "warning" as const;
  }

  if (stage === "enrolled") {
    return "success" as const;
  }

  return "outline" as const;
}

function getPriorityBadgeVariant(priority: LeadPriority) {
  if (priority === "hot") {
    return "danger" as const;
  }

  if (priority === "high") {
    return "warning" as const;
  }

  if (priority === "low") {
    return "outline" as const;
  }

  return "accent" as const;
}

function getTaskBadgeVariant(status: AdminLeadTask["status"]) {
  if (status === "done") {
    return "success" as const;
  }

  if (status === "waiting") {
    return "warning" as const;
  }

  return "outline" as const;
}

function createFormState(lead: WorkspaceLead): LeadRecordFormState {
  return {
    parentName: lead.parentName,
    studentName: lead.studentName,
    phone: lead.phone,
    email: lead.email,
    classInterest: lead.classInterest,
    campusPreference: lead.campusPreference,
    location: lead.location,
    session: lead.session,
    source: lead.source,
    ownerName: lead.owner.name,
    stage: lead.stage,
    priority: lead.priority,
    summary: lead.summary,
    nextActionType: lead.nextActionType,
    nextActionAt: lead.nextActionAt,
    notesText: lead.notes.join("\n\n"),
    requirementsText: lead.requirements.join("\n"),
    tasks: lead.tasks.map((task) => ({ ...task })),
  };
}

function parseLines(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function LeadRecordClient({ leadId }: LeadRecordClientProps) {
  const {
    hydrated,
    getLeadById,
    ownerOptions,
    sourceOptions,
    resolveOwnerProfile,
    saveLeadRecord,
    pushToast,
  } = useLeadsWorkspace();

  const lead = getLeadById(leadId);
  const [formState, setFormState] = useState<LeadRecordFormState | null>(
    lead ? createFormState(lead) : null,
  );

  useEffect(() => {
    if (lead) {
      setFormState(createFormState(lead));
      return;
    }

    setFormState(null);
  }, [lead]);

  if (!hydrated && !lead) {
    return (
      <div className="space-y-6">
        <section className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8f5f1_100%)] shadow-[0_24px_70px_-50px_rgba(15,23,42,0.2)]">
          <div className="space-y-4 px-6 py-8 sm:px-8">
            <ErpBadge variant="accent">Leads</ErpBadge>
            <h1 className="text-3xl font-bold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Loading lead
            </h1>
          </div>
        </section>
      </div>
    );
  }

  if (!lead || !formState) {
    return (
      <ErpEmptyState variant="accent" size="hero" align="center">
        <ErpEmptyStateMedia variant="accent">
          <CircleOff className="h-7 w-7" />
        </ErpEmptyStateMedia>
        <div className="space-y-2">
          <ErpEmptyStateTitle>Lead not available</ErpEmptyStateTitle>
          <ErpEmptyStateDescription variant="accent">
            This record is not present in the local leads workspace on this device.
          </ErpEmptyStateDescription>
        </div>
        <ErpEmptyStateActions>
          <ErpButton asChild variant="primary">
            <Link href="/admin/leads">Back to leads</Link>
          </ErpButton>
        </ErpEmptyStateActions>
      </ErpEmptyState>
    );
  }

  const ownerProfile = resolveOwnerProfile(formState.ownerName);
  const currentStageIndex = leadStageFlow.indexOf(formState.stage);
  const openTasks = formState.tasks.filter((task) => task.status !== "done");
  const recentActivities = lead.activities.slice().reverse();
  const liveScore = calculateLeadScore(formState.stage, formState.priority);

  function updateField<Field extends keyof Omit<LeadRecordFormState, "tasks">>(
    field: Field,
    value: LeadRecordFormState[Field],
  ) {
    setFormState((current) =>
      current
        ? {
            ...current,
            [field]: value,
          }
        : current,
    );
  }

  function updateTask(taskId: string, patch: Partial<AdminLeadTask>) {
    setFormState((current) =>
      current
        ? {
            ...current,
            tasks: current.tasks.map((task) =>
              task.id === taskId ? { ...task, ...patch } : task,
            ),
          }
        : current,
    );
  }

  function addTask() {
    setFormState((current) =>
      current
        ? {
            ...current,
            tasks: [
              ...current.tasks,
              {
                id: `task-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                title: "",
                due: "",
                status: "open",
              },
            ],
          }
        : current,
    );
  }

  function removeTask(taskId: string) {
    setFormState((current) =>
      current
        ? {
            ...current,
            tasks: current.tasks.filter((task) => task.id !== taskId),
          }
        : current,
    );
  }

  function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !formState.parentName.trim() ||
      !formState.studentName.trim() ||
      !formState.phone.trim() ||
      !formState.email.trim() ||
      !formState.classInterest.trim() ||
      !formState.summary.trim() ||
      !formState.nextActionType.trim() ||
      !formState.nextActionAt.trim()
    ) {
      pushToast({
        variant: "warning",
        title: "Complete required fields",
        description:
          "Parent, student, phone, email, class, summary, and next action are required.",
      });
      return;
    }

    if (!isValidEmail(formState.email.trim())) {
      pushToast({
        variant: "warning",
        title: "Invalid email",
        description: "Enter a valid email address before saving this lead.",
      });
      return;
    }

    const normalizedTasks = formState.tasks
      .map((task) => ({
        ...task,
        title: task.title.trim(),
        due: task.due.trim(),
      }))
      .filter((task) => task.title || task.due);

    if (normalizedTasks.some((task) => !task.title || !task.due)) {
      pushToast({
        variant: "warning",
        title: "Complete task fields",
        description: "Every task needs both a title and a due label before saving.",
      });
      return;
    }

    saveLeadRecord(lead.id, {
      parentName: formState.parentName,
      studentName: formState.studentName,
      phone: formState.phone,
      email: formState.email,
      classInterest: formState.classInterest,
      campusPreference: formState.campusPreference,
      location: formState.location,
      session: formState.session,
      source: formState.source,
      ownerName: formState.ownerName,
      stage: formState.stage,
      priority: formState.priority,
      summary: formState.summary,
      nextActionType: formState.nextActionType,
      nextActionAt: formState.nextActionAt,
      notes: parseLines(formState.notesText),
      requirements: parseLines(formState.requirementsText),
      tasks: normalizedTasks,
    });
  }

  return (
    <form className="space-y-6" onSubmit={handleSave}>
      <section className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8f5f1_100%)] shadow-[0_24px_70px_-50px_rgba(15,23,42,0.2)]">
        <div className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">
          <ErpBreadcrumb>
            <ErpBreadcrumbList>
              <ErpBreadcrumbItem>
                <ErpBreadcrumbLink href="/admin">Admin</ErpBreadcrumbLink>
              </ErpBreadcrumbItem>
              <ErpBreadcrumbSeparator />
              <ErpBreadcrumbItem>
                <ErpBreadcrumbLink href="/admin/leads">Leads</ErpBreadcrumbLink>
              </ErpBreadcrumbItem>
              <ErpBreadcrumbSeparator />
              <ErpBreadcrumbItem>
                <ErpBreadcrumbCurrent>{formState.parentName}</ErpBreadcrumbCurrent>
              </ErpBreadcrumbItem>
            </ErpBreadcrumbList>
          </ErpBreadcrumb>

          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <ErpBadge variant={getStageBadgeVariant(formState.stage)}>
                  {getLeadStageLabel(formState.stage)}
                </ErpBadge>
                <ErpBadge variant={getPriorityBadgeVariant(formState.priority)}>
                  {getLeadPriorityLabel(formState.priority)}
                </ErpBadge>
                <ErpBadge variant="outline">Lead ID: {lead.id}</ErpBadge>
              </div>

              <h1 className="text-3xl font-bold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                {formState.parentName}
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                {formState.studentName} • {formState.classInterest}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <ErpButton asChild variant="outline">
                  <Link href="/admin/leads">
                    <ArrowLeft className="h-4 w-4" />
                    Back to listing
                  </Link>
                </ErpButton>
                <ErpButton type="submit" variant="primary">
                  <Save className="h-4 w-4" />
                  Save changes
                </ErpButton>
                <ErpButton asChild variant="secondary">
                  <Link href="/admin/campus-visit">Convert to visit handoff</Link>
                </ErpButton>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[24px] border border-slate-200 bg-white p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Lead score
                </div>
                <div className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                  {liveScore}
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-600">Priority score.</div>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-white p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Next action
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-950">
                  {formState.nextActionType}
                </div>
                <div className="mt-2 inline-flex items-center gap-2 text-sm text-slate-500">
                  <CalendarClock className="h-4 w-4" />
                  {formState.nextActionAt}
                </div>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-white p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Last touch
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-950">
                  {lead.lastContactAt}
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-600">Latest contact.</div>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-white p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Value band
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-950">
                  {lead.valueBand}
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-600">Current fee band.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_360px]">
        <div className="space-y-6">
          <ErpTabs defaultValue="profile">
            <ErpTabsList variant="default">
              <ErpTabsTrigger value="profile">Profile</ErpTabsTrigger>
              <ErpTabsTrigger value="conversation">Conversation</ErpTabsTrigger>
              <ErpTabsTrigger value="tasks">Tasks</ErpTabsTrigger>
            </ErpTabsList>

            <ErpTabsContent value="profile" className="space-y-6">
              <ErpCard variant="default">
                <ErpCardHeader>
                  <ErpBadge variant="outline">Lead profile</ErpBadge>
                  <ErpCardTitle>Profile</ErpCardTitle>
                  <ErpCardDescription>Parent and student details.</ErpCardDescription>
                </ErpCardHeader>
                <ErpCardContent className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className={fieldLabelClass}>Parent name</span>
                    <input
                      className={fieldInputClass}
                      value={formState.parentName}
                      onChange={(event) => updateField("parentName", event.target.value)}
                    />
                  </label>
                  <label className="block">
                    <span className={fieldLabelClass}>Student name</span>
                    <input
                      className={fieldInputClass}
                      value={formState.studentName}
                      onChange={(event) => updateField("studentName", event.target.value)}
                    />
                  </label>
                  <label className="block">
                    <span className={fieldLabelClass}>Phone</span>
                    <input
                      className={fieldInputClass}
                      value={formState.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                    />
                  </label>
                  <label className="block">
                    <span className={fieldLabelClass}>Email</span>
                    <input
                      className={fieldInputClass}
                      value={formState.email}
                      onChange={(event) => updateField("email", event.target.value)}
                    />
                  </label>
                  <label className="block">
                    <span className={fieldLabelClass}>Class interest</span>
                    <input
                      className={fieldInputClass}
                      value={formState.classInterest}
                      onChange={(event) => updateField("classInterest", event.target.value)}
                    />
                  </label>
                  <label className="block">
                    <span className={fieldLabelClass}>Campus preference</span>
                    <input
                      className={fieldInputClass}
                      value={formState.campusPreference}
                      onChange={(event) =>
                        updateField("campusPreference", event.target.value)
                      }
                    />
                  </label>
                  <label className="block">
                    <span className={fieldLabelClass}>Location</span>
                    <input
                      className={fieldInputClass}
                      value={formState.location}
                      onChange={(event) => updateField("location", event.target.value)}
                    />
                  </label>
                  <label className="block">
                    <span className={fieldLabelClass}>Session</span>
                    <input
                      className={fieldInputClass}
                      value={formState.session}
                      onChange={(event) => updateField("session", event.target.value)}
                    />
                  </label>
                </ErpCardContent>
              </ErpCard>

              <ErpCard variant="default">
                <ErpCardHeader>
                  <ErpBadge variant="outline">Pipeline controls</ErpBadge>
                  <ErpCardTitle>Pipeline</ErpCardTitle>
                  <ErpCardDescription>Stage, priority, owner, and source.</ErpCardDescription>
                </ErpCardHeader>
                <ErpCardContent className="grid gap-5 md:grid-cols-2">
                  <div>
                    <span className={fieldLabelClass}>Stage</span>
                    <ErpSelect
                      value={formState.stage}
                      onValueChange={(value) => updateField("stage", value as LeadStage)}
                    >
                      <ErpSelectTrigger className="mt-2">
                        <ErpSelectValue placeholder="Choose stage" />
                      </ErpSelectTrigger>
                      <ErpSelectContent>
                        <ErpSelectGroup>
                          <ErpSelectLabel>Stage</ErpSelectLabel>
                          {leadStageFlow.map((stage) => (
                            <ErpSelectItem key={stage} value={stage}>
                              {getLeadStageLabel(stage)}
                            </ErpSelectItem>
                          ))}
                        </ErpSelectGroup>
                      </ErpSelectContent>
                    </ErpSelect>
                  </div>

                  <div>
                    <span className={fieldLabelClass}>Priority</span>
                    <ErpSelect
                      value={formState.priority}
                      onValueChange={(value) =>
                        updateField("priority", value as LeadPriority)
                      }
                    >
                      <ErpSelectTrigger className="mt-2">
                        <ErpSelectValue placeholder="Choose priority" />
                      </ErpSelectTrigger>
                      <ErpSelectContent>
                        <ErpSelectGroup>
                          <ErpSelectLabel>Priority</ErpSelectLabel>
                          {Object.entries(leadPriorityLabels).map(([value, label]) => (
                            <ErpSelectItem key={value} value={value}>
                              {label}
                            </ErpSelectItem>
                          ))}
                        </ErpSelectGroup>
                      </ErpSelectContent>
                    </ErpSelect>
                  </div>

                  <div>
                    <span className={fieldLabelClass}>Owner</span>
                    <ErpSelect
                      value={formState.ownerName}
                      onValueChange={(value) => updateField("ownerName", value)}
                    >
                      <ErpSelectTrigger className="mt-2">
                        <ErpSelectValue placeholder="Choose owner" />
                      </ErpSelectTrigger>
                      <ErpSelectContent>
                        <ErpSelectGroup>
                          <ErpSelectLabel>Owner</ErpSelectLabel>
                          {ownerOptions.map((owner) => (
                            <ErpSelectItem key={owner} value={owner}>
                              {owner}
                            </ErpSelectItem>
                          ))}
                        </ErpSelectGroup>
                      </ErpSelectContent>
                    </ErpSelect>
                  </div>

                  <div>
                    <span className={fieldLabelClass}>Lead source</span>
                    <ErpSelect
                      value={formState.source}
                      onValueChange={(value) => updateField("source", value)}
                    >
                      <ErpSelectTrigger className="mt-2">
                        <ErpSelectValue placeholder="Choose source" />
                      </ErpSelectTrigger>
                      <ErpSelectContent>
                        <ErpSelectGroup>
                          <ErpSelectLabel>Source</ErpSelectLabel>
                          {sourceOptions.map((source) => (
                            <ErpSelectItem key={source} value={source}>
                              {source}
                            </ErpSelectItem>
                          ))}
                        </ErpSelectGroup>
                      </ErpSelectContent>
                    </ErpSelect>
                  </div>

                  <label className="block md:col-span-2">
                    <span className={fieldLabelClass}>Lead summary</span>
                    <textarea
                      className={fieldTextareaClass}
                      value={formState.summary}
                      onChange={(event) => updateField("summary", event.target.value)}
                    />
                  </label>

                  <label className="block">
                    <span className={fieldLabelClass}>Next action</span>
                    <input
                      className={fieldInputClass}
                      value={formState.nextActionType}
                      onChange={(event) =>
                        updateField("nextActionType", event.target.value)
                      }
                    />
                  </label>

                  <label className="block">
                    <span className={fieldLabelClass}>Next action due</span>
                    <input
                      className={fieldInputClass}
                      value={formState.nextActionAt}
                      onChange={(event) => updateField("nextActionAt", event.target.value)}
                    />
                  </label>
                </ErpCardContent>
              </ErpCard>
            </ErpTabsContent>

            <ErpTabsContent value="conversation" className="space-y-6">
              <ErpCard variant="default">
                <ErpCardHeader>
                  <ErpBadge variant="outline">Notes</ErpBadge>
                  <ErpCardTitle>Conversation</ErpCardTitle>
                  <ErpCardDescription>Notes and blockers.</ErpCardDescription>
                </ErpCardHeader>
                <ErpCardContent className="grid gap-5 md:grid-cols-2">
                  <label className="block md:col-span-2">
                    <span className={fieldLabelClass}>Counsellor notes</span>
                    <textarea
                      className={fieldTextareaClass}
                      value={formState.notesText}
                      onChange={(event) => updateField("notesText", event.target.value)}
                    />
                  </label>
                  <label className="block md:col-span-2">
                    <span className={fieldLabelClass}>Requirements and blockers</span>
                    <textarea
                      className={fieldTextareaClass}
                      value={formState.requirementsText}
                      onChange={(event) =>
                        updateField("requirementsText", event.target.value)
                      }
                    />
                  </label>
                </ErpCardContent>
              </ErpCard>

              <ErpCard variant="default">
                <ErpCardHeader>
                  <ErpBadge variant="outline">Activity timeline</ErpBadge>
                  <ErpCardTitle>Recent Activity</ErpCardTitle>
                  <ErpCardDescription>Latest saved updates.</ErpCardDescription>
                </ErpCardHeader>
                <ErpCardContent className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-3 rounded-[24px] border border-slate-200 bg-slate-50/90 p-4"
                    >
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[18px] bg-white text-slate-700 shadow-sm">
                        {activity.type === "call" ? (
                          <Phone className="h-4 w-4" />
                        ) : activity.type === "email" ? (
                          <Mail className="h-4 w-4" />
                        ) : activity.type === "meeting" ? (
                          <CalendarClock className="h-4 w-4" />
                        ) : (
                          <MessageSquareMore className="h-4 w-4" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="text-sm font-semibold text-slate-950">
                            {activity.title}
                          </div>
                          <div className="text-xs uppercase tracking-[0.16em] text-slate-400">
                            {activity.at}
                          </div>
                        </div>
                        <div className="mt-1 text-sm leading-6 text-slate-600">
                          {activity.detail}
                        </div>
                        <div className="mt-2 text-xs font-medium text-slate-500">
                          Owner: {activity.owner}
                        </div>
                      </div>
                    </div>
                  ))}
                </ErpCardContent>
              </ErpCard>
            </ErpTabsContent>

            <ErpTabsContent value="tasks" className="space-y-6">
              <ErpCard variant="default">
                <ErpCardHeader>
                  <ErpBadge variant="outline">Task board</ErpBadge>
                  <ErpCardTitle>Tasks</ErpCardTitle>
                  <ErpCardDescription>Pending and completed items.</ErpCardDescription>
                </ErpCardHeader>
                <ErpCardContent className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-[24px] border border-slate-200 bg-slate-50/90 p-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-950">
                        {openTasks.length} open tasks
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        Keep each title and due label filled before saving.
                      </div>
                    </div>
                    <ErpButton type="button" variant="outline" onClick={addTask}>
                      <Plus className="h-4 w-4" />
                      Add task
                    </ErpButton>
                  </div>

                  <div className="space-y-4">
                    {formState.tasks.map((task) => (
                      <div
                        key={task.id}
                        className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-4"
                      >
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <ErpBadge variant={getTaskBadgeVariant(task.status)}>
                            {task.status}
                          </ErpBadge>
                          <ErpButton
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeTask(task.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            Remove
                          </ErpButton>
                        </div>

                        <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_220px_180px]">
                          <label className="block">
                            <span className={fieldLabelClass}>Task title</span>
                            <input
                              className={fieldInputClass}
                              value={task.title}
                              onChange={(event) =>
                                updateTask(task.id, { title: event.target.value })
                              }
                            />
                          </label>

                          <label className="block">
                            <span className={fieldLabelClass}>Due</span>
                            <input
                              className={fieldInputClass}
                              value={task.due}
                              onChange={(event) =>
                                updateTask(task.id, { due: event.target.value })
                              }
                            />
                          </label>

                          <div>
                            <span className={fieldLabelClass}>Status</span>
                            <ErpSelect
                              value={task.status}
                              onValueChange={(value) =>
                                updateTask(task.id, {
                                  status: value as AdminLeadTask["status"],
                                })
                              }
                            >
                              <ErpSelectTrigger className="mt-2">
                                <ErpSelectValue placeholder="Choose status" />
                              </ErpSelectTrigger>
                              <ErpSelectContent>
                                <ErpSelectGroup>
                                  <ErpSelectLabel>Status</ErpSelectLabel>
                                  <ErpSelectItem value="open">Open</ErpSelectItem>
                                  <ErpSelectItem value="waiting">Waiting</ErpSelectItem>
                                  <ErpSelectItem value="done">Done</ErpSelectItem>
                                </ErpSelectGroup>
                              </ErpSelectContent>
                            </ErpSelect>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ErpCardContent>
              </ErpCard>
            </ErpTabsContent>
          </ErpTabs>
        </div>

        <div className="space-y-6">
          <ErpCard variant="dark">
            <ErpCardHeader>
              <ErpBadge variant="accent">Owner</ErpBadge>
              <ErpCardTitle>Lead Summary</ErpCardTitle>
              <ErpCardDescription>Owner, contact, and source.</ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-5">
              <div className="flex items-center gap-3">
                <ErpAvatar
                  fallback={ownerProfile.initials}
                  tone="accent"
                  size="lg"
                  status="online"
                />
                <div>
                  <div className="text-base font-semibold text-white">{ownerProfile.name}</div>
                  <div className="text-sm text-white/68">{ownerProfile.team}</div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                    Contact
                  </div>
                  <div className="mt-2 text-sm text-white">{formState.phone}</div>
                  <div className="mt-1 text-sm text-white/68">{formState.email}</div>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                    Source
                  </div>
                  <div className="mt-2 text-sm text-white">{formState.source}</div>
                  <div className="mt-1 text-sm text-white/68">
                    {formState.campusPreference}
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/72">
                {stageDescriptions[formState.stage]}
              </div>
            </ErpCardContent>
          </ErpCard>

          <ErpCard variant="default">
            <ErpCardHeader>
              <ErpBadge variant="outline">Pipeline</ErpBadge>
              <ErpCardTitle>Stage Path</ErpCardTitle>
              <ErpCardDescription>Current position.</ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent>
              <ErpProgressSteps
                tone={formState.stage === "enrolled" ? "success" : "accent"}
                steps={leadStageFlow.map((stage, index) => ({
                  title: getLeadStageLabel(stage),
                  description: stageDescriptions[stage],
                  status:
                    index < currentStageIndex
                      ? "complete"
                      : index === currentStageIndex
                        ? "current"
                        : "upcoming",
                }))}
              />
            </ErpCardContent>
          </ErpCard>

          <ErpCard variant="default">
            <ErpCardHeader>
              <ErpBadge variant="outline">Live view</ErpBadge>
              <ErpCardTitle>Current queue state</ErpCardTitle>
              <ErpCardDescription>These values reflect the saved workspace record.</ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-4">
              <div className="rounded-[22px] border border-slate-200 bg-slate-50/90 p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Last contact
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-950">
                  {lead.lastContactAt}
                </div>
              </div>
              <div className="rounded-[22px] border border-slate-200 bg-slate-50/90 p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Open tasks
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-950">
                  {openTasks.length}
                </div>
              </div>
            </ErpCardContent>
          </ErpCard>
        </div>
      </div>
    </form>
  );
}