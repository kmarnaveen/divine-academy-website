import * as React from "react"
import { Check } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpProgressToneTokens, erpTokens } from "./erp-tokens"

const erpProgressTrackVariants = cva(
  `${erpTokens.radius.pill} relative w-full overflow-hidden`,
  {
    variants: {
      tone: {
        default: erpProgressToneTokens.default.track,
        accent: erpProgressToneTokens.accent.track,
        success: erpProgressToneTokens.success.track,
        warning: erpProgressToneTokens.warning.track,
        danger: erpProgressToneTokens.danger.track,
      },
      size: {
        sm: "h-2",
        md: "h-3",
        lg: "h-4",
      },
    },
    defaultVariants: {
      tone: "default",
      size: "md",
    },
  }
)

const erpProgressIndicatorVariants = cva(
  `${erpTokens.motion} h-full rounded-full`,
  {
    variants: {
      tone: {
        default: erpProgressToneTokens.default.indicator,
        accent: erpProgressToneTokens.accent.indicator,
        success: erpProgressToneTokens.success.indicator,
        warning: erpProgressToneTokens.warning.indicator,
        danger: erpProgressToneTokens.danger.indicator,
      },
    },
    defaultVariants: {
      tone: "default",
    },
  }
)

type ErpProgressProps = React.ComponentProps<"div"> &
  VariantProps<typeof erpProgressTrackVariants> & {
    value: number
    showValue?: boolean
    label?: string
  }

function ErpProgress({
  className,
  tone,
  size,
  value,
  showValue = false,
  label,
  ...props
}: ErpProgressProps) {
  const safeValue = Math.min(100, Math.max(0, value))

  return (
    <div className={cn("space-y-2", className)} {...props}>
      {label || showValue ? (
        <div className="flex items-center justify-between gap-3">
          {label ? <span className="text-sm font-medium text-slate-700">{label}</span> : <span />}
          {showValue ? <span className="text-sm text-slate-500">{safeValue}%</span> : null}
        </div>
      ) : null}
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={safeValue}
        className={erpProgressTrackVariants({ tone, size })}
      >
        <div
          className={erpProgressIndicatorVariants({ tone })}
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  )
}

type ErpProgressCircleProps = React.ComponentProps<"div"> &
  VariantProps<typeof erpProgressIndicatorVariants> & {
    value: number
    size?: number
    strokeWidth?: number
    showValue?: boolean
  }

function ErpProgressCircle({
  className,
  tone,
  value,
  size = 96,
  strokeWidth = 10,
  showValue = true,
  ...props
}: ErpProgressCircleProps) {
  const safeValue = Math.min(100, Math.max(0, value))
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (safeValue / 100) * circumference
  const strokeClass = erpProgressToneTokens[tone ?? "default"].strokeIndicator

  return (
    <div className={cn("inline-flex items-center justify-center", className)} {...props}>
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            className={cn("fill-none", erpProgressToneTokens[tone ?? "default"].strokeTrack)}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={cn("fill-none transition-all duration-300", strokeClass)}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        {showValue ? (
          <span className="absolute text-sm font-semibold text-slate-950">{safeValue}%</span>
        ) : null}
      </div>
    </div>
  )
}

type ErpProgressStep = {
  title: string
  description?: string
  status: "complete" | "current" | "upcoming"
}

function ErpProgressSteps({
  className,
  tone = "default",
  steps,
  ...props
}: React.ComponentProps<"div"> & {
  tone?: keyof typeof erpProgressToneTokens
  steps: ErpProgressStep[]
}) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      {steps.map((step, index) => {
        const isComplete = step.status === "complete"
        const isCurrent = step.status === "current"

        return (
          <div key={step.title} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold",
                  isComplete
                    ? `${erpProgressToneTokens[tone].indicator} border-transparent text-white`
                    : isCurrent
                      ? `border-transparent ${erpProgressToneTokens[tone].indicator} text-white`
                      : "border-slate-200 bg-white text-slate-400",
                )}
              >
                {isComplete ? <Check className="h-4 w-4" /> : index + 1}
              </div>
              {index < steps.length - 1 ? (
                <div
                  className={cn(
                    "mt-2 h-10 w-px",
                    isComplete ? erpProgressToneTokens[tone].indicator : "bg-slate-200",
                  )}
                />
              ) : null}
            </div>
            <div className="min-w-0 pt-1">
              <div className={cn("text-sm font-semibold", isCurrent ? "text-slate-950" : "text-slate-700")}>
                {step.title}
              </div>
              {step.description ? (
                <div className="mt-1 text-sm leading-6 text-slate-500">{step.description}</div>
              ) : null}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { ErpProgress, ErpProgressCircle, ErpProgressSteps }