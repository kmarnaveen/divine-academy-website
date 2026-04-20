import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Heart,
  Music,
  Trophy,
  Users,
} from "lucide-react";

import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const clubSignals = [
  "Interest-based student participation",
  "Teacher-guided activity exposure",
  "Confidence, teamwork, and expression",
] as const;

const clubStreams = [
  {
    title: "Academic and innovation clubs",
    description:
      "Clubs connected to science, reading, language, mathematics, or digital learning help students extend classroom understanding into participation and presentation.",
    points: [
      "Science and practical-interest exposure",
      "Reading, language, and communication activities",
      "Questioning, presenting, and curiosity-led learning",
    ],
    icon: BookOpen,
  },
  {
    title: "Arts, music, and stage expression",
    description:
      "Creative clubs give students a space to practise music, art, performance, and stage confidence with regular teacher support.",
    points: [
      "Art, music, and cultural participation",
      "Rehearsed stage expression and confidence building",
      "Creative work that supports school events and showcases",
    ],
    icon: Music,
  },
  {
    title: "Service, values, and social responsibility",
    description:
      "Service-oriented clubs help students understand responsibility, teamwork, empathy, and participation in wider school and community values.",
    points: [
      "Environment and service-focused activities",
      "Shared responsibility and school contribution",
      "Respectful teamwork and social awareness",
    ],
    icon: Heart,
  },
  {
    title: "Sports and fitness exposure",
    description:
      "Sports-related club activity supports physical confidence, discipline, healthy competition, and student energy beyond the classroom.",
    points: [
      "Games, training, and physical activity",
      "Team spirit and school participation",
      "Discipline and performance through guided practice",
    ],
    icon: Trophy,
  },
] as const;

const clubJourney = [
  {
    title: "Explore interests",
    description:
      "Students first need exposure to different activities so they can identify where their interest and confidence begin to grow.",
  },
  {
    title: "Participate with guidance",
    description:
      "Clubs work best when teachers guide participation, expectations, and behaviour instead of leaving students without structure.",
  },
  {
    title: "Present and improve",
    description:
      "Students grow when club work leads to presentation, school events, performances, or visible recognition of effort.",
  },
] as const;

const parentNotes = [
  "Club exposure should feel organised and age-appropriate, not random or disconnected from the school routine.",
  "Not every child needs the same club path. The aim is guided participation, not forced uniformity.",
  "Parents usually value clubs most when they see better confidence, communication, teamwork, and discipline in the child over time.",
] as const;

const nextSteps = [
  {
    title: "Review school events",
    description:
      "See how assemblies, exhibitions, sports events, and cultural programmes support student participation.",
    href: "/student-life/events",
    cta: "Go to events",
  },
  {
    title: "Open the gallery",
    description:
      "See how activities, events, and student participation are documented visually across the school year.",
    href: "/student-life/gallery",
    cta: "Go to gallery",
  },
  {
    title: "Return to student life",
    description:
      "Go back to the student-life overview to see how clubs fit into the larger school culture.",
    href: "/student-life",
    cta: "Go to student life",
  },
] as const;

export const metadata: Metadata = {
  title: "Student Clubs | Divine International Academy Sirsaganj",
  description:
    "Explore the club culture at Divine International Academy, Sirsaganj, and see how student activities support confidence, teamwork, creativity, and wider participation.",
  keywords: [
    "school clubs Divine International Academy",
    "student activities Sirsaganj school",
    "CBSE school clubs Firozabad",
    "student participation and clubs",
  ],
};

export default function StudentLifeClubsPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Student Clubs
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              Clubs matter when they help students discover interests and
              participate with purpose
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              At Divine International Academy, clubs are not meant to be filler
              activities. They help students explore interests, build
              confidence, work in teams, and take part in school life beyond
              regular classroom lessons.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.24)]">
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/student-activities.jpg"
                  alt="Student club participation at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Activity Culture
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    A strong clubs page should show how students grow through
                    guided participation, not just list club names.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  This page helps families understand how club participation
                  supports creativity, teamwork, discipline, and school
                  confidence across different student stages.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {clubSignals.map((signal) => (
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
                    Club culture works best when students get regular exposure,
                    teacher guidance, and clear links to school events,
                    performances, showcases, or visible improvement over time.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90 sm:flex-1"
                  >
                    <Link href="/student-life/events">
                      Review Events
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white sm:flex-1"
                  >
                    <Link href="/student-life/gallery">Open Gallery</Link>
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
              Club Streams
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Clubs usually support academics, creativity, service, and sports
              together
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {clubStreams.map((item) => {
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
                Participation Journey
              </Badge>
              <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl">
                Students usually grow through clubs in three stages: exposure,
                guidance, and visible participation
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {clubJourney.map((item) => (
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
                  What families should understand about clubs
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
              Next Step
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Continue to events, gallery, or the full student-life overview
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
