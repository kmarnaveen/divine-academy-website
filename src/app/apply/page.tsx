import type { Metadata } from "next";

import ApplyPageClient from "./apply-page-client";

export const metadata: Metadata = {
  title: "Apply Online 2026-27 | Divine International Academy Sirsaganj",
  description:
    "Start your 2026-27 online application draft for Divine International Academy, Sirsaganj. Share student details, parent contact information, and admission preferences before the next admissions step.",
  keywords: [
    "apply online Divine International Academy",
    "school admission form Sirsaganj",
    "CBSE school application Firozabad",
    "admissions 2026-27",
  ],
};

export default function ApplyPage() {
  return <ApplyPageClient />;
}
