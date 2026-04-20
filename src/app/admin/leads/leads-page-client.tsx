"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CalendarClock,
  Download,
  Plus,
  SearchX,
  MessageSquareMore,
  Phone,
} from "lucide-react";

import {
  ErpBadge,
  ErpButton,
  ErpEmptyState,
  ErpEmptyStateActions,
  ErpEmptyStateDescription,
  ErpEmptyStateMedia,
  ErpEmptyStateTitle,
  ErpFilterBar,
  ErpFilterChip,
  ErpFilterDivider,
  ErpFilterGroup,
  ErpFilterSearch,
  ErpFilterSummary,
  ErpModal,
  ErpModalBody,
  ErpModalContent,
  ErpModalDescription,
  ErpModalFooter,
  ErpModalHeader,
  ErpModalTitle,
  ErpSelect,
  ErpSelectContent,
  ErpSelectGroup,
  ErpSelectItem,
  ErpSelectLabel,
  ErpSelectTrigger,
  ErpSelectValue,
  ErpTable,
  ErpTableBody,
  ErpTableCaption,
  ErpTableCell,
  ErpTableHead,
  ErpTableHeader,
  ErpTableRow,
} from "@/components/admin/ui";
import {
  getLeadPriorityLabel,
  getLeadStageLabel,
  leadPriorityLabels,
  leadStageFlow,
  type LeadPriority,
  type LeadStage,
} from "@/lib/admin-leads";

import { LeadActionsCell } from "./lead-actions-cell";
import { useLeadsWorkspace } from "./leads-workspace";

const fieldLabelClass =
  "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500";

const fieldInputClass =
  "mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 shadow-sm outline-none transition-colors focus:border-slate-300";

type QuickFilter = "all" | "hot" | "callbacks" | "visit-ready" | "converted";

