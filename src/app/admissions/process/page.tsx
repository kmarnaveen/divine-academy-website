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
  Mail,
  Phone,
  Shield,
  Users,
} from "lucide-react";

import { MainLayout } from "../../../components/layout/main-layout";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const admissionCycle = "2026-27";

const processSignals = [
  "Nursery to Class XII admissions",
  "Campus visit and document review",
  "Seat confirmation as per availability",
] as const;

const processStats = [
  {
    value: "3",
    label: "Admission steps",
    detail: "From enquiry to confirmation.",
  },
  {
    value: "Open",
    label: "Enquiries and visits",
    detail: "Admissions guidance is available now.",
  },
  {
    value: "31 Mar",
    label: "Age cut-off reference",
    detail: "Used for foundational-entry guidance.",
  },
  {
    value: "2131764",
    label: "CBSE affiliation",
    detail: "Divine International Academy, Sirsaganj.",
  },
] as const;

const processSteps = [
  {
    step: "01",
    title: "Share your enquiry",
    description:
      "Call, email, or visit the school with your child’s class, date of birth, and target admission session.",
    points: [
      "Class-entry and age guidance",
      "Initial seat-availability discussion",
      "Campus visit coordination with the admissions desk",
    ],
    icon: Phone,
  },
  {
    step: "02",
    title: "Visit campus and review essentials",
    description:
      "Review classrooms, safety systems, fees, transport support, and the document checklist before you move to the next step.",
    points: [
      "Campus visit and parent interaction",
      "Fee and transport clarification",
      "Document and process explanation",
    ],
    icon: CalendarDays,
  },
  {
    step: "03",
    title: "Submit documents and confirm the next step",
    description:
      "The admissions office reviews documents and confirms seat status or the next action according to class-wise availability.",
    points: [
      "Birth certificate and school records review",
      "Photographs and address proof check",
      "Seat confirmation guidance from the school office",
    ],
    icon: FileText,
  },
] as const;

const requiredDocuments = [
  {
    title: "Birth certificate",
    detail: "Required for age verification during the admissions process.",
  },
  {
    title: "Previous school records",
    detail: "Transfer certificate and report card for Class I and above.",
  },
  {
    title: "Passport-size photographs",
    detail: "Recent colour photographs of the student.",
  },
  {
    title: "Address proof",
    detail: "Aadhaar card, passport, or utility bill of parent or guardian.",
  },
  {
    title: "Medical certificate",
    detail: "Basic health certificate if asked by the school during review.",
  },
  {
    title: "Category certificate",
    detail: "Applicable only where relevant during admissions review.",
  },
] as const;

const ageGuidance = [
  { stage: "Pre-KG", age: "2.5 - 3.5 years" },
  { stage: "LKG", age: "3.5 - 4.5 years" },
  { stage: "UKG", age: "4.5 - 5.5 years" },
  { stage: "Class I", age: "5.5 - 6.5 years" },
] as const;

const processNotes = [
  {
    title: "Start early when possible",
    description:
      "Families usually get better clarity on class entry, documents, and transport support when they begin the process before the last-minute rush.",
    icon: Clock,
  },
  {
    title: "Seat confirmation depends on availability",
    description:
      "An enquiry or campus visit does not automatically confirm admission. The school reviews documents and confirms the next step according to class-wise seat position.",
    icon: Shield,
  },
  {
    title: "Fees and transport are reviewed separately",
    description:
      "Families can discuss annual fees, admission charges, and route-based transport charges during the process before making a final decision.",
    icon: GraduationCap,
  },
  {
    title: "Keep contact details active",
    description:
      "The admissions office may use phone or email for follow-up, clarification, or confirmation after the initial review.",
    icon: Users,
  },
] as const;

const officeSupport = [
  {
    label: "Admissions desk",
    value: "+91 9876543211",
    detail: "Class entry, documents, fee guidance, and admission support",
    href: "tel:+919876543211",
    icon: Phone,
  },
  {
    label: "Admissions email",
    value: "admissions@divineacademy.edu.in",
    detail: "Share class, age, and admission questions by email",
    href: "mailto:admissions@divineacademy.edu.in?subject=Admissions%20Process%20Enquiry",
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
    question: "Do parents need to carry all documents on the first visit?",
    answer:
      "Not always. It is still useful to keep the main documents ready so the admissions office can guide you properly during the process.",
  },
  {
    question: "Is admission confirmed immediately after enquiry?",
    answer:
      "No. Seat confirmation depends on class-wise availability, document review, and the school’s admissions decision for that stage.",
  },
  {
    question: "Can families discuss fees and transport during the same visit?",
    answer:
      "Yes. Parents can review fee bands, transport support, and route guidance during the campus visit or admissions interaction.",
  },
] as const;

