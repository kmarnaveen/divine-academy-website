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
  Trophy,
} from "lucide-react";

import { MainLayout } from "../../components/layout/main-layout";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const academicSignals = [
  "CBSE Pre-Primary to Senior Secondary",
  "Curriculum and stream guidance",
  "Board-focused academic follow-up",
] as const;

const academicProfile = [
  {
    label: "Academic coverage",
    value: "Pre-Primary to Class XII under the CBSE framework",
  },
  {
    label: "Senior-secondary options",
    value: "Science, Commerce, and Humanities",
  },
  {
    label: "What parents usually check",
    value: "Teaching systems, assessments, board support, and stream fit",
  },
  {
    label: "Academic environment",
    value: "Smart classrooms, labs, library support, and structured follow-up",
  },
] as const;

const academicStats = [
  {
    value: "100%",
    label: "Board results",
    detail: "Academic support stays visible through the exam years.",
  },
  {
    value: "40",
    label: "Smart classrooms",
    detail: "Teaching, explanation, and revision supported digitally.",
  },
  {
    value: "25",
    label: "Science lab batch size",
    detail: "Practical work is managed in smaller supervised groups.",
  },
  {
    value: "3",
    label: "Senior-secondary streams",
    detail: "Science, Commerce, and Humanities at Class XI-XII level.",
  },
] as const;

const academicStages = [
  {
    title: "Pre-Primary",
    classes: "Nursery, LKG, UKG",
    focus:
      "Routine, language readiness, number sense, and confident expression",
    points: [
      "Story-led and activity-based classroom learning",
      "Early writing, speaking, and social habits",
      "A gentle transition into school routines",
    ],
  },
  {
    title: "Primary School",
    classes: "Class I to V",
    focus:
      "Reading, writing, numeracy, classroom discipline, and foundational subjects",
    points: [
      "English, Hindi, Mathematics, EVS, and Computer Science",
      "Activity-led concept building and revision",
      "Reading habits and written-expression support",
    ],
  },
  {
    title: "Middle School",
    classes: "Class VI to VIII",
    focus:
      "Deeper subject understanding, projects, lab exposure, and stronger study habits",
    points: [
      "Science, Mathematics, Social Science, and Languages",
      "Project work and presentations",
      "Subject-wise learning starts becoming more structured",
    ],
  },
  {
    title: "Secondary School",
    classes: "Class IX to X",
    focus:
      "Board-foundation years with stronger assessment tracking and revision cycles",
    points: [
      "Regular tests, notebook review, and exam-readiness follow-up",
      "Concept clarity in Mathematics, Science, and Social Science",
      "Preparation aligned to CBSE board expectations",
    ],
  },
  {
    title: "Senior Secondary",
    classes: "Class XI to XII",
    focus:
      "Stream selection, subject depth, practical work, and board preparation",
    points: [
      "Science, Commerce, and Humanities pathways",
      "Board-year discipline in revision and assessments",
      "Higher-study direction and stream counselling",
    ],
  },
] as const;

const academicSystems = [
  {
    title: "Smart classrooms and daily teaching flow",
    description:
      "Digital boards support explanation, recap, and better teaching pace across sections.",
    points: [
      "Visual explanation for complex topics",
      "Lesson recap inside the same teaching period",
      "Stronger classroom continuity across sections",
    ],
    icon: Monitor,
  },
  {
    title: "Labs, computer learning, and application",
    description:
      "Academic learning moves beyond theory through practical work, demonstrations, and digital exposure.",
    points: [
      "25-student science lab batches",
      "Computer periods and guided digital learning",
      "Practical records and application-based work",
    ],
    icon: Microscope,
  },
  {
    title: "Library, reading, and revision support",
    description:
      "The library supports reading discipline, reference work, and subject reinforcement beyond classroom periods.",
    points: [
      "15,000+ books and references",
      "Reading support across age groups",
      "Quiet study and revision use",
    ],
    icon: BookOpen,
  },
  {
    title: "Assessment and parent visibility",
    description:
      "Progress is tracked through classwork, tests, projects, practicals, and school follow-up through the year.",
    points: [
      "Unit tests and term assessments",
      "Notebook, project, and practical review",
      "Parent updates through academic follow-up",
    ],
    icon: Shield,
  },
] as const;

