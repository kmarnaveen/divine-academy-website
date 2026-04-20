import { AdminPageTemplate } from "@/components/admin/admin-page-template";

export default function AdminNoticesPage() {
  return (
    <AdminPageTemplate
      section="Notices"
      title="Manage circulars, urgent notices, and parent communication"
      description="Use this page for school-wide notices, parent communication planning, and status tracking for urgent or scheduled announcements."
      metrics={[
        {
          label: "Active notices",
          value: "6",
          detail: "Messages currently considered relevant to parents or staff",
        },
        {
          label: "Urgent alerts",
          value: "2",
          detail: "High-priority items needing clear visibility",
        },
        {
          label: "Scheduled notices",
          value: "5",
          detail: "Drafts planned for future release",
        },
        {
          label: "Archive candidates",
          value: "9",
          detail: "Older notices ready for closure or archive",
        },
      ]}
      highlights={[
        {
          title: "Priority separation",
          description:
            "Distinguish urgent alerts from routine circulars and reminders.",
        },
        {
          title: "Audience targeting",
          description:
            "Track whether a notice is for all parents, a class band, or internal staff.",
        },
        {
          title: "Expiry control",
          description:
            "Keep outdated notices from staying visible longer than needed.",
        },
        {
          title: "Message consistency",
          description:
            "Align notice tone and wording before school-wide publication.",
        },
      ]}
      workflowTitle="Notice workflow"
      workflow={[
        {
          title: "Draft the notice",
          description:
            "Capture the message, audience, timing, and urgency level.",
        },
        {
          title: "Approve and schedule",
          description:
            "Review for clarity before the notice becomes visible or distributable.",
        },
        {
          title: "Archive after relevance",
          description:
            "Move outdated notices out once the communication window ends.",
        },
      ]}
      recordsTitle="Notice board snapshot"
      records={[
        {
          title: "Class IX parent interaction",
          meta: "Thursday 11:00 AM • Senior section audience",
          status: "Active",
        },
        {
          title: "Transport delay advisory",
          meta: "Temporary route update for morning shift",
          status: "Urgent",
        },
        {
          title: "Summer uniform reminder",
          meta: "Whole-school circulation draft",
          status: "Review",
        },
      ]}
      noteTitle="Why this page matters"
      note="Notices affect trust quickly because parents act on them immediately. The admin workflow needs a place to control urgency, audience, and expiry before messages are published."
    />
  );
}