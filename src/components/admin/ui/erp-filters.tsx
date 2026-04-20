import * as React from "react"
import { Search } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpFilterToneTokens, erpTokens } from "./erp-tokens"

const erpFilterBarVariants = cva(
  `${erpTokens.radius.card} border p-4`,
  {
    variants: {
      variant: {
        default: erpFilterToneTokens.default.bar,
        accent: erpFilterToneTokens.accent.bar,
        dark: erpFilterToneTokens.dark.bar,
      },
      density: {
        default: "space-y-4",
        compact: "space-y-3 p-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      density: "default",
    },
  },
)

const erpFilterChipVariants = cva(
  `${erpTokens.radius.button} ${erpTokens.motion} inline-flex items-center justify-center gap-2 border px-3.5 py-2 text-sm font-medium`,
  {
    variants: {
      variant: {
        default: erpFilterToneTokens.default.chip,
        accent: erpFilterToneTokens.accent.chip,
        dark: erpFilterToneTokens.dark.chip,
      },
      active: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        active: true,
        className: erpFilterToneTokens.default.chipActive,
      },
      {
        variant: "accent",
        active: true,
        className: erpFilterToneTokens.accent.chipActive,
      },
      {
        variant: "dark",
        active: true,
        className: erpFilterToneTokens.dark.chipActive,
      },
    ],
    defaultVariants: {
      variant: "default",
      active: false,
    },
  },
)

function ErpFilterBar({
  className,
  variant,
  density,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof erpFilterBarVariants>) {
  return (
    <div
      data-slot="erp-filter-bar"
      className={cn(erpFilterBarVariants({ variant, density }), className)}
      {...props}
    />
  )
}

function ErpFilterGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-filter-group"
      className={cn("flex flex-wrap items-center gap-3", className)}
      {...props}
    />
  )
}

function ErpFilterSearch({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"input"> & {
  variant?: keyof typeof erpFilterToneTokens
}) {
  return (
    <label
      data-slot="erp-filter-search-shell"
      className={cn(
        `${erpTokens.radius.button} flex min-w-[220px] flex-1 items-center gap-3 border px-4 py-3 text-sm shadow-sm`,
        erpFilterToneTokens[variant].search,
        className,
      )}
    >
      <Search className="h-4 w-4 shrink-0 text-current/60" />
      <input
        data-slot="erp-filter-search"
        className="w-full bg-transparent outline-none placeholder:text-current/60"
        {...props}
      />
    </label>
  )
}

function ErpFilterChip({
  className,
  variant,
  active,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof erpFilterChipVariants>) {
  return (
    <button
      type="button"
      data-slot="erp-filter-chip"
      aria-pressed={active ?? false}
      className={cn(erpFilterChipVariants({ variant, active }), className)}
      {...props}
    />
  )
}

function ErpFilterSummary({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: keyof typeof erpFilterToneTokens
}) {
  return (
    <div
      data-slot="erp-filter-summary"
      className={cn("text-sm leading-6", erpFilterToneTokens[variant].meta, className)}
      {...props}
    />
  )
}

function ErpFilterDivider({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: keyof typeof erpFilterToneTokens
}) {
  return (
    <div
      data-slot="erp-filter-divider"
      className={cn("h-px w-full", erpFilterToneTokens[variant].divider, className)}
      {...props}
    />
  )
}

export {
  ErpFilterBar,
  ErpFilterGroup,
  ErpFilterSearch,
  ErpFilterChip,
  ErpFilterSummary,
  ErpFilterDivider,
  erpFilterBarVariants,
  erpFilterChipVariants,
}