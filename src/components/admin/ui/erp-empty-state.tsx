import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpEmptyStateToneTokens, erpTokens } from "./erp-tokens"

const erpEmptyStateVariants = cva(
  `${erpTokens.radius.card} flex border p-6`,
  {
    variants: {
      variant: {
        default: erpEmptyStateToneTokens.default.panel,
        accent: erpEmptyStateToneTokens.accent.panel,
        muted: erpEmptyStateToneTokens.muted.panel,
        dark: erpEmptyStateToneTokens.dark.panel,
      },
      size: {
        sm: "gap-4 p-5",
        md: "gap-5 p-6 sm:items-center sm:text-center",
        hero: "gap-6 p-8 sm:items-center sm:text-center sm:p-10",
      },
      align: {
        start: "flex-col items-start text-left",
        center: "flex-col items-center text-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      align: "center",
    },
  },
)

function ErpEmptyState({
  className,
  variant,
  size,
  align,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof erpEmptyStateVariants>) {
  return (
    <div
      data-slot="erp-empty-state"
      className={cn(erpEmptyStateVariants({ variant, size, align }), className)}
      {...props}
    />
  )
}

function ErpEmptyStateMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: keyof typeof erpEmptyStateToneTokens
}) {
  return (
    <div
      data-slot="erp-empty-state-media"
      className={cn(
        `${erpTokens.radius.avatar} flex h-16 w-16 items-center justify-center border text-xl`,
        erpEmptyStateToneTokens[variant].iconWrap,
        className,
      )}
      {...props}
    />
  )
}

function ErpEmptyStateTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-empty-state-title"
      className={cn("text-xl font-semibold tracking-[-0.03em]", className)}
      {...props}
    />
  )
}

function ErpEmptyStateDescription({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: keyof typeof erpEmptyStateToneTokens
}) {
  return (
    <div
      data-slot="erp-empty-state-description"
      className={cn("max-w-xl text-sm leading-6", erpEmptyStateToneTokens[variant].description, className)}
      {...props}
    />
  )
}

function ErpEmptyStateActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-empty-state-actions"
      className={cn("flex flex-wrap items-center gap-3", className)}
      {...props}
    />
  )
}

export {
  ErpEmptyState,
  ErpEmptyStateMedia,
  ErpEmptyStateTitle,
  ErpEmptyStateDescription,
  ErpEmptyStateActions,
  erpEmptyStateVariants,
}