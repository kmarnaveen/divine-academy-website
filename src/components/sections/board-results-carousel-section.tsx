"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Trophy,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getRecognitionClasses,
  headlineRecognitionCount,
  headlineResults,
  ninetyPlusCount,
  sortedBoardResults,
} from "@/lib/board-results";
import { cn } from "@/lib/utils";

export function BoardResultsCarouselSection() {
  const shouldReduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: headlineResults.length > 1,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const syncEmblaState = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    syncEmblaState();
    emblaApi.on("select", syncEmblaState);
    emblaApi.on("reInit", syncEmblaState);

    return () => {
      emblaApi.off("select", syncEmblaState);
      emblaApi.off("reInit", syncEmblaState);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || shouldReduceMotion || headlineResults.length <= 1) {
      return;
    }

    const autoplayInterval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 4200);

    return () => {
      window.clearInterval(autoplayInterval);
    };
  }, [emblaApi, shouldReduceMotion]);

  return (
    <motion.div
      className="mt-12 sm:mt-16 md:mt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.74, duration: 0.8 }}
    >
      <div className="relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(253,244,246,0.58)_52%,rgba(255,255,255,1)_100%)] px-5 py-7 shadow-[0_24px_72px_-54px_rgba(15,23,42,0.12)] sm:px-7 sm:py-9 md:px-9 md:py-11">
        <div className="absolute left-0 top-0 h-44 w-44 -translate-x-10 -translate-y-10 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-44 w-44 translate-x-12 translate-y-12 rounded-full bg-accent/6 blur-3xl" />

        <div className="relative grid gap-8 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] xl:items-start">
          <div className="max-w-xl">
            <Badge className="border border-primary/10 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-sm hover:bg-white/90">
              Board Results
            </Badge>
            <h2 className="mt-4 text-2xl font-bold font-heading leading-tight tracking-[-0.02em] text-black sm:text-3xl md:text-4xl">
              Class X results that already show the value of disciplined
              preparation
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-[1.75] text-slate-600 sm:text-base md:text-lg">
              Before you explore the campus, see the students whose Class X
              board scores reflect consistency, support, and serious academic
              follow-through at DIA.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <div className="rounded-full border border-primary/10 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
                Highest score {sortedBoardResults[0]?.scoreDisplay ?? "-"}
              </div>
              <div className="rounded-full border border-primary/10 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
                {ninetyPlusCount} scores at 90%+
              </div>
              <div className="rounded-full border border-primary/10 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
                {headlineRecognitionCount} top honours
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="sm:flex-1">
                <Link href="/academics/board-results">
                  See Full Results
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/20 bg-white text-primary hover:bg-primary hover:text-white sm:flex-1"
              >
                <Link href="/academics/achievements">See Achievements</Link>
              </Button>
            </div>
          </div>

          <div className="min-w-0">
            <div className="mb-4 flex items-center justify-between gap-3 px-1">
              <div className="hidden items-center gap-2 sm:flex">
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollPrev()}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-primary/20 hover:text-primary"
                  aria-label="Previous board result"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollNext()}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-primary/20 hover:text-primary"
                  aria-label="Next board result"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="-ml-4 flex pb-2">
                {headlineResults.map((entry, index) => {
                  const styles = getRecognitionClasses(entry.recognition);

                  return (
                    <div
                      key={`${entry.studentName}-${entry.scoreDisplay}`}
                      className="min-w-0 shrink-0 basis-full pl-4 md:basis-1/2"
                    >
                      <article
                        className={cn(
                          "flex min-h-[280px] h-full flex-col justify-between rounded-[28px] border p-6 shadow-[0_20px_60px_-44px_rgba(15,23,42,0.18)]",
                          styles.card,
                        )}
                      >
                        <div>
                          <div className="flex items-start justify-between gap-4">
                            <Badge className={styles.badge}>
                              {entry.recognition}
                            </Badge>
                            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                              0{index + 1}
                            </span>
                          </div>

                          <div className="mt-6 flex items-start justify-between gap-5">
                            <div>
                              <h3 className="text-xl font-bold font-heading leading-tight text-slate-950 sm:text-2xl">
                                {entry.studentName}
                              </h3>
                              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                                {entry.className}
                              </p>
                            </div>
                            <div
                              className={cn(
                                "inline-flex rounded-full px-3 py-1.5 text-sm font-bold shadow-sm",
                                styles.ring,
                              )}
                            >
                              {entry.scoreDisplay}
                            </div>
                          </div>

                          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                            {entry.studentName} is featured in this published
                            Class X result for a standout performance in the
                            current board batch.
                          </p>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {scrollSnaps.map((_, index) => {
                const isActive = selectedIndex === index;

                return (
                  <button
                    key={`board-result-dot-${index}`}
                    type="button"
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={cn(
                      "h-2.5 rounded-full transition-all",
                      isActive
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400",
                    )}
                    aria-label={`Go to board result ${index + 1}`}
                    aria-current={isActive}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
