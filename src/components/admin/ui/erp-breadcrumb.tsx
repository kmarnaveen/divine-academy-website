import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

function ErpBreadcrumb({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="Breadcrumb"
      data-slot="erp-breadcrumb"
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

function ErpBreadcrumbList({
  className,
  ...props
}: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="erp-breadcrumb-list"
      className={cn("flex flex-wrap items-center gap-2 text-sm text-slate-500", className)}
      {...props}
    />
  )
}

function ErpBreadcrumbItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="erp-breadcrumb-item"
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    />
  )
}

function ErpBreadcrumbLink({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="erp-breadcrumb-link"
      className={cn(`${erpTokens.radius.pill} ${erpTokens.motion} px-2 py-1 hover:bg-slate-100 hover:text-slate-800`, className)}
      {...props}
    />
  )
}

function ErpBreadcrumbCurrent({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-current="page"
      data-slot="erp-breadcrumb-current"
      className={cn(`${erpTokens.radius.pill} bg-slate-950 px-2.5 py-1 text-sm font-medium text-white`, className)}
      {...props}
    />
  )
}

function ErpBreadcrumbSeparator({
  className,
  children,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      aria-hidden="true"
      data-slot="erp-breadcrumb-separator"
      className={cn("inline-flex items-center text-slate-300", className)}
      {...props}
    >
      {children ?? <ChevronRight className="h-4 w-4" />}
    </li>
  )
}

export {
  ErpBreadcrumb,
  ErpBreadcrumbList,
  ErpBreadcrumbItem,
  ErpBreadcrumbLink,
  ErpBreadcrumbCurrent,
  ErpBreadcrumbSeparator,
}