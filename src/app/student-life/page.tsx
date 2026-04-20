import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  CheckCircle,
  Music,
  Trophy,
  Users,
} from "lucide-react";

import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const lifeSignals = [
  "Clubs, events, and guided participation",
  "Sports, stage, and school celebrations",
  "Student confidence beyond classroom work",
] as const;

const lifeAreas = [
  {
    title: "Clubs and guided activities",
    description:
      "Students need opportunities to explore interests through science, arts, reading, music, service, and team-based activities within the school routine.",
    points: [
      "Age-appropriate club and activity exposure",
      "Teacher-guided participation instead of loose free time",
      "Confidence, teamwork, and interest discovery",
    ],
    icon: Users,
  },
  {
    title: "Events across the school year",
    description:
      "School life becomes more visible when assemblies, academic showcases, celebrations, and stage programs are planned and meaningful.",
    points: [
      "School assemblies and observances",
      "Academic exhibitions and presentations",
      "Cultural programs and annual stage exposure",
    ],
    icon: CalendarDays,
  },
  {
    title: "Sports and physical participation",
    description:
      "Sports and games help students develop discipline, stamina, teamwork, and school spirit alongside academics.",
    points: [
      "Regular games and physical activity",
      "Sports meets and team participation",
      "Healthy competition and group responsibility",
    ],
    icon: Trophy,
  },
  {
    title: "School memories and visibility",
    description:
      "The gallery and event coverage help families see how students participate in school life beyond classroom lessons.",
    points: [
      "Academic and event highlights",
      "Sports and activity moments",
      "Visual record of participation across the year",
    ],
    icon: Camera,
  },
] as const;

const stageExperience = [
  {
    stage: "Primary years",
    description:
      "Younger students begin with simple presentations, art, music, games, and guided participation that builds comfort with school routines.",
    points: [
      "Assembly participation and short presentations",
      "Creative work, music, and games",
      "Teacher support with confidence building",
    ],
  },
  {
    stage: "Middle years",
    description:
      "Students take on wider activity exposure through clubs, stage roles, sports, and academic showcases that strengthen communication and teamwork.",
    points: [
      "Clubs and co-curricular participation",
      "Event preparation and stage practice",
      "Better teamwork and school responsibility",
    ],
  },
  {
    stage: "Senior years",
    description:
      "Older students balance academics with leadership, event support, representation, and wider school responsibilities.",
    points: [
      "Event roles and student leadership",
      "Sports, competitions, and public confidence",
      "Participation with stronger self-management",
    ],
  },
] as const;

const parentNotes = [
  "Participation is guided by age, class stage, and school schedule rather than random activity selection.",
  "Events and activities are meant to support confidence and discipline, not distract from academics.",
  "School culture becomes clearer when you review clubs, event types, and gallery highlights together.",
] as const;

const studentLifeRoutes = [
  {
    title: "Explore clubs",
    description:
      "See how clubs support interests, creativity, teamwork, and student confidence.",
    href: "/student-life/clubs",
    cta: "Go to clubs",
    icon: Users,
  },
  {
    title: "Review events",
    description:
      "Check the types of school events, observances, and stage programs students usually take part in.",
    href: "/student-life/events",
    cta: "Go to events",
    icon: CalendarDays,
  },
  {
    title: "Open the gallery",
    description:
      "See how the school documents academics, sports, activities, and student participation.",
    href: "/student-life/gallery",
    cta: "Go to gallery",
    icon: Camera,
  },
] as const;

export const metadata: Metadata = {
  title: "Student Life | Divine International Academy Sirsaganj",
  description:
    "See how student life works at Divine International Academy, Sirsaganj through clubs, events, sports, stage participation, and school activity routines.",
  keywords: [
    "student life Divine International Academy",
    "school activities Sirsaganj",
    "clubs and events Firozabad school",
    "CBSE school student life",
  ],
};

export default function StudentLifePage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Student Life
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              Clubs, events, sports, and student participation beyond the
              classroom
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              At Divine International Academy, student life includes clubs,
              events, sports, assemblies, and school participation that help
              students build confidence, discipline, teamwork, and expression
              alongside academics.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.24)]">
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/student-activities.jpg"
                  alt="Student activities at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    School Culture
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    School culture grows through participation outside regular
                    lessons.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Student participation at Divine takes shape through
                  activities, events, sports, and school memories across the
                  academic year.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {lifeSignals.map((signal) => (
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
                    Student life at Divine includes the activities, events,
                    sports, and school experiences that help confidence and
                    belonging grow over time.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90 sm:flex-1"
                  >
                    <Link href="/student-life/clubs">
                      Explore Clubs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white sm:flex-1"
                  >
                    <Link href="/student-life/events">Review Events</Link>
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
              What Student Life Covers
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Student life should support confidence, teamwork, discipline, and
              school belonging
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {lifeAreas.map((item) => {
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
                Stage-Wise Participation
              </Badge>
              <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl">
                Participation changes as students move from primary to senior
                classes
              </h2>

              <div className="mt-8 grid gap-4">
                {stageExperience.map((item) => (
                  <Card
                    key={item.stage}
                    className="rounded-[24px] border-slate-200/80 bg-white"
                  >
                    <CardContent className="p-5 sm:p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {item.stage}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                        {item.description}
                      </p>

                      <ul className="mt-4 space-y-2">
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
                ))}
              </div>
            </div>

            <Card className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.22)]">
              <CardContent className="p-6 sm:p-7">
                <Badge className="border border-primary/10 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
                  Participation Culture
                </Badge>
                <h3 className="mt-5 text-2xl font-bold font-heading text-slate-950">
                  How participation grows across the school
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Explore This Section
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Continue to clubs, events, or the school gallery
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {studentLifeRoutes.map((item) => {
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
