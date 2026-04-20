import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens, erpTypographyScaleTokens } from "./erp-tokens"

const erpTypographyVariants = cva("text-slate-950", {
  variants: {
    variant: {
      display: erpTypographyScaleTokens.display,
      heading: erpTypographyScaleTokens.heading,
      subheading: erpTypographyScaleTokens.subheading,
      title: erpTypographyScaleTokens.title,
      body: erpTypographyScaleTokens.body,
      muted: erpTypographyScaleTokens.muted,
      eyebrow: `${erpTokens.text.eyebrow} text-slate-500`,
      quote: "border-l-2 border-[#eadcca] pl-5 text-base italic leading-8 text-slate-700",
      code: erpTypographyScaleTokens.code,
      overline: "text-xs font-semibold uppercase tracking-[0.24em] text-slate-400",
    },
    tone: {
      default: "text-slate-950",
      muted: "text-slate-500",
      accent: "text-[#9f5d37]",
      inverse: "text-white",
    },
  },
  compoundVariants: [
    {
      variant: ["body", "muted"],
      tone: "default",
      className: "text-slate-600",
    },
    {
      variant: ["display", "heading", "subheading", "title"],
      tone: "default",
      className: "text-slate-950",
    },
  ],
  defaultVariants: {
    variant: "body",
    tone: "default",
  },
})

function ErpTypography({
  className,
  variant,
  tone,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof erpTypographyVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="erp-typography"
      className={cn(erpTypographyVariants({ variant, tone }), className)}
      {...props}
    />
  )
}

function ErpTextList({
  className,
  ordered = false,
  ...props
}: React.ComponentProps<"ul"> & {
  ordered?: boolean
}) {
  const Comp = ordered ? "ol" : "ul"

  return (
    <Comp
      data-slot="erp-text-list"
      className={cn("space-y-2 pl-5 text-sm leading-7 text-slate-600 marker:text-slate-400", className)}
      {...props}
    />
  )
}

export { ErpTypography, ErpTextList, erpTypographyVariants }