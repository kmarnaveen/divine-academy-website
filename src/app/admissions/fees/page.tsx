import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle,
  Clock,
  FileText,
  Mail,
  Phone,
  Shield,
} from "lucide-react";

import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const admissionCycle = "2026-27";

const feeSignals = [
  "Annual fee by class band",
  "Admission fee shown separately",
  "Optional transport by route",
] as const;

const heroHighlights = [
  {
    value: "₹45,000",
    label: "Starting annual band",
    detail: "Pre-KG to Class I",
  },
  {
    value: "₹85,000",
    label: "Highest annual band",
    detail: "Class XI to XII",
  },
  {
    value: "₹18,000 - ₹26,000",
    label: "Transport estimate",
    detail: "Optional and route-based",
  },
  {
    value: "Printed breakup",
    label: "Ask before payment",
    detail: "Current class-wise fee sheet",
  },
] as const;

const feeBands = [
  {
    stage: "Foundational entry",
    classes: "Pre-KG to Class I",
    annualFee: "₹45,000 - ₹50,000",
    admissionFee: "₹5,000",
    transport: "₹18,000",
    note: "Suitable for entry-level admissions in the foundational years.",
    toneClass: "from-rose-50 via-white to-white",
    badgeClass: "bg-rose-100 text-rose-700",
    borderClass: "border-rose-100",
  },
  {
    stage: "Primary stage",
    classes: "Class II to V",
    annualFee: "₹55,000",
    admissionFee: "₹7,500",
    transport: "₹20,000",
    note: "Primary-stage fee band with separate annual activity and exam notes.",
    toneClass: "from-amber-50 via-white to-white",
    badgeClass: "bg-amber-100 text-amber-700",
    borderClass: "border-amber-100",
  },
  {
    stage: "Middle school",
    classes: "Class VI to VIII",
    annualFee: "₹65,000",
    admissionFee: "₹10,000",
    transport: "₹22,000",
    note: "Middle-school fee band where class-wise lab charges may apply.",
    toneClass: "from-slate-100 via-white to-white",
    badgeClass: "bg-slate-200 text-slate-700",
    borderClass: "border-slate-200",
  },
  {
    stage: "Secondary",
    classes: "Class IX to X",
    annualFee: "₹75,000",
    admissionFee: "₹12,500",
    transport: "₹24,000",
    note: "Board-foundation years with separate practical and exam-related costs.",
    toneClass: "from-orange-50 via-white to-white",
    badgeClass: "bg-orange-100 text-orange-700",
    borderClass: "border-orange-100",
  },
  {
    stage: "Senior secondary",
    classes: "Class XI to XII",
    annualFee: "₹85,000",
    admissionFee: "₹15,000",
    transport: "₹26,000",
    note: "Senior-secondary fee band for stream selection and board-year planning.",
    toneClass: "from-emerald-50 via-white to-white",
    badgeClass: "bg-emerald-100 text-emerald-700",
    borderClass: "border-emerald-100",
  },
] as const;

const separateCharges = [
  {
    title: "Transport charges",
    description:
      "Transport is optional. The final amount depends on route, stop, and seat availability on the bus network.",
  },
  {
    title: "Lab and computer charges",
    description:
      "Computer lab support applies across the school, while science lab charges are relevant where practical work is part of the class stage.",
  },
  {
    title: "Activity and examination charges",
    description:
      "Annual activity charges and class-specific examination costs are reviewed separately according to the student’s stage.",
  },
  {
    title: "Payment schedule",
    description:
      "Parents should confirm the current payment timeline, due dates, and accepted payment modes with the admissions office before deposit.",
  },
] as const;

const paymentChecks = [
  "Confirm the child’s class band and the current session fee sheet.",
  "Check whether transport is needed and whether the route is available.",
  "Review lab, activity, and examination charges applicable to the class.",
  "Ask the office to explain the payment schedule and receipt process.",
  "Keep the admission process and document requirements in mind before seat confirmation.",
] as const;

const officeSupport = [
  {
    label: "Admissions desk",
    value: "+91 9876543211",
    detail:
      "Class-wise fee guidance, transport clarification, and admission support",
    href: "tel:+919876543211",
    icon: Phone,
  },
  {
    label: "Admissions email",
    value: "admissions@divineacademy.edu.in",
    detail: "Share class, session, and fee questions by email",
    href: "mailto:admissions@divineacademy.edu.in?subject=Fee%20Structure%20Enquiry",
    icon: Mail,
  },
  {
    label: "Office hours",
    value: "Monday to Friday, 8 AM to 4 PM",
    detail: "Saturday, 8 AM to 12 PM",
    icon: Clock,
  },
] as const;

