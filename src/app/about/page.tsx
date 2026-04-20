import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  GraduationCap,
  MapPin,
  Microscope,
  Monitor,
  Quote,
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
    label: "School journey",
    value:
      "A full Pre-Primary to Class XII journey under the CBSE senior secondary framework.",
  },
  {
    label: "Leadership",
    value: "Led by Principal Dr. Garima Gupta under Om Educational Trust.",
  },
  {
    label: "Where the school serves",
    value: "Families across Sirsaganj and the wider Firozabad region.",
  },
  {
    label: "Affiliation",
    value: "CBSE affiliation number 2131764.",
  },
] as const;

const principalQuote = {
  quote:
    "We want children to grow into thoughtful, disciplined, and confident young people. That means serious academics, strong habits, and meaningful opportunities beyond the classroom.",
  name: "Dr. Garima Gupta",
  role: "Principal, Divine International Academy",
} as const;

const parentReasons = [
  {
    title: "Classrooms that stay calm, clear, and focused",
    description:
      "Children learn better when lessons follow a clear rhythm and teachers stay consistent in how they guide the class.",
    points: [
      "Planned lessons and revision routines",
      "Digital classroom support",
      "Teacher follow-up through the term",
    ],
    icon: Monitor,
  },
  {
    title: "Practical learning begins early",
    description:
      "Science, computers, and reading support are part of the weekly routine so learning does not stay trapped inside textbooks.",
    points: [
      "Lab exposure and computer learning",
      "Library time and reading support",
      "Learning that moves beyond textbook-only work",
    ],
    icon: Microscope,
  },
  {
    title: "Safety is built into the routine",
    description:
      "Supervision is built into the daily routine, not added as an afterthought.",
    points: [
      "Supervised arrival and dispersal",
      "CCTV-supported campus oversight",
      "Transport monitoring and staff support",
    ],
    icon: Shield,
  },
  {
    title: "Confidence grows through participation",
    description:
      "Children build confidence when the school gives them real opportunities to participate, perform, and work with others.",
    points: [
      "Assemblies, sports, and stage opportunities",
      "House activities and teamwork",
      "Expression that grows with regular participation",
    ],
    icon: Trophy,
  },
] as const;

