import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle,
  Clock,
  FileText,
  GraduationCap,
  IndianRupee,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";

import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { schoolContact } from "@/lib/school-contact";

const admissionCycle = "2026-27";

const admissionSignals = [
  "Nursery to Class XII",
  "Campus visit booking",
  "Fee and document guidance",
] as const;

const admissionStats = [
  { value: "100%", label: "Board results" },
  { value: "1200+", label: "Students on campus" },
  { value: "50+", label: "Faculty members" },
  { value: "2131764", label: "CBSE affiliation" },
] as const;

const processSteps = [
  {
    step: "01",
    title: "Share enquiry details",
    description:
      "Call, email, or enquire online with your child’s class, age, and target admission session.",
  },
  {
    step: "02",
    title: "Visit campus and review essentials",
    description:
      "Review classrooms, safety systems, fee details, and document requirements during the campus visit.",
  },
  {
    step: "03",
    title: "Submit documents and wait for confirmation",
    description:
      "The admissions office reviews documents and confirms the seat subject to class-wise availability.",
  },
] as const;

const admissionStatus = [
  { label: "Enquiries and campus visits", status: "Open now" },
  { label: "Document review and family interaction", status: "Rolling" },
  { label: "Seat confirmation", status: "As per availability" },
] as const;

const ageGuidance = [
  { stage: "Pre-KG", age: "2.5 - 3.5 years" },
  { stage: "LKG", age: "3.5 - 4.5 years" },
  { stage: "UKG", age: "4.5 - 5.5 years" },
  { stage: "Class I", age: "5.5 - 6.5 years" },
] as const;

const requiredDocuments = [
  {
    title: "Birth certificate",
    detail: "Government or municipal birth certificate for age verification.",
    required: true,
  },
  {
    title: "Previous school records",
    detail: "Transfer certificate and report card for Class I and above.",
    required: true,
  },
  {
    title: "Passport-size photographs",
    detail: "Recent colour photographs of the student.",
    required: true,
  },
  {
    title: "Address proof",
    detail: "Aadhaar card, passport, or utility bill of parent or guardian.",
    required: true,
  },
  {
    title: "Medical certificate",
    detail: "Basic health certificate from a registered practitioner.",
    required: true,
  },
  {
    title: "Category certificate",
    detail: "If applicable for reserved category admissions.",
    required: false,
  },
] as const;

const feeOverview = [
  {
    stage: "Pre-KG to Class I",
    annualFee: "₹45,000 - ₹50,000",
    admissionFee: "₹5,000",
    note: "Foundational years",
  },
  {
    stage: "Class II to V",
    annualFee: "₹55,000",
    admissionFee: "₹7,500",
    note: "Primary stage",
  },
  {
    stage: "Class VI to VIII",
    annualFee: "₹65,000",
    admissionFee: "₹10,000",
    note: "Middle school",
  },
  {
    stage: "Class IX to X",
    annualFee: "₹75,000",
    admissionFee: "₹12,500",
    note: "Board foundation years",
  },
  {
    stage: "Class XI to XII",
    annualFee: "₹85,000",
    admissionFee: "₹15,000",
    note: "Senior secondary",
  },
] as const;

const feeNotes = [
  "Transport charges vary by route and stage.",
  "Activity, lab, and examination charges apply separately by class.",
  "Detailed fee bands, transport notes, and separate charges are available on the fee page.",
] as const;

export const metadata: Metadata = {
  title: "Admissions 2026-27 | Divine International Academy Sirsaganj",
  description:
    "Admissions open for 2026-27 at Divine International Academy, Sirsaganj. Check the admission process, required documents, fee overview, and direct contact details.",
  keywords: [
    "Divine International Academy admissions",
    "school admissions Sirsaganj",
    "CBSE admissions Firozabad",
    "DIA fees",
    "school admission process 2026-27",
  ],
};

