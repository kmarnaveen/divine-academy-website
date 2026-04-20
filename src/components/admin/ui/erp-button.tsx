import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpButtonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:shrink-0 ${erpTokens.radius.button} ${erpTokens.motion} ${erpTokens.focusRing}`,
  {
    variants: {
      variant: {
        primary:
          `bg-slate-950 text-white hover:bg-slate-800 focus-visible:ring-slate-400 ${erpTokens.shadow.button}`,
        secondary:
          "bg-[#f3e4d6] text-slate-950 hover:bg-[#edd9c5] focus-visible:ring-[#d8b99d]",
        inverse:
          "bg-white/[0.08] text-white hover:bg-white/[0.14] focus-visible:ring-white/20",
        outline:
          "border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-slate-300 hover:bg-slate-50 focus-visible:ring-slate-300",
        ghost:
          "bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-300",
        subtle:
          "bg-slate-100 text-slate-800 hover:bg-slate-200 focus-visible:ring-slate-300",
        danger:
          "bg-rose-600 text-white hover:bg-rose-500 focus-visible:ring-rose-300",
      },
      size: {
        sm: "h-9 px-3.5 text-[13px]",
        md: "h-11 px-4.5",
        lg: "h-12 px-5 text-[15px]",
        icon: "h-11 w-11 px-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

function ErpButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof erpButtonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="erp-button"
      className={cn(erpButtonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { ErpButton, erpButtonVariants }