import { AdminPageTemplate } from "@/components/admin/admin-page-template";

export default function AdminContentPage() {
  return (
    <AdminPageTemplate
      section="Content"
      title="Plan website updates, draft reviews, and content publishing"
      description="Use this page as the admin-facing control point for school website content, internal review notes, and publishing readiness."
      metrics={[
        { label: "Pages under review", value: "9", detail: "Current content items waiting for admin approval" },
        { label: "Draft requests", value: "4", detail: "New content tasks received from school teams" },
        { label: "Image updates", value: "6", detail: "Banners, gallery, and notice assets needing refresh" },
        { label: "Publish-ready", value: "3", detail: "Items cleared for the next release" },
      ]}
      highlights={[
        { title: "Route ownership", description: "Track which team owns homepage, admissions, student-life, and notices content." },
        { title: "Draft approval", description: "Separate working drafts from publish-ready changes to avoid accidental release." },
        { title: "Media review", description: "Keep banner, gallery, and event images tied to the right page request." },
        { title: "Release planning", description: "Batch content updates so the website changes stay organised and reviewable." },
      ]}
      workflowTitle="Content workflow"
      workflow={[
        { title: "Receive the content request", description: "Capture the page, requested change, and owning team." },
        { title: "Review and revise", description: "Check wording, school facts, and media before marking the task ready." },
        { title: "Publish or schedule", description: "Move approved work into the next website update cycle." },
      ]}
      recordsTitle="Content queue snapshot"
      records={[
        { title: "Admissions landing refresh", meta: "Fee note update and CTA review", status: "Draft" },
        { title: "Gallery image replacement", meta: "Annual day and sports day images", status: "Queued" },
        { title: "Homepage notice bar", meta: "School reopening message", status: "Review" },
      ]}
      noteTitle="Why this page matters"
      note="Content work becomes hard to manage when updates come through chat, calls, and informal requests. This page gives the admin team a dedicated publishing control surface before a full CMS is added."
    />
  );
}