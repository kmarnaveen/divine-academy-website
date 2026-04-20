import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  GraduationCap,
  Microscope,
  Monitor,
  Shield,
  Target,
} from "lucide-react";

import { MainLayout } from "../../../components/layout/main-layout";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const labSignals = [
  "Physics, Chemistry, and Biology labs",
  "25-student science lab batches",
  "30-system computer lab",
  "Practical work linked to class teaching",
] as const;

const labProfile = [
  {
    label: "Science learning",
    value:
      "Practical exposure supports concept clarity in middle, secondary, and senior-secondary classes.",
  },
  {
    label: "Computer access",
    value:
      "Computer learning supports digital instruction, guided practice, and regular lab periods.",
  },
  {
    label: "Batch structure",
    value:
      "Science lab work is supported through smaller supervised batches of around 25 students.",
  },
  {
    label: "Board relevance",
    value:
      "Senior classes use lab spaces for practical readiness, record work, and exam support.",
  },
] as const;

const labStats = [
  {
    value: "25",
    label: "Science lab batch size",
    detail:
      "Smaller supervised groups support safer and clearer practical work.",
  },
  {
    value: "30",
    label: "Computer lab systems",
    detail: "Computer periods support guided digital learning and practice.",
  },
  {
    value: "3",
    label: "Core science lab areas",
    detail: "Physics, Chemistry, and Biology support practical understanding.",
  },
  {
    value: "XI-XII",
    label: "Board practical focus",
    detail:
      "Senior students use lab time for records, demonstrations, and readiness.",
  },
] as const;

const labSpaces = [
  {
    title: "Science laboratories",
    description:
      "Science labs at Divine support demonstrations, practical exercises, and concept reinforcement across stages where applied learning becomes more important.",
    points: [
      "Physics, Chemistry, and Biology lab access",
      "Practical sessions linked to the timetable",
      "Smaller supervised science lab batches",
    ],
    icon: Microscope,
  },
  {
    title: "Computer learning space",
    description:
      "Computer periods help students build confidence with digital tools, guided practice, and school-level computer learning routines.",
    points: [
      "30-system computer lab support",
      "Structured computer periods",
      "Guided digital learning for class-level needs",
    ],
    icon: Monitor,
  },
  {
    title: "Practical records and follow-up",
    description:
      "Lab use is most valuable when it supports regular practical records, submission work, and stronger exam preparation in higher classes.",
    points: [
      "Practical notebooks and record completion",
      "Demonstration and observation-based learning",
      "Board-year practical follow-up where relevant",
    ],
    icon: BookOpen,
  },
] as const;

const stageUse = [
  {
    title: "Middle School",
    description:
      "Students begin using lab spaces and computer learning more regularly as concepts move from basic understanding to observation and application.",
  },
  {
    title: "Secondary School",
    description:
      "Classes IX and X benefit from stronger practical support, science demonstrations, and early discipline in lab-based work.",
  },
  {
    title: "Senior Secondary",
    description:
      "Classes XI and XII use lab time for practical completion, subject reinforcement, and board-readiness support in science streams.",
  },
] as const;

const parentChecks = [
  {
    title: "Ask how often lab periods are scheduled",
    description:
      "Regular practical use matters more than the appearance of the room itself.",
  },
  {
    title: "Check supervision and safety routine",
    description:
      "Parents should understand how students are supervised during practical sessions and how the school manages movement and safety in lab areas.",
  },
  {
    title: "Review computer-learning frequency",
    description:
      "Ask how often students use the computer lab and how digital learning is linked to classroom teaching.",
  },
  {
    title: "Understand board-year practical support",
    description:
      "For senior classes, ask how practical work, records, and submission follow-up are managed before examinations.",
  },
] as const;

export const metadata: Metadata = {
  title: "Labs | Divine International Academy Sirsaganj",
  description:
    "Explore the science and computer labs at Divine International Academy, Sirsaganj, including practical learning support, smaller science lab batches, and board-year practical readiness.",
  keywords: [
    "Divine International Academy labs",
    "school science labs Sirsaganj",
    "computer lab Firozabad school",
    "CBSE practical learning Sirsaganj",
  ],
};

export default function LabsPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Science and Computer Labs
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              Practical learning spaces for science and digital instruction
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Divine's lab facilities support demonstrations, practical work,
              guided computer learning, and board-year readiness from middle
              school onward.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.25)]">
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/facilities.avif"
                  alt="Science and computer labs at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Practical Learning
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    Lab spaces support understanding, observation, and regular
                    academic follow-up beyond textbook-only learning.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  From science practicals to computer periods, students use
                  these spaces to build confidence through guided work,
                  demonstrations, and stage-appropriate application.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {labSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {labProfile.map((item) => (
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
                  {labStats.map((stat) => (
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
                      Ask About Lab Access
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
              Lab Spaces
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Facilities that support applied learning
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {labSpaces.map((item) => {
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
              Stage-Wise Use
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              How students use labs across school stages
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {stageUse.map((item) => (
              <Card
                key={item.title}
                className="rounded-[28px] border-slate-200/80 bg-white"
              >
                <CardContent className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold font-heading text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Parent Checks
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              What to review during a lab visit
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
                      <Shield className="h-5 w-5" />
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
              Lab Enquiry
            </Badge>
            <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold font-heading leading-tight sm:text-4xl lg:text-[2.8rem]">
                  Want to review the science and computer labs in person?
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                  Parents can contact the school to discuss lab access,
                  practical learning support, and stage-wise academic use before
                  admission.
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
