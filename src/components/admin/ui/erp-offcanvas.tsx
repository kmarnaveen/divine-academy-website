"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpOffcanvasContentVariants = cva(
  "fixed z-50 flex w-full flex-col border p-0 data-[state=closed]:animate-out data-[state=open]:animate-in",
  {
    variants: {
      side: {
        right:
          "inset-y-0 right-0 max-w-[calc(100vw-1rem)] data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        left:
          "inset-y-0 left-0 max-w-[calc(100vw-1rem)] data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        bottom:
          "bottom-0 left-0 right-0 max-h-[85vh] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      },
      size: {
        sm: "w-[360px]",
        md: "w-[440px]",
        lg: "w-[560px]",
        full: "w-full",
      },
      variant: {
        default: `${erpTokens.radius.card} ${erpTokens.surface.default} ${erpTokens.shadow.floating}`,
        accent: `${erpTokens.radius.card} ${erpTokens.surface.accentGradient} ${erpTokens.shadow.floating}`,
        dark: `${erpTokens.radius.card} ${erpTokens.surface.dark} ${erpTokens.shadow.dark}`,
      },
    },
    compoundVariants: [
      {
        side: ["right", "left"],
        className: "h-full",
      },
      {
        side: "bottom",
        className: `${erpTokens.radius.hero} mx-auto mb-2 max-w-5xl`,
      },
    ],
    defaultVariants: {
      side: "right",
      size: "md",
      variant: "default",
    },
  }
)

function ErpOffcanvas(
  props: React.ComponentProps<typeof DialogPrimitive.Root>,
) {
  return <DialogPrimitive.Root data-slot="erp-offcanvas" {...props} />
}

function ErpOffcanvasTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>,
) {
  return <DialogPrimitive.Trigger data-slot="erp-offcanvas-trigger" {...props} />
}

function ErpOffcanvasContent({
  className,
  children,
  side,
  size,
  variant,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> &
  VariantProps<typeof erpOffcanvasContentVariants> & {
    showCloseButton?: boolean
  }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-[2px] data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content
        data-slot="erp-offcanvas-content"
        className={cn(
          erpOffcanvasContentVariants({ side, size, variant }),
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton ? (
          <DialogPrimitive.Close
            className={cn(
              `${erpTokens.motion} absolute right-4 top-4 flex h-10 w-10 items-center justify-center ${erpTokens.radius.button}`,
              variant === "dark"
                ? "bg-white/10 text-white/72 hover:bg-white/15 hover:text-white"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900",
            )}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        ) : null}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}

function ErpOffcanvasHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-offcanvas-header"
      className={cn("space-y-2 px-6 pt-6", className)}
      {...props}
    />
  )
}

function ErpOffcanvasBody({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-offcanvas-body"
      className={cn("flex-1 overflow-y-auto px-6 py-5", className)}
      {...props}
    />
  )
}

function ErpOffcanvasFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-offcanvas-footer"
      className={cn("flex flex-col-reverse gap-3 border-t border-current/10 px-6 py-5 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  )
}

function ErpOffcanvasTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="erp-offcanvas-title"
      className={cn("text-2xl font-semibold tracking-[-0.03em]", className)}
      {...props}
    />
  )
}

function ErpOffcanvasDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="erp-offcanvas-description"
      className={cn(erpTokens.text.body, className)}
      {...props}
    />
  )
}

export {
  ErpOffcanvas,
  ErpOffcanvasTrigger,
  ErpOffcanvasContent,
  ErpOffcanvasHeader,
  ErpOffcanvasBody,
  ErpOffcanvasFooter,
  ErpOffcanvasTitle,
  ErpOffcanvasDescription,
}