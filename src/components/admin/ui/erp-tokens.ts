export const erpTokens = {
  motion: "transition-all duration-200",
  focusRing:
    "outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
  shimmer:
    "relative overflow-hidden animate-pulse before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)] before:opacity-70",
  radius: {
    pill: "rounded-full",
    button: "rounded-2xl",
    panel: "rounded-[26px]",
    card: "rounded-[30px]",
    hero: "rounded-[34px]",
    avatar: "rounded-[24px]",
  },
  shadow: {
    subtle: "shadow-sm",
    panel: "shadow-[0_18px_40px_-28px_rgba(15,23,42,0.22)]",
    card: "shadow-[0_22px_60px_-40px_rgba(15,23,42,0.22)]",
    floating: "shadow-[0_24px_70px_-50px_rgba(15,23,42,0.2)]",
    dark: "shadow-[0_26px_60px_-42px_rgba(15,23,42,0.7)]",
    spotlight: "shadow-[0_30px_70px_-46px_rgba(159,93,55,0.5)]",
    button: "shadow-[0_18px_30px_-18px_rgba(15,23,42,0.8)]",
    avatar: "shadow-[0_20px_40px_-30px_rgba(15,23,42,0.35)]",
  },
  surface: {
    canvas: "bg-[#f3f4f6] text-slate-950",
    default: "border border-slate-200 bg-white text-slate-950",
    muted: "border border-slate-200 bg-slate-50/90 text-slate-950",
    accent: "border border-[#eadcca] bg-[#fff8f1] text-slate-950",
    accentGradient:
      "border border-[#eadcca] bg-[linear-gradient(180deg,#fff8f1_0%,#ffffff_100%)] text-slate-950",
    spotlight:
      "border border-transparent bg-[linear-gradient(135deg,#ffffff_0%,#f5eadf_55%,#fff8f2_100%)] text-slate-950",
    dark: "border border-slate-900 bg-slate-950 text-white",
  },
  text: {
    display: "text-4xl font-bold tracking-[-0.05em] sm:text-5xl",
    heading: "text-3xl font-semibold tracking-[-0.04em]",
    subheading: "text-2xl font-semibold tracking-[-0.03em]",
    eyebrow: "text-[11px] font-semibold uppercase tracking-[0.18em]",
    title: "text-lg font-semibold tracking-[-0.02em]",
    label: "text-sm font-medium tracking-[-0.01em]",
    body: "text-sm leading-6 text-slate-600",
    muted: "text-sm leading-6 text-slate-500",
    inverseBody: "text-sm leading-6 text-white/72",
    code: "rounded-lg bg-slate-100 px-2 py-1 font-mono text-[13px] text-slate-700",
  },
  border: {
    subtle: "border-slate-200",
    muted: "border-slate-200/80",
    accent: "border-[#eadcca]",
    dark: "border-slate-900",
  },
} as const

export const erpProgressToneTokens = {
  default: {
    track: "bg-slate-200",
    indicator: "bg-slate-950",
    dot: "bg-slate-950",
    strokeTrack: "stroke-slate-200",
    strokeIndicator: "stroke-slate-950",
  },
  accent: {
    track: "bg-[#f4e6d7]",
    indicator: "bg-[#9f5d37]",
    dot: "bg-[#9f5d37]",
    strokeTrack: "stroke-[#f4e6d7]",
    strokeIndicator: "stroke-[#9f5d37]",
  },
  success: {
    track: "bg-emerald-100",
    indicator: "bg-emerald-600",
    dot: "bg-emerald-600",
    strokeTrack: "stroke-emerald-100",
    strokeIndicator: "stroke-emerald-600",
  },
  warning: {
    track: "bg-amber-100",
    indicator: "bg-amber-500",
    dot: "bg-amber-500",
    strokeTrack: "stroke-amber-100",
    strokeIndicator: "stroke-amber-500",
  },
  danger: {
    track: "bg-rose-100",
    indicator: "bg-rose-600",
    dot: "bg-rose-600",
    strokeTrack: "stroke-rose-100",
    strokeIndicator: "stroke-rose-600",
  },
} as const

export const erpTypographyScaleTokens = {
  display: erpTokens.text.display,
  heading: erpTokens.text.heading,
  subheading: erpTokens.text.subheading,
  title: erpTokens.text.title,
  body: erpTokens.text.body,
  muted: erpTokens.text.muted,
  code: erpTokens.text.code,
} as const

