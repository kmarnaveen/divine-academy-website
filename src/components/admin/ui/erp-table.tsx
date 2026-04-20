import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTableToneTokens, erpTokens } from "./erp-tokens"

const erpTableSurfaceVariants = cva(
  `${erpTokens.radius.card} overflow-hidden border`,
  {
    variants: {
      variant: {
        default: `${erpTokens.surface.default} ${erpTokens.shadow.card}`,
        muted: erpTokens.surface.muted,
        accent: `${erpTokens.surface.accentGradient} ${erpTokens.shadow.card}`,
        dark: `${erpTokens.surface.dark} ${erpTokens.shadow.dark}`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

const erpTableRowVariants = cva(
  "border-b transition-colors last:border-b-0",
  {
    variants: {
      tone: {
        default: `${erpTableToneTokens.default.row} border-slate-200/80`,
        accent: `${erpTableToneTokens.accent.row} border-[#eadcca]`,
        success: `${erpTableToneTokens.success.row} border-emerald-200`,
        warning: `${erpTableToneTokens.warning.row} border-amber-200`,
        danger: `${erpTableToneTokens.danger.row} border-rose-200`,
        dark: `${erpTableToneTokens.dark.row} border-white/10`,
      },
      interactive: {
        true: "cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      tone: "default",
      interactive: false,
    },
  },
)

function ErpTable({
  className,
  variant,
  ...props
}: React.ComponentProps<"table"> &
  VariantProps<typeof erpTableSurfaceVariants>) {
  return (
    <div
      data-slot="erp-table-shell"
      className={cn(erpTableSurfaceVariants({ variant }), className)}
    >
      <div className="overflow-x-auto">
        <table data-slot="erp-table" className="w-full min-w-[680px] caption-bottom" {...props} />
      </div>
    </div>
  )
}

function ErpTableHeader({
  className,
  ...props
}: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="erp-table-header"
      className={cn("border-b border-slate-200/80 bg-slate-50/90", className)}
      {...props}
    />
  )
}

function ErpTableBody({
  className,
  ...props
}: React.ComponentProps<"tbody">) {
  return <tbody data-slot="erp-table-body" className={className} {...props} />
}

function ErpTableFooter({
  className,
  ...props
}: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="erp-table-footer"
      className={cn("border-t border-slate-200/80 bg-slate-50/80", className)}
      {...props}
    />
  )
}

function ErpTableRow({
  className,
  tone,
  interactive,
  ...props
}: React.ComponentProps<"tr"> & VariantProps<typeof erpTableRowVariants>) {
  return (
    <tr
      data-slot="erp-table-row"
      className={cn(erpTableRowVariants({ tone, interactive }), className)}
      {...props}
    />
  )
}

function ErpTableHead({
  className,
  ...props
}: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="erp-table-head"
      className={cn(
        "h-12 px-5 text-left align-middle text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500",
        className,
      )}
      {...props}
    />
  )
}

function ErpTableCell({
  className,
  tone = "default",
  ...props
}: React.ComponentProps<"td"> & {
  tone?: keyof typeof erpTableToneTokens
}) {
  return (
    <td
      data-slot="erp-table-cell"
      className={cn(
        "px-5 py-4 align-middle text-sm leading-6",
        erpTableToneTokens[tone].cell,
        className,
      )}
      {...props}
    />
  )
}

function ErpTableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="erp-table-caption"
      className={cn("px-5 py-4 text-left text-sm text-slate-500", className)}
      {...props}
    />
  )
}

export {
  ErpTable,
  ErpTableHeader,
  ErpTableBody,
  ErpTableFooter,
  ErpTableHead,
  ErpTableRow,
  ErpTableCell,
  ErpTableCaption,
  erpTableSurfaceVariants,
  erpTableRowVariants,
}