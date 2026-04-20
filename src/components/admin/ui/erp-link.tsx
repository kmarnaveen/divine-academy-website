import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ArrowUpRight } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpLinkVariants = cva(
  `${erpTokens.motion} ${erpTokens.focusRing} inline-flex items-center gap-1.5 font-medium`,
  {
    variants: {
      variant: {
        primary: "text-slate-950 hover:text-slate-700",
        accent: "rounded-full border border-[#eadcca] bg-[#fff8f1] px-3 py-1.5 text-[#9f5d37] hover:bg-[#fdf1e6]",
        subtle: "rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-slate-200",
        quiet: "text-slate-500 hover:text-slate-800",
        inverse: "text-white/80 hover:text-white",
      },
      underline: {
        true: "underline underline-offset-4",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      underline: false,
    },
  }
)

function ErpLink({
  className,
  variant,
  underline,
  asChild = false,
  showExternalIcon = false,
  children,
  ...props
}: React.ComponentProps<"a"> &
  VariantProps<typeof erpLinkVariants> & {
    asChild?: boolean
    showExternalIcon?: boolean
  }) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="erp-link"
      className={cn(erpLinkVariants({ variant, underline }), className)}
      {...props}
    >
      {children}
      {showExternalIcon ? <ArrowUpRight className="h-4 w-4" /> : null}
    </Comp>
  )
}

export { ErpLink, erpLinkVariants }