const parentQuestions = [
  {
    question: "Are transport charges included in the annual fee?",
    answer:
      "No. Transport is optional and charged separately according to route, stop, and class band.",
  },
  {
    question: "Do lab and activity charges apply to every class?",
    answer:
      "They vary by stage. Parents should confirm the current class-wise breakup with the school before payment.",
  },
  {
    question:
      "Can parents review the full fee breakup before confirming admission?",
    answer:
      "Yes. Parents can review the current session fee sheet, transport guidance, and separate annual charges during the admissions discussion.",
  },
] as const;

export const metadata: Metadata = {
  title: "Admission Fees 2026-27 | Divine International Academy Sirsaganj",
  description:
    "Review the 2026-27 fee structure at Divine International Academy, Sirsaganj. Check annual fee bands, admission charges, transport guidance, and separate fee notes before admission.",
  keywords: [
    "Divine International Academy fees",
    "school fee structure Sirsaganj",
    "CBSE school fees Firozabad",
    "admission fees 2026-27",
  ],
};

export default function AdmissionFeesPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff9f5_0%,#fff4ed_42%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(165,28,48,0.09),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/60 to-transparent" />

        <div className="container relative mx-auto px-4">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_430px] xl:items-center">
            <div className="max-w-3xl">
              <Badge className="border border-primary/10 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary shadow-sm hover:bg-white/80">
                Fees {admissionCycle}
              </Badge>
              <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-slate-950 sm:text-5xl lg:text-[3.6rem]">
                A clearer fee page for parents comparing school costs in
                Sirsaganj
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                This page is organised around the four questions parents usually
                ask first: the annual fee for the class band, the admission
                charge, the transport estimate, and which costs still need
                separate confirmation before payment.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {feeSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-full border border-primary/10 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm"
                  >
                    {signal}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
                <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.22)] backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    What to decide first
                  </p>
                  <p className="mt-3 text-lg font-bold text-slate-950">
                    Start with your child’s class band.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    The annual fee, admission charge, and transport estimate all
                    move from that starting point.
                  </p>
                </div>

                <div className="rounded-[28px] border border-amber-200 bg-amber-50/90 p-5 shadow-[0_20px_60px_-45px_rgba(120,53,15,0.18)]">
                  <div className="flex items-start gap-3">
                    <Shield className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                        Before payment
                      </p>
                      <p className="mt-2 text-sm leading-6 text-amber-900">
                        Ask for the current printed or digital fee breakup for{" "}
                        {admissionCycle} before you make any deposit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Speak to Admissions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/20 bg-white text-primary hover:bg-primary hover:text-white"
                >
                  <Link href="/admissions/process">
                    Review Admission Process
                  </Link>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-white shadow-[0_30px_90px_-52px_rgba(15,23,42,0.28)]">
              <div className="relative aspect-[16/11] overflow-hidden border-b border-slate-200/80">
                <Image
                  src="/images/submenu/fee-structure.avif"
                  alt="Fee guidance at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 430px, (min-width: 768px) 60vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05)_0%,rgba(15,23,42,0.2)_42%,rgba(15,23,42,0.72)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Quick Fee Snapshot
                  </Badge>
                  <h2 className="mt-3 text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem]">
                    See the fee range first. Confirm the full breakup second.
                  </h2>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  {heroHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4"
                    >
                      <p className="text-xl font-bold text-primary sm:text-2xl">
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-950">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[24px] border border-primary/10 bg-primary/5 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Parent note
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Transport, lab, activity, and exam-related costs should not
                    be assumed from the annual band alone. The admissions office
                    should confirm the current class-wise sheet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Fee Map
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.85rem]">
              Stage-by-stage fee bands for {admissionCycle}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Use the child’s current or target class first. Once that is clear,
              the annual fee, admission charge, and transport estimate become
              easier to compare.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {feeBands.map((band, index) => (
              <Card
                key={band.classes}
                className={`relative overflow-hidden rounded-[30px] border ${band.borderClass} bg-gradient-to-br ${band.toneClass} shadow-[0_24px_70px_-48px_rgba(15,23,42,0.22)]`}
              >
                <CardContent className="relative h-full p-5 sm:p-6">
                  <div className="absolute right-4 top-3 text-5xl font-bold text-slate-200/70">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div
                    className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${band.badgeClass}`}
                  >
                    {band.stage}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold font-heading text-slate-950">
                    {band.classes}
                  </h3>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-[22px] border border-white/80 bg-white/80 px-4 py-4 backdrop-blur-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Annual fee
                      </p>
                      <p className="mt-2 text-lg font-bold text-slate-950">
                        {band.annualFee}
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                      <div className="rounded-[22px] border border-white/80 bg-white/80 px-4 py-4 backdrop-blur-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Admission fee
                        </p>
                        <p className="mt-2 text-base font-bold text-slate-950">
                          {band.admissionFee}
                        </p>
                      </div>
                      <div className="rounded-[22px] border border-white/80 bg-white/80 px-4 py-4 backdrop-blur-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Transport
                        </p>
                        <p className="mt-2 text-base font-bold text-slate-950">
                          {band.transport}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-slate-600">
                    {band.note}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Separate lab, activity, and exam notes may still apply.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-20">
        <div className="absolute left-0 top-0 h-56 w-56 -translate-x-12 -translate-y-12 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 translate-x-14 translate-y-14 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_390px] xl:items-start">
            <div>
              <Badge className="border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/10">
                Separate Charges
              </Badge>
              <h2 className="mt-5 max-w-3xl text-3xl font-bold font-heading leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                What parents should confirm outside the annual fee band
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                Most fee confusion happens when optional or class-specific
                charges are assumed to be included. These four areas should
                always be checked separately.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {separateCharges.map((item, index) => (
                  <Card
                    key={item.title}
                    className="rounded-[26px] border border-white/10 bg-white/5 text-white shadow-[0_20px_60px_-48px_rgba(15,23,42,0.55)] backdrop-blur-sm"
                  >
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div className="text-sm font-bold text-white/25">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/72">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="rounded-[30px] border-0 bg-white shadow-[0_30px_80px_-52px_rgba(15,23,42,0.6)]">
              <CardContent className="p-6 sm:p-7">
                <Badge className="border border-primary/10 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
                  Before Payment
                </Badge>
                <h3 className="mt-5 text-2xl font-bold font-heading text-slate-950">
                  Confirm these points with the school office
                </h3>

                <ul className="mt-6 space-y-4">
                  {paymentChecks.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm leading-6 text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-[24px] border border-amber-200 bg-amber-50 px-4 py-4">
                  <div className="flex items-start gap-3">
                    <Shield className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                    <p className="text-sm leading-6 text-amber-900">
                      The safest next step is to ask for the current fee
                      breakup, transport note, and payment schedule in one
                      conversation before any seat payment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#fff8f4_100%)] py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 xl:grid-cols-[380px_minmax(0,1fr)] xl:items-start">
            <Card className="overflow-hidden rounded-[30px] border-slate-200/80 bg-white shadow-[0_24px_70px_-48px_rgba(15,23,42,0.22)]">
              <div className="border-b border-slate-200/80 bg-primary px-6 py-5 text-white sm:px-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
                  Admissions Help
                </p>
                <h2 className="mt-2 text-2xl font-bold font-heading">
                  Get fee guidance before you confirm the next step
                </h2>
              </div>
              <CardContent className="p-6 sm:p-7">
                <div className="space-y-4">
                  {officeSupport.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                              {item.label}
                            </p>
                            {"href" in item ? (
                              <Link
                                href={item.href}
                                className="mt-1 block text-sm font-semibold text-primary hover:underline"
                              >
                                {item.value}
                              </Link>
                            ) : (
                              <p className="mt-1 text-sm font-semibold text-slate-900">
                                {item.value}
                              </p>
                            )}
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Button
                    asChild
                    className="bg-primary text-white hover:bg-primary/90"
                  >
                    <Link href="/contact">
                      Contact Admissions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary/20 bg-white text-primary hover:bg-primary hover:text-white"
                  >
                    <Link href="/admissions/process">
                      Review Documents and Process
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div>
              <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
                Parent Questions
              </Badge>
              <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl">
                Fee questions parents usually ask before admission
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                These are the practical questions that usually shape enquiry
                calls and campus discussions.
              </p>

              <div className="mt-8 grid gap-4">
                {parentQuestions.map((item) => (
                  <Card
                    key={item.question}
                    className="rounded-[26px] border-slate-200/80 bg-white shadow-[0_18px_50px_-44px_rgba(15,23,42,0.18)]"
                  >
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <CalendarDays className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-slate-950 sm:text-lg">
                            {item.question}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#7f1322_0%,#a51c30_42%,#c33a44_100%)] px-6 py-10 text-center shadow-[0_30px_90px_-55px_rgba(127,19,34,0.55)] sm:px-10 lg:px-14 lg:py-14">
            <div className="mx-auto max-w-3xl">
              <Badge className="border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/10">
                Next Step
              </Badge>
              <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-white sm:text-4xl lg:text-[2.8rem]">
                Review the admission process, then ask for the current
                class-wise breakup
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
                The fees page helps you shortlist the class band. The final
                confirmation should still come from the admissions office with
                the current fee sheet and payment guidance.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/admissions/process">
                    <FileText className="mr-2 h-5 w-5" />
                    Admission Process
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Admissions
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
