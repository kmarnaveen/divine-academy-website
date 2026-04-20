import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpListGroupVariants = cva(
  `${erpTokens.radius.card} overflow-hidden border`,
  {
    variants: {
      variant: {
        default: `${erpTokens.surface.default} ${erpTokens.shadow.card}`,
        muted: erpTokens.surface.muted,
        accent: `${erpTokens.surface.accentGradient} ${erpTokens.shadow.card}`,
        dark: `${erpTokens.surface.dark} ${erpTokens.shadow.dark}`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const erpListGroupItemVariants = cva(
  `${erpTokens.motion} group flex w-full items-start justify-between gap-4 border-b px-4 py-4 text-left last:border-b-0`,
  {
    variants: {
      tone: {
        default: "border-slate-200 text-slate-950 hover:bg-slate-50",
        dark: "border-white/10 text-white hover:bg-white/5",
      },
      active: {
        true: "bg-[#fff8f1]",
        false: "",
      },
      interactive: {
        true: "cursor-pointer",
        false: "cursor-default",
      },
    },
    defaultVariants: {
      tone: "default",
      active: false,
      interactive: false,
    },
  }
)

function ErpListGroup({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof erpListGroupVariants>) {
  return (
    <div
      role="list"
      data-slot="erp-list-group"
      className={cn(erpListGroupVariants({ variant }), className)}
      {...props}
    />
  )
}

function ErpListGroupItem({
  className,
  tone,
  active,
  interactive,
  asChild = false,
  showChevron = false,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof erpListGroupItemVariants> & {
    asChild?: boolean
    showChevron?: boolean
  }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="erp-list-group-item"
      className={cn(
        erpListGroupItemVariants({ tone, active, interactive }),
        className,
      )}
      {...props}
    >
      <div className="min-w-0 flex-1">{children}</div>
      {showChevron ? (
        <ChevronRight className="mt-1 h-4 w-4 shrink-0 opacity-45" />
      ) : null}
    </Comp>
  )
}

function ErpListGroupTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-list-group-title"
      className={cn(erpTokens.text.label, className)}
      {...props}
    />
  )
}

function ErpListGroupDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-list-group-description"
      className={cn(erpTokens.text.body, className)}
      {...props}
    />
  )
}

function ErpListGroupMeta({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-list-group-meta"
      className={cn("mt-1 text-xs uppercase tracking-[0.18em] text-slate-400", className)}
      {...props}
    />
  )
}

export {
  ErpListGroup,
  ErpListGroupItem,
  ErpListGroupTitle,
  ErpListGroupDescription,
  ErpListGroupMeta,
}