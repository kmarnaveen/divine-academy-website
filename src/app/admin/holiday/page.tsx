import { AdminPageTemplate } from "@/components/admin/admin-page-template";

export default function AdminHolidayPage() {
  return (
    <AdminPageTemplate
      section="Holiday"
      title="Plan school holidays, closures, and academic calendar visibility"
      description="Use this page to maintain the holiday list, closure notes, and the calendar checkpoints that need to stay aligned with parents and staff."
      metrics={[
        { label: "Published holidays", value: "18", detail: "Dates already visible in the school calendar plan" },
        { label: "Pending review", value: "3", detail: "Dates or closures awaiting final admin approval" },
        { label: "Long weekends", value: "2", detail: "High-impact breaks needing notice coordination" },
        { label: "Special closures", value: "1", detail: "Campus-specific or event-linked closure note" },
      ]}
      highlights={[
        { title: "Calendar accuracy", description: "Keep holiday dates aligned with the current academic session plan." },
        { title: "Notice coordination", description: "Connect closures with notices and transport advisories when relevant." },
        { title: "Shift visibility", description: "Clarify whether the holiday affects all classes or a limited school segment." },
        { title: "Archive by session", description: "Separate prior-session holiday entries from the current academic year." },
      ]}
      workflowTitle="Holiday workflow"
      workflow={[
        { title: "Draft the calendar entry", description: "Record the date, holiday type, and school impact clearly." },
        { title: "Review the communication", description: "Confirm whether parents, transport teams, or staff need separate notice support." },
        { title: "Publish with timing", description: "Release the holiday entry with enough notice to avoid confusion." },
      ]}
      recordsTitle="Holiday planner snapshot"
      records={[
        { title: "Independence Day closure", meta: "Whole-school holiday • Flag event note separate", status: "Published" },
        { title: "Autumn break", meta: "Multi-day school closure under review", status: "Review" },
        { title: "Local observance", meta: "Limited update for office and transport planning", status: "Queued" },
      ]}
      noteTitle="Why this page matters"
      note="Holiday planning is operational, not just informational. Notices, transport, staff planning, and parent expectations all rely on a single approved calendar source."
    />
  );
}