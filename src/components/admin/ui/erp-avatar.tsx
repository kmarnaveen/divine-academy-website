import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpAvatarToneTokens, erpTokens } from "./erp-tokens"

const erpAvatarVariants = cva(
  `relative inline-flex shrink-0 items-center justify-center overflow-hidden font-semibold ${erpTokens.radius.avatar} ${erpTokens.shadow.avatar}`,
  {
    variants: {
      size: {
        sm: "h-10 w-10 text-xs",
        md: "h-12 w-12 text-sm",
        lg: "h-16 w-16 text-base",
        xl: "h-20 w-20 text-lg",
      },
      tone: {
        neutral: erpAvatarToneTokens.neutral,
        accent: erpAvatarToneTokens.accent,
        success: erpAvatarToneTokens.success,
        warning: erpAvatarToneTokens.warning,
        dark: erpAvatarToneTokens.dark,
      },
    },
    defaultVariants: {
      size: "md",
      tone: "accent",
    },
  }
)

const erpAvatarStatusVariants = cva(
  "absolute bottom-1 right-1 rounded-full border-2 border-white",
  {
    variants: {
      size: {
        sm: "h-2.5 w-2.5",
        md: "h-3 w-3",
        lg: "h-3.5 w-3.5",
        xl: "h-4 w-4",
      },
      status: {
        online: "bg-emerald-500",
        away: "bg-amber-500",
        busy: "bg-rose-500",
        offline: "bg-slate-300",
      },
    },
    defaultVariants: {
      size: "md",
      status: "offline",
    },
  }
)

type ErpAvatarProps = React.ComponentProps<"div"> &
  VariantProps<typeof erpAvatarVariants> & {
    src?: string | null
    alt?: string
    fallback: string
    status?: VariantProps<typeof erpAvatarStatusVariants>["status"]
  }

function ErpAvatar({
  className,
  size,
  tone,
  src,
  alt,
  fallback,
  status,
  ...props
}: ErpAvatarProps) {
  return (
    <div
      data-slot="erp-avatar"
      className={cn(erpAvatarVariants({ size, tone }), className)}
      {...props}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt ?? fallback} className="h-full w-full object-cover" />
      ) : (
        <span>{fallback}</span>
      )}
      {status ? (
        <span
          data-slot="erp-avatar-status"
          className={erpAvatarStatusVariants({ size, status })}
        />
      ) : null}
    </div>
  )
}

function ErpAvatarGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="erp-avatar-group"
      className={cn("flex items-center -space-x-3", className)}
      {...props}
    />
  )
}

export { ErpAvatar, ErpAvatarGroup, erpAvatarVariants }