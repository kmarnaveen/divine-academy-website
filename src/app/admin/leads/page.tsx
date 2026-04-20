import type { Metadata } from "next";

import { LeadsPageClient } from "./leads-page-client";

export const metadata: Metadata = {
  title: "Leads CRM | Divine International Academy",
  description:
    "Admissions CRM workspace for lead listing, owner follow-up, and conversion handoff.",
};

export default function AdminLeadsPage() {
  return <LeadsPageClient />;
}