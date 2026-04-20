import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpGridVariants = cva("grid", {
  variants: {
    columns: {
      two: "grid-cols-1 md:grid-cols-2",
      three: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
      four: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
      dashboard: "grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.1fr_0.9fr]",
      analytics: "grid-cols-1 xl:grid-cols-[0.95fr_1.05fr]",
      twelve: "grid-cols-12",
    },
    gap: {
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-6",
    },
  },
  defaultVariants: {
    columns: "two",
    gap: "lg",
  },
})

const erpGridItemVariants = cva("min-w-0", {
  variants: {
    span: {
      auto: "",
      two: "md:col-span-2",
      three: "xl:col-span-3",
      four: "xl:col-span-4",
      six: "xl:col-span-6",
      eight: "xl:col-span-8",
      twelve: "col-span-12",
    },
    surface: {
      none: "",
      default: `${erpTokens.radius.card} ${erpTokens.surface.default} ${erpTokens.shadow.card} p-6`,
      muted: `${erpTokens.radius.card} ${erpTokens.surface.muted} p-6`,
      accent: `${erpTokens.radius.card} ${erpTokens.surface.accentGradient} ${erpTokens.shadow.card} p-6`,
      dark: `${erpTokens.radius.card} ${erpTokens.surface.dark} ${erpTokens.shadow.dark} p-6`,
    },
  },
  defaultVariants: {
    span: "auto",
    surface: "none",
  },
})

function ErpGrid({
  className,
  columns,
  gap,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof erpGridVariants>) {
  return (
    <div
      data-slot="erp-grid"
      className={cn(erpGridVariants({ columns, gap }), className)}
      {...props}
    />
  )
}

function ErpGridItem({
  className,
  span,
  surface,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof erpGridItemVariants>) {
  return (
    <div
      data-slot="erp-grid-item"
      className={cn(erpGridItemVariants({ span, surface }), className)}
      {...props}
    />
  )
}

export { ErpGrid, ErpGridItem, erpGridVariants, erpGridItemVariants }