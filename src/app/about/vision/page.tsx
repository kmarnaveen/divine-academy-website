import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Compass,
  GraduationCap,
  Monitor,
  Shield,
  Users,
} from "lucide-react";

import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const visionSignals = [
  "CBSE school vision linked to daily routines",
  "Values, discipline, and academic consistency",
  "Practical learning and future readiness",
] as const;

const visionBlocks = [
  {
    title: "Vision",
    description:
      "Build students with strong academic habits, clear communication, responsible conduct, and readiness for higher studies and life beyond school.",
    points: [
      "Strong foundational learning from the early years onward",
      "Confident classroom, stage, and school participation",
      "Discipline and values-led conduct across the school day",
    ],
  },
  {
    title: "Mission",
    description:
      "Run a school day that combines structured teaching, practical exposure, reading support, sports, digital learning, and safe campus systems from Pre-Primary to Class XII.",
    points: [
      "Planned teaching and teacher follow-up across sections",
      "Lab, library, activity, and sports exposure inside the timetable",
      "Clear parent-facing support on academics, safety, and student growth",
    ],
  },
] as const;

const visionPillars = [
  {
    title: "Academic discipline",
    description:
      "Learning is expected to be regular, organised, and teacher-guided so students build steady academic habits instead of last-minute dependence.",
    points: [
      "Planned lessons and classroom continuity",
      "Revision and subject follow-up",
      "Board preparation support in senior classes",
    ],
    icon: BookOpen,
  },
  {
    title: "Visible values and conduct",
    description:
      "Respect, responsibility, punctuality, and behaviour are reinforced through routines, supervision, and clear expectations on campus.",
    points: [
      "Morning routines and school discipline",
      "Respectful student conduct and accountability",
      "Daily supervision across classes and campus movement",
    ],
    icon: Shield,
  },
  {
    title: "Learning beyond textbooks",
    description:
      "The school vision includes practical work, digital learning, reading culture, sports, and public participation so students develop confidence alongside academics.",
    points: [
      "Science and computer exposure",
      "Library and reading routines",
      "Assemblies, activities, and stage confidence",
    ],
    icon: Monitor,
  },
  {
    title: "Readiness for the next stage",
    description:
      "Students are expected to progress with better communication, stronger habits, and greater independence as they move from foundational to senior secondary classes.",
    points: [
      "Age-appropriate responsibility",
      "Communication and participation growth",
      "Preparation for higher studies and future pathways",
    ],
    icon: GraduationCap,
  },
] as const;

const valueBlocks = [
  {
    title: "Consistency",
    description:
      "Regular school routines, classroom expectations, and teacher follow-up help students progress with stability.",
  },
  {
    title: "Respect",
    description:
      "Respect for teachers, classmates, campus rules, and shared spaces remains central to the school culture.",
  },
  {
    title: "Participation",
    description:
      "Students are encouraged to take part in activities, events, sports, and presentations rather than stay limited to written work only.",
  },
  {
    title: "Responsibility",
    description:
      "The school expects students to develop responsibility for learning, behaviour, teamwork, and preparation.",
  },
] as const;

const nepFocus = [
  "Foundational learning and literacy support",
  "Experiential and practical exposure where relevant",
  "Communication, participation, and wider student development",
  "Digital familiarity, sports, arts, and reading alongside academics",
] as const;

const nextSteps = [
  {
    title: "See school leadership",
    description:
      "Understand how the principal office, academic coordination, and parent communication work across the school.",
    href: "/about/leadership",
    cta: "Go to leadership",
    icon: Users,
  },
  {
    title: "Read the principal's message",
    description:
      "See the academic priorities and school expectations shared from the principal's desk.",
    href: "/about/principal",
    cta: "Go to principal's message",
    icon: Compass,
  },
  {
    title: "Review admissions",
    description:
      "Check the admissions process, fees, and the next step for Nursery to Class XII.",
    href: "/admissions",
    cta: "Go to admissions",
    icon: ArrowRight,
  },
] as const;

export const metadata: Metadata = {
  title: "Vision and Mission | Divine International Academy Sirsaganj",
  description:
    "Read the vision, mission, values, and NEP 2020 direction of Divine International Academy, Sirsaganj, and see how they translate into the school day.",
  keywords: [
    "Divine International Academy vision",
    "school mission Sirsaganj",
    "CBSE school values Firozabad",
    "NEP 2020 school direction",
  ],
};

export default function VisionPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Vision and Mission
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              A school vision that shows up in discipline, teaching, and daily
              student life
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              At Divine International Academy, the school vision is not treated
              as a ceremonial statement. It is visible in classroom structure,
              supervision, student conduct, practical learning, and how students
              are prepared for the next stage.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.24)]">
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/curriculum.jpg"
                  alt="Learning environment at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    School Direction
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    Families should be able to see the vision in routines, not
                    only in slogans.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  The school direction is built around strong teaching habits,
                  responsible conduct, wider participation, and preparation for
                  higher classes and future pathways.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {visionSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  {visionBlocks.map((block) => (
                    <div
                      key={block.title}
                      className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-5"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {block.title}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                        {block.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90 sm:flex-1"
                  >
                    <Link href="/about/leadership">
                      Meet Leadership
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white sm:flex-1"
                  >
                    <Link href="/contact">Book a Campus Visit</Link>
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
              What It Means On Campus
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              The school vision becomes real through how the campus operates
              every day
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {visionPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <Card
                  key={pillar.title}
                  className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.24)]"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold font-heading text-slate-950">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {pillar.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {pillar.points.map((point) => (
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
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] xl:items-start">
            <div>
              <Badge className="border border-primary/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-white">
                Values In Practice
              </Badge>
              <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl">
                The values page matters only if families can identify them in
                daily school life
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {valueBlocks.map((item) => (
                  <Card
                    key={item.title}
                    className="rounded-[24px] border-slate-200/80 bg-white"
                  >
                    <CardContent className="p-5">
                      <h3 className="text-base font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.22)]">
              <CardContent className="p-6 sm:p-7">
                <Badge className="border border-primary/10 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
                  NEP 2020 Direction
                </Badge>
                <h3 className="mt-5 text-2xl font-bold font-heading text-slate-950">
                  The school direction aligns best when teaching moves beyond
                  rote-only routines
                </h3>

                <ul className="mt-6 space-y-4">
                  {nepFocus.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm leading-6 text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Next Step
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Move from school values to leadership, principal guidance, or
              admissions
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {nextSteps.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.24)]"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold font-heading text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <Button
                      asChild
                      size="lg"
                      className="mt-6 w-full bg-primary text-white hover:bg-primary/90"
                    >
                      <Link href={item.href}>
                        {item.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
