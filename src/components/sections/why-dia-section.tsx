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
import { ValueFrameworkSection } from "@/components/sections/value-framework-section";

const whyReasons = [
  {
    title: "Structured teaching from Nursery to Class XII",
    description:
      "From Nursery to Class XII, teaching stays structured with lessons, revision, and teacher follow-up at every stage.",
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
      "Classrooms, labs, library, and digital tools are used every week, not kept for display.",
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
      "The school day feels organised, with supervision across arrival, classes, movement, and transport.",
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
      "Sports, stage time, activities, and practical work help children grow in confidence as well as marks.",
    points: [
      "Sports and physical participation",
      "Assemblies, events, and stage confidence",
      "Practical and activity-based student exposure",
    ],
    icon: Trophy,
  },
] as const;

const parentQuestions = [
  {
    question: "What makes DIA stand out among local schools?",
    answer:
      "Parents usually compare academics, safety, board outcomes, facilities, and how the school feels day to day. DIA stands out when those pieces work together.",
  },
  {
    question: "What should you check during a campus visit?",
    answer:
      "Classrooms, labs, reading support, transport guidance, student routines, and how clearly the school explains the next steps.",
  },
  {
    question: "What should a family review before moving ahead?",
    answer:
      "Admissions, fees, facilities, and a campus visit give the clearest picture before confirmation.",
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
      <ValueFrameworkSection />

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Why Parents Choose DIA
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Why parents shortlist DIA
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
                Family Questions
              </Badge>
              <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl">
                Questions parents ask before a visit
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