export const erpChartToneTokens = {
  default: {
    solid: "#0f172a",
    soft: "#e2e8f0",
    area: "rgba(15,23,42,0.12)",
    bar: "bg-slate-950",
    dot: "bg-slate-950",
    text: "text-slate-600",
    ring: "ring-slate-200",
  },
  accent: {
    solid: "#9f5d37",
    soft: "#f4e6d7",
    area: "rgba(159,93,55,0.16)",
    bar: "bg-[#9f5d37]",
    dot: "bg-[#9f5d37]",
    text: "text-[#9f5d37]",
    ring: "ring-[#eadcca]",
  },
  success: {
    solid: "#059669",
    soft: "#d1fae5",
    area: "rgba(5,150,105,0.16)",
    bar: "bg-emerald-600",
    dot: "bg-emerald-600",
    text: "text-emerald-700",
    ring: "ring-emerald-200",
  },
  warning: {
    solid: "#d97706",
    soft: "#fef3c7",
    area: "rgba(217,119,6,0.18)",
    bar: "bg-amber-500",
    dot: "bg-amber-500",
    text: "text-amber-700",
    ring: "ring-amber-200",
  },
  danger: {
    solid: "#e11d48",
    soft: "#ffe4e6",
    area: "rgba(225,29,72,0.16)",
    bar: "bg-rose-600",
    dot: "bg-rose-600",
    text: "text-rose-700",
    ring: "ring-rose-200",
  },
} as const

export const erpSelectToneTokens = {
  default: {
    trigger: "border-slate-200 bg-white text-slate-950 shadow-sm hover:border-slate-300",
    placeholder: "text-slate-400",
    content: `${erpTokens.surface.default} ${erpTokens.shadow.panel}`,
    label: "text-slate-500",
    item: "text-slate-700 focus:bg-slate-100 focus:text-slate-950",
    separator: "bg-slate-200",
    icon: "text-slate-400",
    focus: "focus-visible:ring-slate-300",
  },
  accent: {
    trigger: "border-[#eadcca] bg-[#fff8f1] text-slate-950 shadow-sm hover:border-[#ddc4ab]",
    placeholder: "text-[#b68c6a]",
    content: `${erpTokens.surface.accentGradient} ${erpTokens.shadow.panel}`,
    label: "text-[#9f5d37]",
    item: "text-slate-700 focus:bg-[#f8ebdf] focus:text-slate-950",
    separator: "bg-[#eadcca]",
    icon: "text-[#9f5d37]/70",
    focus: "focus-visible:ring-[#d8b99d]",
  },
  dark: {
    trigger: "border-white/12 bg-slate-950 text-white hover:border-white/16 hover:bg-slate-900",
    placeholder: "text-white/42",
    content: `${erpTokens.surface.dark} ${erpTokens.shadow.dark}`,
    label: "text-white/45",
    item: "text-white/80 focus:bg-white/10 focus:text-white",
    separator: "bg-white/10",
    icon: "text-white/45",
    focus: "focus-visible:ring-white/20 focus-visible:ring-offset-slate-950",
  },
} as const

export const erpTableToneTokens = {
  default: {
    row: "hover:bg-slate-50/90",
    cell: "text-slate-700",
  },
  accent: {
    row: "bg-[#fffaf5] hover:bg-[#fff3e8]",
    cell: "text-slate-700",
  },
  success: {
    row: "bg-emerald-50/70 hover:bg-emerald-50",
    cell: "text-emerald-900",
  },
  warning: {
    row: "bg-amber-50/80 hover:bg-amber-50",
    cell: "text-amber-900",
  },
  danger: {
    row: "bg-rose-50/80 hover:bg-rose-50",
    cell: "text-rose-900",
  },
  dark: {
    row: "bg-slate-950 hover:bg-slate-900",
    cell: "text-white/82",
  },
} as const

export const erpToastToneTokens = {
  default: {
    panel: "border-slate-200 bg-white text-slate-950",
    description: "text-slate-600",
    close: "text-slate-400 hover:bg-slate-100 hover:text-slate-700",
    action: "border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
  },
  success: {
    panel: "border-emerald-200 bg-emerald-50/95 text-emerald-950",
    description: "text-emerald-800/80",
    close: "text-emerald-700/70 hover:bg-emerald-100 hover:text-emerald-900",
    action: "border-emerald-200 bg-white/70 text-emerald-800 hover:bg-white",
  },
  warning: {
    panel: "border-amber-200 bg-amber-50/95 text-amber-950",
    description: "text-amber-800/80",
    close: "text-amber-700/70 hover:bg-amber-100 hover:text-amber-900",
    action: "border-amber-200 bg-white/70 text-amber-800 hover:bg-white",
  },
  danger: {
    panel: "border-rose-200 bg-rose-50/95 text-rose-950",
    description: "text-rose-800/80",
    close: "text-rose-700/70 hover:bg-rose-100 hover:text-rose-900",
    action: "border-rose-200 bg-white/70 text-rose-800 hover:bg-white",
  },
  dark: {
    panel: "border-white/10 bg-slate-950 text-white",
    description: "text-white/70",
    close: "text-white/45 hover:bg-white/10 hover:text-white",
    action: "border-white/10 bg-white/5 text-white hover:bg-white/10",
  },
} as const

