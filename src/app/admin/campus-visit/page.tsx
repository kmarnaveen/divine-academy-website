import { AdminPageTemplate } from "@/components/admin/admin-page-template";

export default function AdminCampusVisitPage() {
  return (
    <AdminPageTemplate
      section="Campus Visit"
      title="Manage visit slots, confirmations, and school-tour readiness"
      description="Use this page to coordinate campus visits after leads are qualified, including slot assignment, parent confirmation, and internal readiness."
      metrics={[
        { label: "Visits booked", value: "12", detail: "This week’s scheduled campus visits" },
        { label: "Awaiting confirmation", value: "4", detail: "Parents not yet confirmed by phone or message" },
        { label: "Weekend capacity", value: "6", detail: "Available slots for the next visit cycle" },
        { label: "Tour staff assigned", value: "3", detail: "Staff members prepared for guided visits" },
      ]}
      highlights={[
        { title: "Slot planning", description: "Keep weekday and weekend visit slots visible for faster scheduling." },
        { title: "Parent confirmation", description: "Track whether the family has confirmed the date, time, and class interest." },
        { title: "Campus readiness", description: "Ensure admissions, reception, and campus representatives are aligned before arrival." },
        { title: "Post-visit outcome", description: "Capture whether the visit moved to document review, fee clarification, or follow-up." },
      ]}
      workflowTitle="Visit workflow"
      workflow={[
        { title: "Confirm the visit slot", description: "Lock the preferred date, time, and lead owner before the parent arrives." },
        { title: "Prepare the handoff", description: "Keep reception and admissions teams aware of who is visiting and why." },
        { title: "Record the outcome", description: "Update whether the family needs another call, a fee discussion, or document guidance." },
      ]}
      recordsTitle="Visit schedule snapshot"
      records={[
        { title: "Saturday 10:00 AM", meta: "Parent of Aarav • Class VI interest • Counsellor Priya", status: "Confirmed" },
        { title: "Monday 11:30 AM", meta: "Parent of Diya • Nursery enquiry • Fee review requested", status: "Pending" },
        { title: "Tuesday 1:00 PM", meta: "Parent of Krish • Class IX transfer enquiry", status: "Review" },
      ]}
      noteTitle="Why this page matters"
      note="Campus visits convert best when timing, staffing, and parent expectations are aligned. This page becomes the operational bridge between enquiry handling and final admissions discussion."
    />
  );
}