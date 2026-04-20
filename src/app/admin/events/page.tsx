import { AdminPageTemplate } from "@/components/admin/admin-page-template";

export default function AdminEventsPage() {
  return (
    <AdminPageTemplate
      section="Events"
      title="Coordinate school events, participation planning, and timeline visibility"
      description="Use this page to plan upcoming school events, track preparation status, and keep communication aligned with the calendar."
      metrics={[
        { label: "Upcoming events", value: "7", detail: "Programs currently planned in the next cycle" },
        { label: "Open tasks", value: "14", detail: "Preparation items still waiting for assignment or completion" },
        { label: "Venue confirmations", value: "3", detail: "Events needing final space or logistics confirmation" },
        { label: "Parent communications", value: "5", detail: "Event notices or instructions pending release" },
      ]}
      highlights={[
        { title: "Event sequencing", description: "Keep cultural, academic, and sports events visible on one planning page." },
        { title: "Preparation status", description: "Track venue, staff, material, and communication readiness." },
        { title: "Class participation", description: "Clarify which classes, houses, or teams are involved in each event." },
        { title: "Communication timing", description: "Make sure notices go out before the event reaches the final week." },
      ]}
      workflowTitle="Event workflow"
      workflow={[
        { title: "Create the event plan", description: "Define the event type, date, audience, and internal owner." },
        { title: "Track readiness", description: "Monitor logistics, permissions, and participation details in one place." },
        { title: "Publish the schedule", description: "Release parent-facing details once the program and timings are stable." },
      ]}
      recordsTitle="Event calendar snapshot"
      records={[
        { title: "Inter-house debate", meta: "Senior section • Auditorium slot held", status: "Active" },
        { title: "Science exhibition", meta: "Lab setup pending vendor support", status: "Pending" },
        { title: "Annual cultural practice", meta: "Stage rehearsal and costume list under review", status: "Review" },
      ]}
      noteTitle="Why this page matters"
      note="Events touch academics, notices, content, transport, and student participation at the same time. A dedicated admin page keeps school activity planning from turning into scattered follow-up work."
    />
  );
}