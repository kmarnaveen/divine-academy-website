import type { Metadata } from "next";

import { getLeadById } from "@/lib/admin-leads";

import { LeadRecordClient } from "../lead-record-client";

type AdminLeadEditorPageProps = {
  params: Promise<{
    leadId: string;
  }>;
};

export async function generateMetadata({
  params,
}: AdminLeadEditorPageProps): Promise<Metadata> {
  const { leadId } = await params;
  const lead = getLeadById(leadId);

  if (!lead) {
    return {
      title: "Lead Record | Divine International Academy",
      description: "Lead workspace for local admissions follow-up.",
    };
  }

  return {
    title: `${lead.parentName} | Leads CRM | Divine International Academy`,
    description: `Lead workspace for ${lead.parentName} and ${lead.studentName}.`,
  };
}

export default async function AdminLeadEditorPage({
  params,
}: AdminLeadEditorPageProps) {
  const { leadId } = await params;

  return <LeadRecordClient leadId={leadId} />;
}