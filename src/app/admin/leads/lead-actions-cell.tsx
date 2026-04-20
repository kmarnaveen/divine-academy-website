"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CalendarPlus2,
  ExternalLink,
  Eye,
  Mail,
  MoreHorizontal,
  NotebookPen,
  PhoneCall,
  UserRound,
} from "lucide-react";

import {
  ErpBadge,
  ErpButton,
  ErpDropdownMenu,
  ErpDropdownMenuContent,
  ErpDropdownMenuItem,
  ErpDropdownMenuLabel,
  ErpDropdownMenuSeparator,
  ErpDropdownMenuShortcut,
  ErpDropdownMenuSub,
  ErpDropdownMenuSubContent,
  ErpDropdownMenuSubTrigger,
  ErpDropdownMenuTrigger,
  ErpModal,
  ErpModalBody,
  ErpModalContent,
  ErpModalDescription,
  ErpModalFooter,
  ErpModalHeader,
  ErpModalTitle,
  ErpOffcanvas,
  ErpOffcanvasBody,
  ErpOffcanvasContent,
  ErpOffcanvasDescription,
  ErpOffcanvasFooter,
  ErpOffcanvasHeader,
  ErpOffcanvasTitle,
  ErpOffcanvasTrigger,
  ErpSelect,
  ErpSelectContent,
  ErpSelectGroup,
  ErpSelectItem,
  ErpSelectLabel,
  ErpSelectTrigger,
  ErpSelectValue,
} from "@/components/admin/ui";
import {
  getLeadPriorityLabel,
  getLeadStageLabel,
  leadStageFlow,
  type AdminLead,
  type LeadPriority,
  type LeadStage,
} from "@/lib/admin-leads";

import { useLeadsWorkspace } from "./leads-workspace";

type LeadActionsCellProps = {
  lead: AdminLead;
};

const fieldLabelClass =
  "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500";

const fieldInputClass =
  "mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 shadow-sm outline-none transition-colors focus:border-slate-300";

const fieldTextareaClass =
  "mt-2 min-h-[132px] w-full rounded-[24px] border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-950 shadow-sm outline-none transition-colors focus:border-slate-300";

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

function getTaskBadgeVariant(status: AdminLead["tasks"][number]["status"]) {
  if (status === "done") {
    return "success" as const;
  }

  if (status === "waiting") {
    return "warning" as const;
  }

  return "outline" as const;
}

