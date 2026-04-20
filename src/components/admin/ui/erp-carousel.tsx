"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

type ErpCarouselItem = {
  id: string
  eyebrow?: string
  title: string
  description: string
  meta?: string
}

const erpCarouselSlideVariants = cva(
  `${erpTokens.radius.card} flex h-full flex-col justify-between border p-6`,
  {
    variants: {
      variant: {
        default: `${erpTokens.surface.default} ${erpTokens.shadow.card}`,
        accent: `${erpTokens.surface.accentGradient} ${erpTokens.shadow.card}`,
        dark: `${erpTokens.surface.dark} ${erpTokens.shadow.dark}`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type ErpCarouselProps = React.ComponentProps<"div"> &
  VariantProps<typeof erpCarouselSlideVariants> & {
    items: ErpCarouselItem[]
    showDots?: boolean
  }

function ErpCarousel({
  className,
  items,
  variant,
  showDots = true,
  ...props
}: ErpCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false })
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback(() => {
    if (!emblaApi) {
      return
    }

    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) {
      return
    }

    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm text-slate-500">
          Slide {selectedIndex + 1} of {items.length}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={cn(
              `${erpTokens.radius.button} ${erpTokens.motion} ${erpTokens.focusRing} flex h-10 w-10 items-center justify-center border`,
              canScrollPrev
                ? "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                : "border-slate-200 bg-slate-100 text-slate-300",
            )}
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            className={cn(
              `${erpTokens.radius.button} ${erpTokens.motion} ${erpTokens.focusRing} flex h-10 w-10 items-center justify-center border`,
              canScrollNext
                ? "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                : "border-slate-200 bg-slate-100 text-slate-300",
            )}
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex touch-pan-y">
          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_78%] xl:flex-[0_0_62%]"
            >
              <article className={erpCarouselSlideVariants({ variant })}>
                <div className="space-y-4">
                  {item.eyebrow ? (
                    <p className={`${erpTokens.text.eyebrow} text-current/55`}>
                      {item.eyebrow}
                    </p>
                  ) : null}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                      {item.title}
                    </h3>
                    <p className={cn(
                      variant === "dark"
                        ? erpTokens.text.inverseBody
                        : erpTokens.text.body,
                    )}>
                      {item.description}
                    </p>
                  </div>
                </div>
                {item.meta ? (
                  <div className="mt-8 flex items-center justify-between gap-3 border-t border-current/10 pt-4 text-sm text-current/62">
                    <span>{item.meta}</span>
                    <span>{String(selectedIndex + 1).padStart(2, "0")}</span>
                  </div>
                ) : null}
              </article>
            </div>
          ))}
        </div>
      </div>

      {showDots ? (
        <div className="flex items-center gap-2">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={cn(
                `${erpTokens.motion} h-2.5 rounded-full`,
                index === selectedIndex
                  ? "w-8 bg-slate-950"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400",
              )}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export { ErpCarousel }
export type { ErpCarouselItem }