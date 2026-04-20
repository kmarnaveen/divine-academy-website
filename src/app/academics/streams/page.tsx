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
  TrendingUp,
} from "lucide-react";

import { MainLayout } from "../../../components/layout/main-layout";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const streamSignals = [
  "Science, Commerce, and Humanities",
  "Class XI and XII stream guidance",
  "Parent counselling before confirmation",
] as const;

const streamProfile = [
  {
    label: "Available at Divine",
    value: "Science, Commerce, and Humanities in Senior Secondary",
  },
  {
    label: "Selection stage",
    value: "Class XI after Class X performance, interest, and counselling",
  },
  {
    label: "What parents should confirm",
    value:
      "Exact subject combinations and seat availability for the current session",
  },
  {
    label: "Academic base",
    value: "CBSE Senior Secondary support with board-focused follow-up",
  },
] as const;

const streamStats = [
  {
    value: "3",
    label: "Senior secondary streams",
    detail: "Science, Commerce, and Humanities.",
  },
  {
    value: "100%",
    label: "Board results",
    detail: "Visible academic follow-up through exam years.",
  },
  {
    value: "40",
    label: "Smart classrooms",
    detail: "Teaching and revision supported by digital boards.",
  },
  {
    value: "25",
    label: "Science lab batch size",
    detail: "Practical work managed in smaller supervised groups.",
  },
] as const;

const streamOptions = [
  {
    title: "Science Stream",
    summary:
      "Science suits students who are comfortable with analytical work, regular practice, and practical learning in Mathematics or Biology-based subjects.",
    note: "PCM, PCB, and PCMB pathways are offered as available for the academic session.",
    fit: [
      "Students who enjoy Physics, Chemistry, Mathematics, Biology, or computing",
      "Learners who can sustain regular numericals, concepts, and practical work",
      "Parents planning for engineering, medical, technology, or science-based higher studies",
    ],
    subjects: [
      "Physics and Chemistry",
      "Mathematics, Biology, or both depending on the combination",
      "English Core",
      "Computer Science or Physical Education where applicable",
    ],
    outcomes: [
      "Engineering and technology",
      "Medical and allied health fields",
      "Research, computing, and science-based degrees",
    ],
    support:
      "At Divine, Science students move through lab periods, practical-record follow-up, and board-focused revision in the senior years.",
    icon: Microscope,
  },
  {
    title: "Commerce Stream",
    summary:
      "Commerce suits students interested in business, finance, accountancy, economics, and structured decision-making with numbers and concepts.",
    note: "Commerce subject combinations are confirmed during stream counselling and academic-session planning.",
    fit: [
      "Students with interest in business studies, accountancy, and economics",
      "Learners who are comfortable with concepts, calculations, and regular written practice",
      "Parents planning for management, finance, commerce, banking, or entrepreneurship pathways",
    ],
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
    support:
      "Commerce students are supported through concept clarity, regular assessment, and board-year discipline in written and numerical subjects.",
    icon: TrendingUp,
  },
  {
    title: "Humanities Stream",
    summary:
      "Humanities suits students interested in society, public affairs, writing, psychology, history, and social-science based learning.",
    note: "Humanities electives are finalised as offered for the academic session and school timetable.",
    fit: [
      "Students who enjoy reading, interpretation, analysis, and written expression",
      "Learners interested in history, political science, psychology, geography, or economics",
      "Parents considering law, civil services, liberal arts, design, media, or social-science pathways",
    ],
    subjects: [
      "History and Political Science",
      "Psychology, Geography, or Economics as offered",
      "English Core",
      "Physical Education or stream-aligned electives",
    ],
    outcomes: [
      "Law, public policy, and civil-services pathways",
      "Psychology, social sciences, and research",
      "Media, writing, design, and liberal-arts degrees",
    ],
    support:
      "Humanities students receive close support in reading, discussion, writing, project work, and board preparation across the two senior years.",
    icon: BookOpen,
  },
] as const;