export const metadata: Metadata = {
  title: "Admission Process | Divine International Academy Sirsaganj",
  description:
    "Check the 2026-27 admission process at Divine International Academy, Sirsaganj. Review steps, age guidance, required documents, and admissions office contact details.",
  keywords: [
    "Divine International Academy admission process",
    "school admission steps Sirsaganj",
    "CBSE admissions Firozabad",
    "school admissions 2026-27",
  ],
};

export default function AdmissionProcessPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Admission Process {admissionCycle}
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              A clear 3-step admission process for Nursery to Class XII
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Start with the enquiry, visit the campus, keep documents ready,
              and confirm the next step with the admissions office according to
              class-wise availability.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.25)]">
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/admission-process.jpg"
                  alt="Admissions process guidance at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    {admissionCycle} Admissions
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    Keep the child’s class, date of birth, and key documents
                    ready before the admissions interaction.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  The admissions process is easier when families start with the
                  right basics: class entry, age guidance, document readiness,
                  campus review, and direct contact with the school office.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {processSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {processStats.map((stat) => (
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
                      Talk to Admissions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white sm:flex-1"
                  >
                    <Link href="/admissions/fees">Review Fees</Link>
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
              Admission Steps
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Start with enquiry, visit the school, and then submit documents
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <Card
                  key={step.step}
                  className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.24)]"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                        {step.step}
                      </div>
                    </div>

                    <h3 className="mt-5 text-xl font-bold font-heading text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {step.points.map((point) => (
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
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.1fr)_380px] xl:items-start">
            <div>
              <Badge className="border border-primary/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-white">
                Keep These Ready
              </Badge>
              <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl">
                Documents usually reviewed during the process
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {requiredDocuments.map((item) => (
                  <Card
                    key={item.title}
                    className="rounded-[24px] border-slate-200/80 bg-white"
                  >
                    <CardContent className="p-5">
                      <h3 className="text-base font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.detail}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.22)]">
              <CardContent className="p-6 sm:p-7">
                <Badge className="border border-primary/10 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
                  Admissions Office
                </Badge>
                <h3 className="mt-5 text-2xl font-bold font-heading text-slate-950">
                  Contact the admissions desk for process guidance
                </h3>

                <div className="mt-6 space-y-4">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:items-start">
            <div>
              <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
                Foundational Entry Guidance
              </Badge>
              <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl">
                Age guidance for Pre-KG to Class I
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Use these age bands as a reference before speaking with the
                admissions office for the final class-entry discussion.
              </p>

              <div className="mt-6 overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.2)]">
                <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-50 px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  <div>Stage</div>
                  <div>Age guidance</div>
                </div>
                {ageGuidance.map((item) => (
                  <div
                    key={item.stage}
                    className="grid grid-cols-2 border-b border-slate-200/70 px-5 py-4 last:border-b-0"
                  >
                    <div className="text-sm font-semibold text-slate-900">
                      {item.stage}
                    </div>
                    <div className="text-sm text-slate-700">{item.age}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
                Important Notes
              </Badge>
              <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl">
                What families should keep in mind during the process
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {processNotes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Card
                      key={item.title}
                      className="rounded-[24px] border-slate-200/80 bg-white"
                    >
                      <CardContent className="p-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-4 text-base font-bold text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/80 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-white">
              Parent Questions
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Common admissions-process questions
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {parentQuestions.map((item) => (
              <Card
                key={item.question}
                className="rounded-[28px] border-slate-200/80 bg-white"
              >
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading leading-7 text-slate-950">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.answer}
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
              Admissions Help
            </Badge>
            <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold font-heading leading-tight sm:text-4xl lg:text-[2.8rem]">
                  Need help with class entry, documents, or seat availability?
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                  Contact the admissions desk to review the next step, confirm
                  what to bring, and plan a campus visit before you proceed.
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
                  <Link href="/admissions/fees">
                    Review Fees
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
