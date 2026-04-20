"use client"

import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { ChevronDown } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpCollapseVariants = cva(
  `${erpTokens.radius.panel} overflow-hidden border`,
  {
    variants: {
      variant: {
        default: `${erpTokens.surface.default} ${erpTokens.shadow.panel}`,
        muted: erpTokens.surface.muted,
        accent: erpTokens.surface.accentGradient,
        dark: `${erpTokens.surface.dark} ${erpTokens.shadow.dark}`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function ErpCollapse({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root> &
  VariantProps<typeof erpCollapseVariants>) {
  return (
    <CollapsiblePrimitive.Root
      data-slot="erp-collapse"
      className={cn(erpCollapseVariants({ variant }), className)}
      {...props}
    />
  )
}

function ErpCollapseTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Trigger>) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="erp-collapse-trigger"
      className={cn(
        `${erpTokens.motion} flex w-full items-center justify-between gap-3 px-5 py-4 text-left ${erpTokens.text.label} [&[data-state=open]>svg]:rotate-180`,
        className,
      )}
      {...props}
    >
      <span className="min-w-0">{children}</span>
      <ChevronDown className="h-4 w-4 shrink-0 opacity-55 transition-transform duration-200" />
    </CollapsiblePrimitive.Trigger>
  )
}

function ErpCollapseContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Content>) {
  return (
    <CollapsiblePrimitive.Content
      data-slot="erp-collapse-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...props}
    >
      <div className={cn(`px-5 pb-5 ${erpTokens.text.body}`, className)}>
        {children}
      </div>
    </CollapsiblePrimitive.Content>
  )
}

export { ErpCollapse, ErpCollapseTrigger, ErpCollapseContent }