const seniorSupport = [
  {
    title: "Teaching and revision discipline",
    description:
      "Senior secondary classes follow structured lesson delivery, daily classwork, and recap instead of last-minute coverage.",
    points: [
      "Smart classroom support",
      "Subject-wise revision cycles",
      "Notebook and assignment follow-up",
    ],
    icon: Monitor,
  },
  {
    title: "Practicals and applied work",
    description:
      "Practical subjects are supported through supervised lab work, record completion, and routine follow-up.",
    points: [
      "25-student science lab batches",
      "Practical file and submission tracking",
      "Demonstrations and applied learning support",
    ],
    icon: Microscope,
  },
  {
    title: "Tests and board preparation",
    description:
      "Classes XI and XII move through tests, periodic review, and board-pattern preparation through the year.",
    points: [
      "Unit tests and term assessments",
      "Board-pattern paper practice",
      "Submission and readiness tracking",
    ],
    icon: CheckCircle,
  },
  {
    title: "Guidance before the next step",
    description:
      "Parents get support on stream fit, academic expectations, and the next step after school.",
    points: [
      "Stream counselling before admission confirmation",
      "Discussion around aptitude and goals",
      "Higher-study direction for senior years",
    ],
    icon: Shield,
  },
] as const;

const decisionGuide = [
  {
    step: "01",
    title: "Check subject strength, not only trend",
    description:
      "The right stream is not the one that sounds more prestigious. It is the one the student can handle well for two full academic years.",
  },
  {
    step: "02",
    title: "Match interests with higher-study direction",
    description:
      "Engineering, medicine, management, law, design, civil services, psychology, or liberal-arts pathways all begin with clearer subject alignment after Class X.",
  },
  {
    step: "03",
    title: "Discuss workload honestly",
    description:
      "Every stream needs discipline, but the learning pattern changes. Parents should consider reading load, practical work, numericals, and written preparation.",
  },
  {
    step: "04",
    title: "Confirm the final combination with the school",
    description:
      "Subject combinations can vary by session, timetable, and class strength. Confirm the exact offering during the admission process.",
  },
] as const;

const faqItems = [
  {
    question: "What is the right way to choose a stream after Class X?",
    answer:
      "Start with subject strength, learning comfort, and the kind of higher-study path the student is likely to pursue. The right stream is the one the student can handle consistently for two years, not the one chosen only because it sounds more prestigious.",
  },
  {
    question:
      "Should parents wait for board results before speaking to the school?",
    answer:
      "Not necessarily. It is better to start the discussion early, once Class X plans are clear. That gives parents time to understand stream fit, likely subject combinations, documents, and the current admission timeline without rushing the decision.",
  },
  {
    question:
      "Does Divine help parents compare stream options before Class XI admission?",
    answer:
      "Yes. Parents can speak with the school during the admission process to understand subject expectations, workload pattern, and the stream that is more suitable for the student’s strengths and plans.",
  },
  {
    question: "Will the same subject combinations be available every session?",
    answer:
      "No school should assume that automatically. Final combinations depend on the academic session, timetable, class strength, and actual enrolment, so parents should confirm the exact subjects and seat availability before completing Class XI admission.",
  },
] as const;

export const metadata: Metadata = {
  title: "Senior Secondary Streams | Divine International Academy Sirsaganj",
  description:
    "Explore Science, Commerce, and Humanities streams at Divine International Academy, Sirsaganj. Review subject direction, stream guidance, academic support, and Class XI admission help.",
  keywords: [
    "Divine International Academy streams",
    "Science Commerce Humanities Sirsaganj",
    "Class 11 admissions Firozabad",
    "CBSE senior secondary school Sirsaganj",
  ],
};

