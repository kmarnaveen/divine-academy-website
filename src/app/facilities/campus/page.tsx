import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building,
  Bus,
  CheckCircle,
  Clock,
  GraduationCap,
  MapPin,
  Microscope,
  Monitor,
  Shield,
  Users,
} from "lucide-react";

import { MainLayout } from "../../../components/layout/main-layout";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const campusSignals = [
  "40 smart classrooms",
  "15,000+ books and references",
  "Science labs and computer learning spaces",
  "CCTV-supported campus supervision",
] as const;

const campusProfile = [
  {
    label: "Academic environment",
    value:
      "Classrooms, labs, library spaces, and activity areas are planned to support the school day from Primary to Senior Secondary.",
  },
  {
    label: "Student movement",
    value:
      "Arrival, classroom transitions, activity periods, and dispersal follow a supervised campus routine.",
  },
  {
    label: "Daily support",
    value:
      "The campus is designed to support teaching time, reading habits, practical learning, and safer movement through the day.",
  },
  {
    label: "Visit focus",
    value:
      "Parents can review classroom spaces, supervised movement, activity areas, and transport coordination during a campus visit.",
  },
] as const;

const campusStats = [
  {
    value: "40",
    label: "Smart classrooms",
    detail:
      "Teaching and revision are supported with digital boards across classrooms.",
  },
  {
    value: "15,000+",
    label: "Books and references",
    detail:
      "Library use supports reading, reference work, and quieter study time.",
  },
  {
    value: "25",
    label: "Science lab batch size",
    detail: "Science practicals are managed in smaller supervised groups.",
  },
  {
    value: "1200+",
    label: "Students on campus",
    detail:
      "The school supports a full campus routine across age groups and stages.",
  },
] as const;

const campusZones = [
  {
    title: "Classroom blocks",
    description:
      "Classroom spaces are planned for daily teaching, revision, and steady lesson flow through the academic timetable.",
    points: [
      "40 smart classrooms",
      "Digital teaching support",
      "Classroom use across all school stages",
    ],
    icon: Monitor,
  },
  {
    title: "Labs and practical areas",
    description:
      "Science and computer-learning spaces support practical exposure, guided digital instruction, and stronger subject application.",
    points: [
      "Science labs for practical learning",
      "Computer learning spaces for guided use",
      "Regular access linked to the timetable",
    ],
    icon: Microscope,
  },
  {
    title: "Library and reading spaces",
    description:
      "The library supports reading habits, quieter study time, reference work, and project-related learning across stages.",
    points: [
      "15,000+ books and references",
      "Reading and library support",
      "Reference use beyond the textbook",
    ],
    icon: BookOpen,
  },
  {
    title: "Activity and open-use areas",
    description:
      "Open spaces support assemblies, physical activity, school events, student participation, and supervised movement beyond classroom periods.",
    points: [
      "Sports and activity use",
      "School events and gatherings",
      "Student participation across the week",
    ],
    icon: Building,
  },
] as const;

const dayFlow = [
  {
    title: "Arrival and entry",
    description:
      "The school day begins with supervised arrival, entry coordination, and movement toward classrooms and assembly areas.",
    icon: MapPin,
  },
  {
    title: "Academic periods",
    description:
      "Classroom time, practical periods, and library access are planned around the daily timetable for each stage.",
    icon: Clock,
  },
  {
    title: "Activity and movement",
    description:
      "Students move through breaks, activity periods, and open-use spaces under a structured school routine.",
    icon: Users,
  },
  {
    title: "Dispersal and transport",
    description:
      "The campus day closes with supervised dispersal and transport coordination for parents using school buses and pickups.",
    icon: Bus,
  },
] as const;

const parentChecks = [
  {
    title: "Review classroom condition and daily use",
    description:
      "During a visit, check how classrooms are arranged, how digital teaching is used, and whether the spaces feel prepared for regular school-day learning.",
  },
  {
    title: "Check movement and supervision",
    description:
      "Observe how the campus handles student movement between classes, activity spaces, and entry or exit areas.",
  },
  {
    title: "See how facilities connect to the timetable",
    description:
      "Ask how labs, library spaces, activity areas, and sports grounds are used through the week for the relevant class stage.",
  },
  {
    title: "Understand transport and dispersal flow",
    description:
      "If commute matters, review pickup coordination, bus support, and dispersal planning before admission is finalised.",
  },
] as const;

export const metadata: Metadata = {
  title: "Campus Facilities | Divine International Academy Sirsaganj",
  description:
    "Explore the campus facilities at Divine International Academy, Sirsaganj, including classrooms, labs, library spaces, activity areas, supervised movement, and daily school routine support.",
  keywords: [
    "Divine International Academy campus",
    "school campus Sirsaganj",
    "CBSE campus facilities Firozabad",
    "school classrooms and library Sirsaganj",
  ],
};

export default function CampusPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Campus Overview
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              A campus designed for teaching, supervised movement, and daily
              student routine
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Divine International Academy brings classrooms, labs, library
              spaces, activity areas, and transport support into one school-day
              system from Primary to Senior Secondary.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.25)]">
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/facilities.avif"
                  alt="Campus view at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Daily School Life
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    The campus supports classroom learning, practical use,
                    reading time, activity periods, and safer daily movement.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  The campus environment is planned to support the full school
                  routine, from arrival and classroom periods to activity use,
                  library access, practical sessions, and dispersal.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {campusSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {campusProfile.map((item) => (
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
                  {campusStats.map((stat) => (
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
                    <Link href="/contact">
                      Plan a Campus Visit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white sm:flex-1"
                  >
                    <Link href="/facilities">Back to Facilities</Link>
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
              Campus Zones
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Key spaces across the campus
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {campusZones.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.24)]"
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

      <section className="bg-slate-50/80 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-white">
              School-Day Flow
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              How the campus supports the daily routine
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {dayFlow.map((item) => {
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
              Visit Checklist
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              What to review during a campus visit
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
                      <Shield className="h-5 w-5" />
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
        </div>
      </section>

      <section className="pb-24 pt-20">
        <div className="container mx-auto px-4">
          <div className="rounded-[32px] bg-primary px-6 py-8 text-white shadow-[0_28px_80px_-46px_rgba(127,29,29,0.45)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <Badge className="border border-white/15 bg-white/12 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
              Campus Visit
            </Badge>
            <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold font-heading leading-tight sm:text-4xl lg:text-[2.8rem]">
                  Want to review classrooms, labs, library, and student movement
                  in person?
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                  Parents can plan a campus visit, review the school-day
                  environment, and understand admissions and transport support
                  with the school office.
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
