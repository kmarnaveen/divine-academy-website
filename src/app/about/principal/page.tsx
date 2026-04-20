import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  GraduationCap,
  Quote,
  Shield,
  Users,
} from "lucide-react";

import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const principalSignals = [
  "Principal Dr. Garima Gupta",
  "Academic direction from Pre-Primary to Class XII",
  "Academic leadership grounded in care and discipline",
] as const;

const principalMessage = [
  "At Divine International Academy, the expectation is simple: students should learn in a school environment that is disciplined, supportive, and academically serious from the first years onward.",
  "The school aims to combine structured teaching with practical exposure, reading habits, sports, values, and participation so students do not grow through academics alone.",
  "Safety, communication, classroom routines, and careful guidance matter just as much as academics, and school leadership remains accountable for them.",
  "The goal is not only strong results at the end of the year, but steady student growth in habits, confidence, communication, and readiness for the future.",
] as const;

const principalPriorities = [
  {
    title: "Strong classroom routines",
    description:
      "Students progress better when lessons are planned, teaching is consistent, and subject follow-up remains active across the school year.",
    icon: BookOpen,
  },
  {
    title: "Safe and disciplined campus life",
    description:
      "The campus runs on clear supervision, movement control, behaviour standards, and everyday discipline.",
    icon: Shield,
  },
  {
    title: "Growth beyond written academics",
    description:
      "Activities, stage participation, sports, reading, and practical work help students build confidence and responsibility alongside classroom learning.",
    icon: Users,
  },
  {
    title: "Preparation for the next stage",
    description:
      "The school is expected to prepare students for higher classes, board expectations, and future study pathways with stronger habits and clearer direction.",
    icon: GraduationCap,
  },
] as const;

const officeCommitments = [
  "Academic consistency and visible teacher follow-up",
  "Respectful school conduct and student discipline",
  "Practical learning, activities, and wider participation",
  "Clear guidance for families on school expectations and next steps",
] as const;

const nextSteps = [
  {
    title: "See school leadership",
    description:
      "See how leadership, campus oversight, and school guidance come together beyond the principal's desk.",
    href: "/about/leadership",
    cta: "Go to leadership",
  },
  {
    title: "Review school vision",
    description:
      "See how the school's vision and mission translate into teaching, discipline, and student growth.",
    href: "/about/vision",
    cta: "Go to vision and mission",
  },
  {
    title: "Talk to the school office",
    description:
      "Use the contact page for campus visit planning, admissions guidance, and office support.",
    href: "/contact",
    cta: "Go to contact page",
  },
] as const;

export const metadata: Metadata = {
  title: "Principal's Message | Divine International Academy Sirsaganj",
  description:
    "Read the principal's message from Divine International Academy, Sirsaganj, and see the school's academic, discipline, and student-growth priorities.",
  keywords: [
    "Principal message Divine International Academy",
    "Dr Garima Gupta school principal",
    "school leadership message Sirsaganj",
    "CBSE principal message Firozabad",
  ],
};

export default function PrincipalMessagePage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              From the Principal&rsquo;s Desk
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              A message rooted in classrooms, discipline, and student growth
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Principal Dr. Garima Gupta leads Divine International Academy with
              a focus on academic consistency, student discipline, wider
              participation, and the kind of steady growth that becomes visible
              over time.
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,0.98fr)_360px] xl:items-start">
            <Card className="rounded-[32px] border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.24)]">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Quote className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Principal&rsquo;s Message
                    </p>
                    <h2 className="mt-2 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl">
                      Dr. Garima Gupta
                    </h2>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {principalSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-5 text-sm leading-7 text-slate-700 sm:text-base">
                  {principalMessage.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-sm font-semibold text-slate-950">
                    Dr. Garima Gupta
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Principal, Divine International Academy, Sirsaganj
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.22)]">
              <CardContent className="p-6 sm:p-7">
                <Badge className="border border-primary/10 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
                  Office Priorities
                </Badge>
                <h3 className="mt-5 text-2xl font-bold font-heading text-slate-950">
                  Daily priorities from the principal&rsquo;s office
                </h3>

                <ul className="mt-6 space-y-4">
                  {officeCommitments.map((item) => (
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

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Academic Priorities
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              These priorities become visible in classrooms, routines, and
              opportunities across the school
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {principalPriorities.map((item) => {
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
              Next Step
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Continue to school leadership, school vision, or direct contact
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
