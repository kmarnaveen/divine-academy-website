"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpTooltipContentVariants = cva(
  `${erpTokens.radius.button} z-50 max-w-[280px] border px-3 py-2 text-sm leading-5`,
  {
    variants: {
      variant: {
        default: `${erpTokens.surface.default} ${erpTokens.shadow.panel} text-slate-700`,
        accent: `${erpTokens.surface.accentGradient} ${erpTokens.shadow.panel} text-slate-700`,
        dark: `${erpTokens.surface.dark} ${erpTokens.shadow.dark} text-white/78`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function ErpTooltipProvider({
  delayDuration = 150,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />
}

function ErpTooltip(props: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="erp-tooltip" {...props} />
}

function ErpTooltipTrigger(
  props: React.ComponentProps<typeof TooltipPrimitive.Trigger>,
) {
  return <TooltipPrimitive.Trigger data-slot="erp-tooltip-trigger" {...props} />
}

function ErpTooltipContent({
  className,
  sideOffset = 8,
  variant,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> &
  VariantProps<typeof erpTooltipContentVariants>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="erp-tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=delayed-open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          erpTooltipContentVariants({ variant }),
          className,
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
}

export {
  ErpTooltipProvider,
  ErpTooltip,
  ErpTooltipTrigger,
  ErpTooltipContent,
  erpTooltipContentVariants,
}