const purposeBlocks = [
  {
    title: "What we want children to carry forward",
    description:
      "Children should leave school with strong learning habits, respectful conduct, and the confidence to take on the next stage of life.",
    points: [
      "Strong learning habits from the early years onward",
      "Confidence in communication and participation",
      "Discipline, responsibility, and values in daily conduct",
    ],
  },
  {
    title: "How that shows up every day",
    description:
      "That commitment should be visible in how lessons run, how students participate, and how the school day feels to children and parents.",
    points: [
      "Serious classroom teaching with regular follow-up",
      "Labs, library, sports, arts, and wider participation",
      "Clear routines and school-day support parents can trust",
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
    "Learn about Divine International Academy, Sirsaganj: school profile, CBSE affiliation, Om Educational Trust, campus systems, and the full Pre-Primary to Class XII journey.",
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
              A school built with care, discipline, and steady growth
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Since 2012, DIA has grown under Om Educational Trust into a full
              Pre-Primary to Class XII school led by Principal Dr. Garima Gupta,
              with structured teaching, practical learning, confident
              participation, and visible campus care.
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
                    A school families can rely on for strong teaching, calm
                    routines, and steady growth.
                  </h2>
                </div>
              </div>

              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
                <div>
                  <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                    Families across Sirsaganj and the wider Firozabad region
                    come here for a school day that combines structured
                    academics, practical learning, student participation, and
                    visible supervision from the early years to senior
                    secondary.
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
                        School essentials
                      </p>
                      <p className="text-lg font-semibold text-slate-950">
                        The foundation you can rely on
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

            <div className="space-y-4">
              <Card className="rounded-[28px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.18)]">
                <CardContent className="p-6 sm:p-7">
                  <Badge className="border border-primary/10 bg-primary/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
                    From the Principal
                  </Badge>

                  <div className="mt-5 flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                      <Quote className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold leading-8 text-slate-950 sm:text-xl">
                        "{principalQuote.quote}"
                      </p>
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-slate-950">
                          {principalQuote.name}
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          {principalQuote.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary/20 text-primary hover:bg-primary hover:text-white"
                    >
                      <Link href="/about/principal">
                        Read Principal&apos;s Message
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[28px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.16)]">
                <CardContent className="p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Steady Growth Since 2012
                  </p>
                  <h3 className="mt-3 text-2xl font-bold font-heading leading-tight text-slate-950">
                    This school has grown step by step, not through sudden
                    claims.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    Founded under Om Educational Trust, strengthened through
                    CBSE affiliation, expanded to senior secondary, and still
                    improving the learning experience year by year.
                  </p>

                  <div className="mt-5 space-y-3">
                    {milestones.slice(0, 3).map((milestone) => (
                      <div
                        key={`preview-${milestone.year}`}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5"
                      >
                        <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {milestone.year}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-950">
                            {milestone.title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {milestone.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              A Day in the Life at DIA
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              What children actually experience through lessons, activities, and
              daily routines
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              This is where the school starts to feel real: focused classrooms,
              practical learning, guided participation, and clear supervision.
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
              School Culture
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              The culture behind the classrooms matters just as much as the
              infrastructure
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Parents are not only choosing classrooms and facilities. They are
              choosing the kind of environment their child will grow in every
              day.
            </p>
          </div>

          <Card className="mx-auto mt-12 max-w-5xl rounded-[32px] border border-slate-200 shadow-[0_24px_72px_-52px_rgba(15,23,42,0.2)]">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary shadow-sm">
                  <Quote className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    A message parents can connect with
                  </p>
                  <p className="mt-3 text-lg font-semibold leading-8 text-slate-950 sm:text-xl">
                    "We want children to grow in learning, character, and
                    confidence at the same time. That means strong academics,
                    disciplined habits, and opportunities that help them become
                    thoughtful young people."
                  </p>
                  <p className="mt-4 text-sm font-semibold text-slate-950">
                    Dr. Garima Gupta
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Principal, Divine International Academy
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

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
              At DIA, that direction shows up through stronger foundational
              learning, regular reading habits, practical lab exposure,
              technology-supported classrooms, communication practice, sports,
              arts, and wider student participation instead of marks-only
              schooling.
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
              A School That Has Grown With Care
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              The timeline that shows DIA is building for the long term
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Parents trust steady growth more than sudden promises. This
              journey shows how the school has expanded, strengthened, and
              invested over time.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
            <Card className="rounded-[30px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.16)]">
              <CardContent className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Why this matters to parents
                </p>
                <h3 className="mt-3 text-2xl font-bold font-heading leading-tight text-slate-950">
                  A school with depth usually shows it through time, not noise.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Founded in 2012, strengthened through CBSE affiliation,
                  expanded to senior secondary, and later upgraded for digital
                  learning, DIA shows the kind of steady progress parents look
                  for when judging whether a school is serious for the long run.
                </p>
              </CardContent>
            </Card>

            <div className="relative pl-8 sm:pl-10">
              <div className="absolute left-3 top-0 h-full w-px bg-slate-200 sm:left-4" />

              <div className="space-y-5">
                {milestones.map((milestone, index) => (
                  <div
                    key={`${milestone.year}-${milestone.title}`}
                    className="relative"
                  >
                    <div className="absolute left-[-1.6rem] top-5 h-4 w-4 rounded-full bg-primary ring-8 ring-primary/5 sm:left-[-2rem]" />

                    <Card className="rounded-[28px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.14)]">
                      <CardContent className="p-6 sm:p-7">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Milestone {String(index + 1).padStart(2, "0")}
                          </p>
                          <div className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                            {milestone.year}
                          </div>
                        </div>
                        <h3 className="mt-4 text-xl font-bold text-slate-950">
                          {milestone.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                          {milestone.detail}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
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
