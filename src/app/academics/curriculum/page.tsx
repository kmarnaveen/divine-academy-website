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
  Users,
} from "lucide-react";

import { MainLayout } from "../../../components/layout/main-layout";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const curriculumSignals = [
  "CBSE Pre-Primary to Senior Secondary",
  "40 smart classrooms",
  "25-student science lab batches",
  "15,000+ books and references",
] as const;

const curriculumProfile = [
  {
    label: "School type",
    value:
      "CBSE-affiliated co-educational English medium Senior Secondary School",
  },
  {
    label: "Managed by",
    value: "Om Educational Trust",
  },
  {
    label: "Academic coverage",
    value: "Pre-Primary to Class XII",
  },
  {
    label: "CBSE affiliation",
    value: "2131764",
  },
] as const;

const curriculumStats = [
  {
    value: "5",
    label: "Academic stages",
    detail: "From Pre-Primary to Senior Secondary.",
    icon: BookOpen,
  },
  {
    value: "40",
    label: "Smart classrooms",
    detail: "Daily teaching supported by digital boards.",
    icon: Monitor,
  },
  {
    value: "25",
    label: "Science lab batch size",
    detail: "Supervised practical learning in smaller groups.",
    icon: Microscope,
  },
  {
    value: "100%",
    label: "Board results",
    detail: "Senior-school support stays visible through exam years.",
    icon: Trophy,
  },
] as const;

const learningStages = [
  {
    title: "Pre-Primary",
    classes: "Nursery, LKG, UKG",
    focus: "Play, stories, art, and routine-building",
    description:
      "The early years focus on language readiness, number sense, expression, and social comfort inside a gentle classroom routine.",
    subjects: [
      "English and Hindi exposure",
      "Number concepts and shapes",
      "Art, music, and movement",
      "Social habits and expression",
    ],
    approach: [
      "Storytelling, rhymes, and guided play",
      "Conversation and observation-based learning",
      "Fine-motor and pre-writing readiness",
    ],
    icon: Users,
  },
  {
    title: "Primary School",
    classes: "Class I to V",
    focus: "Reading, writing, numeracy, and classroom discipline",
    description:
      "Primary classes strengthen English, Hindi, Mathematics, EVS, and Computer Science while building reading habits, creative expression, and moral values through the CBSE framework.",
    subjects: [
      "English and Hindi",
      "Mathematics",
      "EVS",
      "Computer Science",
    ],
    approach: [
      "Concept-building through classwork and revision",
      "Reading practice and written expression",
      "Projects, activities, and guided digital learning",
    ],
    icon: BookOpen,
  },
  {
    title: "Middle School",
    classes: "Class VI to VIII",
    focus: "Subject depth, projects, and critical thinking",
    description:
      "Students move into deeper work in Science, Mathematics, Social Science, and Languages, with laboratory exposure and project-based learning becoming more regular.",
    subjects: [
      "Science",
      "Mathematics",
      "Social Science",
      "English, Hindi, and Sanskrit options",
    ],
    approach: [
      "Laboratory-based demonstrations and practicals",
      "Project work and subject presentations",
      "Analytical and discussion-based learning",
    ],
    icon: Microscope,
  },
  {
    title: "Secondary School",
    classes: "Class IX to X",
    focus: "CBSE board preparation with stronger academic tracking",
    description:
      "Secondary classes focus on Science, Mathematics, Social Science, English, and Hindi with regular assessments, exam-readiness planning, and subject-wise follow-up.",
    subjects: [
      "Science",
      "Mathematics",
      "Social Science",
      "English and Hindi",
    ],
    approach: [
      "Regular tests, notebooks, and revision cycles",
      "Board-style paper practice and concept reinforcement",
      "Academic tracking and exam-readiness support",
    ],
    icon: Target,
  },
  {
    title: "Senior Secondary",
    classes: "Class XI to XII",
    focus: "Stream selection, board performance, and higher-study preparation",
    description:
      "Senior Secondary students move into Science, Commerce, or Humanities with stream-based teaching, practical work, board preparation, and career guidance.",
    subjects: [
      "Science stream combinations",
      "Commerce stream combinations",
      "Humanities stream combinations",
      "English and stream-aligned electives",
    ],
    approach: [
      "Stream-specific classroom and lab support",
      "Board exam preparation and paper practice",
      "Career guidance and higher-education direction",
    ],
    icon: GraduationCap,
  },
] as const;

