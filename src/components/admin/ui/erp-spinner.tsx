import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpSpinnerVariants = cva(
  `inline-flex animate-spin rounded-full border-solid ${erpTokens.motion}`,
  {
    variants: {
      size: {
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-[2.5px]",
        lg: "h-9 w-9 border-[3px]",
        xl: "h-12 w-12 border-4",
      },
      tone: {
        default: "border-slate-200 border-t-slate-950",
        accent: "border-[#f4e6d7] border-t-[#9f5d37]",
        success: "border-emerald-100 border-t-emerald-600",
        warning: "border-amber-100 border-t-amber-500",
        inverse: "border-white/20 border-t-white",
      },
    },
    defaultVariants: {
      size: "md",
      tone: "default",
    },
  }
)

function ErpSpinner({
  className,
  size,
  tone,
  label,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof erpSpinnerVariants> & {
    label?: string
  }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)} {...props}>
      <span data-slot="erp-spinner" aria-hidden="true" className={erpSpinnerVariants({ size, tone })} />
      {label ? <span className="text-sm text-slate-600">{label}</span> : null}
    </span>
  )
}

export { ErpSpinner, erpSpinnerVariants }