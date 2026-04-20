"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import mediaArchive from "../../../divineinternationalacademy-com-images.json";
import {
  Award,
  Building2,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  PartyPopper,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ArchivePage = (typeof mediaArchive.pages)[number];
type ArchiveImage = ArchivePage["images"][number];

interface ExperienceImage {
  src: string;
  alt: string;
}

interface ExperienceCollection {
  id: string;
  label: string;
  title: string;
  description: string;
  sourceLabel: string;
  icon: LucideIcon;
  accentClass: string;
  heroImage: ExperienceImage;
  supportingImages: ExperienceImage[];
}

const archiveOrigin = mediaArchive.source.start_url;

function getArchivePage(path: string) {
  return mediaArchive.pages.find(
    (page) => page.url === new URL(path, archiveOrigin).toString(),
  );
}

function matchesImage(image: ArchiveImage, queries: string[]) {
  const normalizedAlt = image.alt.toLowerCase();

  return queries.some(
    (query) =>
      image.url.includes(query) || normalizedAlt.includes(query.toLowerCase()),
  );
}

function pickArchiveImage(
  paths: string[],
  queries: string[],
  fallbackAlt: string,
): ExperienceImage {
  for (const path of paths) {
    const page = getArchivePage(path);
    const image = page?.images.find(
      (item) =>
        !item.url.includes("school-logo") && matchesImage(item, queries),
    );

    if (image) {
      return {
        src: image.url,
        alt: image.alt || fallbackAlt,
      };
    }
  }

  for (const path of paths) {
    const page = getArchivePage(path);
    const image = page?.images.find(
      (item) => !item.url.includes("school-logo"),
    );

    if (image) {
      return {
        src: image.url,
        alt: image.alt || fallbackAlt,
      };
    }
  }

  return {
    src: "/images/logo.png",
    alt: fallbackAlt,
  };
}

const experienceCollections: ExperienceCollection[] = [
  {
    id: "academics",
    label: "Academics",
    title:
      "Classrooms, labs, computer learning, and reading",
    description:
      "A closer look at lessons, practical work, computer periods, and reading time.",
    sourceLabel: "Academics, Facilities, Home",
    icon: FlaskConical,
    accentClass: "from-accent/22 via-amber-50 to-white",
    heroImage: pickArchiveImage(
      ["/academics", "/facilities", "/"],
      ["smartboard-class", "Academics", "Smart Classrooms"],
      "Academic classroom environment",
    ),
    supportingImages: [
      pickArchiveImage(
        ["/", "/facilities"],
        ["biology-lab", "Science Labs", "Biology Lab"],
        "Biology laboratory",
      ),
      pickArchiveImage(
        ["/", "/facilities"],
        ["it-lab", "Computer Lab", "IT Lab"],
        "Computer laboratory",
      ),
      pickArchiveImage(
        ["/", "/facilities"],
        ["students-library", "Library"],
        "Library",
      ),
    ],
  },
  {
    id: "culture",
    label: "Cultural Life",
    title:
      "Stage performances, festivals, and school celebrations",
    description:
      "Moments that build confidence, expression, and school spirit.",
    sourceLabel: "Home, Gallery, Student Life",
    icon: PartyPopper,
    accentClass: "from-rose-100 via-white to-accent/18",
    heroImage: pickArchiveImage(
      ["/", "/student-life", "/gallery"],
      [
        "annual-day-performance-BGrA0t2k",
        "Annual day stage performance",
        "Every Child, A Star",
      ],
      "Annual day performance",
    ),
    supportingImages: [
      pickArchiveImage(
        ["/", "/student-life", "/gallery"],
        ["dandiya-dance", "Children performing dandiya dance", "Music & Dance"],
        "Dandiya dance performance",
      ),
      pickArchiveImage(
        ["/", "/gallery"],
        [
          "diwali-celebration",
          "Festival of Dreams",
          "Students celebrating Diwali",
        ],
        "Diwali celebration",
      ),
      pickArchiveImage(
        ["/", "/gallery"],
        ["holi-celebration", "Colors of Childhood", "Holi Celebration"],
        "Holi celebration",
      ),
    ],
  },
  {
    id: "sports",
    label: "Sports",
    title:
      "Volleyball, cricket, and everyday sports participation",
    description:
      "Games and team activity that build stamina, teamwork, and energy.",
    sourceLabel: "Home, Achievements, Student Life",
    icon: Trophy,
    accentClass: "from-sky-100 via-white to-primary/10",
    heroImage: pickArchiveImage(
      ["/", "/student-life", "/achievements"],
      [
        "sports-volleyball-C9XFHMDC",
        "Students playing volleyball",
        "Sports & Games",
      ],
      "Students playing sports",
    ),
    supportingImages: [
      pickArchiveImage(
        ["/", "/achievements"],
        ["dpl-cricket-JvSpUaK3", "Champions Are Made Here", "DPL Cricket Team"],
        "Cricket team moment",
      ),
      pickArchiveImage(
        ["/achievements", "/facilities"],
        ["sports-volleyball.avif", "Volleyball Team", "Sports Complex"],
        "Volleyball court",
      ),
      pickArchiveImage(
        ["/student-life", "/"],
        [
          "sports-volleyball-C9XFHMDC",
          "Sports & Games",
          "Students playing volleyball",
        ],
        "Student sports activity",
      ),
    ],
  },
  {
    id: "achievements",
    label: "Achievements",
    title:
      "Awards, exhibitions, and inter-school competitions",
    description:
      "Recognition that comes from student work, competitions, and public performance.",
    sourceLabel: "Achievements, Home, Gallery",
    icon: Award,
    accentClass: "from-primary/16 via-white to-slate-100",
    heroImage: pickArchiveImage(
      ["/achievements", "/"],
      ["goenka-award", "School Team", "Goenka Award"],
      "School achievement highlight",
    ),
    supportingImages: [
      pickArchiveImage(
        ["/", "/achievements"],
        [
          "kr8ivity-league",
          "Inter-School Creative Competition",
          "Kr8ivity League",
        ],
        "Creative competition highlight",
      ),
      pickArchiveImage(
        ["/", "/gallery"],
        [
          "news-organic-farming",
          "Organic Farming Competition",
          "Organic Farming",
        ],
        "Organic farming competition",
      ),
      pickArchiveImage(
        ["/achievements", "/gallery"],
        ["art-exhibition", "Art Club Students", "Art Exhibition"],
        "Art exhibition moment",
      ),
    ],
  },
  {
    id: "campus",
    label: "Campus",
    title:
      "Campus spaces children use every day",
    description:
      "The classrooms, grounds, and shared spaces students move through each day.",
    sourceLabel: "Home, About, Facilities",
    icon: Building2,
    accentClass: "from-primary/18 via-primary/8 to-red-50",
    heroImage: pickArchiveImage(
      ["/", "/about"],
      ["campus-view-BB4971sW", "Aerial view", "Campus aerial view"],
      "Aerial view of Divine International Academy campus",
    ),
    supportingImages: [
      pickArchiveImage(
        ["/about", "/gallery"],
        [
          "campus-entrance",
          "Campus Entrance",
          "Divine International Academy Campus",
        ],
        "Campus entrance",
      ),
      pickArchiveImage(
        ["/", "/facilities"],
        ["students-library", "Library"],
        "Library",
      ),
      pickArchiveImage(
        ["/", "/facilities"],
        ["campus-view.avif", "Transport"],
        "Campus facilities",
      ),
    ],
  },
];

export function VideoCarousel() {
  const [activeCollectionId, setActiveCollectionId] = useState(
    experienceCollections[0]?.id ?? "campus",
  );
  const [activeSupportingIndex, setActiveSupportingIndex] = useState(0);

  const activeIndex = Math.max(
    experienceCollections.findIndex(
      (collection) => collection.id === activeCollectionId,
    ),
    0,
  );
  const activeCollection =
    experienceCollections[activeIndex] ?? experienceCollections[0];
  const supportingImages = activeCollection?.supportingImages ?? [];
  const activeSupportingImage =
    supportingImages[activeSupportingIndex] ?? activeCollection.heroImage;

  useEffect(() => {
    setActiveSupportingIndex(0);
  }, [activeCollectionId]);

  const selectCollectionByIndex = (index: number) => {
    const nextIndex =
      (index + experienceCollections.length) % experienceCollections.length;
    setActiveCollectionId(
      experienceCollections[nextIndex]?.id ?? activeCollectionId,
    );
  };

  const selectSupportingByIndex = (index: number) => {
    if (supportingImages.length === 0) {
      return;
    }

    const nextIndex =
      (index + supportingImages.length) % supportingImages.length;
    setActiveSupportingIndex(nextIndex);
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(165,28,48,0.03),transparent_30%),linear-gradient(180deg,#fcfcfd_0%,#ffffff_42%,#ffffff_100%)] py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/3 to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold font-heading tracking-[-0.02em] text-primary sm:text-4xl lg:text-5xl"
            >
              A closer look at life at DIA
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg"
            >
              Browse classrooms, campus spaces, events, sports, and student
              achievements.
            </motion.p>
          </div>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-primary/15 bg-white/85 hover:bg-white"
                onClick={() => selectCollectionByIndex(activeIndex - 1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-primary/15 bg-white/85 hover:bg-white"
                onClick={() => selectCollectionByIndex(activeIndex + 1)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCollection.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35 }}
            className="mt-10 grid gap-6 xl:grid-cols-12"
          >
            <div className="xl:col-span-7">
              <div className="group overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_24px_78px_-56px_rgba(15,23,42,0.14)]">
                <div className="aspect-[16/10] bg-slate-100">
                  <img
                    src={activeCollection.heroImage.src}
                    alt={activeCollection.heroImage.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="border-t border-primary/10 bg-white px-6 py-5 sm:px-8 sm:py-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      {activeCollection.label}
                    </span>
                  </div>
                  <h3 className="max-w-2xl text-2xl font-bold text-primary sm:text-3xl">
                    {activeCollection.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                    {activeCollection.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 xl:col-span-5">
              <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-[0_20px_62px_-48px_rgba(15,23,42,0.12)] sm:p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Inside {activeCollection.label}
                    </p>
                    <h4 className="mt-1 text-lg font-bold text-primary sm:text-xl">
                      More from this collection
                    </h4>
                  </div>
                  {supportingImages.length > 1 && (
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-9 w-9 rounded-full border-primary/15 bg-white hover:bg-primary/5"
                        onClick={() =>
                          selectSupportingByIndex(activeSupportingIndex - 1)
                        }
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-9 w-9 rounded-full border-primary/15 bg-white hover:bg-primary/5"
                        onClick={() =>
                          selectSupportingByIndex(activeSupportingIndex + 1)
                        }
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>

                <AnimatePresence mode="wait">
                  <motion.article
                    key={`${activeCollection.id}-${activeSupportingImage.src}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="overflow-hidden rounded-[24px] border border-primary/10 bg-slate-100 shadow-sm">
                      <div className="aspect-[4/3]">
                        <img
                          src={activeSupportingImage.src}
                          alt={activeSupportingImage.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <p className="text-base font-semibold leading-snug text-primary">
                        {activeSupportingImage.alt}
                      </p>
                    </div>
                  </motion.article>
                </AnimatePresence>

                {supportingImages.length > 1 && (
                  <div className="mt-4 flex items-center gap-2">
                    {supportingImages.map((image, index) => (
                      <button
                        key={`${activeCollection.id}-dot-${image.src}`}
                        type="button"
                        aria-label={`Show supporting image ${index + 1}`}
                        aria-pressed={activeSupportingIndex === index}
                        onClick={() => selectSupportingByIndex(index)}
                        className={cn(
                          "h-2.5 rounded-full transition-all duration-300",
                          activeSupportingIndex === index
                            ? "w-8 bg-primary"
                            : "w-2.5 bg-primary/25 hover:bg-primary/45",
                        )}
                      />
                    ))}
                  </div>
                )}

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {supportingImages.map((image, index) => (
                    <button
                      key={`${activeCollection.id}-thumb-${image.src}`}
                      type="button"
                      onClick={() => selectSupportingByIndex(index)}
                      className={cn(
                        "overflow-hidden rounded-2xl border bg-white text-left transition-all duration-300",
                        activeSupportingIndex === index
                          ? "border-primary/50 shadow-[0_14px_38px_-28px_rgba(15,23,42,0.12)]"
                          : "border-primary/10 hover:border-primary/25",
                      )}
                    >
                      <div className="aspect-[4/3] bg-slate-100">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {experienceCollections.map((collection) => (
            <button
              key={collection.id}
              type="button"
              onClick={() => setActiveCollectionId(collection.id)}
              className={cn(
                "flex items-center gap-3 rounded-[24px] border p-3 text-left transition-all duration-300",
                activeCollectionId === collection.id
                  ? "border-primary/50 bg-white shadow-[0_18px_48px_-38px_rgba(15,23,42,0.12)]"
                  : "border-primary/10 bg-white/70 hover:border-primary/25 hover:bg-white",
              )}
            >
              <div className="h-16 w-16 overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={collection.heroImage.src}
                  alt={collection.heroImage.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  {collection.label}
                </div>
                <div className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-primary">
                  {collection.title}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
