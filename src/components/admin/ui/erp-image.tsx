import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { erpTokens } from "./erp-tokens"

const erpImageFrameVariants = cva(
  `${erpTokens.radius.panel} relative overflow-hidden border`,
  {
    variants: {
      ratio: {
        square: "aspect-square",
        landscape: "aspect-[4/3]",
        wide: "aspect-[16/9]",
        portrait: "aspect-[3/4]",
      },
      tone: {
        default: erpTokens.surface.default,
        muted: erpTokens.surface.muted,
        accent: erpTokens.surface.accent,
        dark: erpTokens.surface.dark,
      },
      shadow: {
        true: erpTokens.shadow.card,
        false: "",
      },
    },
    defaultVariants: {
      ratio: "landscape",
      tone: "default",
      shadow: true,
    },
  }
)

type ErpImageProps = React.ComponentProps<"figure"> &
  VariantProps<typeof erpImageFrameVariants> & {
    src: string
    alt: string
    title?: string
    caption?: string
    imgClassName?: string
  }

function ErpImage({
  className,
  src,
  alt,
  title,
  caption,
  ratio,
  tone,
  shadow,
  imgClassName,
  children,
  ...props
}: ErpImageProps) {
  return (
    <figure className={cn("space-y-3", className)} {...props}>
      <div className={cn(erpImageFrameVariants({ ratio, tone, shadow }))}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
        {children ? (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent px-4 py-4 text-white">
            {children}
          </div>
        ) : null}
      </div>
      {title || caption ? (
        <figcaption className="space-y-1">
          {title ? <div className={erpTokens.text.label}>{title}</div> : null}
          {caption ? <div className={erpTokens.text.body}>{caption}</div> : null}
        </figcaption>
      ) : null}
    </figure>
  )
}

export { ErpImage, erpImageFrameVariants }