export const erpEmptyStateToneTokens = {
  default: {
    panel: `${erpTokens.surface.default} border-dashed ${erpTokens.shadow.card}`,
    iconWrap: "border-slate-200 bg-slate-100 text-slate-700",
    description: "text-slate-600",
  },
  accent: {
    panel: `${erpTokens.surface.accentGradient} border-dashed ${erpTokens.shadow.card}`,
    iconWrap: "border-[#eadcca] bg-white text-[#9f5d37]",
    description: "text-slate-600",
  },
  muted: {
    panel: `${erpTokens.surface.muted} border-dashed`,
    iconWrap: "border-slate-200 bg-white text-slate-500",
    description: "text-slate-500",
  },
  dark: {
    panel: "border border-dashed border-white/10 bg-slate-950 text-white shadow-[0_26px_60px_-42px_rgba(15,23,42,0.7)]",
    iconWrap: "border-white/10 bg-white/5 text-white",
    description: "text-white/70",
  },
} as const

export const erpFilterToneTokens = {
  default: {
    bar: `${erpTokens.surface.default} ${erpTokens.shadow.card}`,
    search: "border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400",
    chip: "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
    chipActive: "border-slate-950 bg-slate-950 text-white",
    meta: "text-slate-500",
    divider: "bg-slate-200",
  },
  accent: {
    bar: `${erpTokens.surface.accentGradient} ${erpTokens.shadow.card}`,
    search: "border-[#eadcca] bg-white text-slate-950 placeholder:text-[#b68c6a]",
    chip: "border-[#eadcca] bg-white text-[#9f5d37] hover:bg-[#fff8f1]",
    chipActive: "border-[#9f5d37] bg-[#9f5d37] text-white",
    meta: "text-[#9f5d37]",
    divider: "bg-[#eadcca]",
  },
  dark: {
    bar: `${erpTokens.surface.dark} ${erpTokens.shadow.dark}`,
    search: "border-white/10 bg-white/5 text-white placeholder:text-white/42",
    chip: "border-white/10 bg-white/5 text-white/75 hover:bg-white/10",
    chipActive: "border-white/10 bg-white text-slate-950",
    meta: "text-white/45",
    divider: "bg-white/10",
  },
} as const

export const erpWorkspaceTokens = {
  shell: {
    canvas: "bg-[#eef2f6] text-slate-950",
    overlay: "bg-slate-950/58 backdrop-blur-sm",
    header: "border-b border-slate-200/80 bg-[#eef2f6]/92 backdrop-blur",
    main: "bg-transparent",
  },
  sidebar: {
    panel:
      "border-r border-white/10 bg-[radial-gradient(circle_at_top,#21262f_0%,#151922_48%,#0b0d11_100%)] text-white",
    brandBadge: "text-white/42",
    brandTitle: "text-white",
    groupLabel: "text-white/38",
    overviewActive:
      "border-transparent bg-white text-slate-950 shadow-[0_16px_35px_-22px_rgba(255,255,255,0.65)]",
    overviewInactive: "border-white/10 bg-white/[0.06] text-white hover:bg-white/[0.09]",
    navActive:
      "bg-white text-slate-950 shadow-[0_16px_35px_-22px_rgba(255,255,255,0.65)]",
    navInactive: "text-white/72 hover:bg-white/[0.07] hover:text-white",
    navIconActive: "bg-slate-950 text-white",
    navIconInactive: "bg-white/[0.07] text-white/70 group-hover:bg-white/10 group-hover:text-white",
    navMetaActive: "text-slate-500",
    navMetaInactive: "text-white/45",
    profilePanel: "border-white/10 bg-white/[0.05]",
    profileMetaPanel: "border-white/10 bg-black/10 text-white/62",
    siteAction: "border-white/10 text-white/74 hover:bg-white/[0.08] hover:text-white",
    logoutAction: "bg-white text-slate-950 hover:bg-white/90",
  },
  header: {
    kicker: "text-slate-500",
    title: "text-slate-950",
    description: "text-slate-500",
    status: "border-slate-200 bg-white text-slate-600 shadow-sm",
  },
} as const

