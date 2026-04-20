import * as React from "react"

import { cn } from "@/lib/utils"

import { erpChartToneTokens, erpTokens } from "./erp-tokens"

export type ErpChartTone = keyof typeof erpChartToneTokens

export type ErpChartDatum = {
  label: string
  value: number
  tone?: ErpChartTone
}

function getChartRange(values: number[]) {
  const max = Math.max(...values, 1)
  const min = Math.min(...values, 0)

  return {
    max,
    min,
    range: max - min || 1,
  }
}

function ErpChartLegend({
  items,
  className,
}: {
  items: ErpChartDatum[]
  className?: string
}) {
  return (
    <ul className={cn("grid gap-2 text-sm", className)}>
      {items.map((item) => {
        const tone = erpChartToneTokens[item.tone ?? "default"]

        return (
          <li key={item.label} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className={cn("h-2.5 w-2.5 rounded-full", tone.dot)} />
              <span className="text-slate-600">{item.label}</span>
            </div>
            <span className={cn("font-semibold", tone.text)}>{item.value}</span>
          </li>
        )
      })}
    </ul>
  )
}

function ErpBarChart({
  data,
  className,
  height = 220,
  showValues = true,
}: {
  data: ErpChartDatum[]
  className?: string
  height?: number
  showValues?: boolean
}) {
  const maxValue = Math.max(...data.map((item) => item.value), 1)

  return (
    <div className={cn("space-y-4", className)}>
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_220px]">
        <div className="relative rounded-[26px] border border-slate-200 bg-slate-50/80 px-4 pb-4 pt-5">
          <div className="pointer-events-none absolute inset-x-4 top-5 grid h-[calc(100%-2.25rem)] grid-rows-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="border-b border-dashed border-slate-200/80 last:border-b-0" />
            ))}
          </div>

          <div className="relative flex items-end gap-3" style={{ height }}>
            {data.map((item) => {
              const tone = erpChartToneTokens[item.tone ?? "default"]
              const barHeight = Math.max((item.value / maxValue) * 100, 8)

              return (
                <div key={item.label} className="flex min-w-0 flex-1 flex-col justify-end gap-3">
                  <div className="flex min-h-0 flex-1 items-end">
                    <div
                      className={cn(
                        "w-full rounded-[20px] px-3 py-2 text-white shadow-[0_18px_30px_-20px_rgba(15,23,42,0.45)]",
                        tone.bar,
                      )}
                      style={{ height: `${barHeight}%` }}
                    >
                      {showValues ? (
                        <span className="text-xs font-semibold">{item.value}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="truncate text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {item.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="rounded-[26px] border border-slate-200 bg-white p-4">
          <div className="mb-4 text-sm font-semibold text-slate-950">Legend</div>
          <ErpChartLegend items={data} />
        </div>
      </div>
    </div>
  )
}

function ErpSparklineChart({
  data,
  className,
  tone = "accent",
  height = 144,
  showArea = true,
}: {
  data: number[]
  className?: string
  tone?: ErpChartTone
  height?: number
  showArea?: boolean
}) {
  const palette = erpChartToneTokens[tone]
  const { max, min, range } = getChartRange(data)
  const denominator = Math.max(data.length - 1, 1)
  const points = data
    .map((value, index) => {
      const x = (index / denominator) * 100
      const y = 100 - ((value - min) / range) * 100

      return `${x},${y}`
    })
    .join(" ")

  const areaPath = `M 0,100 L ${points} L 100,100 Z`
  const latestValue = data[data.length - 1] ?? 0
  const delta = latestValue - (data[data.length - 2] ?? latestValue)

  return (
    <div
      className={cn(
        `${erpTokens.radius.card} border border-slate-200 bg-white p-5 ${erpTokens.shadow.card}`,
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Weekly movement
          </div>
          <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
            {latestValue}
          </div>
        </div>
        <div className={cn("text-sm font-medium", delta >= 0 ? "text-emerald-600" : "text-rose-600")}>
          {delta >= 0 ? "+" : ""}
          {delta}
        </div>
      </div>

      <svg viewBox="0 0 100 100" style={{ height }} className="mt-4 w-full overflow-visible">
        {showArea ? <path d={areaPath} fill={palette.area} /> : null}
        <polyline
          fill="none"
          points={points}
          stroke={palette.solid}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.5"
        />
      </svg>

      <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-400">
        <span>Low {min}</span>
        <span>High {max}</span>
      </div>
    </div>
  )
}

function ErpDonutChart({
  data,
  className,
  centerLabel,
  centerValue,
}: {
  data: ErpChartDatum[]
  className?: string
  centerLabel?: string
  centerValue?: string
}) {
  const total = data.reduce((sum, item) => sum + item.value, 0) || 1
  let cumulative = 0

  const gradientStops = data
    .map((item) => {
      const tone = erpChartToneTokens[item.tone ?? "default"]
      const start = (cumulative / total) * 100
      cumulative += item.value
      const end = (cumulative / total) * 100

      return `${tone.solid} ${start}% ${end}%`
    })
    .join(", ")

  return (
    <div
      className={cn(
        `${erpTokens.radius.card} border border-slate-200 bg-white p-5 ${erpTokens.shadow.card}`,
        className,
      )}
    >
      <div className="grid gap-5 lg:grid-cols-[184px_minmax(0,1fr)] lg:items-center">
        <div className="flex items-center justify-center">
          <div
            className="relative h-44 w-44 rounded-full"
            style={{ background: `conic-gradient(${gradientStops})` }}
          >
            <div className="absolute inset-[22px] flex items-center justify-center rounded-full border border-slate-200 bg-white text-center">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {centerLabel ?? "Total"}
                </div>
                <div className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                  {centerValue ?? total}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <ErpChartLegend items={data} />
          <div className="rounded-[22px] border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm leading-6 text-slate-600">
            Donut charts work best for ownership mix, stage split, and small distribution summaries where relative proportions matter more than exact trend history.
          </div>
        </div>
      </div>
    </div>
  )
}

export { ErpBarChart, ErpSparklineChart, ErpDonutChart, ErpChartLegend }