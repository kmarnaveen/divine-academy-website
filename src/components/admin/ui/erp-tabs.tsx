"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpTabsListVariants = cva(
  `inline-flex w-fit items-center ${erpTokens.motion}`,
  {
    variants: {
      variant: {
        default: `${erpTokens.radius.button} border border-slate-200 bg-white p-1 ${erpTokens.shadow.subtle}`,
        subtle: `${erpTokens.radius.button} bg-slate-100 p-1`,
        dark: `${erpTokens.radius.button} bg-slate-950 p-1`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const erpTabsTriggerVariants = cva(
  `${erpTokens.motion} ${erpTokens.focusRing} inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2 text-sm font-medium`,
  {
    variants: {
      variant: {
        default:
          `${erpTokens.radius.button} text-slate-600 data-[state=active]:bg-slate-950 data-[state=active]:text-white hover:text-slate-950`,
        subtle:
          `${erpTokens.radius.button} text-slate-600 data-[state=active]:bg-white data-[state=active]:text-slate-950 hover:text-slate-950`,
        dark:
          `${erpTokens.radius.button} text-white/58 data-[state=active]:bg-white data-[state=active]:text-slate-950 hover:text-white`,
        underline:
          "rounded-none border-b-2 border-transparent px-0 py-3 text-slate-500 data-[state=active]:border-slate-950 data-[state=active]:text-slate-950 hover:text-slate-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function ErpTabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="erp-tabs" className={cn("flex flex-col gap-4", className)} {...props} />
}

function ErpTabsList({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof erpTabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="erp-tabs-list"
      className={cn(erpTabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function ErpTabsTrigger({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & VariantProps<typeof erpTabsTriggerVariants>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="erp-tabs-trigger"
      className={cn(erpTabsTriggerVariants({ variant }), className)}
      {...props}
    />
  )
}

function ErpTabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="erp-tabs-content"
      className={cn("outline-none", className)}
      {...props}
    />
  )
}

export {
  ErpTabs,
  ErpTabsList,
  ErpTabsTrigger,
  ErpTabsContent,
  erpTabsListVariants,
  erpTabsTriggerVariants,
}