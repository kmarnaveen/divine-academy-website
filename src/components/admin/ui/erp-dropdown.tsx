"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpDropdownContentVariants = cva(
  `${erpTokens.radius.panel} max-h-[calc(100dvh-2rem)] min-w-[220px] overflow-y-auto border p-1.5`,
  {
    variants: {
      variant: {
        default: `${erpTokens.surface.default} ${erpTokens.shadow.panel}`,
        accent: `${erpTokens.surface.accentGradient} ${erpTokens.shadow.panel}`,
        dark: `${erpTokens.surface.dark} ${erpTokens.shadow.dark}`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const erpDropdownItemVariants = cva(
  `${erpTokens.motion} relative flex cursor-default select-none items-center gap-3 rounded-2xl px-3 py-2 text-sm outline-none`,
  {
    variants: {
      surface: {
        default: "text-slate-700 focus:bg-slate-100 focus:text-slate-950",
        dark: "text-white/82 focus:bg-white/10 focus:text-white",
      },
      tone: {
        default: "",
        danger: "text-rose-600 focus:bg-rose-50 focus:text-rose-700",
      },
      inset: {
        true: "pl-8",
        false: "",
      },
    },
    defaultVariants: {
      surface: "default",
      tone: "default",
      inset: false,
    },
  }
)

function ErpDropdownMenu(
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Root>,
) {
  return <DropdownMenuPrimitive.Root data-slot="erp-dropdown" {...props} />
}

function ErpDropdownMenuTrigger(
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>,
) {
  return (
    <DropdownMenuPrimitive.Trigger data-slot="erp-dropdown-trigger" {...props} />
  )
}

function ErpDropdownMenuContent({
  className,
  sideOffset = 8,
  variant,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content> &
  VariantProps<typeof erpDropdownContentVariants>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="erp-dropdown-content"
        sideOffset={sideOffset}
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50",
          erpDropdownContentVariants({ variant }),
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function ErpDropdownMenuLabel({
  className,
  surface = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  surface?: "default" | "dark"
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="erp-dropdown-label"
      className={cn(
        `px-3 py-2 ${erpTokens.text.eyebrow}`,
        surface === "dark" ? "text-white/45" : "text-slate-500",
        className,
      )}
      {...props}
    />
  )
}

function ErpDropdownMenuItem({
  className,
  surface,
  tone,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> &
  VariantProps<typeof erpDropdownItemVariants>) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="erp-dropdown-item"
      className={cn(
        erpDropdownItemVariants({ surface, tone, inset }),
        className,
      )}
      {...props}
    />
  )
}

function ErpDropdownMenuCheckboxItem({
  className,
  children,
  checked,
  surface = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & {
  surface?: "default" | "dark"
}) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      checked={checked}
      data-slot="erp-dropdown-checkbox-item"
      className={cn(
        erpDropdownItemVariants({ surface, inset: true }),
        className,
      )}
      {...props}
    >
      <span className="absolute left-3 flex h-4 w-4 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function ErpDropdownMenuSubTrigger({
  className,
  surface = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  surface?: "default" | "dark"
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="erp-dropdown-sub-trigger"
      className={cn(
        erpDropdownItemVariants({ surface }),
        "justify-between",
        className,
      )}
      {...props}
    >
      {props.children}
      <ChevronRight className="h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function ErpDropdownMenuSubContent({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent> &
  VariantProps<typeof erpDropdownContentVariants>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="erp-dropdown-sub-content"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=right]:slide-in-from-left-2 z-50 max-h-[calc(100dvh-2rem)] overflow-y-auto",
        erpDropdownContentVariants({ variant }),
        className,
      )}
      {...props}
    />
  )
}

function ErpDropdownMenuSeparator({
  className,
  surface = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator> & {
  surface?: "default" | "dark"
}) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="erp-dropdown-separator"
      className={cn(
        "my-1 h-px",
        surface === "dark" ? "bg-white/10" : "bg-slate-200",
        className,
      )}
      {...props}
    />
  )
}

function ErpDropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="erp-dropdown-shortcut"
      className={cn("ml-auto text-[11px] uppercase tracking-[0.18em] opacity-50", className)}
      {...props}
    />
  )
}

const ErpDropdownMenuSub = DropdownMenuPrimitive.Sub
const ErpDropdownMenuGroup = DropdownMenuPrimitive.Group

export {
  ErpDropdownMenu,
  ErpDropdownMenuTrigger,
  ErpDropdownMenuContent,
  ErpDropdownMenuLabel,
  ErpDropdownMenuItem,
  ErpDropdownMenuCheckboxItem,
  ErpDropdownMenuSeparator,
  ErpDropdownMenuShortcut,
  ErpDropdownMenuSub,
  ErpDropdownMenuSubTrigger,
  ErpDropdownMenuSubContent,
  ErpDropdownMenuGroup,
}