import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpPlaceholderVariants = cva(
  `${erpTokens.shimmer} border border-slate-200 bg-slate-100/90`,
  {
    variants: {
      shape: {
        line: "h-4 rounded-full",
        block: `${erpTokens.radius.panel} h-24`,
        avatar: `${erpTokens.radius.avatar} h-12 w-12 rounded-[24px]`,
        card: `${erpTokens.radius.card} h-52`,
      },
      tone: {
        default: "bg-slate-100",
        muted: "bg-slate-200/70",
        accent: "border-[#eadcca] bg-[#f8ede1]",
        dark: "border-white/10 bg-white/10 before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]",
      },
    },
    defaultVariants: {
      shape: "line",
      tone: "default",
    },
  }
)

function ErpPlaceholder({
  className,
  shape,
  tone,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof erpPlaceholderVariants>) {
  return (
    <div
      aria-hidden="true"
      data-slot="erp-placeholder"
      className={cn(erpPlaceholderVariants({ shape, tone }), className)}
      {...props}
    />
  )
}

function ErpPlaceholderText({
  className,
  lines = 3,
  tone,
  ...props
}: React.ComponentProps<"div"> & {
  lines?: number
  tone?: VariantProps<typeof erpPlaceholderVariants>["tone"]
}) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {Array.from({ length: lines }).map((_, index) => (
        <ErpPlaceholder
          key={index}
          shape="line"
          tone={tone}
          className={cn(index === lines - 1 ? "w-2/3" : "w-full")}
        />
      ))}
    </div>
  )
}

function ErpPlaceholderCard({
  className,
  tone,
  ...props
}: React.ComponentProps<"div"> & {
  tone?: VariantProps<typeof erpPlaceholderVariants>["tone"]
}) {
  return (
    <div
      className={cn(`${erpTokens.radius.card} border border-slate-200 bg-white p-5`, className)}
      {...props}
    >
      <div className="flex items-start gap-3">
        <ErpPlaceholder shape="avatar" tone={tone} />
        <div className="min-w-0 flex-1 space-y-3">
          <ErpPlaceholder shape="line" tone={tone} className="w-1/3" />
          <ErpPlaceholderText lines={3} tone={tone} />
        </div>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <ErpPlaceholder shape="block" tone={tone} />
        <ErpPlaceholder shape="block" tone={tone} />
        <ErpPlaceholder shape="block" tone={tone} />
      </div>
    </div>
  )
}

export { ErpPlaceholder, ErpPlaceholderText, ErpPlaceholderCard, erpPlaceholderVariants }