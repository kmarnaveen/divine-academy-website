import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, CheckCircle } from "lucide-react";

import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

type GalleryCollection = {
  title: string;
  description: string;
  images: GalleryImage[];
};

const gallerySignals = [
  "Campus and classroom spaces",
  "Events, celebrations, and stage life",
  "Sports, achievements, and student moments",
] as const;

const featuredImages: GalleryImage[] = [
  {
    src: "https://divineinternationalacademy.com/assets/campus-view-BB4971sW.avif",
    alt: "Aerial view of Divine International Academy campus",
    caption: "Campus overview",
  },
  {
    src: "https://divineinternationalacademy.com/assets/annual-day-performance-BGrA0t2k.jpg",
    alt: "Annual day stage performance",
    caption: "Annual day performance",
  },
  {
    src: "https://divineinternationalacademy.com/assets/sports-volleyball-C9XFHMDC.avif",
    alt: "Students playing volleyball",
    caption: "Sports participation",
  },
];

const galleryCollections: GalleryCollection[] = [
  {
    title: "Campus and learning spaces",
    description:
      "These images show how the academic environment looks across classrooms, labs, library areas, and the wider campus.",
    images: [
      {
        src: "https://divineinternationalacademy.com/assets/campus-entrance-DiaJFwsW.avif",
        alt: "Divine International Academy Campus",
        caption: "Campus entrance",
      },
      {
        src: "https://divineinternationalacademy.com/assets/classroom-teaching.jpg",
        alt: "Classroom Teaching",
        caption: "Classroom teaching",
      },
      {
        src: "https://divineinternationalacademy.com/assets/smartboard-class.jpg",
        alt: "Smart Board Class",
        caption: "Smart classroom",
      },
      {
        src: "https://divineinternationalacademy.com/assets/biology-lab.avif",
        alt: "Biology Lab",
        caption: "Biology lab",
      },
      {
        src: "https://divineinternationalacademy.com/assets/it-lab.avif",
        alt: "IT Lab",
        caption: "Computer lab",
      },
      {
        src: "https://divineinternationalacademy.com/assets/students-library.jpg",
        alt: "Library",
        caption: "Library and reading space",
      },
    ],
  },
  {
    title: "Celebrations and stage life",
    description:
      "These images show how students take part in assemblies, celebrations, cultural programmes, and public performances during the school year.",
    images: [
      {
        src: "https://divineinternationalacademy.com/assets/republic-day-flag-Dypt4hYG.jpg",
        alt: "Republic Day Celebrations — A Grand Event",
        caption: "Republic Day celebration",
      },
      {
        src: "https://divineinternationalacademy.com/assets/diwali-celebration-Ywr-jBME.jpg",
        alt: "Students celebrating Diwali",
        caption: "Diwali celebration",
      },
      {
        src: "https://divineinternationalacademy.com/assets/dandiya-kids-DTsTZ54z.jpg",
        alt: "Children performing dandiya dance",
        caption: "Dandiya performance",
      },
      {
        src: "https://divineinternationalacademy.com/assets/holi-celebration-BLIQAWpj.jpg",
        alt: "Colors of Childhood",
        caption: "Holi celebration",
      },
      {
        src: "https://divineinternationalacademy.com/assets/annual-day-winners.jpg",
        alt: "Annual Day Winners",
        caption: "Annual day recognition",
      },
      {
        src: "https://divineinternationalacademy.com/assets/annual-day-performance.jpg",
        alt: "Annual Day Performance",
        caption: "Stage performance",
      },
    ],
  },
  {
    title: "Sports, achievements, and student highlights",
    description:
      "These images bring together participation, achievement, and school confidence through sports, competitions, exhibitions, and student milestones.",
    images: [
      {
        src: "https://divineinternationalacademy.com/assets/dpl-cricket-JvSpUaK3.jpg",
        alt: "Champions Are Made Here",
        caption: "Cricket team highlight",
      },
      {
        src: "https://divineinternationalacademy.com/assets/goenka-award.jpg",
        alt: "School Team",
        caption: "Award recognition",
      },
      {
        src: "https://divineinternationalacademy.com/assets/art-exhibition.jpg",
        alt: "Art Exhibition",
        caption: "Art exhibition",
      },
      {
        src: "https://divineinternationalacademy.com/assets/kr8ivity-league-B_iSPrTc.jpg",
        alt: "Kr8ivity League — Inter-School Creative Competition",
        caption: "Creative competition",
      },
      {
        src: "https://divineinternationalacademy.com/assets/news-organic-farming-1-CZhlEyTR.jpg",
        alt: "DIA Students Win State Organic Farming Competition",
        caption: "Organic farming competition",
      },
      {
        src: "https://divineinternationalacademy.com/assets/sports-volleyball.avif",
        alt: "Sports Complex",
        caption: "Sports practice",
      },
    ],
  },
];

