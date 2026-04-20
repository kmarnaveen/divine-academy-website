import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle,
  Music,
  Shield,
  Trophy,
  Users,
} from "lucide-react";

import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const eventSignals = [
  "Assemblies, showcases, and stage programs",
  "Academic, sports, and cultural participation",
  "Planned events with school supervision",
] as const;

const eventGroups = [
  {
    title: "School assemblies and observances",
    description:
      "Assemblies and observance-based programs help students build confidence, listen, participate, and understand school values through regular public engagement.",
    points: [
      "Morning assemblies and class-led presentations",
      "National days and school observances",
      "Theme-based participation with teacher guidance",
    ],
    icon: Users,
  },
  {
    title: "Academic showcases",
    description:
      "Events connected to learning give students a chance to present projects, experiments, reading work, or subject understanding in a visible format.",
    points: [
      "Science and practical work presentations",
      "Academic exhibitions and subject displays",
      "Public speaking and class representation",
    ],
    icon: BookOpen,
  },
  {
    title: "Sports events and school participation",
    description:
      "Sports events bring physical participation, school spirit, discipline, and teamwork into the academic year rather than treating games as a side activity.",
    points: [
      "Sports meets and games participation",
      "Team-based events and healthy competition",
      "Recognition through performance and effort",
    ],
    icon: Trophy,
  },
  {
    title: "Cultural and stage programs",
    description:
      "Music, dance, stage presentation, and cultural events help students develop confidence, expression, and responsibility in front of an audience.",
    points: [
      "Annual stage programs and performances",
      "Music, dance, and cultural participation",
      "Confidence-building through rehearsed presentation",
    ],
    icon: Music,
  },
] as const;

const eventFlow = [
  {
    title: "Advance planning and notices",
    description:
      "Well-run school events start with clear planning, class-wise preparation, and timely communication to students and parents where needed.",
  },
  {
    title: "Practice and teacher guidance",
    description:
      "Students need supervised rehearsal and preparation so participation remains organised and age-appropriate.",
  },
  {
    title: "Event-day supervision",
    description:
      "Event quality depends on crowd flow, discipline, teacher coordination, and safe movement during the programme.",
  },
  {
    title: "Recognition and follow-up",
    description:
      "Events work best when schools connect participation to encouragement, recognition, and student reflection afterward.",
  },
] as const;

const parentNotes = [
  "Participation varies by class, interest, and event format. Not every student joins every activity in the same way.",
  "When uniforms, costumes, practice timings, or event-specific instructions matter, parents should receive clear school communication in advance.",
  "A good events page should help parents understand the types of events students experience during the school year, not just list old dates.",
] as const;

const nextSteps = [
  {
    title: "See clubs and activities",
    description:
      "Review the interest-based activities and club exposure that support student confidence outside formal events.",
    href: "/student-life/clubs",
    cta: "Go to clubs",
  },
  {
    title: "Open the school gallery",
    description:
      "See how events, academics, sports, and student participation are documented visually across the year.",
    href: "/student-life/gallery",
    cta: "Go to gallery",
  },
  {
    title: "Return to student life",
    description:
      "Go back to the student-life overview to understand the larger school participation picture.",
    href: "/student-life",
    cta: "Go to student life",
  },
] as const;

export const metadata: Metadata = {
  title: "School Events | Divine International Academy Sirsaganj",
  description:
    "See the types of school events at Divine International Academy, Sirsaganj, including assemblies, academic showcases, sports participation, and cultural programmes.",
  keywords: [
    "school events Divine International Academy",
    "student events Sirsaganj school",
    "CBSE school cultural programs Firozabad",
    "school assemblies and sports events",
  ],
};

export default function StudentLifeEventsPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              School Events
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              School events matter when they help students participate with
              confidence and discipline
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              At Divine International Academy, events are part of school
              culture: assemblies, exhibitions, sports participation, stage
              programs, and school observances all help students learn to
              present, collaborate, and represent the school well.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.24)]">
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/achievements.jpg"
                  alt="School events at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Participation Calendar
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    Parents usually want to know what kinds of events students
                    actually take part in, not just outdated event dates.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  This page explains the types of school events students
                  experience and how those events support confidence, teamwork,
                  academic presentation, and school culture.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {eventSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-5">
                  <p className="text-sm leading-7 text-slate-700 sm:text-base">
                    Events work best when they are planned, supervised, and
                    clearly connected to student growth rather than treated as
                    scattered activities without structure.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90 sm:flex-1"
                  >
                    <Link href="/student-life/gallery">
                      Open Gallery
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white sm:flex-1"
                  >
                    <Link href="/student-life">Back to Student Life</Link>
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
              Event Types
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              School events usually support academics, sports, culture, and
              values-based participation
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {eventGroups.map((item) => {
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
                Event Flow
              </Badge>
              <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl">
                Event quality depends on planning, rehearsal, and school
                supervision
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {eventFlow.map((item) => (
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
                  Parent Notes
                </Badge>
                <h3 className="mt-5 text-2xl font-bold font-heading text-slate-950">
                  What parents should know about school events
                </h3>

                <ul className="mt-6 space-y-4">
                  {parentNotes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm leading-6 text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-[24px] border border-amber-200 bg-amber-50 px-4 py-4">
                  <div className="flex items-start gap-3">
                    <Shield className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                    <p className="text-sm leading-6 text-amber-900">
                      A strong events page should reduce confusion by showing
                      how participation works, not by publishing stale calendars
                      that parents cannot rely on.
                    </p>
                  </div>
                </div>
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
              Continue to clubs, gallery, or the broader student-life section
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {nextSteps.map((item) => (
              <Card
                key={item.title}
                className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.24)]"
              >
                <CardContent className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold font-heading text-slate-950">
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
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
