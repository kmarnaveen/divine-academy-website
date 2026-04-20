import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpAlertToneTokens, erpTokens } from "./erp-tokens"

const erpAlertVariants = cva(
  `flex gap-3 border px-4 py-4 text-sm ${erpTokens.radius.panel} ${erpTokens.shadow.panel}`,
  {
    variants: {
      variant: {
        neutral: erpAlertToneTokens.neutral.panel,
        info: erpAlertToneTokens.info.panel,
        success: erpAlertToneTokens.success.panel,
        warning: erpAlertToneTokens.warning.panel,
        danger: erpAlertToneTokens.danger.panel,
      },
      density: {
        default: "min-h-[92px]",
        compact: "min-h-0 py-3",
      },
    },
    defaultVariants: {
      variant: "neutral",
      density: "default",
    },
  }
)

const erpAlertIconVariants = cva(
  `flex h-11 w-11 shrink-0 items-center justify-center border ${erpTokens.radius.button}`,
  {
    variants: {
      variant: {
        neutral: erpAlertToneTokens.neutral.icon,
        info: erpAlertToneTokens.info.icon,
        success: erpAlertToneTokens.success.icon,
        warning: erpAlertToneTokens.warning.icon,
        danger: erpAlertToneTokens.danger.icon,
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
)

function ErpAlert({
  className,
  variant,
  density,
  icon,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof erpAlertVariants> & {
    icon?: React.ReactNode
  }) {
  return (
    <div
      data-slot="erp-alert"
      className={cn(erpAlertVariants({ variant, density }), className)}
      {...props}
    >
      {icon ? (
        <div className={erpAlertIconVariants({ variant })}>{icon}</div>
      ) : null}
      <div className="min-w-0 flex-1 space-y-1">{children}</div>
    </div>
  )
}

function ErpAlertTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-alert-title"
      className={cn(erpTokens.text.label, className)}
      {...props}
    />
  )
}

function ErpAlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-alert-description"
      className={cn("text-sm leading-6 text-current/75", className)}
      {...props}
    />
  )
}

export { ErpAlert, ErpAlertTitle, ErpAlertDescription, erpAlertVariants }