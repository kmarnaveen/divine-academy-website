import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bus,
  Camera,
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

const facilitySignals = [
  "40 smart classrooms",
  "25-student science lab batches",
  "15,000+ books and references",
  "GPS-tracked transport and CCTV support",
] as const;

const facilityProfile = [
  {
    label: "Academic spaces",
    value:
      "Smart classrooms, science labs, computer learning spaces, and library support from Primary to Senior Secondary.",
  },
  {
    label: "Campus safety",
    value:
      "CCTV-supported supervision, security support, and basic first-response arrangements during the school day.",
  },
  {
    label: "Transport support",
    value:
      "GPS-tracked buses with route guidance and transport confirmation through the school office.",
  },
  {
    label: "Student experience",
    value:
      "Sports, activity spaces, and supervised movement built into the school routine.",
  },
] as const;

const facilityStats = [
  {
    value: "40",
    label: "Smart classrooms",
    detail: "Digital boards support explanation, teaching pace, and revision.",
  },
  {
    value: "25",
    label: "Science lab batch size",
    detail:
      "Practical work stays more manageable in smaller supervised groups.",
  },
  {
    value: "15,000+",
    label: "Books and references",
    detail: "Reading and revision support should extend beyond the textbook.",
  },
  {
    value: "30",
    label: "Computer lab systems",
    detail: "Digital exposure supports computer periods and guided learning.",
  },
] as const;

const coreFacilities = [
  {
    title: "Smart classrooms",
    description:
      "Divine's smart classrooms support explanation, concept reinforcement, and revision across sections. Digital boards help teachers deliver lessons with better clarity and pace.",
    points: [
      "Digital boards for explanation and recap",
      "Better visual support for concept-heavy lessons",
      "More consistent delivery across class sections",
    ],
    icon: Monitor,
  },
  {
    title: "Science and computer labs",
    description:
      "Science and computer labs support practical understanding, demonstrations, and guided digital learning for middle, secondary, and senior-secondary students.",
    points: [
      "Physics, Chemistry, and Biology lab access",
      "25-student science lab batches",
      "30-system computer lab support",
    ],
    icon: Microscope,
  },
  {
    title: "Library and reading support",
    description:
      "The library supports reading habits, subject references, project work, and quieter study time across school stages.",
    points: [
      "15,000+ books and references",
      "Reading support across stages",
      "Reference use for projects and revision",
    ],
    icon: BookOpen,
  },
  {
    title: "Sports and activity spaces",
    description:
      "Sports grounds and activity spaces give students regular opportunities for physical activity, assemblies, school events, and co-curricular participation.",
    points: [
      "Outdoor play and sports use",
      "Activity spaces for school events and participation",
      "Regular student exposure beyond the classroom timetable",
    ],
    icon: Trophy,
  },
] as const;

const parentPriorityBlocks = [
  {
    title: "School transport",
    description:
      "The school transport system supports safer daily travel for students coming from different routes, with route availability, travel timing, and transport charges confirmed through the school.",
    points: [
      "GPS-tracked buses",
      "CCTV-supported transport monitoring",
      "Route and fee confirmation through the school",
    ],
    icon: Bus,
  },
  {
    title: "Campus safety",
    description:
      "The campus is supported by CCTV coverage, supervised movement, security staff, and basic first-response arrangements for students during the school day.",
    points: [
      "CCTV coverage across campus",
      "Security and supervised movement",
      "Basic medical and first-response support",
    ],
    icon: Shield,
  },
  {
    title: "Daily academic use",
    description:
      "Classrooms, labs, and library spaces are planned for regular school use so students benefit from them through the academic week, especially in the board years.",
    points: [
      "Practical sessions linked to the timetable",
      "Library and reading use beyond display value",
      "Classroom systems that help in board years",
    ],
    icon: Target,
  },
] as const;

