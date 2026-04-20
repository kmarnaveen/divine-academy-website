import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  GraduationCap,
  Microscope,
  Shield,
  Target,
  Trophy,
  Users,
} from "lucide-react";

import { MainLayout } from "../../../components/layout/main-layout";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const achievementSignals = [
  "100% board results",
  "Recognition across academics and activities",
  "Parent-visible academic follow-up",
] as const;

const achievementProfile = [
  {
    label: "Strongest verified academic proof",
    value: "100% board results in the senior years",
  },
  {
    label: "School scale",
    value: "1200+ students supported by 50+ faculty members",
  },
  {
    label: "Academic range",
    value: "Pre-Primary to Class XII under the CBSE framework",
  },
  {
    label: "What this page covers",
    value:
      "Board outcomes, recognition areas, and the systems behind student progress",
  },
] as const;

const achievementStats = [
  {
    value: "100%",
    label: "Board results",
    detail: "A visible academic outcome parents notice first.",
  },
  {
    value: "50+",
    label: "Faculty members",
    detail: "Subject support matters before results appear on paper.",
  },
  {
    value: "1200+",
    label: "Students",
    detail: "Achievement culture grows when systems scale with consistency.",
  },
  {
    value: "2131764",
    label: "CBSE affiliation",
    detail: "A clear school identifier parents often verify directly.",
  },
] as const;

const achievementAreas = [
  {
    title: "Board performance and exam readiness",
    description:
      "At Divine, achievement starts with consistent classroom teaching, regular tests, revision planning, and visible support through the board years.",
    points: [
      "Classwork, notebook review, and regular assessments",
      "Board-focused revision and paper practice in senior classes",
      "Academic follow-up that aims for stable performance, not last-minute rescue",
    ],
    icon: Trophy,
  },
  {
    title: "Subject confidence beyond marks",
    description:
      "Students grow through presentations, projects, practical work, and stronger subject communication, not only through final scores.",
    points: [
      "Project work and presentation opportunities",
      "Science practicals and applied classroom work",
      "Reading, writing, and discussion-based subject development",
    ],
    icon: BookOpen,
  },
  {
    title: "Recognition through participation",
    description:
      "School achievement also includes how students represent themselves in assemblies, competitions, exhibitions, house activities, and stage events.",
    points: [
      "Debates, quizzes, exhibitions, and school presentations",
      "Sports and co-curricular participation platforms",
      "Confidence, discipline, and team responsibility built over time",
    ],
    icon: Award,
  },
  {
    title: "Stream readiness after Class X",
    description:
      "Achievement in the senior years also depends on choosing the right stream and then receiving the right academic support for that path.",
    points: [
      "Science, Commerce, and Humanities guidance",
      "Subject-fit discussion before stream confirmation",
      "Board support aligned to the chosen academic direction",
    ],
    icon: GraduationCap,
  },
] as const;

const systemsBehindResults = [
  {
    title: "Smart classrooms and clearer lesson flow",
    description:
      "Digital teaching support helps teachers explain concepts, revise faster, and keep pace more consistent across sections.",
    points: [
      "40 smart classrooms",
      "Visual explanation and recap support",
      "Better continuity in daily teaching",
    ],
    icon: Target,
  },
  {
    title: "Practical work and science support",
    description:
      "Achievement in science subjects depends on practical understanding, not theory alone.",
    points: [
      "25-student science lab batches",
      "Supervised practical sessions",
      "Practical record and submission follow-up",
    ],
    icon: Microscope,
  },
  {
    title: "Academic follow-up parents can ask about",
    description:
      "Parents should expect a school to explain how progress is tracked before the final exam cycle arrives.",
    points: [
      "Unit tests and term assessments",
      "Project, notebook, and practical review",
      "Parent visibility through school follow-up",
    ],
    icon: Shield,
  },
] as const;

const recognitionBlocks = [
  {
    title: "Academic recognition",
    description:
      "Board results, subject progress, class performance, and steady exam-readiness remain the clearest academic indicators for parents.",
  },
  {
    title: "Competition and event participation",
    description:
      "Students benefit when schools create consistent opportunities for debates, quizzes, exhibitions, assemblies, and inter-school participation.",
  },
  {
    title: "Sports and co-curricular exposure",
    description:
      "Participation in games, stage activities, and co-curricular platforms builds confidence, discipline, and school representation.",
  },
  {
    title: "Senior-secondary direction",
    description:
      "The right stream choice, academic routine, and board preparation shape the next level of student achievement after Class X.",
  },
] as const;