export default function StreamsPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Senior Secondary Streams
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              Science, Commerce, and Humanities with clearer stream guidance
              after Class X
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              For parents comparing senior secondary schools in Sirsaganj and
              nearby Firozabad, this page explains what each stream usually
              covers, who it suits, and how Divine supports students through
              Classes XI and XII.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.25)]">
            <div className="grid lg:grid-cols-[minmax(0,1.06fr)_minmax(340px,0.94fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/academic-streams.jpg"
                  alt="Senior secondary stream guidance at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.72)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Class XI and XII
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    Parents do not need more jargon. They need a stream choice
                    that matches aptitude, workload comfort, and the next
                    academic step.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Science, Commerce, and Humanities are all valid choices. What
                  matters is subject fit, consistency, and the kind of support a
                  student receives through the senior-secondary years.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {streamSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {streamProfile.map((item) => (
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
                  {streamStats.map((stat) => (
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
                    <Link href="/academics/curriculum">
                      Review Curriculum
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white sm:flex-1"
                  >
                    <Link href="/contact">Talk to the School</Link>
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
              Available Streams
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Stream information parents can actually use
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The right choice after Class X depends on subject comfort,
              workload fit, and where the student is likely to go next.
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {streamOptions.map((stream) => {
              const Icon = stream.icon;

              return (
                <Card
                  key={stream.title}
                  className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.24)]"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-2xl font-bold font-heading text-slate-950">
                          {stream.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {stream.summary}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-[24px] border border-primary/10 bg-primary/5 px-4 py-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        Session note
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {stream.note}
                      </p>
                    </div>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Best fit for
                        </p>
                        <ul className="mt-3 space-y-3">
                          {stream.fit.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span className="text-sm leading-6 text-slate-700">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Subjects usually include
                        </p>
                        <ul className="mt-3 space-y-3">
                          {stream.subjects.map((subject) => (
                            <li
                              key={subject}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span className="text-sm leading-6 text-slate-700">
                                {subject}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Common next steps
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {stream.outcomes.map((outcome) => (
                          <Badge
                            key={outcome}
                            className="whitespace-normal border border-slate-200 bg-slate-50 px-3 py-1.5 text-left text-xs font-medium text-slate-700 hover:bg-slate-50"
                          >
                            {outcome}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        At Divine
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {stream.support}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mx-auto mt-6 max-w-5xl rounded-[28px] border border-amber-200 bg-amber-50 px-5 py-5 text-sm leading-7 text-amber-900 sm:px-6">
            Stream and elective combinations are confirmed by the school for
            each academic session. Parents should check the final subject
            offering and seat availability before completing Class XI admission.
          </div>
        </div>
      </section>

      <section className="bg-slate-50/80 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-white">
              Senior-Year Support
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              How Divine supports students through Classes XI and XII
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Strong stream selection matters, but day-to-day academic follow-up
              matters just as much in the senior years.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {seniorSupport.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="rounded-[28px] border-slate-200/80 bg-white"
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Stream Selection Guide
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Before you finalise a stream
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              This is usually the point where parents need clarity, not
              pressure.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {decisionGuide.map((item) => (
              <Card
                key={item.step}
                className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.2)]"
              >
                <CardContent className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-xl font-bold font-heading text-slate-950">
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

      <section className="bg-slate-50/80 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-white">
              Parent FAQs
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Questions parents usually want answered before stream selection
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Short answers first. Final combinations, electives, and seats
              should still be confirmed with the school for the current academic
              session.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {faqItems.map((item) => (
              <Card
                key={item.question}
                className="rounded-[28px] border-slate-200/80 bg-white"
              >
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading leading-7 text-slate-950">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.answer}
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
              Stream Counselling
            </Badge>
            <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold font-heading leading-tight sm:text-4xl lg:text-[2.8rem]">
                  Need help deciding the right stream after Class X?
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                  Parents looking for a CBSE senior secondary school in
                  Sirsaganj or near Firozabad can contact Divine before
                  finalising Class XI admission, subject choice, and document
                  planning.
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