const facilityRoutes = [
  {
    title: "Campus facilities",
    description:
      "Review the campus environment, movement, access, and general infrastructure.",
    href: "/facilities/campus",
    cta: "Explore Campus",
    icon: Shield,
  },
  {
    title: "Labs and practical spaces",
    description:
      "Review science and computer learning spaces used for practical work and digital instruction.",
    href: "/facilities/labs",
    cta: "Explore Labs",
    icon: Microscope,
  },
  {
    title: "Sports facilities",
    description:
      "See the sports grounds and activity spaces available for student participation.",
    href: "/facilities/sports",
    cta: "See Sports Spaces",
    icon: Trophy,
  },
  {
    title: "Transport",
    description:
      "Check route guidance, commute support, and transport safety details before admission.",
    href: "/facilities/transport",
    cta: "Check Transport",
    icon: Bus,
  },
] as const;

const visitChecklist = [
  {
    title: "Classroom and lab use",
    description:
      "Review how smart classrooms, science labs, and computer periods are used for the class stage you are considering.",
  },
  {
    title: "Library and activity access",
    description:
      "Check whether students get regular library periods, reading support, and supervised access to activity spaces.",
  },
  {
    title: "Transport route and travel time",
    description:
      "Ask about route availability, pickup points, travel time, and transport charges for your area.",
  },
  {
    title: "Safety systems and supervision",
    description:
      "Look for CCTV presence, campus monitoring, entry supervision, and how the school manages student movement during the day.",
  },
] as const;

export const metadata: Metadata = {
  title: "Facilities | Divine International Academy Sirsaganj",
  description:
    "Explore the facilities at Divine International Academy, Sirsaganj, including smart classrooms, labs, library, sports spaces, transport, and campus safety systems.",
  keywords: [
    "Divine International Academy facilities",
    "school facilities Sirsaganj",
    "CBSE school transport Firozabad",
    "smart classrooms and labs Sirsaganj",
  ],
};

export default function FacilitiesPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Campus Facilities
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              Facilities for learning, safety, and student life at Divine
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Divine International Academy offers smart classrooms, science and
              computer labs, library support, transport services, sports areas,
              and campus safety systems that support students through the school
              week.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.25)]">
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/facilities.avif"
                  alt="Facilities at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Campus Snapshot
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    From classrooms to commute, each facility is planned to
                    support teaching, supervision, and student participation.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Divine's facilities are aligned with classroom teaching,
                  practical work, reading habits, safer transport, and regular
                  student participation from Pre-Primary to Senior Secondary.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {facilitySignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {facilityProfile.map((item) => (
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
                  {facilityStats.map((stat) => (
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
                    <Link href="/admissions">Review Admissions</Link>
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
              Core Facilities
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Key facilities across the Divine campus
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Classrooms, labs, library spaces, and activity areas are designed
              to support students throughout daily school life.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coreFacilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <Card
                  key={facility.title}
                  className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.24)]"
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold font-heading text-slate-950">
                      {facility.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {facility.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {facility.points.map((point) => (
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
              Safety and Transport
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Transport, supervision, and daily school routine
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Along with academics, commute support, campus safety, and daily
              facility use shape the school routine.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {parentPriorityBlocks.map((item) => {
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
              Explore Facility Pages
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Explore the campus, labs, sports, and transport pages
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {facilityRoutes.map((route) => {
              const Icon = route.icon;

              return (
                <Card
                  key={route.title}
                  className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.2)]"
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold font-heading text-slate-950">
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
              Visit Guide
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              What becomes clear during a campus visit
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              A campus visit shows how these spaces are used through the school
              week.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {visitChecklist.map((item) => (
              <Card
                key={item.title}
                className="rounded-[28px] border-slate-200/80 bg-white"
              >
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Camera className="h-5 w-5" />
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
              Visit Divine Campus
            </Badge>
            <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold font-heading leading-tight sm:text-4xl lg:text-[2.8rem]">
                  Schedule a campus visit to review classrooms, labs, library,
                  and transport support
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                  Visit the campus, discuss route availability, review
                  facilities in person, and understand admission details with
                  the school office.
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