type NewLeadFormState = {
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

function getRowTone(priority: LeadPriority) {
  if (priority === "hot") {
    return "danger" as const;
  }

  if (priority === "high") {
    return "warning" as const;
  }

  return "default" as const;
}

function createNewLeadFormState(
  ownerName: string | undefined,
  source: string | undefined,
): NewLeadFormState {
  return {
    parentName: "",
    studentName: "",
    phone: "",
    email: "",
    classInterest: "",
    location: "",
    campusPreference: "Main Campus",
    session: "2026-27",
    source: source ?? "Website form",
    ownerName: ownerName ?? "Aditi Nair",
    stage: "new",
    priority: "medium",
  };
}

export function LeadsPageClient() {
  const router = useRouter();
  const { leads, ownerOptions, sourceOptions, createLead, pushToast, hydrated } =
    useLeadsWorkspace();

  const [searchQuery, setSearchQuery] = useState("");
  const [stageFilter, setStageFilter] = useState<string>("all-stages");
  const [ownerFilter, setOwnerFilter] = useState("all-owners");
  const [sourceFilter, setSourceFilter] = useState("all-sources");
  const [quickFilter, setQuickFilter] = useState<QuickFilter>("all");
  const [newLeadOpen, setNewLeadOpen] = useState(false);
  const [newLeadForm, setNewLeadForm] = useState<NewLeadFormState>(() =>
    createNewLeadFormState(ownerOptions[0], sourceOptions[0]),
  );

  const activeLeads = useMemo(
    () => leads.filter((lead) => !lead.archivedAt && lead.stage !== "enrolled").length,
    [leads],
  );

  const visibleLeads = useMemo(
    () => leads.filter((lead) => !lead.archivedAt),
    [leads],
  );

  useEffect(() => {
    if (!newLeadOpen) {
      setNewLeadForm(createNewLeadFormState(ownerOptions[0], sourceOptions[0]));
    }
  }, [newLeadOpen, ownerOptions, sourceOptions]);

  const filteredLeads = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return visibleLeads.filter((lead) => {
      const matchesSearch =
        normalizedQuery.length === 0 ||
        [
          lead.parentName,
          lead.studentName,
          lead.classInterest,
          lead.source,
          lead.owner.name,
          lead.phone,
          lead.location,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      const matchesStage = stageFilter === "all-stages" || lead.stage === stageFilter;
      const matchesOwner = ownerFilter === "all-owners" || lead.owner.name === ownerFilter;
      const matchesSource = sourceFilter === "all-sources" || lead.source === sourceFilter;

      const matchesQuickFilter =
        quickFilter === "all" ||
        (quickFilter === "hot" && lead.priority === "hot") ||
        (quickFilter === "callbacks" &&
          (lead.nextActionType.toLowerCase().includes("call") ||
            lead.tasks.some(
              (task) =>
                task.status !== "done" && task.title.toLowerCase().includes("call"),
            ))) ||
        (quickFilter === "visit-ready" &&
          ["qualified", "visit-scheduled"].includes(lead.stage)) ||
        (quickFilter === "converted" && lead.stage === "enrolled");

      return (
        matchesSearch &&
        matchesStage &&
        matchesOwner &&
        matchesSource &&
        matchesQuickFilter
      );
    });
  }, [ownerFilter, quickFilter, searchQuery, sourceFilter, stageFilter, visibleLeads]);

  const activeFilterCount = [
    searchQuery.trim().length > 0,
    stageFilter !== "all-stages",
    ownerFilter !== "all-owners",
    sourceFilter !== "all-sources",
    quickFilter !== "all",
  ].filter(Boolean).length;

  function resetFilters() {
    setSearchQuery("");
    setStageFilter("all-stages");
    setOwnerFilter("all-owners");
    setSourceFilter("all-sources");
    setQuickFilter("all");
  }

  function updateNewLeadField<Field extends keyof NewLeadFormState>(
    field: Field,
    value: NewLeadFormState[Field],
  ) {
    setNewLeadForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleCreateLead(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !newLeadForm.parentName.trim() ||
      !newLeadForm.studentName.trim() ||
      !newLeadForm.phone.trim() ||
      !newLeadForm.email.trim() ||
      !newLeadForm.classInterest.trim()
    ) {
      pushToast({
        variant: "warning",
        title: "Complete required fields",
        description: "Parent, student, phone, email, and class interest are required.",
      });
      return;
    }

    const createdLead = createLead(newLeadForm);

    if (!createdLead) {
      return;
    }

    setNewLeadOpen(false);
    router.push(`/admin/leads/${createdLead.id}`);
  }

  function handleExportPipeline() {
    if (typeof window === "undefined") {
      return;
    }

    const payload = filteredLeads.map(({ archivedAt, ...lead }) => lead);
    const fileContents = JSON.stringify(payload, null, 2);
    const blob = new Blob([fileContents], { type: "application/json" });
    const fileUrl = window.URL.createObjectURL(blob);
    const link = window.document.createElement("a");

    link.href = fileUrl;
    link.download = `dia-leads-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();

    window.URL.revokeObjectURL(fileUrl);

    pushToast({
      variant: "success",
      title: "Pipeline exported",
      description: `${payload.length} lead records were downloaded as JSON.`,
    });
  }

  return (
    <>
      <div className="space-y-6">
        <section className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8f5f1_100%)] shadow-[0_24px_70px_-50px_rgba(15,23,42,0.2)]">
          <div className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">
            <div className="flex flex-wrap items-center gap-3">
              <ErpBadge variant="accent">Leads</ErpBadge>
              <ErpBadge variant="outline">{activeLeads} active</ErpBadge>
              <ErpBadge variant="outline">
                {hydrated ? "Saved on this device" : "Loading local changes"}
              </ErpBadge>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-3xl font-bold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                Admissions Leads
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <ErpButton type="button" variant="primary" onClick={() => setNewLeadOpen(true)}>
                  <Plus className="h-4 w-4" />
                  New lead
                </ErpButton>
                <ErpButton type="button" variant="outline" onClick={handleExportPipeline}>
                  <Download className="h-4 w-4" />
                  Export pipeline
                </ErpButton>
                <ErpButton asChild variant="secondary">
                  <Link href="/admin/campus-visit">
                    Campus visits
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </ErpButton>
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-6">
          <ErpFilterBar variant="accent">
            <ErpFilterGroup className="items-stretch lg:flex-nowrap">
              <ErpFilterSearch
                variant="accent"
                placeholder="Search parent, student, or source"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />

              <div className="grid flex-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                <ErpSelect value={stageFilter} onValueChange={setStageFilter}>
                  <ErpSelectTrigger variant="accent">
                    <ErpSelectValue placeholder="Stage" />
                  </ErpSelectTrigger>
                  <ErpSelectContent variant="accent">
                    <ErpSelectGroup>
                      <ErpSelectLabel variant="accent">Stage</ErpSelectLabel>
                      <ErpSelectItem variant="accent" value="all-stages">
                        All stages
                      </ErpSelectItem>
                      {leadStageFlow.map((stage) => (
                        <ErpSelectItem key={stage} variant="accent" value={stage}>
                          {getLeadStageLabel(stage)}
                        </ErpSelectItem>
                      ))}
                    </ErpSelectGroup>
                  </ErpSelectContent>
                </ErpSelect>

                <ErpSelect value={ownerFilter} onValueChange={setOwnerFilter}>
                  <ErpSelectTrigger variant="accent">
                    <ErpSelectValue placeholder="Owner" />
                  </ErpSelectTrigger>
                  <ErpSelectContent variant="accent">
                    <ErpSelectGroup>
                      <ErpSelectLabel variant="accent">Owner</ErpSelectLabel>
                      <ErpSelectItem variant="accent" value="all-owners">
                        All owners
                      </ErpSelectItem>
                      {ownerOptions.map((owner) => (
                        <ErpSelectItem key={owner} variant="accent" value={owner}>
                          {owner}
                        </ErpSelectItem>
                      ))}
                    </ErpSelectGroup>
                  </ErpSelectContent>
                </ErpSelect>

                <ErpSelect value={sourceFilter} onValueChange={setSourceFilter}>
                  <ErpSelectTrigger variant="accent">
                    <ErpSelectValue placeholder="Source" />
                  </ErpSelectTrigger>
                  <ErpSelectContent variant="accent">
                    <ErpSelectGroup>
                      <ErpSelectLabel variant="accent">Source</ErpSelectLabel>
                      <ErpSelectItem variant="accent" value="all-sources">
                        All sources
                      </ErpSelectItem>
                      {sourceOptions.map((source) => (
                        <ErpSelectItem key={source} variant="accent" value={source}>
                          {source}
                        </ErpSelectItem>
                      ))}
                    </ErpSelectGroup>
                  </ErpSelectContent>
                </ErpSelect>
              </div>
            </ErpFilterGroup>

            <ErpFilterGroup>
              <ErpFilterChip
                variant="accent"
                active={quickFilter === "all"}
                onClick={() => setQuickFilter("all")}
              >
                All leads
              </ErpFilterChip>
              <ErpFilterChip
                variant="accent"
                active={quickFilter === "hot"}
                onClick={() => setQuickFilter("hot")}
              >
                Hot today
              </ErpFilterChip>
              <ErpFilterChip
                variant="accent"
                active={quickFilter === "callbacks"}
                onClick={() => setQuickFilter("callbacks")}
              >
                Callbacks due
              </ErpFilterChip>
              <ErpFilterChip
                variant="accent"
                active={quickFilter === "visit-ready"}
                onClick={() => setQuickFilter("visit-ready")}
              >
                Visit-ready
              </ErpFilterChip>
              <ErpFilterChip
                variant="accent"
                active={quickFilter === "converted"}
                onClick={() => setQuickFilter("converted")}
              >
                Converted
              </ErpFilterChip>
            </ErpFilterGroup>

            <ErpFilterDivider variant="accent" />

            <ErpFilterGroup className="justify-between gap-3">
              <ErpFilterSummary variant="accent">
                Showing {filteredLeads.length} of {visibleLeads.length} leads
                {activeFilterCount > 0 ? ` • ${activeFilterCount} filters active` : ""}
              </ErpFilterSummary>
              <div className="flex flex-wrap items-center gap-3">
                {activeFilterCount > 0 ? (
                  <ErpButton type="button" variant="ghost" size="sm" onClick={resetFilters}>
                    Reset filters
                  </ErpButton>
                ) : null}
                <ErpBadge variant="outline">{ownerOptions.length} owners</ErpBadge>
              </div>
            </ErpFilterGroup>
          </ErpFilterBar>

          {filteredLeads.length > 0 ? (
            <ErpTable>
              <ErpTableCaption>Lead records.</ErpTableCaption>
              <ErpTableHeader>
                <tr>
                  <ErpTableHead>Lead</ErpTableHead>
                  <ErpTableHead>Source</ErpTableHead>
                  <ErpTableHead>Owner</ErpTableHead>
                  <ErpTableHead>Stage</ErpTableHead>
                  <ErpTableHead>Next action</ErpTableHead>
                  <ErpTableHead>Score</ErpTableHead>
                  <ErpTableHead>Actions</ErpTableHead>
                </tr>
              </ErpTableHeader>
              <ErpTableBody>
                {filteredLeads.map((lead) => (
                  <ErpTableRow key={lead.id} tone={getRowTone(lead.priority)} interactive>
                    <ErpTableCell tone={getRowTone(lead.priority)}>
                      <div className="space-y-1.5">
                        <div className="font-semibold text-slate-950">{lead.parentName}</div>
                        <div className="text-sm text-slate-600">
                          {lead.studentName} • {lead.classInterest}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                          <span className="inline-flex items-center gap-1">
                            <Phone className="h-3.5 w-3.5" />
                            {lead.phone}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MessageSquareMore className="h-3.5 w-3.5" />
                            {lead.location}
                          </span>
                        </div>
                      </div>
                    </ErpTableCell>
                    <ErpTableCell tone={getRowTone(lead.priority)}>
                      <div className="space-y-1">
                        <div className="font-medium text-slate-900">{lead.source}</div>
                        <div className="text-xs uppercase tracking-[0.16em] text-slate-400">
                          {lead.session}
                        </div>
                      </div>
                    </ErpTableCell>
                    <ErpTableCell tone={getRowTone(lead.priority)}>
                      <div className="space-y-1">
                        <div className="font-medium text-slate-900">{lead.owner.name}</div>
                        <div className="text-xs text-slate-500">{lead.owner.team}</div>
                      </div>
                    </ErpTableCell>
                    <ErpTableCell tone={getRowTone(lead.priority)}>
                      <div className="space-y-2">
                        <ErpBadge variant={getStageBadgeVariant(lead.stage)}>
                          {getLeadStageLabel(lead.stage)}
                        </ErpBadge>
                        <ErpBadge variant={getPriorityBadgeVariant(lead.priority)}>
                          {getLeadPriorityLabel(lead.priority)}
                        </ErpBadge>
                      </div>
                    </ErpTableCell>
                    <ErpTableCell tone={getRowTone(lead.priority)}>
                      <div className="space-y-1.5">
                        <div className="font-medium text-slate-900">{lead.nextActionType}</div>
                        <div className="inline-flex items-center gap-1 text-xs text-slate-500">
                          <CalendarClock className="h-3.5 w-3.5" />
                          {lead.nextActionAt}
                        </div>
                      </div>
                    </ErpTableCell>
                    <ErpTableCell tone={getRowTone(lead.priority)}>
                      <div className="space-y-1">
                        <div className="font-semibold text-slate-950">{lead.score}</div>
                        <div className="text-xs text-slate-500">{lead.valueBand}</div>
                      </div>
                    </ErpTableCell>
                    <ErpTableCell tone={getRowTone(lead.priority)}>
                      <LeadActionsCell lead={lead} />
                    </ErpTableCell>
                  </ErpTableRow>
                ))}
              </ErpTableBody>
            </ErpTable>
          ) : (
            <ErpEmptyState variant="accent" size="hero" align="center">
              <ErpEmptyStateMedia variant="accent">
                <SearchX className="h-7 w-7" />
              </ErpEmptyStateMedia>
              <div className="space-y-2">
                <ErpEmptyStateTitle>No leads match these filters</ErpEmptyStateTitle>
                <ErpEmptyStateDescription variant="accent">
                  Adjust the search or filter set, or create a fresh lead to keep the
                  admissions queue moving.
                </ErpEmptyStateDescription>
              </div>
              <ErpEmptyStateActions>
                <ErpButton type="button" variant="outline" onClick={resetFilters}>
                  Reset filters
                </ErpButton>
                <ErpButton type="button" variant="primary" onClick={() => setNewLeadOpen(true)}>
                  <Plus className="h-4 w-4" />
                  New lead
                </ErpButton>
              </ErpEmptyStateActions>
            </ErpEmptyState>
          )}
        </div>
      </div>

      <ErpModal open={newLeadOpen} onOpenChange={setNewLeadOpen}>
        <ErpModalContent size="lg">
          <ErpModalHeader>
            <ErpBadge variant="accent">New lead</ErpBadge>
            <ErpModalTitle>Create lead</ErpModalTitle>
            <ErpModalDescription>
              Start the record locally now. API submission can replace this later.
            </ErpModalDescription>
          </ErpModalHeader>

          <ErpModalBody>
            <form id="new-lead-form" className="grid gap-5 md:grid-cols-2" onSubmit={handleCreateLead}>
              <label className="block">
                <span className={fieldLabelClass}>Parent name</span>
                <input
                  className={fieldInputClass}
                  value={newLeadForm.parentName}
                  onChange={(event) => updateNewLeadField("parentName", event.target.value)}
                />
              </label>
              <label className="block">
                <span className={fieldLabelClass}>Student name</span>
                <input
                  className={fieldInputClass}
                  value={newLeadForm.studentName}
                  onChange={(event) => updateNewLeadField("studentName", event.target.value)}
                />
              </label>
              <label className="block">
                <span className={fieldLabelClass}>Phone</span>
                <input
                  className={fieldInputClass}
                  value={newLeadForm.phone}
                  onChange={(event) => updateNewLeadField("phone", event.target.value)}
                />
              </label>
              <label className="block">
                <span className={fieldLabelClass}>Email</span>
                <input
                  className={fieldInputClass}
                  type="email"
                  value={newLeadForm.email}
                  onChange={(event) => updateNewLeadField("email", event.target.value)}
                />
              </label>
              <label className="block">
                <span className={fieldLabelClass}>Class interest</span>
                <input
                  className={fieldInputClass}
                  value={newLeadForm.classInterest}
                  onChange={(event) => updateNewLeadField("classInterest", event.target.value)}
                />
              </label>
              <label className="block">
                <span className={fieldLabelClass}>Location</span>
                <input
                  className={fieldInputClass}
                  value={newLeadForm.location}
                  onChange={(event) => updateNewLeadField("location", event.target.value)}
                />
              </label>
              <label className="block">
                <span className={fieldLabelClass}>Campus preference</span>
                <input
                  className={fieldInputClass}
                  value={newLeadForm.campusPreference}
                  onChange={(event) =>
                    updateNewLeadField("campusPreference", event.target.value)
                  }
                />
              </label>
              <label className="block">
                <span className={fieldLabelClass}>Session</span>
                <input
                  className={fieldInputClass}
                  value={newLeadForm.session}
                  onChange={(event) => updateNewLeadField("session", event.target.value)}
                />
              </label>

              <div>
                <span className={fieldLabelClass}>Source</span>
                <ErpSelect
                  value={newLeadForm.source}
                  onValueChange={(value) => updateNewLeadField("source", value)}
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

              <div>
                <span className={fieldLabelClass}>Owner</span>
                <ErpSelect
                  value={newLeadForm.ownerName}
                  onValueChange={(value) => updateNewLeadField("ownerName", value)}
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
                <span className={fieldLabelClass}>Stage</span>
                <ErpSelect
                  value={newLeadForm.stage}
                  onValueChange={(value) => updateNewLeadField("stage", value as LeadStage)}
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
                  value={newLeadForm.priority}
                  onValueChange={(value) =>
                    updateNewLeadField("priority", value as LeadPriority)
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
            </form>
          </ErpModalBody>

          <ErpModalFooter>
            <ErpButton type="button" variant="outline" onClick={() => setNewLeadOpen(false)}>
              Cancel
            </ErpButton>
            <ErpButton type="submit" form="new-lead-form" variant="primary">
              Create lead
            </ErpButton>
          </ErpModalFooter>
        </ErpModalContent>
      </ErpModal>
    </>
  );
}