import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle,
  GraduationCap,
  MapPin,
  Microscope,
  Monitor,
  Shield,
  Trophy,
  Users,
} from "lucide-react";

import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const schoolSignals = [
  "CBSE Senior Secondary School",
  "Pre-Primary to Class XII",
  "Established 2012",
  "Om Educational Trust",
] as const;

const schoolProfile = [
  {
    label: "School type",
    value:
      "CBSE-affiliated co-educational English medium Senior Secondary School",
  },
  {
    label: "Classes served",
    value: "Pre-Primary to Class XII",
  },
  {
    label: "Leadership and management",
    value: "Principal Dr. Garima Gupta | Om Educational Trust",
  },
  {
    label: "Location and affiliation",
    value: "Sirsaganj, Firozabad, Uttar Pradesh | CBSE affiliation 2131764",
  },
] as const;

const schoolStats = [
  {
    value: "2012",
    label: "Established",
    detail: "School run under Om Educational Trust.",
    icon: CalendarDays,
  },
  {
    value: "1200+",
    label: "Students on campus",
    detail: "Across foundational to senior secondary stages.",
    icon: Users,
  },
  {
    value: "50+",
    label: "Faculty members",
    detail: "Teaching, supervision, and student follow-up across sections.",
    icon: GraduationCap,
  },
  {
    value: "100%",
    label: "Board results",
    detail: "Senior classes supported through steady subject preparation.",
    icon: Trophy,
  },
] as const;

const parentReasons = [
  {
    title: "Structured academics across the school day",
    description:
      "Teaching is organised through planned lessons, revision, classwork, and teacher follow-up instead of loose classroom routines.",
    points: [
      "40 smart classrooms across sections",
      "Digital boards and classroom support",
      "Regular follow-up from foundational years to board classes",
    ],
    icon: Monitor,
  },
  {
    title: "Practical learning is part of the timetable",
    description:
      "Science, computer learning, and reading support are built into weekly routines so students move beyond textbook-only learning.",
    points: [
      "25-student science lab batches",
      "30-system computer labs",
      "15,000+ books and reading support",
    ],
    icon: Microscope,
  },
  {
    title: "Safety and supervision stay visible",
    description:
      "The campus runs with monitored routines, transport oversight, and controlled movement across the full school day.",
    points: [
      "CCTV-supported campus monitoring",
      "Access control and supervised arrival-dispersal",
      "GPS-tracked buses with support staff",
    ],
    icon: Shield,
  },
  {
    title: "Students participate beyond textbooks",
    description:
      "Sports, assemblies, stage events, and school activities help students build confidence, teamwork, and expression inside the regular school routine.",
    points: [
      "Sports periods and house activities",
      "Stage and assembly participation",
      "Confidence-building through school culture",
    ],
    icon: Trophy,
  },
] as const;

const purposeBlocks = [
  {
    title: "Vision",
    description:
      "Build students with strong academic habits, clear communication, responsible conduct, and readiness for higher studies and life beyond school.",
    points: [
      "Strong foundational learning",
      "Confident communication and participation",
      "Discipline, responsibility, and values-led conduct",
    ],
  },
  {
    title: "Mission",
    description:
      "Run a CBSE school day that combines structured teaching, practical exposure, reading culture, sports, digital learning, and safe campus routines.",
    points: [
      "Smart classroom teaching and regular follow-up",
      "Lab, library, activity, and sports access",
      "Parent-facing clarity on routines, safety, and academic support",
    ],
  },
] as const;

const coreValues = [
  {
    title: "Academic Excellence",
    description:
      "Rigorous CBSE teaching is backed by structured lessons, revision cycles, and board preparation in senior classes.",
    icon: BookOpen,
  },
  {
    title: "Character Building",
    description:
      "Discipline, integrity, empathy, and respect are reinforced through routines, supervision, and school culture.",
    icon: Shield,
  },
  {
    title: "Holistic Growth",
    description:
      "Sports, stage participation, cultural activities, and life-skills exposure sit alongside classroom learning.",
    icon: Users,
  },
  {
    title: "Future Ready",
    description:
      "Computer learning, practical work, communication, and senior-class guidance prepare students for higher studies and competitive pathways.",
    icon: GraduationCap,
  },
] as const;

const milestones = [
  {
    year: "2012",
    title: "School founded",
    detail: "Divine International Academy began under Om Educational Trust.",
  },
  {
    year: "2015",
    title: "CBSE affiliation granted",
    detail: "The school received CBSE affiliation number 2131764.",
  },
  {
    year: "2018",
    title: "Senior secondary expansion",
    detail: "Class XI and XII were added as the school expanded upward.",
  },
  {
    year: "2020",
    title: "Board-result benchmark",
    detail:
      "The school recorded 100% board results for three consecutive years.",
  },
  {
    year: "2023",
    title: "Growth in school strength",
    detail:
      "The school crossed 1000 students as campus operations and staffing expanded.",
  },
  {
    year: "2025",
    title: "Digital learning upgrade",
    detail:
      "Smart-classroom and IT-lab upgrades strengthened technology-supported teaching.",
  },
] as const;

