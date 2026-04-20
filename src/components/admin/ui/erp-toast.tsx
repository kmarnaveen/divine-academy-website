"use client"

import * as React from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"
import { X } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpToastToneTokens, erpTokens } from "./erp-tokens"

const erpToastVariants = cva(
  `${erpTokens.radius.panel} group pointer-events-auto relative flex w-full items-start gap-3 border p-4 shadow-[0_22px_60px_-40px_rgba(15,23,42,0.35)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-right-3 data-[state=closed]:slide-out-to-right-full data-[swipe=end]:slide-out-to-right-full`,
  {
    variants: {
      variant: {
        default: erpToastToneTokens.default.panel,
        success: erpToastToneTokens.success.panel,
        warning: erpToastToneTokens.warning.panel,
        danger: erpToastToneTokens.danger.panel,
        dark: erpToastToneTokens.dark.panel,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

function ErpToastProvider(
  props: React.ComponentProps<typeof ToastPrimitive.Provider>,
) {
  return <ToastPrimitive.Provider data-slot="erp-toast-provider" {...props} />
}

function ErpToastViewport({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Viewport>) {
  return (
    <ToastPrimitive.Viewport
      data-slot="erp-toast-viewport"
      className={cn(
        "fixed bottom-0 right-0 z-[120] flex w-full max-w-[420px] flex-col gap-3 p-4 outline-none",
        className,
      )}
      {...props}
    />
  )
}

function ErpToast({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Root> &
  VariantProps<typeof erpToastVariants>) {
  return (
    <ToastPrimitive.Root
      data-slot="erp-toast"
      className={cn(erpToastVariants({ variant }), className)}
      {...props}
    />
  )
}

function ErpToastTitle({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Title>) {
  return (
    <ToastPrimitive.Title
      data-slot="erp-toast-title"
      className={cn("text-sm font-semibold tracking-[-0.01em]", className)}
      {...props}
    />
  )
}

function ErpToastDescription({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Description> & {
  variant?: keyof typeof erpToastToneTokens
}) {
  return (
    <ToastPrimitive.Description
      data-slot="erp-toast-description"
      className={cn("mt-1 text-sm leading-6", erpToastToneTokens[variant].description, className)}
      {...props}
    />
  )
}

function ErpToastAction({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Action> & {
  variant?: keyof typeof erpToastToneTokens
}) {
  return (
    <ToastPrimitive.Action
      data-slot="erp-toast-action"
      className={cn(
        `${erpTokens.radius.button} ${erpTokens.motion} inline-flex h-10 items-center justify-center border px-3.5 text-sm font-medium`,
        erpToastToneTokens[variant].action,
        className,
      )}
      {...props}
    />
  )
}

function ErpToastClose({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Close> & {
  variant?: keyof typeof erpToastToneTokens
}) {
  return (
    <ToastPrimitive.Close
      data-slot="erp-toast-close"
      className={cn(
        `${erpTokens.radius.button} ${erpTokens.motion} absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center`,
        erpToastToneTokens[variant].close,
        className,
      )}
      toast-close=""
      {...props}
    >
      <X className="h-4 w-4" />
    </ToastPrimitive.Close>
  )
}

export {
  ErpToastProvider,
  ErpToastViewport,
  ErpToast,
  ErpToastTitle,
  ErpToastDescription,
  ErpToastAction,
  ErpToastClose,
  erpToastVariants,
}