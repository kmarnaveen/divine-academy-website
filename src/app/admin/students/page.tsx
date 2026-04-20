import { AdminPageTemplate } from "@/components/admin/admin-page-template";

export default function AdminStudentsPage() {
  return (
    <AdminPageTemplate
      section="Students"
      title="Organise student records, sections, and onboarding status"
      description="Use this page for student record visibility across classes, section movement, new admissions onboarding, and status checks."
      metrics={[
        { label: "Active students", value: "1,248", detail: "Current records across school stages" },
        { label: "New admissions", value: "28", detail: "Records pending onboarding completion" },
        { label: "Section changes", value: "6", detail: "Requests awaiting academic review" },
        { label: "Documents pending", value: "13", detail: "Records missing full document submission" },
      ]}
      highlights={[
        { title: "Admission onboarding", description: "Track whether fee, document, and section records are fully created." },
        { title: "Section management", description: "Keep class and section assignments visible during mid-session changes." },
        { title: "Parent record sync", description: "Ensure phone, email, and address details match the latest office records." },
        { title: "Status visibility", description: "Show whether each student is active, pending, or under record review." },
      ]}
      workflowTitle="Student workflow"
      workflow={[
        { title: "Create the record", description: "Open the student profile with class, section, and guardian details." },
        { title: "Validate documents", description: "Confirm the required files are present before marking onboarding complete." },
        { title: "Maintain academic placement", description: "Keep section, stream, and status changes properly logged." },
      ]}
      recordsTitle="Student record snapshot"
      records={[
        { title: "Aarohi Gupta", meta: "Class III • Section B • Admission for 2026-27", status: "Active" },
        { title: "Laksh Mehra", meta: "Class IX • Section A • Transfer certificate review", status: "Pending" },
        { title: "Mahi Jain", meta: "Class XI • Science stream allocation", status: "Review" },
      ]}
      noteTitle="Why this page matters"
      note="Student records are one of the highest-risk admin areas because admissions, academics, transport, and communication all depend on the same base information being accurate."
    />
  );
}