const curriculumSystems = [
  {
    title: "Smart teaching in 40 classrooms",
    description:
      "Digital boards and structured lesson flow help teachers explain, revise, and follow up better across sections.",
    points: [
      "Visual explanation and recap support",
      "Better pacing across full teaching periods",
      "Daily classwork and revision reinforcement",
    ],
    icon: Monitor,
  },
  {
    title: "Labs and computer periods",
    description:
      "Science and computer learning move beyond theory through supervised practical work and digital exposure.",
    points: [
      "25-student science lab batches",
      "30-system computer lab access",
      "Practical and project-based application",
    ],
    icon: Microscope,
  },
  {
    title: "Library and reading support",
    description:
      "The library supports reading habits, reference work, revision, and subject depth beyond the classroom timetable.",
    points: [
      "15,000+ books and references",
      "Reading support across stages",
      "Quiet study and revision access",
    ],
    icon: BookOpen,
  },
  {
    title: "Assessment and board readiness",
    description:
      "Progress is tracked through classwork, tests, practicals, and board-focused preparation in the senior years.",
    points: [
      "Unit tests and term assessments",
      "Projects, practicals, and notebook review",
      "Pre-board planning and exam support",
    ],
    icon: CheckCircle,
  },
] as const;

const academicSupport = [
  {
    title: "How progress is tracked",
    description:
      "Academic follow-up happens through regular classroom review rather than waiting only for final exams.",
    points: [
      "Daily classwork and notebook checking",
      "Unit tests and term-end assessments",
      "Projects, oral work, and practical review where relevant",
      "Parent updates through school follow-up",
    ],
  },
  {
    title: "How senior classes prepare",
    description:
      "Board classes get more structured revision, paper practice, and stream-aligned academic support.",
    points: [
      "Subject-wise revision planning",
      "Board-pattern question practice",
      "Practical completion and submission tracking",
      "Career and stream guidance for the next step",
    ],
  },
] as const;

const streamOptions = [
  {
    title: "Science Stream",
    description:
      "Science in Classes XI and XII supports PCM, PCB, and PCMB pathways with lab work, problem-solving, and board preparation.",
    subjects: [
      "Physics and Chemistry",
      "Mathematics, Biology, or both depending on the combination",
      "English Core",
      "Computer Science or Physical Education where applicable",
    ],
    outcomes: [
      "Engineering and technology",
      "Medical and allied health fields",
      "Research and science-based higher studies",
    ],
    icon: Microscope,
  },
  {
    title: "Commerce Stream",
    description:
      "Commerce builds strength in business studies, accountancy, economics, and quantitative thinking for management and finance pathways.",
    subjects: [
      "Business Studies",
      "Accountancy",
      "Economics",
      "Mathematics or Physical Education where applicable",
    ],
    outcomes: [
      "Business and management",
      "Finance, banking, and accountancy",
      "Entrepreneurship and commerce-based degrees",
    ],
    icon: Target,
  },
  {
    title: "Humanities Stream",
    description:
      "Humanities supports students interested in social sciences, public affairs, psychology, writing, and liberal-arts pathways.",
    subjects: [
      "History and Political Science",
      "Psychology, Geography, or Economics as offered",
      "English Core",
      "Physical Education or stream-aligned electives",
    ],
    outcomes: [
      "Civil services and public policy",
      "Psychology, social sciences, and research",
      "Law, writing, media, and liberal-arts pathways",
    ],
    icon: Users,
  },
] as const;

export const metadata: Metadata = {
  title: "Curriculum | Divine International Academy Sirsaganj",
  description:
    "Explore the CBSE curriculum at Divine International Academy, Sirsaganj from Pre-Primary to Senior Secondary, including academic stages, teaching systems, assessment, and stream options.",
  keywords: [
    "Divine International Academy curriculum",
    "CBSE curriculum Sirsaganj",
    "school curriculum Firozabad",
    "Pre-Primary to Senior Secondary curriculum",
  ],
};

