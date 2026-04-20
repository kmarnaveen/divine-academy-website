import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  GraduationCap,
  Shield,
  Star,
  Trophy,
  User,
} from "lucide-react";

import { MainLayout } from "../../../components/layout/main-layout";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import {
  getRecognitionClasses,
  headlineRecognitionCount,
  headlineResults,
  meritHolderCount,
  ninetyPlusCount,
  sortedBoardResults,
  starPerformerCount,
} from "@/lib/board-results";

const boardResultStats = [
  {
    value: `${sortedBoardResults.length}`,
    label: "Students featured",
    detail: "Students recognised here for their Class X board performance.",
    icon: Award,
  },
  {
    value: sortedBoardResults[0]?.scoreDisplay ?? "-",
    label: "Highest score",
    detail: "The top score in this published Class X result.",
    icon: Trophy,
  },
  {
    value: `${ninetyPlusCount}`,
    label: "Scores at 90%+",
    detail: "A strong group of students crossed the 90% mark.",
    icon: Star,
  },
  {
    value: `${headlineRecognitionCount}`,
    label: "Top honours",
    detail: "District Top 5 and Class X topper recognitions.",
    icon: Shield,
  },
] as const;

const recognitionBands = [
  {
    title: "Top honours",
    count: headlineRecognitionCount,
    detail:
      "The batch includes both a district-level place and the Class X topper.",
  },
  {
    title: "Merit holders",
    count: meritHolderCount,
    detail:
      "A strong group of students delivered consistent board scores across subjects.",
  },
  {
    title: "Star performers",
    count: starPerformerCount,
    detail:
      "More students added depth to the result with confident, high-scoring performances.",
  },
] as const;

export const metadata: Metadata = {
  title: "Board Results | Divine International Academy Sirsaganj",
  description:
    "See the latest Class X board results at Divine International Academy, Sirsaganj, with student scores, top honours, merit holders, and star performers.",
  keywords: [
    "Divine International Academy board results",
    "Class X board results Sirsaganj",
    "CBSE result Divine International Academy",
    "school topper and merit holders Firozabad",
  ],
};

export default function BoardResultsPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Class X Board Results
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              Class X results that reflect steady work through the year
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              This Class X result brings together the students whose board
              performance stood out at Divine International Academy, from the
              district top 5 and school topper to merit holders and star
              performers.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.25)]">
            <div className="grid lg:grid-cols-[minmax(0,1.06fr)_minmax(340px,0.94fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/achievements.jpg"
                  alt="Board results and student recognitions at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.72)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Result Highlights
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    When preparation stays steady, the final result speaks for
                    itself.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  This Class X batch includes one district-level recognition,
                  one school topper, 14 merit holders, and 14 star performers.
                  The highest score in the result is 97.8%.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  <div className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {sortedBoardResults.length} recognised results
                  </div>
                  <div className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {ninetyPlusCount} scores at 90%+
                  </div>
                  <div className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    District Top 5 included
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {boardResultStats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                      <div
                        key={stat.label}
                        className="rounded-[24px] border border-primary/10 bg-primary/5 px-4 py-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-primary">
                              {stat.value}
                            </p>
                            <p className="text-sm font-semibold text-slate-900">
                              {stat.label}
                            </p>
                          </div>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {stat.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="sm:flex-1">
                    <Link href="/academics/board-results#result-list">
                      See Full Results
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white sm:flex-1"
                  >
                    <Link href="/academics/achievements">
                      Back to Achievements
                    </Link>
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
              Result Snapshot
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Highlights from this Class X result
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {recognitionBands.map((item) => (
              <Card
                key={item.title}
                className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.2)]"
              >
                <CardContent className="p-6 sm:p-7">
                  <p className="text-3xl font-bold font-heading text-primary">
                    {item.count}
                  </p>
                  <h3 className="mt-3 text-xl font-bold font-heading text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.detail}
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
              Top Scorers
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Students leading this Class X result
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {headlineResults.map((entry) => {
              const styles = getRecognitionClasses(entry.recognition);

              return (
                <Card
                  key={`${entry.studentName}-${entry.scoreDisplay}`}
                  className={`rounded-[28px] shadow-[0_20px_60px_-46px_rgba(15,23,42,0.18)] ${styles.card}`}
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Badge className={styles.badge}>
                          {entry.recognition}
                        </Badge>
                        <h3 className="mt-4 text-xl font-bold font-heading text-slate-950">
                          {entry.studentName}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-slate-600">
                          {entry.className}
                        </p>
                      </div>
                      <div
                        className={`rounded-full px-3 py-1.5 text-sm font-bold ${styles.ring}`}
                      >
                        {entry.scoreDisplay}
                      </div>
                    </div>

                    <div className="mt-5 flex items-center gap-4 rounded-[24px] border border-white/70 bg-white/80 px-4 py-4 backdrop-blur-sm">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[22px] border border-dashed border-slate-300 bg-slate-100 text-slate-500">
                        <User className="h-8 w-8" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Student Portrait
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20" id="result-list">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Complete Results
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Full Class X board results
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Browse the full list of students, scores, and recognitions from
              the published Class X result.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {sortedBoardResults.map((entry) => {
              const styles = getRecognitionClasses(entry.recognition);

              return (
                <Card
                  key={`${entry.studentName}-mobile-${entry.scoreDisplay}`}
                  className="rounded-[26px] border-slate-200/80 bg-white"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold font-heading text-slate-950">
                          {entry.studentName}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          {entry.className}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">
                          {entry.scoreDisplay}
                        </p>
                      </div>
                    </div>

                    <Badge className={`mt-4 ${styles.badge}`}>
                      {entry.recognition}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 hidden overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.18)] md:block">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-left">
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Student Name
                    </th>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Class
                    </th>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Score
                    </th>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Recognition
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedBoardResults.map((entry) => {
                    const styles = getRecognitionClasses(entry.recognition);

                    return (
                      <tr
                        key={`${entry.studentName}-table-${entry.scoreDisplay}`}
                        className="border-b border-slate-200/70 last:border-b-0"
                      >
                        <td className="px-5 py-4 text-sm font-semibold text-slate-950">
                          {entry.studentName}
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-700">
                          {entry.className}
                        </td>
                        <td className="px-5 py-4 text-sm font-semibold text-primary">
                          {entry.scoreDisplay}
                        </td>
                        <td className="px-5 py-4">
                          <Badge className={styles.badge}>
                            {entry.recognition}
                          </Badge>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-20">
        <div className="container mx-auto px-4">
          <div className="rounded-[32px] bg-primary px-6 py-8 text-white shadow-[0_28px_80px_-46px_rgba(127,29,29,0.45)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <Badge className="border border-white/15 bg-white/12 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
              Looking Ahead
            </Badge>
            <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold font-heading leading-tight sm:text-4xl lg:text-[2.8rem]">
                  Looking for the right next step after Class X?
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                  Once you have reviewed the results, continue to streams,
                  achievements, or direct school contact for guidance on the
                  next academic move.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link href="/academics/streams">
                    Explore Stream Options
                    <GraduationCap className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  <Link href="/contact">
                    Contact the School
                    <ArrowRight className="ml-2 h-4 w-4" />
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
