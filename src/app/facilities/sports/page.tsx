import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Shield,
  Target,
  Trophy,
  Users,
} from "lucide-react";

import { MainLayout } from "../../../components/layout/main-layout";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const sportsSignals = [
  "Sports grounds and activity spaces",
  "Regular physical education support",
  "School events and student participation",
  "Team games, discipline, and routine fitness",
] as const;

const sportsProfile = [
  {
    label: "Daily school life",
    value:
      "Sports and activity spaces support regular physical education, assemblies, events, and student participation.",
  },
  {
    label: "Student development",
    value:
      "Games and activity periods help build discipline, confidence, teamwork, and routine fitness.",
  },
  {
    label: "School participation",
    value:
      "Students benefit from house activities, school events, annual functions, and physical activity beyond the classroom.",
  },
  {
    label: "Parent focus",
    value:
      "Families usually review how often students access sports spaces and whether participation is part of the school routine.",
  },
] as const;

const sportsStats = [
  {
    value: "PE",
    label: "Physical education support",
    detail:
      "Sports participation is built into the school timetable and student routine.",
  },
  {
    value: "Events",
    label: "School activity platforms",
    detail:
      "Assemblies, annual functions, and sports events expand participation beyond classes.",
  },
  {
    value: "Teams",
    label: "Group participation",
    detail: "Team games help students build cooperation and responsibility.",
  },
  {
    value: "Routine",
    label: "Fitness and movement",
    detail: "Open spaces support regular movement during the school week.",
  },
] as const;

const sportsAreas = [
  {
    title: "Playgrounds and open-use spaces",
    description:
      "Open grounds support regular games, physical movement, sports periods, and school-level participation.",
    points: [
      "Outdoor games and activity use",
      "Sports periods during the school week",
      "Space for student movement and fitness",
    ],
    icon: Trophy,
  },
  {
    title: "School events and student participation",
    description:
      "Sports spaces also support school events, annual functions, practice sessions, and group activities across grades.",
    points: [
      "Assemblies and school gatherings",
      "Annual sports and house activities",
      "Student participation beyond academics",
    ],
    icon: Users,
  },
  {
    title: "Discipline, teamwork, and confidence",
    description:
      "Physical activity supports stamina, school spirit, teamwork, and the confidence students carry into other parts of school life.",
    points: [
      "Team games and cooperation",
      "Routine physical engagement",
      "Confidence through participation",
    ],
    icon: Target,
  },
] as const;

const sportsUse = [
  {
    title: "Primary and Middle School",
    description:
      "Younger students use sports and activity spaces to build physical confidence, coordination, and participation habits.",
  },
  {
    title: "Secondary and Senior Secondary",
    description:
      "Older students benefit from regular sports periods, team play, school events, and a more structured physical routine.",
  },
  {
    title: "School-wide events",
    description:
      "Sports spaces become especially important during annual events, assemblies, inter-house participation, and school celebrations.",
  },
] as const;

const parentChecks = [
  {
    title: "Ask about sports periods and activity schedule",
    description:
      "Parents should understand how often students use the grounds and whether physical education is part of the weekly routine.",
  },
  {
    title: "Check supervision during sports time",
    description:
      "Review how students are supervised during outdoor activities, events, and movement beyond classroom hours.",
  },
  {
    title: "Review participation opportunities",
    description:
      "Ask how students take part in school events, group games, house activities, and annual sports-related programs.",
  },
  {
    title: "Understand how sports support development",
    description:
      "Sports spaces matter when they help students build discipline, stamina, teamwork, and school confidence over time.",
  },
] as const;

export const metadata: Metadata = {
  title: "Sports Facilities | Divine International Academy Sirsaganj",
  description:
    "Explore the sports and activity facilities at Divine International Academy, Sirsaganj, including playground use, physical education support, and student participation spaces.",
  keywords: [
    "Divine International Academy sports",
    "school sports facilities Sirsaganj",
    "student activity spaces Firozabad",
    "physical education school Sirsaganj",
  ],
};

export default function SportsPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Sports and Activity Spaces
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              Sports facilities that support movement, teamwork, and student
              participation
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Divine's sports and activity spaces support regular physical
              education, school events, team participation, and daily student
              movement beyond classroom learning.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.25)]">
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/sports.avif"
                  alt="Sports facilities at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Student Participation
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    Sports spaces help students build stamina, teamwork,
                    discipline, and confidence through regular school use.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  These spaces support games, activity periods, school events,
                  and physical education across age groups from the junior years
                  to senior classes.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {sportsSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {sportsProfile.map((item) => (
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
                  {sportsStats.map((stat) => (
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
                      Ask About Sports Facilities
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
              Sports Use
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Spaces that support physical development and school life
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sportsAreas.map((item) => {
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
              Stage-Wise Participation
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              How sports spaces are used across the school
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {sportsUse.map((item) => (
              <Card
                key={item.title}
                className="rounded-[28px] border-slate-200/80 bg-white"
              >
                <CardContent className="p-6 sm:p-7">
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Parent Checks
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              What to review during a sports-facilities visit
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
              Sports Enquiry
            </Badge>
            <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold font-heading leading-tight sm:text-4xl lg:text-[2.8rem]">
                  Want to review the sports and activity spaces in person?
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                  Families can contact the school to understand how sports,
                  events, and student participation are planned through the
                  academic year.
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