export function LeadActionsCell({ lead }: LeadActionsCellProps) {
  const {
    ownerOptions,
    logLeadCall,
    sendLeadEmail,
    addLeadNote,
    reassignLeadOwner,
    moveLeadStage,
    archiveLead,
    pushToast,
  } = useLeadsWorkspace();

  const openTasks = lead.tasks.filter((task) => task.status !== "done").slice(0, 3);
  const recentActivities = lead.activities.slice(-3).reverse();

  const [callModalOpen, setCallModalOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [noteModalOpen, setNoteModalOpen] = useState(false);
  const [ownerModalOpen, setOwnerModalOpen] = useState(false);

  const [callSummary, setCallSummary] = useState("");
  const [callNextActionType, setCallNextActionType] = useState(lead.nextActionType);
  const [callNextActionAt, setCallNextActionAt] = useState(lead.nextActionAt);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [noteValue, setNoteValue] = useState("");
  const [ownerName, setOwnerName] = useState(lead.owner.name);

  useEffect(() => {
    setCallSummary("");
    setCallNextActionType(lead.nextActionType);
    setCallNextActionAt(lead.nextActionAt);
    setEmailSubject(`Update for ${lead.studentName}`);
    setEmailBody(
      `Shared update with ${lead.parentName} for ${lead.studentName} regarding ${lead.classInterest}.`,
    );
    setNoteValue("");
    setOwnerName(lead.owner.name);
  }, [
    lead.classInterest,
    lead.nextActionAt,
    lead.nextActionType,
    lead.owner.name,
    lead.parentName,
    lead.studentName,
  ]);

  function handleLogCall() {
    if (!callSummary.trim()) {
      pushToast({
        variant: "warning",
        title: "Add call notes",
        description: "Enter a short call summary before saving this activity.",
      });
      return;
    }

    setCallModalOpen(false);
    logLeadCall(lead.id, {
      summary: callSummary,
      nextActionType: callNextActionType,
      nextActionAt: callNextActionAt,
    });
  }

  function handleSendEmail() {
    if (!emailSubject.trim() || !emailBody.trim()) {
      pushToast({
        variant: "warning",
        title: "Complete email fields",
        description: "Both subject and body are required before logging an email.",
      });
      return;
    }

    setEmailModalOpen(false);
    sendLeadEmail(lead.id, {
      subject: emailSubject,
      body: emailBody,
    });
  }

  function handleAddNote() {
    if (!noteValue.trim()) {
      pushToast({
        variant: "warning",
        title: "Add note text",
        description: "Enter the note before saving it to this lead.",
      });
      return;
    }

    setNoteModalOpen(false);
    addLeadNote(lead.id, noteValue);
  }

  function handleReassignOwner() {
    if (!ownerName.trim()) {
      pushToast({
        variant: "warning",
        title: "Choose an owner",
        description: "Select the new owner before saving the reassignment.",
      });
      return;
    }

    setOwnerModalOpen(false);
    reassignLeadOwner(lead.id, ownerName);
  }

  return (
    <>
      <div className="flex items-center justify-end gap-2">
        <ErpOffcanvas>
          <ErpOffcanvasTrigger asChild>
            <ErpButton type="button" variant="outline" size="sm">
              <Eye className="h-4 w-4" />
              Quick view
            </ErpButton>
          </ErpOffcanvasTrigger>

          <ErpOffcanvasContent side="right" size="md">
            <ErpOffcanvasHeader>
              <div className="flex flex-wrap items-center gap-2 pr-12">
                <ErpBadge variant={getStageBadgeVariant(lead.stage)}>
                  {getLeadStageLabel(lead.stage)}
                </ErpBadge>
                <ErpBadge variant={getPriorityBadgeVariant(lead.priority)}>
                  {getLeadPriorityLabel(lead.priority)}
                </ErpBadge>
              </div>
              <ErpOffcanvasTitle>{lead.parentName}</ErpOffcanvasTitle>
              <ErpOffcanvasDescription>
                {lead.studentName} • {lead.classInterest}
              </ErpOffcanvasDescription>
            </ErpOffcanvasHeader>

            <ErpOffcanvasBody className="space-y-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Owner
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-950">
                    {lead.owner.name}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{lead.owner.team}</div>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Source
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-950">
                    {lead.source}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{lead.session}</div>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Contact
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-950">
                    {lead.phone}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{lead.email}</div>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Next action
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-950">
                    {lead.nextActionType}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{lead.nextActionAt}</div>
                </div>
              </div>

              <div className="rounded-[26px] border border-slate-200 bg-white p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Summary
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{lead.summary}</p>
              </div>

              <div className="space-y-3">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Tags
                </div>
                <div className="flex flex-wrap gap-2">
                  {lead.tags.map((tag) => (
                    <ErpBadge key={tag} variant="outline">
                      {tag}
                    </ErpBadge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Open tasks
                </div>
                <div className="space-y-3">
                  {openTasks.length > 0 ? (
                    openTasks.map((task) => (
                      <div
                        key={task.id}
                        className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-sm font-semibold text-slate-950">
                              {task.title}
                            </div>
                            <div className="mt-1 text-sm text-slate-600">{task.due}</div>
                          </div>
                          <ErpBadge variant={getTaskBadgeVariant(task.status)}>
                            {task.status}
                          </ErpBadge>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-4 text-sm text-slate-600">
                      No open tasks.
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Recent activity
                </div>
                <div className="space-y-3">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
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
                    </div>
                  ))}
                </div>
              </div>
            </ErpOffcanvasBody>

            <ErpOffcanvasFooter>
              <ErpButton asChild variant="outline">
                <Link href="/admin/campus-visit">
                  <CalendarPlus2 className="h-4 w-4" />
                  Schedule visit
                </Link>
              </ErpButton>
              <ErpButton asChild variant="primary">
                <Link href={`/admin/leads/${lead.id}`}>
                  <ExternalLink className="h-4 w-4" />
                  Open record
                </Link>
              </ErpButton>
            </ErpOffcanvasFooter>
          </ErpOffcanvasContent>
        </ErpOffcanvas>

        <ErpDropdownMenu>
          <ErpDropdownMenuTrigger asChild>
            <ErpButton type="button" variant="outline" size="sm" className="w-9 px-0">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Lead actions</span>
            </ErpButton>
          </ErpDropdownMenuTrigger>

          <ErpDropdownMenuContent align="end" variant="default">
            <ErpDropdownMenuLabel>Lead actions</ErpDropdownMenuLabel>
            <ErpDropdownMenuItem asChild>
              <Link href={`/admin/leads/${lead.id}`}>
                <ExternalLink className="h-4 w-4" />
                Edit lead
                <ErpDropdownMenuShortcut>Open</ErpDropdownMenuShortcut>
              </Link>
            </ErpDropdownMenuItem>
            <ErpDropdownMenuItem onSelect={() => setCallModalOpen(true)}>
              <PhoneCall className="h-4 w-4" />
              Log call
              <ErpDropdownMenuShortcut>Call</ErpDropdownMenuShortcut>
            </ErpDropdownMenuItem>
            <ErpDropdownMenuItem onSelect={() => setEmailModalOpen(true)}>
              <Mail className="h-4 w-4" />
              Send email
              <ErpDropdownMenuShortcut>Mail</ErpDropdownMenuShortcut>
            </ErpDropdownMenuItem>
            <ErpDropdownMenuItem onSelect={() => setNoteModalOpen(true)}>
              <NotebookPen className="h-4 w-4" />
              Add note
              <ErpDropdownMenuShortcut>Note</ErpDropdownMenuShortcut>
            </ErpDropdownMenuItem>
            <ErpDropdownMenuItem asChild>
              <Link href="/admin/campus-visit">
                <CalendarPlus2 className="h-4 w-4" />
                Schedule visit
                <ErpDropdownMenuShortcut>Visit</ErpDropdownMenuShortcut>
              </Link>
            </ErpDropdownMenuItem>
            <ErpDropdownMenuItem onSelect={() => setOwnerModalOpen(true)}>
              <UserRound className="h-4 w-4" />
              Reassign owner
              <ErpDropdownMenuShortcut>Owner</ErpDropdownMenuShortcut>
            </ErpDropdownMenuItem>
            <ErpDropdownMenuSeparator />
            <ErpDropdownMenuSub>
              <ErpDropdownMenuSubTrigger>
                Move stage
              </ErpDropdownMenuSubTrigger>
              <ErpDropdownMenuSubContent>
                {leadStageFlow.map((stage) => (
                  <ErpDropdownMenuItem
                    key={stage}
                    inset={stage === lead.stage}
                    onSelect={() => moveLeadStage(lead.id, stage)}
                  >
                    {getLeadStageLabel(stage)}
                  </ErpDropdownMenuItem>
                ))}
              </ErpDropdownMenuSubContent>
            </ErpDropdownMenuSub>
            <ErpDropdownMenuSeparator />
            <ErpDropdownMenuItem tone="danger" onSelect={() => archiveLead(lead.id)}>
              Archive lead
            </ErpDropdownMenuItem>
          </ErpDropdownMenuContent>
        </ErpDropdownMenu>
      </div>

      <ErpModal open={callModalOpen} onOpenChange={setCallModalOpen}>
        <ErpModalContent size="lg">
          <ErpModalHeader>
            <ErpBadge variant="accent">Log call</ErpBadge>
            <ErpModalTitle>Call update</ErpModalTitle>
            <ErpModalDescription>
              Save the latest call notes for this lead on this device.
            </ErpModalDescription>
          </ErpModalHeader>
          <ErpModalBody className="space-y-4">
            <label className="block">
              <span className={fieldLabelClass}>Call summary</span>
              <textarea
                className={fieldTextareaClass}
                value={callSummary}
                onChange={(event) => setCallSummary(event.target.value)}
              />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className={fieldLabelClass}>Next action</span>
                <input
                  className={fieldInputClass}
                  value={callNextActionType}
                  onChange={(event) => setCallNextActionType(event.target.value)}
                />
              </label>
              <label className="block">
                <span className={fieldLabelClass}>Next action due</span>
                <input
                  className={fieldInputClass}
                  value={callNextActionAt}
                  onChange={(event) => setCallNextActionAt(event.target.value)}
                />
              </label>
            </div>
          </ErpModalBody>
          <ErpModalFooter>
            <ErpButton type="button" variant="outline" onClick={() => setCallModalOpen(false)}>
              Cancel
            </ErpButton>
            <ErpButton type="button" variant="primary" onClick={handleLogCall}>
              Save call
            </ErpButton>
          </ErpModalFooter>
        </ErpModalContent>
      </ErpModal>

      <ErpModal open={emailModalOpen} onOpenChange={setEmailModalOpen}>
        <ErpModalContent size="lg">
          <ErpModalHeader>
            <ErpBadge variant="accent">Send email</ErpBadge>
            <ErpModalTitle>Email update</ErpModalTitle>
            <ErpModalDescription>
              Save an email activity for this lead on this device.
            </ErpModalDescription>
          </ErpModalHeader>
          <ErpModalBody className="space-y-4">
            <label className="block">
              <span className={fieldLabelClass}>Subject</span>
              <input
                className={fieldInputClass}
                value={emailSubject}
                onChange={(event) => setEmailSubject(event.target.value)}
              />
            </label>
            <label className="block">
              <span className={fieldLabelClass}>Email body</span>
              <textarea
                className={fieldTextareaClass}
                value={emailBody}
                onChange={(event) => setEmailBody(event.target.value)}
              />
            </label>
          </ErpModalBody>
          <ErpModalFooter>
            <ErpButton type="button" variant="outline" onClick={() => setEmailModalOpen(false)}>
              Cancel
            </ErpButton>
            <ErpButton type="button" variant="primary" onClick={handleSendEmail}>
              Save email
            </ErpButton>
          </ErpModalFooter>
        </ErpModalContent>
      </ErpModal>

      <ErpModal open={noteModalOpen} onOpenChange={setNoteModalOpen}>
        <ErpModalContent size="lg">
          <ErpModalHeader>
            <ErpBadge variant="accent">Add note</ErpBadge>
            <ErpModalTitle>Internal note</ErpModalTitle>
            <ErpModalDescription>
              Save an internal note for this lead on this device.
            </ErpModalDescription>
          </ErpModalHeader>
          <ErpModalBody>
            <label className="block">
              <span className={fieldLabelClass}>Note</span>
              <textarea
                className={fieldTextareaClass}
                value={noteValue}
                onChange={(event) => setNoteValue(event.target.value)}
              />
            </label>
          </ErpModalBody>
          <ErpModalFooter>
            <ErpButton type="button" variant="outline" onClick={() => setNoteModalOpen(false)}>
              Cancel
            </ErpButton>
            <ErpButton type="button" variant="primary" onClick={handleAddNote}>
              Save note
            </ErpButton>
          </ErpModalFooter>
        </ErpModalContent>
      </ErpModal>

      <ErpModal open={ownerModalOpen} onOpenChange={setOwnerModalOpen}>
        <ErpModalContent size="md">
          <ErpModalHeader>
            <ErpBadge variant="accent">Reassign</ErpBadge>
            <ErpModalTitle>Change owner</ErpModalTitle>
            <ErpModalDescription>
              Move this lead to another owner in the local workspace.
            </ErpModalDescription>
          </ErpModalHeader>
          <ErpModalBody>
            <div>
              <span className={fieldLabelClass}>Owner</span>
              <ErpSelect value={ownerName} onValueChange={setOwnerName}>
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
          </ErpModalBody>
          <ErpModalFooter>
            <ErpButton type="button" variant="outline" onClick={() => setOwnerModalOpen(false)}>
              Cancel
            </ErpButton>
            <ErpButton type="button" variant="primary" onClick={handleReassignOwner}>
              Save owner
            </ErpButton>
          </ErpModalFooter>
        </ErpModalContent>
      </ErpModal>
    </>
  );
}