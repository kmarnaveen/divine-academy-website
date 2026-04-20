import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

import { adminNavItems } from "@/components/admin/admin-navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const overviewStats = [
  {
    value: "42",
    label: "Leads in pipeline",
    detail: "Fresh and follow-up admissions enquiries",
  },
  {
    value: "12",
    label: "Campus visits this week",
    detail: "Bookings pending confirmation or completion",
  },
  {
    value: "1,248",
    label: "Student records",
    detail: "Current student records in active management",
  },
  {
    value: "18",
    label: "Scheduled notices and events",
    detail: "Upcoming communication and school calendar items",
  },
] as const;

const workspaceChecks = [
  "Track leads and campus visits from one admin section",
  "Keep student records, notices, and holidays organized in separate pages",
  "Use content and events pages as the next handoff points for real backend workflows",
] as const;

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-white shadow-[0_24px_70px_-50px_rgba(15,23,42,0.22)]">
        <div className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#fff8f4_0%,#ffffff_100%)] px-6 py-6 sm:px-8">
          <Badge className="border border-primary/10 bg-primary/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
            Admin Overview
          </Badge>
          <h1 className="mt-4 text-3xl font-bold font-heading text-slate-950 sm:text-4xl">
            One place for admissions operations, student records, and school updates
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            This dashboard brings the requested admin sections into a single workspace so teams can move between leads, campus visits, students, notices, holidays, events, and content without leaving the admin area.
          </p>
        </div>

        <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4 sm:p-8">
          {overviewStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4"
            >
              <p className="text-2xl font-bold text-slate-950">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-700">
                {stat.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_360px]">
        <Card className="rounded-[30px] border-slate-200/80 bg-white shadow-[0_22px_70px_-52px_rgba(15,23,42,0.2)]">
          <CardContent className="p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Sections Ready
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {adminNavItems.slice(1).map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4 transition-colors hover:border-primary/20 hover:bg-primary/5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h2 className="mt-4 text-base font-bold text-slate-950">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Open page
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[30px] border-0 bg-slate-950 text-white shadow-[0_24px_70px_-52px_rgba(15,23,42,0.45)]">
          <CardContent className="p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Admin Checks
            </p>
            <div className="mt-5 space-y-4">
              {workspaceChecks.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                  <span className="text-sm leading-6 text-white/78">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Button asChild className="bg-white text-slate-950 hover:bg-white/90">
                <Link href="/admin/leads">Start with Leads</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white hover:text-slate-950"
              >
                <Link href="/admin/notices">Review Notices</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}