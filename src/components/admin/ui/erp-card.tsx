import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpCardVariants = cva(
  `flex flex-col border ${erpTokens.radius.card}`,
  {
    variants: {
      variant: {
        default: `${erpTokens.surface.default} ${erpTokens.shadow.card}`,
        muted: erpTokens.surface.muted,
        accent: erpTokens.surface.accentGradient,
        dark: `${erpTokens.surface.dark} ${erpTokens.shadow.dark}`,
        spotlight: `${erpTokens.surface.spotlight} ${erpTokens.shadow.spotlight}`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function ErpCard({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof erpCardVariants>) {
  return (
    <div
      data-slot="erp-card"
      className={cn(erpCardVariants({ variant }), className)}
      {...props}
    />
  )
}

function ErpCardHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-card-header"
      className={cn("flex flex-col gap-2 px-6 pt-6", className)}
      {...props}
    />
  )
}

function ErpCardTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-card-title"
      className={cn(erpTokens.text.title, className)}
      {...props}
    />
  )
}

function ErpCardDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-card-description"
      className={cn("text-sm leading-6 text-current/68", className)}
      {...props}
    />
  )
}

function ErpCardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-card-content"
      className={cn("px-6 pb-6", className)}
      {...props}
    />
  )
}

function ErpCardFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-card-footer"
      className={cn("flex items-center gap-3 px-6 pb-6 pt-2", className)}
      {...props}
    />
  )
}

export {
  ErpCard,
  ErpCardHeader,
  ErpCardTitle,
  ErpCardDescription,
  ErpCardContent,
  ErpCardFooter,
  erpCardVariants,
}