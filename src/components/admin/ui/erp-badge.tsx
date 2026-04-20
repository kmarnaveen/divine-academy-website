import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpBadgeToneTokens, erpTokens } from "./erp-tokens"

const erpBadgeVariants = cva(
  `inline-flex w-fit items-center gap-1.5 border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${erpTokens.radius.pill}`,
  {
    variants: {
      variant: {
        neutral: erpBadgeToneTokens.neutral,
        accent: erpBadgeToneTokens.accent,
        success: erpBadgeToneTokens.success,
        warning: erpBadgeToneTokens.warning,
        danger: erpBadgeToneTokens.danger,
        dark: erpBadgeToneTokens.dark,
        outline: erpBadgeToneTokens.outline,
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
)

function ErpBadge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof erpBadgeVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="erp-badge"
      className={cn(erpBadgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { ErpBadge, erpBadgeVariants }