export const erpAlertToneTokens = {
  neutral: {
    panel: "border-slate-200 bg-white text-slate-900",
    icon: "border-slate-200 bg-slate-100 text-slate-700",
  },
  info: {
    panel: "border-sky-200 bg-sky-50/90 text-sky-950",
    icon: "border-sky-200 bg-white text-sky-700",
  },
  success: {
    panel: "border-emerald-200 bg-emerald-50/90 text-emerald-950",
    icon: "border-emerald-200 bg-white text-emerald-700",
  },
  warning: {
    panel: "border-amber-200 bg-amber-50/90 text-amber-950",
    icon: "border-amber-200 bg-white text-amber-700",
  },
  danger: {
    panel: "border-rose-200 bg-rose-50/90 text-rose-950",
    icon: "border-rose-200 bg-white text-rose-700",
  },
} as const

export const erpBadgeToneTokens = {
  neutral: "border-slate-200 bg-white text-slate-600",
  accent: "border-[#eadcca] bg-[#fff8f1] text-[#9f5d37]",
  success: "border-emerald-200 bg-emerald-50 text-emerald-700",
  warning: "border-amber-200 bg-amber-50 text-amber-700",
  danger: "border-rose-200 bg-rose-50 text-rose-700",
  dark: "border-slate-900 bg-slate-950 text-white",
  outline: "border-slate-300 bg-transparent text-slate-700",
} as const

export const erpAvatarToneTokens = {
  neutral: "bg-slate-200 text-slate-800",
  accent: "bg-[#f3e4d6] text-slate-950",
  success: "bg-emerald-100 text-emerald-800",
  warning: "bg-amber-100 text-amber-800",
  dark: "bg-slate-950 text-white",
} as const

export const erpFoundationTokens = {
  colors: [
    {
      name: "Canvas",
      value: "#F3F4F6",
      swatchClass: "border-slate-200 bg-[#f3f4f6] text-slate-700",
      description: "Admin workspace canvas and neutral page background.",
    },
    {
      name: "Surface",
      value: "#FFFFFF",
      swatchClass: "border-slate-200 bg-white text-slate-700",
      description: "Default cards, modals, dropdowns, and panels.",
    },
    {
      name: "Accent Wash",
      value: "#FFF8F1",
      swatchClass: "border-[#eadcca] bg-[#fff8f1] text-[#9f5d37]",
      description: "Editorial callouts, secondary CTAs, and supportive highlights.",
    },
    {
      name: "Console Ink",
      value: "#0F172A",
      swatchClass: "border-slate-900 bg-slate-950 text-white",
      description: "Primary internal actions, strong nav states, and focus surfaces.",
    },
    {
      name: "Success",
      value: "#10B981",
      swatchClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
      description: "Healthy workflow status, completed tasks, and positive confirmations.",
    },
    {
      name: "Warning",
      value: "#F59E0B",
      swatchClass: "border-amber-200 bg-amber-50 text-amber-700",
      description: "Capacity, approval, and attention-required states.",
    },
    {
      name: "Danger",
      value: "#E11D48",
      swatchClass: "border-rose-200 bg-rose-50 text-rose-700",
      description: "Critical issues, destructive actions, and error feedback.",
    },
  ],
  radii: [
    {
      name: "Button",
      value: "16px",
      previewClass: "rounded-2xl",
      description: "Buttons, small action chips, and pagination items.",
    },
    {
      name: "Panel",
      value: "26px",
      previewClass: "rounded-[26px]",
      description: "Alerts, images, list groups, and popovers.",
    },
    {
      name: "Card",
      value: "30px",
      previewClass: "rounded-[30px]",
      description: "Primary content blocks and layout cards.",
    },
    {
      name: "Hero",
      value: "34px",
      previewClass: "rounded-[34px]",
      description: "Top-level overview surfaces and showcase frames.",
    },
  ],
  shadows: [
    {
      name: "Panel",
      previewClass: "shadow-[0_18px_40px_-28px_rgba(15,23,42,0.22)]",
      description: "Alerts, popovers, and smaller floating elements.",
    },
    {
      name: "Card",
      previewClass: "shadow-[0_22px_60px_-40px_rgba(15,23,42,0.22)]",
      description: "Default content cards and internal section containers.",
    },
    {
      name: "Floating",
      previewClass: "shadow-[0_24px_70px_-50px_rgba(15,23,42,0.2)]",
      description: "Hero surfaces, modals, and high-attention overlays.",
    },
    {
      name: "Spotlight",
      previewClass: "shadow-[0_30px_70px_-46px_rgba(159,93,55,0.5)]",
      description: "Warm highlight moments such as approval callouts or guided actions.",
    },
  ],
} as const