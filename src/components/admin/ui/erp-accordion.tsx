"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpAccordionItemVariants = cva(
  `overflow-hidden border ${erpTokens.radius.panel}`,
  {
    variants: {
      variant: {
        surface: erpTokens.surface.default,
        muted: erpTokens.surface.muted,
        accent: erpTokens.surface.accentGradient,
      },
    },
    defaultVariants: {
      variant: "surface",
    },
  }
)

function ErpAccordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="erp-accordion"
      className={cn("space-y-3", className)}
      {...props}
    />
  )
}

function ErpAccordionItem({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item> &
  VariantProps<typeof erpAccordionItemVariants>) {
  return (
    <AccordionPrimitive.Item
      data-slot="erp-accordion-item"
      className={cn(erpAccordionItemVariants({ variant }), className)}
      {...props}
    />
  )
}

function ErpAccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="erp-accordion-trigger"
        className={cn(
          `flex flex-1 items-start justify-between gap-4 px-5 py-4 text-left text-slate-950 outline-none hover:opacity-80 [&[data-state=open]>svg]:rotate-180 ${erpTokens.text.label}`,
          className
        )}
        {...props}
      >
        <span className="min-w-0">{children}</span>
        <ChevronDown className="mt-0.5 size-4 shrink-0 opacity-55 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function ErpAccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="erp-accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...props}
    >
      <div className={cn(`px-5 pb-5 ${erpTokens.text.body}`, className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export {
  ErpAccordion,
  ErpAccordionItem,
  ErpAccordionTrigger,
  ErpAccordionContent,
  erpAccordionItemVariants,
}