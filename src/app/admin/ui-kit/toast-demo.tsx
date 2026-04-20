"use client"

import { useState } from "react"
import { AlertTriangle, BellRing, CheckCircle2 } from "lucide-react"

import {
  ErpButton,
  ErpToast,
  ErpToastAction,
  ErpToastClose,
  ErpToastDescription,
  ErpToastProvider,
  ErpToastTitle,
  ErpToastViewport,
} from "@/components/admin/ui"

type ToastVariant = "default" | "success" | "warning" | "danger"

type ToastItem = {
  id: number
  variant: ToastVariant
  title: string
  description: string
  actionLabel?: string
}

const toastPresets: Array<{
  label: string
  variant: ToastVariant
  title: string
  description: string
  actionLabel?: string
}> = [
  {
    label: "Queue update",
    variant: "default",
    title: "Publishing queue updated",
    description: "Annual day banner moved ahead of the parent circular in the 4:30 PM slot.",
    actionLabel: "Inspect",
  },
  {
    label: "Success toast",
    variant: "success",
    title: "Campus visit confirmed",
    description: "Reminder SMS and email confirmation were sent to the family.",
    actionLabel: "View",
  },
  {
    label: "Warning toast",
    variant: "warning",
    title: "Transport sync delayed",
    description: "One route import is still waiting on coordinator approval.",
    actionLabel: "Review",
  },
  {
    label: "Failure toast",
    variant: "danger",
    title: "Lead export failed",
    description: "Retry is available after the connection to the admissions service is restored.",
    actionLabel: "Retry",
  },
] as const

const toastIconMap = {
  default: BellRing,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: AlertTriangle,
} as const

export function UiKitToastDemo() {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const pushToast = (preset: (typeof toastPresets)[number]) => {
    setToasts((current) => [
      ...current,
      {
        id: Date.now() + Math.floor(Math.random() * 1000),
        variant: preset.variant,
        title: preset.title,
        description: preset.description,
        actionLabel: preset.actionLabel,
      },
    ].slice(-3))
  }

  const removeToast = (toastId: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== toastId))
  }

  return (
    <ErpToastProvider swipeDirection="right">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3">
          {toastPresets.map((preset) => (
            <ErpButton
              key={preset.label}
              variant={preset.variant === "danger" ? "danger" : preset.variant === "success" ? "secondary" : preset.variant === "warning" ? "subtle" : "outline"}
              onClick={() => pushToast(preset)}
            >
              {preset.label}
            </ErpButton>
          ))}
        </div>

        <p className="text-sm leading-6 text-slate-600">
          Toasts should confirm workflow outcomes or surface short-lived issues without forcing a page jump.
        </p>
      </div>

      {toasts.map((toast) => {
        const Icon = toastIconMap[toast.variant]

        return (
          <ErpToast
            key={toast.id}
            variant={toast.variant}
            open
            onOpenChange={(open) => {
              if (!open) {
                removeToast(toast.id)
              }
            }}
          >
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-current/10 bg-white/60 text-current">
              <Icon className="h-4.5 w-4.5" />
            </div>

            <div className="min-w-0 flex-1 pr-7">
              <ErpToastTitle>{toast.title}</ErpToastTitle>
              <ErpToastDescription variant={toast.variant}>
                {toast.description}
              </ErpToastDescription>
            </div>

            {toast.actionLabel ? (
              <ErpToastAction
                altText={toast.actionLabel}
                variant={toast.variant}
              >
                {toast.actionLabel}
              </ErpToastAction>
            ) : null}

            <ErpToastClose variant={toast.variant} />
          </ErpToast>
        )
      })}

      <ErpToastViewport />
    </ErpToastProvider>
  )
}