const parentChecks = [
  {
    title: "Ask for the latest verified result summary",
    description:
      "If a school highlights achievements, parents should be able to ask for the current board-result summary rather than depending only on decorative claims.",
  },
  {
    title: "Check how the school tracks progress",
    description:
      "A reliable achievements page should connect outcomes to real academic systems such as tests, notebook review, practical work, and revision support.",
  },
  {
    title: "Look beyond toppers alone",
    description:
      "Parents should understand whether the school supports overall class performance, not only a few exceptional cases.",
  },
  {
    title: "Confirm the current year, not an old highlight",
    description:
      "Achievement records change every session. Parents should ask for the latest verified updates during the admission process.",
  },
] as const;

export const metadata: Metadata = {
  title: "Achievements | Divine International Academy Sirsaganj",
  description:
    "Review academic outcomes and student recognition at Divine International Academy, Sirsaganj, including board results, achievement areas, and the systems that support progress.",
  keywords: [
    "Divine International Academy achievements",
    "CBSE school results Sirsaganj",
    "school achievements Firozabad",
    "academic outcomes Divine International Academy",
  ],
};

export default function AchievementsPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Academic Outcomes
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              Student achievement parents can understand without inflated claims
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              A school achievements page should not read like a trophy wall with
              unverified ranks. It should show what progress looks like, what is
              actually visible in the board years, and what systems support
              student performance at Divine.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.25)]">
            <div className="grid lg:grid-cols-[minmax(0,1.06fr)_minmax(340px,0.94fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/achievements.jpg"
                  alt="Academic achievements at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.72)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Parent-First View
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    Results matter, but parents also need to see how a school
                    builds those results across classrooms, assessments, and the
                    senior years.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Divine’s strongest public academic proof is its 100% board
                  results. Around that, parents should also look at teacher
                  support, assessment discipline, practical learning, stream
                  guidance, and whether the school creates platforms for student
                  participation and confidence.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {achievementSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {achievementProfile.map((item) => (
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
                  {achievementStats.map((stat) => (
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
                    <Link href="/academics/curriculum">
                      Review Curriculum
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white sm:flex-1"
                  >
                    <Link href="/contact">Ask for Current Details</Link>
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
              Achievement Areas
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Where student achievement becomes visible at Divine
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              This page avoids invented topper lists and focuses on the kinds of
              outcomes parents can actually evaluate.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {achievementAreas.map((area) => {
              const Icon = area.icon;

              return (
                <Card
                  key={area.title}
                  className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.24)]"
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold font-heading text-slate-950">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {area.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {area.points.map((point) => (
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
              Systems Behind Results
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Outcomes are stronger when the school systems are visible
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Parents should connect any achievement claim to the systems that
              produce it.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {systemsBehindResults.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="rounded-[28px] border-slate-200/80 bg-white"
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Recognition Beyond Marks
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              A stronger school profile shows more than just exam scores
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {recognitionBlocks.map((item) => (
              <Card
                key={item.title}
                className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.2)]"
              >
                <CardContent className="p-6">
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

      <section className="bg-slate-50/80 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-white">
              Parent Checklist
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              What parents should verify before trusting any achievements page
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
                      <Users className="h-5 w-5" />
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

          <div className="mx-auto mt-6 max-w-5xl rounded-[28px] border border-amber-200 bg-amber-50 px-5 py-5 text-sm leading-7 text-amber-900 sm:px-6">
            For the latest board summary, stream-specific outcome details, or
            current-year student recognitions, parents should contact the school
            directly instead of relying on old website highlights alone.
          </div>
        </div>
      </section>

      <section className="pb-24 pt-20">
        <div className="container mx-auto px-4">
          <div className="rounded-[32px] bg-primary px-6 py-8 text-white shadow-[0_28px_80px_-46px_rgba(127,29,29,0.45)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <Badge className="border border-white/15 bg-white/12 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
              Ask for the Latest Update
            </Badge>
            <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold font-heading leading-tight sm:text-4xl lg:text-[2.8rem]">
                  Need current academic results, stream-wise guidance, or the
                  latest school achievement summary?
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                  Parents comparing the best CBSE school options in Sirsaganj or
                  near Firozabad can contact Divine for the latest verified
                  academic details before they make an admission decision.
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