export default function AdmissionsPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Admissions {admissionCycle}
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.4rem]">
              Admissions open from Nursery to Class XII for {admissionCycle}
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              The admissions route includes the process, required documents, fee
              overview, and direct school contact details for the current
              admission cycle.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.25)]">
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/admission-process.jpg"
                  alt="Admissions guidance at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    {admissionCycle} Enquiries
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.5rem]">
                    Start with the process, document list, and school contact
                    details for the next step.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Review the admission process, required documents, key school
                  facts, and fee bands before speaking with the admissions
                  office.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {admissionSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Open now
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Enquiries, campus visits, and class-wise admission checks.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Keep ready
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Keep your child’s class, date of birth, and preferred
                      session ready.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90"
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Speak to Admissions
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-primary/20 bg-white text-primary hover:bg-primary hover:text-white"
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center"
                    >
                      Book a Campus Visit
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20" id="process">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Admission Process
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              A clear 3-step path from enquiry to confirmation
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              The admission process is kept simple so the next step stays clear
              from enquiry through confirmation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_340px] lg:items-start">
            <div className="space-y-4">
              {processSteps.map((step) => (
                <Card
                  key={step.step}
                  className="rounded-[28px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.2)]"
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white shadow-sm">
                        {step.step}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-slate-950 sm:text-xl">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-5">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      Current status
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Enquiries, checks, and seat confirmation.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {admissionStatus.map((item) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5"
                    >
                      <span className="text-sm leading-6 text-slate-700">
                        {item.label}
                      </span>
                      <span className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-900 ring-1 ring-slate-200">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      Age guidance
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Age bands generally followed for early years and entry
                      classes.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {ageGuidance.map((item) => (
                    <div
                      key={item.stage}
                      className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5"
                    >
                      <span className="text-sm font-semibold text-slate-950">
                        {item.stage}
                      </span>
                      <span className="text-sm text-slate-600">{item.age}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs leading-5 text-slate-500">
                  Final class placement follows school review and applicable
                  CBSE norms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Documents
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              Documents to keep ready before confirmation
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Keeping the main documents ready makes the review and confirmation
              process faster.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_340px] lg:items-start">
            <div className="grid gap-4 sm:grid-cols-2">
              {requiredDocuments.map((doc) => (
                <Card
                  key={doc.title}
                  className="rounded-[26px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.18)]"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl ${
                          doc.required
                            ? "bg-primary text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-semibold text-slate-950">
                            {doc.title}
                          </h3>
                          <span
                            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                              doc.required
                                ? "bg-red-50 text-red-700"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {doc.required ? "Required" : "If applicable"}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {doc.detail}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_22px_70px_-52px_rgba(15,23,42,0.18)] sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    Before you submit
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    A few checks that reduce delays.
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-slate-700">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5">
                  Carry original documents during the campus visit or document
                  review stage.
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5">
                  For Class I and above, previous school records are needed for
                  review.
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5">
                  Seat confirmation is completed only after document review and
                  class-wise availability.
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5">
                  Keep one photocopy set ready along with the original documents
                  for school verification.
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5">
                  If a transfer certificate is pending, confirm the timeline
                  with the admissions office before final submission.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              Key school facts for the admission decision
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              These numbers show school scale, board alignment, and academic
              stability at a glance.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {admissionStats.map((stat) => (
              <Card
                key={stat.label}
                className="rounded-[28px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.16)]"
              >
                <CardContent className="px-5 py-6 sm:px-6 sm:py-7">
                  <div className="text-3xl font-bold font-heading text-primary sm:text-[2.1rem]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Fee Overview
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              Fee overview for the 2026-27 admission cycle
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Review the annual fee band and admission fee by stage before you
              open the detailed fee page.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {feeOverview.map((fee) => (
              <div
                key={fee.stage}
                className="rounded-[26px] border border-slate-200 bg-gray-50 px-5 py-5 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.16)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                  <IndianRupee className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-950">
                  {fee.stage}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{fee.note}</p>

                <div className="mt-5 space-y-3 text-sm text-slate-700">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Annual fee
                    </div>
                    <div className="mt-1 text-xl font-bold text-primary">
                      {fee.annualFee}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Admission fee
                    </div>
                    <div className="mt-1 font-semibold text-slate-900">
                      {fee.admissionFee}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-amber-200/70 bg-amber-50 px-5 py-5 sm:px-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" />
              <div>
                <h3 className="text-base font-semibold text-slate-950">
                  Fee notes
                </h3>
                <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  {feeNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90"
            >
              <Link
                href="/admissions/fees"
                className="flex items-center justify-center"
              >
                View Detailed Fee Page
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/20 bg-white text-primary hover:bg-primary hover:text-white"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center"
              >
                Speak With Admissions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/10">
              Admissions Office
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading sm:text-4xl lg:text-5xl">
              Speak to the admissions desk before you visit or apply
            </h2>
            <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
              Speak with the admissions desk for seat availability, document
              checks, office timings, and campus visit booking.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.92fr)] lg:items-start">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/15 bg-white/8 px-5 py-5 backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/12 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                  Admissions phone
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {schoolContact.phoneDisplay}
                </p>
              </div>

              <div className="rounded-[28px] border border-white/15 bg-white/8 px-5 py-5 backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/12 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                  Admissions email
                </p>
                <p className="mt-2 text-lg font-semibold text-white break-all">
                  {schoolContact.emailDisplay}
                </p>
              </div>

              <div className="rounded-[28px] border border-white/15 bg-white/8 px-5 py-5 backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/12 text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                  Office hours
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {schoolContact.officeHoursDays}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  {schoolContact.officeHoursTime}
                </p>
              </div>

              <div className="rounded-[28px] border border-white/15 bg-white/8 px-5 py-5 backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/12 text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                  Campus location
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {schoolContact.fullAddress}
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
              <h3 className="text-2xl font-bold font-heading text-white">
                Ready to move ahead?
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
                Start the application once your documents are ready, or book a
                campus visit if you want to review the school environment first.
              </p>

              <div className="mt-6 space-y-3 text-sm text-white/80">
                <div className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/6 px-4 py-3.5">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>
                    Confirm class availability before paying any admission
                    charges.
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/6 px-4 py-3.5">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>
                    School office support is available on the same verified
                    number during office hours.
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/95"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Speak to Admissions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/8 text-white hover:bg-white hover:text-primary"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center"
                  >
                    Book a Campus Visit
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
