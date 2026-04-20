"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpModalOverlayClassName =
  "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-slate-950/45 backdrop-blur-[2px]"

const erpModalContentVariants = cva(
  "fixed left-1/2 top-1/2 z-50 flex max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] flex-col gap-0 overflow-hidden border p-0 duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
  {
    variants: {
      variant: {
        default: `${erpTokens.radius.card} ${erpTokens.surface.default} ${erpTokens.shadow.floating}`,
        accent: `${erpTokens.radius.card} ${erpTokens.surface.accentGradient} ${erpTokens.shadow.floating}`,
        dark: `${erpTokens.radius.card} ${erpTokens.surface.dark} ${erpTokens.shadow.dark}`,
      },
      size: {
        sm: "sm:max-w-md",
        md: "sm:max-w-xl",
        lg: "sm:max-w-2xl",
        xl: "sm:max-w-4xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

function ErpModal(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="erp-modal" {...props} />
}

function ErpModalTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>,
) {
  return <DialogPrimitive.Trigger data-slot="erp-modal-trigger" {...props} />
}

function ErpModalClose(props: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="erp-modal-close" {...props} />
}

function ErpModalContent({
  className,
  children,
  variant,
  size,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> &
  VariantProps<typeof erpModalContentVariants> & {
    showCloseButton?: boolean
  }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={erpModalOverlayClassName} />
      <DialogPrimitive.Content
        data-slot="erp-modal-content"
        className={cn(
          erpModalContentVariants({ variant, size }),
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

function ErpModalHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-modal-header"
      className={cn("space-y-2 px-6 pt-6", className)}
      {...props}
    />
  )
}

function ErpModalBody({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-modal-body"
      className={cn("min-h-0 flex-1 overflow-y-auto px-6 py-5", className)}
      {...props}
    />
  )
}

function ErpModalFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-modal-footer"
      className={cn("flex flex-col-reverse gap-3 border-t border-current/10 px-6 py-5 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  )
}

function ErpModalTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="erp-modal-title"
      className={cn("text-2xl font-semibold tracking-[-0.03em]", className)}
      {...props}
    />
  )
}

function ErpModalDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="erp-modal-description"
      className={cn(erpTokens.text.body, className)}
      {...props}
    />
  )
}

export {
  ErpModal,
  ErpModalTrigger,
  ErpModalClose,
  ErpModalContent,
  ErpModalHeader,
  ErpModalBody,
  ErpModalFooter,
  ErpModalTitle,
  ErpModalDescription,
}