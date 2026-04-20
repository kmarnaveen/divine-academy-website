import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpPaginationLinkVariants = cva(
  `${erpTokens.motion} ${erpTokens.focusRing} inline-flex items-center justify-center gap-2 border text-sm font-medium`,
  {
    variants: {
      variant: {
        default: `${erpTokens.radius.button} border-slate-200 bg-white text-slate-700 hover:bg-slate-50`,
        active: `${erpTokens.radius.button} border-slate-900 bg-slate-950 text-white`,
        subtle: `${erpTokens.radius.button} border-transparent bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-800`,
      },
      size: {
        md: "h-10 min-w-10 px-3",
        sm: "h-8 min-w-8 px-2.5 text-[13px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

function ErpPagination({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      data-slot="erp-pagination"
      className={cn("flex w-full", className)}
      {...props}
    />
  )
}

function ErpPaginationList({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="erp-pagination-list"
      className={cn("flex flex-wrap items-center gap-2", className)}
      {...props}
    />
  )
}

function ErpPaginationItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li data-slot="erp-pagination-item" className={className} {...props} />
}

function ErpPaginationLink({
  className,
  variant,
  size,
  isActive = false,
  ...props
}: React.ComponentProps<"a"> &
  VariantProps<typeof erpPaginationLinkVariants> & {
    isActive?: boolean
  }) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="erp-pagination-link"
      className={cn(
        erpPaginationLinkVariants({
          variant: isActive ? "active" : variant,
          size,
        }),
        className,
      )}
      {...props}
    />
  )
}

function ErpPaginationPrevious(
  props: React.ComponentProps<typeof ErpPaginationLink>,
) {
  return (
    <ErpPaginationLink aria-label="Go to previous page" {...props}>
      <ChevronLeft className="h-4 w-4" />
      <span>Previous</span>
    </ErpPaginationLink>
  )
}

function ErpPaginationNext(
  props: React.ComponentProps<typeof ErpPaginationLink>,
) {
  return (
    <ErpPaginationLink aria-label="Go to next page" {...props}>
      <span>Next</span>
      <ChevronRight className="h-4 w-4" />
    </ErpPaginationLink>
  )
}

function ErpPaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden="true"
      data-slot="erp-pagination-ellipsis"
      className={cn(
        `${erpTokens.radius.button} inline-flex h-10 min-w-10 items-center justify-center border border-slate-200 bg-white text-slate-400`,
        className,
      )}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
    </span>
  )
}

export {
  ErpPagination,
  ErpPaginationList,
  ErpPaginationItem,
  ErpPaginationLink,
  ErpPaginationPrevious,
  ErpPaginationNext,
  ErpPaginationEllipsis,
}