export default function CurriculumPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Curriculum at DIA
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              CBSE curriculum from Pre-Primary to Senior Secondary
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Divine International Academy builds the academic journey in clear
              stages: early learning, primary foundations, middle-school depth,
              board readiness, and stream-based senior-secondary study.
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1.04fr)_380px] xl:items-start">
            <div className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.24)]">
              <div className="relative aspect-[16/9] border-b border-slate-200/80 bg-slate-100">
                <Image
                  src="/images/submenu/curriculum.jpg"
                  alt="Curriculum and classroom learning at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 52vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Academic Journey
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    From play-based early learning to stream selection in senior secondary.
                  </h2>
                </div>
              </div>

              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
                <div>
                  <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                    The curriculum at DIA combines CBSE classroom teaching,
                    reading support, laboratory exposure, computer learning,
                    regular assessment, and board-focused preparation as
                    students move upward through the school.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {curriculumSignals.map((signal) => (
                      <div
                        key={signal}
                        className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                      >
                        {signal}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                      <Link href="/academics/streams" className="flex items-center justify-center">
                        Explore Senior Streams
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-primary/20 bg-white text-primary hover:bg-primary hover:text-white"
                    >
                      <Link href="/admissions" className="flex items-center justify-center">
                        Review Admissions
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
                        Curriculum profile
                      </p>
                      <p className="text-lg font-semibold text-slate-950">
                        Key school facts behind the academics
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3.5 text-sm text-slate-700">
                    {curriculumProfile.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          {item.label}
                        </p>
                        <p className="mt-2 leading-6 text-slate-700">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              {curriculumStats.map((stat) => {
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
                    <p className="mt-2 text-sm leading-6 text-slate-600">{stat.detail}</p>
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
              Academic Stages
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              How the curriculum changes as students move up the school
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Each stage carries a different academic expectation, but the move
              from one level to the next stays connected through routine,
              revision, and classroom follow-up.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {learningStages.map((stage, index) => {
              const Icon = stage.icon;
              const isLast = index === learningStages.length - 1;

              return (
                <Card
                  key={stage.title}
                  className={`rounded-[30px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.16)] ${
                    isLast ? "lg:col-span-2" : ""
                  }`}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-2xl font-bold text-slate-950">
                          {stage.title}
                        </h3>
                        <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                          {stage.classes}
                        </p>
                        <Badge className="mt-3 inline-flex max-w-full whitespace-normal rounded-2xl border border-primary/10 bg-primary/5 px-3.5 py-2 text-left text-[12px] font-semibold leading-5 tracking-normal text-primary hover:bg-primary/5">
                          {stage.focus}
                        </Badge>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                      {stage.description}
                    </p>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Subject focus
                        </p>
                        <div className="mt-4 space-y-3 text-sm text-slate-700">
                          {stage.subjects.map((subject) => (
                            <div
                              key={subject}
                              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5"
                            >
                              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                              <span>{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                          How learning happens
                        </p>
                        <div className="mt-4 space-y-3 text-sm text-slate-700">
                          {stage.approach.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5"
                            >
                              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
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
              Curriculum Systems
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              What supports the curriculum beyond the textbook
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              At DIA, curriculum delivery depends on classroom systems,
              practical spaces, reading support, and steady assessment rather
              than only on the textbook list.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {curriculumSystems.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.14)]"
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {item.description}
                    </p>
                    <div className="mt-5 space-y-3 text-sm text-slate-700">
                      {item.points.map((point) => (
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Assessment and Academic Support
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              How progress is tracked and how board classes are supported
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              The academic routine becomes more structured as students move up,
              especially once classes begin preparing for board exams and stream
              choices.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {academicSupport.map((block) => (
              <Card
                key={block.title}
                className="rounded-[30px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.16)]"
              >
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-slate-950">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {block.description}
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-slate-700">
                    {block.points.map((point) => (
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
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Senior Secondary Streams
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              Stream choices in Classes XI and XII at Divine
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Senior Secondary moves students into stream-based study with board
              preparation, subject depth, and higher-education direction.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {streamOptions.map((stream) => {
              const Icon = stream.icon;

              return (
                <Card
                  key={stream.title}
                  className="rounded-[30px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.16)]"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-950">
                      {stream.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {stream.description}
                    </p>

                    <div className="mt-5 space-y-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Subject direction
                        </p>
                        <div className="mt-3 space-y-3 text-sm text-slate-700">
                          {stream.subjects.map((subject) => (
                            <div
                              key={subject}
                              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5"
                            >
                              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                              <span>{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Common pathways
                        </p>
                        <div className="mt-3 space-y-3 text-sm text-slate-700">
                          {stream.outcomes.map((outcome) => (
                            <div
                              key={outcome}
                              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5"
                            >
                              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                              <span>{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
              <Link href="/academics/streams" className="flex items-center justify-center">
                View Detailed Stream Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#7d1324_0%,#5f0d1b_40%,#22060b_100%)] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold font-heading sm:text-4xl lg:text-5xl">
              Ready to match the curriculum with your child’s stage?
            </h2>
            <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
              Review admissions, speak with the school, or explore senior
              streams once you know which stage or class matters to your family.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95">
                <Link href="/admissions" className="flex items-center justify-center">
                  Review Admissions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/8 text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact" className="flex items-center justify-center">
                  Speak With the School
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}