const academicRoutes = [
  {
    title: "Curriculum",
    description:
      "See how Divine structures learning from Pre-Primary to Senior Secondary, including academic stages, teaching systems, and assessment.",
    href: "/academics/curriculum",
    cta: "Review Curriculum",
    icon: BookOpen,
  },
  {
    title: "Senior Secondary Streams",
    description:
      "Compare Science, Commerce, and Humanities with clearer stream guidance before Class XI admission.",
    href: "/academics/streams",
    cta: "Compare Streams",
    icon: GraduationCap,
  },
  {
    title: "Admissions and counselling",
    description:
      "Parents can contact the school to discuss class entry, stream fit, documents, and academic expectations before confirmation.",
    href: "/admissions",
    cta: "Review Admissions",
    icon: Target,
  },
] as const;

const parentQuestions = [
  {
    question: "How early can parents understand the academic pathway?",
    answer:
      "From the foundational years onward, parents can see how classroom expectations, assessment style, and subject depth increase at each stage. The school does not need to wait until board classes to start academic discipline.",
  },
  {
    question: "What changes in the board years?",
    answer:
      "Classes IX to XII involve stronger test cycles, revision planning, practical completion where relevant, and subject-wise follow-up so students do not rely only on last-minute preparation.",
  },
  {
    question: "Where should parents start if they are comparing schools?",
    answer:
      "Start with curriculum structure, teaching systems, assessment visibility, senior-secondary options, and the school’s ability to support the student consistently across multiple years.",
  },
] as const;

export const metadata: Metadata = {
  title: "Academics | Divine International Academy Sirsaganj",
  description:
    "Explore academics at Divine International Academy, Sirsaganj from Pre-Primary to Class XII, including curriculum structure, academic stages, teaching systems, assessment, and senior-secondary streams.",
  keywords: [
    "Divine International Academy academics",
    "CBSE school academics Sirsaganj",
    "school curriculum Firozabad",
    "Class 11 streams Sirsaganj",
  ],
};

export default function AcademicsPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Academics at Divine
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              CBSE academics from Pre-Primary to Class XII with clearer
              classroom support at every stage
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Parents comparing schools usually want more than broad promises.
              They want to know how the curriculum is structured, how teaching
              works in real classrooms, how board years are handled, and what
              happens when students move into senior-secondary streams.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.25)]">
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/curriculum.jpg"
                  alt="Academics at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Academic Journey
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    A parent-facing overview of how learning progresses from the
                    early years to board classes and stream selection.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Divine’s academics are built around stage-appropriate
                  teaching, regular follow-up, practical exposure, and stronger
                  preparation as students move toward board examinations and
                  higher-study decisions.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {academicSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {academicProfile.map((item) => (
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
                  {academicStats.map((stat) => (
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
                    <Link href="/academics/streams">View Stream Options</Link>
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
              Academic Stages
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              How academics progress across the school years
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The academic expectation changes by stage. Parents should be able
              to see that progression clearly before admission.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {academicStages.map((stage) => (
              <Card
                key={stage.title}
                className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.24)]"
              >
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-2xl font-bold font-heading text-slate-950">
                        {stage.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                        {stage.classes}
                      </p>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {stage.focus}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {stage.points.map((point) => (
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
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/80 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-white">
              Classroom Systems
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              What supports academics beyond the textbook
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Good academic results usually come from systems, not slogans.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {academicSystems.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="rounded-[28px] border-slate-200/80 bg-white"
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Explore Further
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              The next pages parents usually open from here
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {academicRoutes.map((route) => {
              const Icon = route.icon;

              return (
                <Card
                  key={route.title}
                  className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.2)]"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-2xl font-bold font-heading text-slate-950">
                      {route.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {route.description}
                    </p>

                    <Button
                      asChild
                      variant="outline"
                      className="mt-6 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <Link href={route.href}>
                        {route.cta}
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

      <section className="bg-slate-50/80 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-white">
              Parent Questions
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              What parents often want clarified before admission
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
                      <Trophy className="h-5 w-5" />
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
              Academic Enquiry
            </Badge>
            <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold font-heading leading-tight sm:text-4xl lg:text-[2.8rem]">
                  Want to discuss curriculum, stream options, or academic fit
                  for your child?
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                  Parents comparing the best CBSE school options in Sirsaganj or
                  near Firozabad can contact Divine for class-entry guidance,
                  senior-secondary stream support, and admissions discussion.
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
