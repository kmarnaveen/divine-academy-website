import type { ReactNode } from "react";

import { adminLeads } from "@/lib/admin-leads";

import { LeadsWorkspaceProvider } from "./leads-workspace";

type AdminLeadsLayoutProps = {
  children: ReactNode;
};

export default function AdminLeadsLayout({ children }: AdminLeadsLayoutProps) {
  return (
    <LeadsWorkspaceProvider initialLeads={adminLeads}>
      {children}
    </LeadsWorkspaceProvider>
  );
}