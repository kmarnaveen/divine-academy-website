import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bus,
  Camera,
  CheckCircle,
  Clock,
  GraduationCap,
  MapPin,
  Shield,
} from "lucide-react";

import { MainLayout } from "../../../components/layout/main-layout";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const transportSignals = [
  "GPS-tracked buses",
  "CCTV-supported monitoring",
  "Route confirmation through the school",
  "Pickup and travel guidance for families",
] as const;

const transportProfile = [
  {
    label: "Daily commute",
    value:
      "Transport support helps students reach school with more routine, safety, and parent visibility.",
  },
  {
    label: "Monitoring support",
    value:
      "Buses are supported through GPS tracking and CCTV-based monitoring arrangements.",
  },
  {
    label: "Parent planning",
    value:
      "Families can confirm route coverage, travel timing, pickup points, and transport charges with the school office.",
  },
  {
    label: "Admission relevance",
    value:
      "Transport clarity matters before admission confirmation, especially for families coming from nearby areas.",
  },
] as const;

const transportStats = [
  {
    value: "GPS",
    label: "Tracking support",
    detail: "Live route monitoring adds visibility to the daily commute.",
  },
  {
    value: "CCTV",
    label: "Bus monitoring",
    detail: "Transport supervision is supported through camera coverage.",
  },
  {
    value: "Routes",
    label: "Coverage by availability",
    detail:
      "Route support depends on area, demand, and current school planning.",
  },
  {
    value: "Office",
    label: "Route confirmation",
    detail:
      "Families should confirm pickup details and fees with the school directly.",
  },
] as const;

const transportSupport = [
  {
    title: "Route and area confirmation",
    description:
      "Transport support begins with clarity on whether the school covers your area, where the pickup point will be, and how the route works during the academic session.",
    points: [
      "Route guidance by area",
      "Pickup and drop-point confirmation",
      "Travel timing discussion with the school",
    ],
    icon: MapPin,
  },
  {
    title: "Monitoring and supervision",
    description:
      "Safer transport depends on visible monitoring and supervised student movement during boarding, travel, and drop-off.",
    points: [
      "GPS-tracked buses",
      "CCTV-supported bus monitoring",
      "Supervised student movement during travel",
    ],
    icon: Shield,
  },
  {
    title: "Parent planning before admission",
    description:
      "Families should review route practicality before they finalise admission, especially if commute time and daily routine are important factors.",
    points: [
      "Travel time and pickup planning",
      "Transport-charge clarification",
      "Support for daily routine planning",
    ],
    icon: Clock,
  },
] as const;

const parentChecks = [
  {
    title: "Check route availability first",
    description:
      "Before admission, confirm whether the school currently serves your area and where the nearest pickup point is located.",
  },
  {
    title: "Understand the likely travel time",
    description:
      "Travel duration matters for younger students and for families planning the daily school routine.",
  },
  {
    title: "Ask about monitoring and supervision",
    description:
      "Parents should review how GPS tracking, camera support, and student supervision work during bus travel.",
  },
  {
    title: "Confirm transport charges separately",
    description:
      "Transport charges vary by route and should be confirmed directly with the school during the admission process.",
  },
] as const;

export const metadata: Metadata = {
  title: "Transport | Divine International Academy Sirsaganj",
  description:
    "Review transport support at Divine International Academy, Sirsaganj, including route guidance, GPS tracking, CCTV-supported monitoring, and parent transport planning before admission.",
  keywords: [
    "Divine International Academy transport",
    "school bus Sirsaganj",
    "CBSE school transport Firozabad",
    "GPS school bus Sirsaganj",
  ],
};

export default function TransportPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              School Transport
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              Transport support for safer and more manageable daily school
              travel
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Divine's transport support helps families plan daily commute with
              route guidance, monitoring visibility, and school-level transport
              confirmation before admission.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.25)]">
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/facilities.avif"
                  alt="Transport support at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Commute Planning
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    Route clarity, safer monitoring, and daily timing matter as
                    much as the classroom for many families.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Parents can review route support, likely travel time, pickup
                  details, transport charges, and daily commute practicality
                  with the school office.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {transportSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {transportProfile.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {transportStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[24px] border border-primary/10 bg-primary/5 px-4 py-4"
                    >
                      <p className="text-2xl font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {stat.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="sm:flex-1">
                    <Link href="/contact">
                      Ask About Routes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white sm:flex-1"
                  >
                    <Link href="/facilities">Back to Facilities</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Transport Support
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              What families usually review before using school transport
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {transportSupport.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.24)]"
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold font-heading text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm leading-6 text-slate-700">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/80 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-white">
              Parent Checklist
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Important transport questions before admission
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {parentChecks.map((item) => (
              <Card
                key={item.title}
                className="rounded-[28px] border-slate-200/80 bg-white"
              >
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Camera className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading leading-7 text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 pt-20">
        <div className="container mx-auto px-4">
          <div className="rounded-[32px] bg-primary px-6 py-8 text-white shadow-[0_28px_80px_-46px_rgba(127,29,29,0.45)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <Badge className="border border-white/15 bg-white/12 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
              Transport Enquiry
            </Badge>
            <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold font-heading leading-tight sm:text-4xl lg:text-[2.8rem]">
                  Need route, pickup, or transport-charge guidance?
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                  Parents can contact the school to confirm transport
                  availability, commute planning, and admissions support before
                  finalising the next step.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link href="/contact">
                    Contact the School
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  <Link href="/admissions">
                    Review Admissions
                    <GraduationCap className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
