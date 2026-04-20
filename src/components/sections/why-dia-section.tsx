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
  Trophy,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const whySignals = [
  "CBSE affiliation 2131764",
  "Established 2012",
  "1200+ students and 50+ faculty",
] as const;

const whyReasons = [
  {
    title: "Structured teaching from Nursery to Class XII",
    description:
      "Parents usually shortlist DIA because the school journey is continuous across stages and the academic day is built around planned lessons, revision, and teacher follow-up.",
    points: [
      "One school system from foundational years to senior secondary",
      "Regular classwork, assessments, and follow-up",
      "Board preparation supported through the year",
    ],
    icon: BookOpen,
  },
  {
    title: "Facilities that support learning every day",
    description:
      "The school uses facilities for teaching, not just display. Classrooms, labs, library access, and digital support are part of the working school routine.",
    points: [
      "40 smart classrooms across sections",
      "25-student science lab batches",
      "15,000+ books and reading support",
    ],
    icon: Monitor,
  },
  {
    title: "Visible supervision and safer routines",
    description:
      "Families trust schools that feel organised. Arrival, dispersal, classroom discipline, movement, and transport oversight all shape that trust.",
    points: [
      "CCTV-supported campus monitoring",
      "GPS-tracked transport support",
      "Supervised routines across the school day",
    ],
    icon: Shield,
  },
  {
    title: "Participation beyond textbook-only learning",
    description:
      "Sports, stage exposure, activities, and practical work matter because they help students build confidence and responsibility alongside academics.",
    points: [
      "Sports and physical participation",
      "Assemblies, events, and stage confidence",
      "Practical and activity-based student exposure",
    ],
    icon: Trophy,
  },
] as const;

const parentChecks = [
  {
    title: "Academic fit",
    description:
      "Check whether the school has the teaching discipline, faculty strength, and class-stage continuity your child needs.",
  },
  {
    title: "Campus systems",
    description:
      "Review classrooms, labs, reading spaces, transport guidance, and supervised routines before making a final decision.",
  },
  {
    title: "Participation and school culture",
    description:
      "Look beyond marks alone. A good school also shows confidence-building, sports, activities, and responsible student behaviour.",
  },
] as const;

const parentQuestions = [
  {
    question: "Why do parents often compare DIA with other local schools?",
    answer:
      "They usually want clarity on academics, safety, board outcomes, facilities, and how the school actually runs across the full day. That is where the real difference is usually felt.",
  },
  {
    question: "What should families verify during a campus visit?",
    answer:
      "Classrooms, labs, reading support, transport guidance, student routines, and how clearly the school explains admissions and expectations.",
  },
  {
    question: "Is this page enough to make a decision?",
    answer:
      "No. It helps narrow the shortlist, but families should still review admissions, fees, facilities, and the campus experience directly before confirming the next step.",
  },
] as const;

const nextSteps = [
  {
    title: "Review admissions",
    description:
      "Check the admission process, required documents, and fees before you move further.",
    href: "/admissions",
    cta: "Go to admissions",
    icon: GraduationCap,
  },
  {
    title: "Explore facilities",
    description:
      "See the campus, labs, sports, and transport pages in more detail.",
    href: "/facilities",
    cta: "Go to facilities",
    icon: Microscope,
  },
  {
    title: "Book a campus visit",
    description:
      "Use the contact page for school location, timings, and office support.",
    href: "/contact",
    cta: "Go to contact page",
    icon: Users,
  },
] as const;

export function WhyDIASection() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Why DIA
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              Why families shortlist Divine International Academy in Sirsaganj
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Parents usually reach this question after they have seen many
              school claims. The real answer is simpler: teaching quality,
              supervised routines, visible facilities, participation beyond
              textbooks, and clear school systems matter more than brochure
              language.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.24)]">
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/facilities.avif"
                  alt="Campus and learning spaces at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Parent Trust Signals
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    Parents usually trust schools that feel organised,
                    academically serious, and visibly supervised.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Divine International Academy serves families across Sirsaganj
                  and the wider Firozabad region with a full school journey from
                  Nursery to Class XII under Om Educational Trust.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {whySignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  {parentChecks.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-5"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {item.title}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                        {item.description}
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
                    <Link href="/admissions">
                      Review Admissions
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
              Why Parents Choose DIA
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              The real reasons usually come down to school systems, not slogans
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {whyReasons.map((item) => {
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
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
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
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start">
            <div>
              <Badge className="border border-primary/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-white">
                Parent Questions
              </Badge>
              <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl">
                Families usually reach a decision faster when the school answers
                practical questions directly
              </h2>

              <div className="mt-8 grid gap-4">
                {parentQuestions.map((item) => (
                  <Card
                    key={item.question}
                    className="rounded-[24px] border-slate-200/80 bg-white"
                  >
                    <CardContent className="p-5 sm:p-6">
                      <h3 className="text-base font-bold text-slate-950">
                        {item.question}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.22)]">
              <CardContent className="p-6 sm:p-7">
                <Badge className="border border-primary/10 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
                  Before You Decide
                </Badge>
                <h3 className="mt-5 text-2xl font-bold font-heading text-slate-950">
                  Review these three pages before making the next move
                </h3>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-6 text-slate-700">
                      Admissions for process, documents, and fees
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-6 text-slate-700">
                      Facilities for classrooms, labs, transport, and campus
                      systems
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-6 text-slate-700">
                      Contact for a campus visit and direct school guidance
                    </span>
                  </li>
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
              Continue to admissions, facilities, or a campus visit
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
    </div>
  );
}
