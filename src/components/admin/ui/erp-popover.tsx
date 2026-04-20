"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpPopoverContentVariants = cva(
  `${erpTokens.radius.panel} z-50 border p-4`,
  {
    variants: {
      variant: {
        default: `${erpTokens.surface.default} ${erpTokens.shadow.panel}`,
        accent: `${erpTokens.surface.accentGradient} ${erpTokens.shadow.panel}`,
        dark: `${erpTokens.surface.dark} ${erpTokens.shadow.dark}`,
      },
      size: {
        sm: "w-56",
        md: "w-72",
        lg: "w-96",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

function ErpPopover(
  props: React.ComponentProps<typeof PopoverPrimitive.Root>,
) {
  return <PopoverPrimitive.Root data-slot="erp-popover" {...props} />
}

function ErpPopoverTrigger(
  props: React.ComponentProps<typeof PopoverPrimitive.Trigger>,
) {
  return <PopoverPrimitive.Trigger data-slot="erp-popover-trigger" {...props} />
}

function ErpPopoverContent({
  className,
  sideOffset = 10,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content> &
  VariantProps<typeof erpPopoverContentVariants>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="erp-popover-content"
        sideOffset={sideOffset}
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          erpPopoverContentVariants({ variant, size }),
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

export { ErpPopover, ErpPopoverTrigger, ErpPopoverContent }