const nextSteps = [
  {
    title: "Review admissions",
    description:
      "See the admission process, fee overview, required documents, and admissions office details.",
    href: "/admissions",
    cta: "Go to admissions",
    icon: GraduationCap,
  },
  {
    title: "Explore academics",
    description:
      "Check curriculum coverage, academic stages, and how the school supports learning across classes.",
    href: "/academics",
    cta: "Go to academics",
    icon: BookOpen,
  },
  {
    title: "Plan a campus visit",
    description:
      "Use verified phone numbers, office timings, and campus directions before you travel.",
    href: "/contact",
    cta: "Go to contact page",
    icon: MapPin,
  },
] as const;

export const metadata: Metadata = {
  title: "About Divine International Academy | Sirsaganj",
  description:
    "Learn about Divine International Academy, Sirsaganj: school profile, CBSE affiliation, Om Educational Trust, campus systems, and what parents can expect from Pre-Primary to Class XII.",
  keywords: [
    "About Divine International Academy",
    "CBSE school Sirsaganj",
    "school profile Firozabad",
    "Divine International Academy about page",
  ],
};

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              About Divine International Academy
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              A CBSE-affiliated co-educational English medium Senior Secondary
              School in Sirsaganj since 2012
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Managed by Om Educational Trust and led by Principal Dr. Garima
              Gupta, Divine International Academy serves Pre-Primary to Class
              XII with structured teaching, practical learning, student
              participation, and campus supervision.
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_380px] xl:items-start">
            <div className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.24)]">
              <div className="relative aspect-[16/9] border-b border-slate-200/80 bg-slate-100">
                <Image
                  src="/images/submenu/curriculum.jpg"
                  alt="Learning environment at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 52vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    School Overview
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    Teaching quality, safety, campus systems, and board outcomes
                    are the first signals parents look for.
                  </h2>
                </div>
              </div>

              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
                <div>
                  <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                    DIA serves parents across Sirsaganj and the wider Firozabad
                    region with CBSE academics, 50+ faculty members, 40 smart
                    classrooms, practical learning spaces, and a complete school
                    journey from Pre-Primary to Class XII.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {schoolSignals.map((signal) => (
                      <div
                        key={signal}
                        className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                      >
                        {signal}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary text-white hover:bg-primary/90"
                    >
                      <Link
                        href="/admissions"
                        className="flex items-center justify-center"
                      >
                        Review Admissions
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

                <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                        School profile
                      </p>
                      <p className="text-lg font-semibold text-slate-950">
                        Core facts parents check first
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3.5 text-sm text-slate-700">
                    {schoolProfile.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          {item.label}
                        </p>
                        <p className="mt-2 leading-6 text-slate-700">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              {schoolStats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-[26px] border border-slate-200 bg-white px-5 py-5 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.18)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-3xl font-bold font-heading text-primary">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {stat.label}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {stat.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              How the School Works
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              The school is built around classroom structure, daily routines,
              and visible support systems
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              These systems shape how students learn, move, participate, and
              stay supported through the full school day.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {parentReasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <Card
                  key={reason.title}
                  className="rounded-[30px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.16)]"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-950">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {reason.description}
                    </p>

                    <div className="mt-5 space-y-3 text-sm text-slate-700">
                      {reason.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Vision, Mission, and Values
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              What the school stands for and how those values show up on campus
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              The school vision and mission connect directly to teaching,
              supervision, participation, and student support on campus.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {purposeBlocks.map((block) => (
              <Card
                key={block.title}
                className="rounded-[30px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.16)]"
              >
                <CardContent className="p-6 sm:p-8">
                  <Badge className="border border-primary/10 bg-primary/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
                    {block.title}
                  </Badge>
                  <p className="mt-5 text-lg font-semibold leading-8 text-slate-950 sm:text-xl">
                    {block.description}
                  </p>

                  <div className="mt-6 space-y-3 text-sm text-slate-700">
                    {block.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-[30px] border border-amber-200/70 bg-amber-50 px-6 py-6 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-800">
              NEP 2020 direction
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700 sm:text-base">
              The school approach supports the direction of NEP 2020 through
              stronger foundational learning, experiential exposure, digital
              readiness, reading habits, communication, sports, arts, and wider
              student participation beyond rote academics alone.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {coreValues.map((value) => {
              const Icon = value.icon;

              return (
                <Card
                  key={value.title}
                  className="rounded-[26px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.14)]"
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-950">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Milestones and Achievements
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              Key steps in the school journey from foundation to campus growth
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              This timeline gives parents a clearer picture of when the school
              expanded, strengthened academics, and upgraded learning systems.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {milestones.map((milestone) => (
              <Card
                key={`${milestone.year}-${milestone.title}`}
                className="rounded-[28px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.14)]"
              >
                <CardContent className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {milestone.year}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-slate-950">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {milestone.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#7d1324_0%,#5f0d1b_40%,#22060b_100%)] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/10">
              Next Steps
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading sm:text-4xl lg:text-5xl">
              Move from school overview to admissions, academics, or a campus
              visit
            </h2>
            <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
              Once parents understand the school profile, the next decision is
              usually admissions, academic fit, or an in-person campus review.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
            {nextSteps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[30px] border border-white/12 bg-white/8 p-6 backdrop-blur-sm sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
                    {item.description}
                  </p>
                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full bg-white text-primary hover:bg-white/95"
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-center"
                      >
                        {item.cta}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