const parentNotes = [
  "The gallery brings together academics, celebrations, sports, and campus life instead of narrowing the school to one event type.",
  "Images make school activity, participation, and campus atmosphere easier to see at a glance.",
  "A campus visit still adds the full sense of routine, supervision, and daily school energy beyond the images.",
] as const;

const nextSteps = [
  {
    title: "Review school events",
    description:
      "Understand the types of assemblies, exhibitions, sports events, and stage programmes students take part in.",
    href: "/student-life/events",
    cta: "Go to events",
  },
  {
    title: "Explore clubs",
    description:
      "See how clubs support confidence, creativity, teamwork, and wider participation.",
    href: "/student-life/clubs",
    cta: "Go to clubs",
  },
  {
    title: "Back to student life",
    description:
      "Return to the student-life overview for the full picture of school participation beyond academics.",
    href: "/student-life",
    cta: "Go to student life",
  },
] as const;

export const metadata: Metadata = {
  title: "School Gallery | Divine International Academy Sirsaganj",
  description:
    "See the school gallery at Divine International Academy, Sirsaganj, with current campus, classroom, celebration, sports, and student-participation images.",
  keywords: [
    "school gallery Divine International Academy",
    "student activity photos Sirsaganj school",
    "CBSE school gallery Firozabad",
    "campus and event images DIA",
  ],
};

export default function StudentLifeGalleryPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              School Gallery
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              A visual view of campus life, celebrations, sports, and student
              participation
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              The gallery brings together classrooms, campus areas, events,
              sports, and school activity moments so the school experience can
              be seen directly.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.24)]">
            <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:p-6">
              <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 sm:min-h-[420px]">
                <Image
                  src={featuredImages[0].src}
                  alt={featuredImages[0].alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.72)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Featured Highlight
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.35rem]">
                    {featuredImages[0].caption}
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
                    Campus images give a direct sense of school atmosphere,
                    student activity, and the spaces used through the day.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {featuredImages.slice(1).map((image, index) => (
                    <div
                      key={image.src}
                      className="relative min-h-[200px] overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority={index === 0}
                        sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.72)_100%)]" />
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-sm font-semibold text-white sm:text-base">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <p className="text-sm leading-7 text-slate-700 sm:text-base">
                    The gallery brings together campus spaces, celebrations,
                    sports, and student participation in one place.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {gallerySignals.map((signal) => (
                      <div
                        key={signal}
                        className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                      >
                        {signal}
                      </div>
                    ))}
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
                      <Link href="/contact">Book a Campus Visit</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 space-y-14">
          {galleryCollections.map((collection) => (
            <div key={collection.title}>
              <div className="mx-auto max-w-3xl text-center">
                <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
                  {collection.title}
                </Badge>
                <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                  {collection.description}
                </p>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {collection.images.map((image) => (
                  <Card
                    key={image.src}
                    className="overflow-hidden rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.24)]"
                  >
                    <div className="relative aspect-[4/3] bg-slate-100">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1280px) 30vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-5">
                      <p className="text-base font-semibold text-slate-950">
                        {image.caption}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {image.alt}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50/80 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start">
            <div>
              <Badge className="border border-primary/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-white">
                Gallery Highlights
              </Badge>
              <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl">
                The gallery brings the school experience into view
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <Card className="rounded-[24px] border-slate-200/80 bg-white">
                  <CardContent className="p-5">
                    <h3 className="text-base font-bold text-slate-950">
                      Campus visibility
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Campus spaces, classrooms, and practical learning areas
                      are visible together in one section.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-[24px] border-slate-200/80 bg-white">
                  <CardContent className="p-5">
                    <h3 className="text-base font-bold text-slate-950">
                      Student participation
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Events, celebrations, sports, and achievements appear as
                      lived school moments instead of text alone.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-[24px] border-slate-200/80 bg-white">
                  <CardContent className="p-5">
                    <h3 className="text-base font-bold text-slate-950">
                      School life across the year
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      The gallery connects academic, cultural, sports, and
                      campus moments across the school year.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.22)]">
              <CardContent className="p-6 sm:p-7">
                <Badge className="border border-primary/10 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
                  Gallery Focus
                </Badge>
                <h3 className="mt-5 text-2xl font-bold font-heading text-slate-950">
                  What the gallery brings together
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

                <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
                  <div className="flex items-start gap-3">
                    <Camera className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm leading-6 text-slate-700">
                      The gallery works alongside the admissions and contact
                      sections, while timings, guidance, and visit planning stay
                      with the school office.
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
              Continue
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Continue to events, clubs, or the wider student-life section
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
