"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

import { erpSelectToneTokens, erpTokens } from "./erp-tokens"

function ErpSelect(
  props: React.ComponentProps<typeof SelectPrimitive.Root>,
) {
  return <SelectPrimitive.Root data-slot="erp-select" {...props} />
}

function ErpSelectGroup(
  props: React.ComponentProps<typeof SelectPrimitive.Group>,
) {
  return <SelectPrimitive.Group data-slot="erp-select-group" {...props} />
}

function ErpSelectValue(
  props: React.ComponentProps<typeof SelectPrimitive.Value>,
) {
  return <SelectPrimitive.Value data-slot="erp-select-value" {...props} />
}

function ErpSelectTrigger({
  className,
  children,
  variant = "default",
  size = "md",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  variant?: keyof typeof erpSelectToneTokens
  size?: "sm" | "md" | "lg"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="erp-select-trigger"
      className={cn(
        `${erpTokens.radius.button} ${erpTokens.focusRing} flex w-full items-center justify-between gap-3 border px-4 text-sm outline-none *:data-[slot=erp-select-value]:line-clamp-1`,
        erpSelectToneTokens[variant].trigger,
        erpSelectToneTokens[variant].placeholder,
        erpSelectToneTokens[variant].focus,
        size === "sm" && "h-10 px-3.5 text-[13px]",
        size === "md" && "h-11",
        size === "lg" && "h-12 px-4.5 text-[15px]",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className={cn("h-4 w-4 shrink-0", erpSelectToneTokens[variant].icon)} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function ErpSelectContent({
  className,
  children,
  position = "popper",
  variant = "default",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content> & {
  variant?: keyof typeof erpSelectToneTokens
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="erp-select-content"
        position={position}
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50 overflow-hidden border p-1.5",
          erpTokens.radius.panel,
          erpSelectToneTokens[variant].content,
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className,
        )}
        {...props}
      >
        <ErpSelectScrollUpButton variant={variant} />
        <SelectPrimitive.Viewport
          className={cn(
            "p-0.5",
            position === "popper" && "min-w-[var(--radix-select-trigger-width)]",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <ErpSelectScrollDownButton variant={variant} />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function ErpSelectLabel({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label> & {
  variant?: keyof typeof erpSelectToneTokens
}) {
  return (
    <SelectPrimitive.Label
      data-slot="erp-select-label"
      className={cn(
        `px-3 py-2 ${erpTokens.text.eyebrow}`,
        erpSelectToneTokens[variant].label,
        className,
      )}
      {...props}
    />
  )
}

function ErpSelectItem({
  className,
  children,
  variant = "default",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item> & {
  variant?: keyof typeof erpSelectToneTokens
}) {
  return (
    <SelectPrimitive.Item
      data-slot="erp-select-item"
      className={cn(
        `${erpTokens.motion} relative flex w-full cursor-default items-center gap-3 rounded-2xl py-2.5 pl-3 pr-9 text-sm outline-none`,
        erpSelectToneTokens[variant].item,
        className,
      )}
      {...props}
    >
      <span className="absolute right-3 flex h-4 w-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function ErpSelectSeparator({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator> & {
  variant?: keyof typeof erpSelectToneTokens
}) {
  return (
    <SelectPrimitive.Separator
      data-slot="erp-select-separator"
      className={cn("my-1 h-px", erpSelectToneTokens[variant].separator, className)}
      {...props}
    />
  )
}

function ErpSelectScrollUpButton({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton> & {
  variant?: keyof typeof erpSelectToneTokens
}) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="erp-select-scroll-up-button"
      className={cn("flex items-center justify-center py-1", erpSelectToneTokens[variant].icon, className)}
      {...props}
    >
      <ChevronUp className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function ErpSelectScrollDownButton({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton> & {
  variant?: keyof typeof erpSelectToneTokens
}) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="erp-select-scroll-down-button"
      className={cn("flex items-center justify-center py-1", erpSelectToneTokens[variant].icon, className)}
      {...props}
    >
      <ChevronDown className="h-4 w-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  ErpSelect,
  ErpSelectGroup,
  ErpSelectValue,
  ErpSelectTrigger,
  ErpSelectContent,
  ErpSelectLabel,
  ErpSelectItem,
  ErpSelectSeparator,
  ErpSelectScrollUpButton,
  ErpSelectScrollDownButton,
}