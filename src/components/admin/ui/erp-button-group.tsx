import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpButtonGroupVariants = cva(
  "inline-flex w-fit gap-2",
  {
    variants: {
      variant: {
        default: "",
        segmented: `${erpTokens.radius.button} border border-slate-200 bg-white p-1 ${erpTokens.shadow.subtle}`,
        subtle: `${erpTokens.radius.button} bg-slate-100 p-1`,
        dark: `${erpTokens.radius.button} bg-slate-950 p-1`,
      },
      orientation: {
        horizontal: "flex-row items-center",
        vertical: "flex-col items-stretch",
      },
    },
    compoundVariants: [
      {
        variant: ["segmented", "subtle", "dark"],
        orientation: "horizontal",
        className: "gap-1",
      },
      {
        variant: ["segmented", "subtle", "dark"],
        orientation: "vertical",
        className: "gap-1",
      },
    ],
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
    },
  }
)

function ErpButtonGroup({
  className,
  variant,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof erpButtonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="erp-button-group"
      className={cn(erpButtonGroupVariants({ variant, orientation }), className)}
      {...props}
    />
  )
}

export { ErpButtonGroup, erpButtonGroupVariants }