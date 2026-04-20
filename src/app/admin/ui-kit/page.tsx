import type { Metadata } from "next"
import Link from "next/link"
import {
  BarChart3,
  AlertTriangle,
  BellRing,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  CircleOff,
  Command,
  Eye,
  FolderKanban,
  Funnel,
  LayoutGrid,
  LineChart,
  PanelsTopLeft,
  PieChart,
  ShieldAlert,
  Sparkles,
  Users,
} from "lucide-react"

import {
  ErpAccordion,
  ErpAccordionContent,
  ErpAccordionItem,
  ErpAccordionTrigger,
  ErpAlert,
  ErpAlertDescription,
  ErpAlertTitle,
  ErpAvatar,
  ErpAvatarGroup,
  ErpBadge,
  ErpBreadcrumb,
  ErpBreadcrumbCurrent,
  ErpBreadcrumbItem,
  ErpBreadcrumbLink,
  ErpBreadcrumbList,
  ErpBreadcrumbSeparator,
  ErpButton,
  ErpButtonGroup,
  erpButtonVariants,
  ErpBarChart,
  ErpCard,
  ErpCardContent,
  ErpCardDescription,
  ErpCardFooter,
  ErpCardHeader,
  ErpCardTitle,
  ErpCarousel,
  ErpDonutChart,
  type ErpCarouselItem,
  ErpCollapse,
  ErpCollapseContent,
  ErpCollapseTrigger,
  ErpDropdownMenu,
  ErpDropdownMenuContent,
  ErpDropdownMenuGroup,
  ErpDropdownMenuItem,
  ErpDropdownMenuLabel,
  ErpDropdownMenuSeparator,
  ErpDropdownMenuShortcut,
  ErpDropdownMenuSub,
  ErpDropdownMenuSubContent,
  ErpDropdownMenuSubTrigger,
  ErpDropdownMenuTrigger,
  ErpEmptyState,
  ErpEmptyStateActions,
  ErpEmptyStateDescription,
  ErpEmptyStateMedia,
  ErpEmptyStateTitle,
  ErpFilterBar,
  ErpFilterChip,
  ErpFilterDivider,
  ErpFilterGroup,
  ErpFilterSearch,
  ErpFilterSummary,
  ErpGrid,
  ErpGridItem,
  ErpImage,
  ErpLink,
  erpLinkVariants,
  ErpListGroup,
  ErpListGroupDescription,
  ErpListGroupItem,
  ErpListGroupMeta,
  ErpListGroupTitle,
  ErpModal,
  ErpModalBody,
  ErpModalContent,
  ErpModalDescription,
  ErpModalFooter,
  ErpModalHeader,
  ErpModalTitle,
  ErpModalTrigger,
  ErpOffcanvas,
  ErpOffcanvasBody,
  ErpOffcanvasContent,
  ErpOffcanvasDescription,
  ErpOffcanvasFooter,
  ErpOffcanvasHeader,
  ErpOffcanvasTitle,
  ErpOffcanvasTrigger,
  ErpPagination,
  ErpPaginationEllipsis,
  ErpPaginationItem,
  ErpPaginationLink,
  ErpPaginationList,
  ErpPaginationNext,
  ErpPaginationPrevious,
  ErpPlaceholder,
  ErpPlaceholderCard,
  ErpPlaceholderText,
  ErpPopover,
  ErpPopoverContent,
  ErpPopoverTrigger,
  ErpProgress,
  ErpProgressCircle,
  ErpProgressSteps,
  ErpSelect,
  ErpSelectContent,
  ErpSelectGroup,
  ErpSelectItem,
  ErpSelectLabel,
  ErpSelectSeparator,
  ErpSelectTrigger,
  ErpSelectValue,
  ErpSparklineChart,
  ErpSpinner,
  ErpTable,
  ErpTableBody,
  ErpTableCaption,
  ErpTableCell,
  ErpTableHead,
  ErpTableHeader,
  ErpTableRow,
  ErpTabs,
  ErpTabsContent,
  ErpTabsList,
  ErpTabsTrigger,
  ErpTextList,
  ErpTooltip,
  ErpTooltipContent,
  ErpTooltipProvider,
  ErpTooltipTrigger,
  ErpTypography,
  erpFoundationTokens,
} from "@/components/admin/ui"

import { UiKitToastDemo } from "./toast-demo"

export const metadata: Metadata = {
  title: "ERP UI Kit | Divine International Academy",
  description:
    "Admin-only ERP design system tokens and component variations for the internal workspace.",
}

const carouselItems: ErpCarouselItem[] = [
  {
    id: "ops",
    eyebrow: "Workflow snapshot",
    title: "Admissions tasks can move from lead to visit without changing context.",
    description:
      "Use the carousel as a spotlight strip for deadlines, approvals, reminders, or multi-step internal handoffs.",
    meta: "Operations queue",
  },
  {
    id: "publishing",
    eyebrow: "Publishing queue",
    title: "Highlight notice drafts, event banners, and approval-ready content in one rail.",
    description:
      "The same component also works for parent communication campaigns, academic calendars, or transport updates.",
    meta: "Publishing console",
  },
  {
    id: "students",
    eyebrow: "Student records",
    title: "Surface interventions, onboarding tasks, and profile review checkpoints.",
    description:
      "Keep the component content light and scannable so it feels like an internal control surface rather than a marketing slider.",
    meta: "Records workspace",
  },
] as const

function createErpArt(title: string, top: string, bottom: string, accent: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${top}" />
          <stop offset="100%" stop-color="${bottom}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" rx="56" fill="url(#g)" />
      <circle cx="950" cy="180" r="120" fill="${accent}" opacity="0.22" />
      <circle cx="230" cy="610" r="170" fill="#ffffff" opacity="0.12" />
      <rect x="120" y="120" width="960" height="120" rx="28" fill="#ffffff" opacity="0.18" />
      <rect x="120" y="280" width="500" height="300" rx="32" fill="#ffffff" opacity="0.14" />
      <rect x="660" y="280" width="420" height="140" rx="32" fill="#ffffff" opacity="0.14" />
      <rect x="660" y="450" width="420" height="130" rx="32" fill="#ffffff" opacity="0.14" />
      <text x="140" y="193" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="700">${title}</text>
      <text x="140" y="360" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="30" opacity="0.88">Internal ERP workspace preview</text>
      <text x="140" y="408" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="24" opacity="0.7">Use for dashboards, operations, records, and publishing tools.</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const uiImages = {
  dashboard: createErpArt("Admin Workspace", "#0f172a", "#334155", "#f3e4d6"),
  publishing: createErpArt("Publishing Queue", "#b45309", "#f59e0b", "#ffffff"),
  records: createErpArt("Student Records", "#065f46", "#10b981", "#d1fae5"),
} as const

const cardVariants = ["default", "muted", "accent", "spotlight", "dark"] as const

const admissionsTableRows = [
  {
    id: "DIA-2401",
    family: "Sharma Family",
    classLevel: "Grade 5",
    owner: "Aditi",
    stage: "Campus visit",
    status: "Today 4:30 PM",
    tone: "accent",
  },
  {
    id: "DIA-2408",
    family: "Fernandes Family",
    classLevel: "Grade 8",
    owner: "Raghav",
    stage: "Documents pending",
    status: "2 files missing",
    tone: "warning",
  },
  {
    id: "DIA-2412",
    family: "Khan Family",
    classLevel: "Nursery",
    owner: "Aditi",
    stage: "Fee discussion",
    status: "Follow-up ready",
    tone: "success",
  },
  {
    id: "DIA-2421",
    family: "Iyer Family",
    classLevel: "Grade 11",
    owner: "Neha",
    stage: "Needs escalation",
    status: "Principal review",
    tone: "danger",
  },
] as const

const admissionsChartData = [
  { label: "Mon", value: 12, tone: "default" },
  { label: "Tue", value: 17, tone: "accent" },
  { label: "Wed", value: 14, tone: "accent" },
  { label: "Thu", value: 22, tone: "success" },
  { label: "Fri", value: 19, tone: "warning" },
  { label: "Sat", value: 27, tone: "accent" },
] as const

const ownershipMix = [
  { label: "Admissions desk", value: 14, tone: "accent" },
  { label: "Counsellors", value: 10, tone: "success" },
  { label: "Coordinators", value: 5, tone: "warning" },
  { label: "Principal office", value: 3, tone: "default" },
] as const

const responseTrend = [11, 14, 13, 18, 22, 24, 31] as const

export default function AdminUiKitPage() {
  return (
    <ErpTooltipProvider>
      <div className="space-y-6">
      <section className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8f5f1_100%)] shadow-[0_24px_70px_-50px_rgba(15,23,42,0.2)]">
        <div className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-wrap items-center gap-3">
            <ErpBadge variant="accent">ERP Only</ErpBadge>
            <ErpBadge variant="dark">Default Internal System</ErpBadge>
            <ErpBadge variant="outline">No public-site usage</ErpBadge>
          </div>

          <ErpBreadcrumb>
            <ErpBreadcrumbList>
              <ErpBreadcrumbItem>
                <ErpBreadcrumbLink href="/admin">Admin</ErpBreadcrumbLink>
              </ErpBreadcrumbItem>
              <ErpBreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </ErpBreadcrumbSeparator>
              <ErpBreadcrumbItem>
                <ErpBreadcrumbCurrent>UI Kit</ErpBreadcrumbCurrent>
              </ErpBreadcrumbItem>
            </ErpBreadcrumbList>
          </ErpBreadcrumb>

          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4">
              <h1 className="max-w-5xl text-3xl font-bold tracking-[-0.05em] text-slate-950 sm:text-5xl xl:text-6xl">
                ERP design tokens and admin-only component variations for the internal workspace.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                This route becomes the default reference for the internal design system. Tokens, overlays, layout primitives, navigation patterns, and content surfaces stay here so admin pages can scale without borrowing from the marketing site.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/admin/leads" className={erpButtonVariants({ variant: "primary" })}>
                  Apply to Leads
                </Link>
                <Link href="/admin/content" className={erpButtonVariants({ variant: "outline" })}>
                  Apply to Content
                </Link>
                <Link
                  href="/admin"
                  className={erpLinkVariants({ variant: "quiet", underline: true })}
                >
                  Back to dashboard
                </Link>
              </div>
            </div>

            <ErpCard variant="dark">
              <ErpCardHeader>
                <ErpBadge variant="accent">System notes</ErpBadge>
                <ErpCardTitle>What changed in this pass</ErpCardTitle>
                <ErpCardDescription>
                  Shared ERP tokens now anchor the shell, data surfaces, feedback patterns, and dense workflow controls across the internal workspace.
                </ErpCardDescription>
              </ErpCardHeader>
              <ErpCardContent className="space-y-4">
                <ErpAlert variant="neutral" density="compact" icon={<Command className="h-5 w-5" />}>
                  <ErpAlertTitle>Token-first structure</ErpAlertTitle>
                  <ErpAlertDescription>
                    Buttons, badges, cards, overlays, navigation, tables, charts, filters, and feedback components now pull from one shared ERP token file.
                  </ErpAlertDescription>
                </ErpAlert>
                <ErpButtonGroup variant="dark" orientation="vertical" className="w-full">
                  <ErpButton variant="ghost" className="justify-start text-white hover:bg-white/10 hover:text-white">
                    Admissions operations
                  </ErpButton>
                  <ErpButton variant="ghost" className="justify-start text-white hover:bg-white/10 hover:text-white">
                    Student records
                  </ErpButton>
                  <ErpButton variant="ghost" className="justify-start text-white hover:bg-white/10 hover:text-white">
                    Publishing workflows
                  </ErpButton>
                </ErpButtonGroup>
              </ErpCardContent>
            </ErpCard>
          </div>
        </div>
      </section>

      <ErpCard variant="spotlight">
        <ErpCardHeader>
          <ErpBadge variant="outline">Foundation</ErpBadge>
          <ErpCardTitle>Shared ERP tokens</ErpCardTitle>
          <ErpCardDescription>
            These values should drive future internal components before one-off classes are introduced.
          </ErpCardDescription>
        </ErpCardHeader>
        <ErpCardContent className="space-y-6">
          <ErpGrid columns="three" gap="md">
            {erpFoundationTokens.colors.map((color) => (
              <ErpGridItem key={color.name} surface="default" className="space-y-3">
                <div className={`h-20 w-full rounded-[24px] border ${color.swatchClass}`} />
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-slate-950">{color.name}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{color.value}</div>
                  <div className="text-sm leading-6 text-slate-600">{color.description}</div>
                </div>
              </ErpGridItem>
            ))}
          </ErpGrid>

          <ErpGrid columns="two" gap="md">
            <ErpGridItem surface="default" className="space-y-4">
              <div className="text-lg font-semibold tracking-[-0.02em] text-slate-950">Radii</div>
              <div className="space-y-3">
                {erpFoundationTokens.radii.map((radius) => (
                  <div key={radius.name} className="flex items-center gap-4 rounded-[24px] border border-slate-200 bg-white p-4">
                    <div className={`h-14 w-20 border border-slate-300 bg-slate-100 ${radius.previewClass}`} />
                    <div className="space-y-1">
                      <div className="text-sm font-semibold text-slate-950">{radius.name}</div>
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{radius.value}</div>
                      <div className="text-sm leading-6 text-slate-600">{radius.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ErpGridItem>

            <ErpGridItem surface="default" className="space-y-4">
              <div className="text-lg font-semibold tracking-[-0.02em] text-slate-950">Shadows</div>
              <div className="space-y-3">
                {erpFoundationTokens.shadows.map((shadow) => (
                  <div key={shadow.name} className="flex items-center gap-4 rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                    <div className={`h-16 w-24 rounded-[24px] border border-white bg-white ${shadow.previewClass}`} />
                    <div className="space-y-1">
                      <div className="text-sm font-semibold text-slate-950">{shadow.name}</div>
                      <div className="text-sm leading-6 text-slate-600">{shadow.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ErpGridItem>
          </ErpGrid>
        </ErpCardContent>
      </ErpCard>

      <ErpGrid columns="four" gap="md">
        {cardVariants.map((variant) => (
          <ErpGridItem key={variant}>
            <ErpCard variant={variant} className="h-full">
              <ErpCardHeader>
                <ErpBadge variant={variant === "dark" ? "accent" : "outline"}>{variant}</ErpBadge>
                <ErpCardTitle>{variant} card</ErpCardTitle>
                <ErpCardDescription>
                  Card surface variation for dashboards, records, and internal workflows.
                </ErpCardDescription>
              </ErpCardHeader>
              <ErpCardFooter>
                <ErpLink href="#" variant={variant === "dark" ? "inverse" : "quiet"}>
                  Inspect usage
                </ErpLink>
              </ErpCardFooter>
            </ErpCard>
          </ErpGridItem>
        ))}
      </ErpGrid>

      <ErpGrid columns="dashboard" gap="lg">
        <ErpGridItem>
          <ErpCard variant="default" className="h-full">
            <ErpCardHeader>
              <ErpBadge variant="outline">Core controls</ErpBadge>
              <ErpCardTitle>Alerts, buttons, badges, links, and grouped actions</ErpCardTitle>
              <ErpCardDescription>
                These are the small building blocks most ERP screens will compose first.
              </ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-5">
              <div className="space-y-3">
                <ErpAlert variant="info" icon={<BellRing className="h-5 w-5" />}>
                  <ErpAlertTitle>Reminder batch queued</ErpAlertTitle>
                  <ErpAlertDescription>
                    Parent notifications will go out after the counsellor review window closes.
                  </ErpAlertDescription>
                </ErpAlert>
                <ErpAlert variant="success" density="compact" icon={<CheckCircle2 className="h-5 w-5" />}>
                  <ErpAlertTitle>Export delivered</ErpAlertTitle>
                  <ErpAlertDescription>Today&apos;s admissions CSV is ready for the admin team.</ErpAlertDescription>
                </ErpAlert>
                <ErpAlert variant="warning" density="compact" icon={<AlertTriangle className="h-5 w-5" />}>
                  <ErpAlertTitle>Visit capacity low</ErpAlertTitle>
                  <ErpAlertDescription>Saturday campus tour is down to three remaining slots.</ErpAlertDescription>
                </ErpAlert>
                <ErpAlert variant="danger" density="compact" icon={<ShieldAlert className="h-5 w-5" />}>
                  <ErpAlertTitle>Sync needs retry</ErpAlertTitle>
                  <ErpAlertDescription>Transport route sync failed during the last scheduled run.</ErpAlertDescription>
                </ErpAlert>
              </div>

              <div className="flex flex-wrap gap-3">
                <ErpBadge variant="accent">Accent</ErpBadge>
                <ErpBadge variant="success">Success</ErpBadge>
                <ErpBadge variant="warning">Warning</ErpBadge>
                <ErpBadge variant="danger">Danger</ErpBadge>
                <ErpBadge variant="dark">Dark</ErpBadge>
                <ErpBadge variant="outline">Outline</ErpBadge>
              </div>

              <div className="flex flex-wrap gap-3">
                <ErpButton variant="primary">Primary action</ErpButton>
                <ErpButton variant="secondary">Secondary</ErpButton>
                <ErpButton variant="outline">Outline</ErpButton>
                <ErpButton variant="subtle">Subtle</ErpButton>
                <ErpButton variant="ghost">Ghost</ErpButton>
                <ErpButton variant="danger">Delete</ErpButton>
              </div>

              <div className="space-y-3">
                <ErpButtonGroup variant="segmented">
                  <ErpButton variant="ghost">Overview</ErpButton>
                  <ErpButton variant="primary">Pending</ErpButton>
                  <ErpButton variant="ghost">Completed</ErpButton>
                </ErpButtonGroup>
                <ErpButtonGroup variant="subtle">
                  <ErpButton variant="subtle">Daily</ErpButton>
                  <ErpButton variant="primary">Weekly</ErpButton>
                  <ErpButton variant="subtle">Monthly</ErpButton>
                </ErpButtonGroup>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <ErpLink href="#" variant="primary" underline>
                  Primary link
                </ErpLink>
                <ErpLink href="#" variant="accent">
                  Accent link
                </ErpLink>
                <ErpLink href="#" variant="subtle">
                  Subtle link
                </ErpLink>
                <ErpLink href="#" variant="quiet" showExternalIcon>
                  Quiet link
                </ErpLink>
              </div>
            </ErpCardContent>
          </ErpCard>
        </ErpGridItem>

        <ErpGridItem>
          <ErpCard variant="default" className="h-full">
            <ErpCardHeader>
              <ErpBadge variant="outline">Disclosure + identity</ErpBadge>
              <ErpCardTitle>Accordion, collapse, avatars, and breadcrumb patterns</ErpCardTitle>
              <ErpCardDescription>
                Use these in settings, policies, record profiles, and deeper admin paths.
              </ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-5">
              <ErpAccordion type="single" collapsible defaultValue="fees">
                <ErpAccordionItem value="fees" variant="surface">
                  <ErpAccordionTrigger>Fee operations</ErpAccordionTrigger>
                  <ErpAccordionContent>
                    Keep registration, tuition, transport, and annual charge details tucked into progressive disclosure.
                  </ErpAccordionContent>
                </ErpAccordionItem>
                <ErpAccordionItem value="attendance" variant="muted">
                  <ErpAccordionTrigger>Attendance escalation rules</ErpAccordionTrigger>
                  <ErpAccordionContent>
                    Reveal absentee thresholds, counsellor ownership, and next-step triggers only when needed.
                  </ErpAccordionContent>
                </ErpAccordionItem>
              </ErpAccordion>

              <ErpCollapse defaultOpen variant="accent">
                <ErpCollapseTrigger>Publishing approval checklist</ErpCollapseTrigger>
                <ErpCollapseContent>
                  Use the collapse primitive when a single disclosure is enough and full accordion grouping is unnecessary.
                </ErpCollapseContent>
              </ErpCollapse>

              <div className="space-y-3">
                <div className="text-sm font-medium text-slate-700">Avatar states</div>
                <div className="flex flex-wrap items-end gap-4">
                  <ErpAvatar fallback="AS" size="sm" tone="accent" status="online" />
                  <ErpAvatar fallback="RK" size="md" tone="neutral" status="away" />
                  <ErpAvatar fallback="NV" size="lg" tone="dark" status="busy" />
                  <ErpAvatar fallback="PV" size="xl" tone="success" status="online" />
                </div>
                <ErpAvatarGroup>
                  <ErpAvatar fallback="AK" tone="accent" status="online" className="ring-4 ring-white" />
                  <ErpAvatar fallback="MS" tone="warning" status="away" className="ring-4 ring-white" />
                  <ErpAvatar fallback="DA" tone="dark" status="busy" className="ring-4 ring-white" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-[24px] border border-slate-200 bg-white text-sm font-semibold text-slate-500 ring-4 ring-white">
                    +7
                  </div>
                </ErpAvatarGroup>
              </div>

              <ErpBreadcrumb>
                <ErpBreadcrumbList>
                  <ErpBreadcrumbItem>
                    <ErpBreadcrumbLink href="/admin">Dashboard</ErpBreadcrumbLink>
                  </ErpBreadcrumbItem>
                  <ErpBreadcrumbSeparator />
                  <ErpBreadcrumbItem>
                    <ErpBreadcrumbLink href="/admin/students">Students</ErpBreadcrumbLink>
                  </ErpBreadcrumbItem>
                  <ErpBreadcrumbSeparator />
                  <ErpBreadcrumbItem>
                    <ErpBreadcrumbCurrent>Profile review</ErpBreadcrumbCurrent>
                  </ErpBreadcrumbItem>
                </ErpBreadcrumbList>
              </ErpBreadcrumb>
            </ErpCardContent>
          </ErpCard>
        </ErpGridItem>
      </ErpGrid>

      <ErpGrid columns="analytics" gap="lg">
        <ErpGridItem>
          <ErpCard variant="default">
            <ErpCardHeader>
              <ErpBadge variant="outline">Layout + navigation</ErpBadge>
              <ErpCardTitle>Grid, list groups, and pagination</ErpCardTitle>
              <ErpCardDescription>
                These primitives help structure dense ERP pages without turning every view into a custom layout exercise.
              </ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-5">
              <ErpGrid columns="three" gap="md">
                <ErpGridItem surface="default" className="space-y-2">
                  <LayoutGrid className="h-5 w-5 text-slate-500" />
                  <div className="text-sm font-semibold text-slate-950">Three-column dashboard</div>
                  <div className="text-sm leading-6 text-slate-600">Good for KPI blocks, ownership lists, and status summaries.</div>
                </ErpGridItem>
                <ErpGridItem surface="accent" className="space-y-2">
                  <FolderKanban className="h-5 w-5 text-[#9f5d37]" />
                  <div className="text-sm font-semibold text-slate-950">Workflow lane</div>
                  <div className="text-sm leading-6 text-slate-600">Useful for approvals, publishing, and admin task grouping.</div>
                </ErpGridItem>
                <ErpGridItem surface="dark" className="space-y-2 text-white">
                  <PanelsTopLeft className="h-5 w-5 text-white/70" />
                  <div className="text-sm font-semibold">Dark summary panel</div>
                  <div className="text-sm leading-6 text-white/72">Reserve for sticky context, quick stats, or internal callouts.</div>
                </ErpGridItem>
              </ErpGrid>

              <ErpGrid columns="two" gap="md">
                <ErpListGroup variant="default">
                  <ErpListGroupItem active interactive showChevron>
                    <ErpListGroupTitle>Admissions pipeline</ErpListGroupTitle>
                    <ErpListGroupDescription>Move fresh leads into visit-ready status.</ErpListGroupDescription>
                    <ErpListGroupMeta>11 pending</ErpListGroupMeta>
                  </ErpListGroupItem>
                  <ErpListGroupItem interactive showChevron>
                    <ErpListGroupTitle>Campus tours</ErpListGroupTitle>
                    <ErpListGroupDescription>Track confirmations, reminders, and attendance.</ErpListGroupDescription>
                    <ErpListGroupMeta>Saturday batch</ErpListGroupMeta>
                  </ErpListGroupItem>
                  <ErpListGroupItem interactive showChevron>
                    <ErpListGroupTitle>Student onboarding</ErpListGroupTitle>
                    <ErpListGroupDescription>Collect documents, transport choices, and section allocations.</ErpListGroupDescription>
                    <ErpListGroupMeta>27 active</ErpListGroupMeta>
                  </ErpListGroupItem>
                </ErpListGroup>

                <ErpListGroup variant="dark">
                  <ErpListGroupItem tone="dark" interactive showChevron>
                    <ErpListGroupTitle className="text-white">Notices and circulars</ErpListGroupTitle>
                    <ErpListGroupDescription className="text-white/72">Draft, review, and publish parent communication.</ErpListGroupDescription>
                    <ErpListGroupMeta className="text-white/45">3 drafts</ErpListGroupMeta>
                  </ErpListGroupItem>
                  <ErpListGroupItem tone="dark" interactive showChevron>
                    <ErpListGroupTitle className="text-white">Holiday calendar</ErpListGroupTitle>
                    <ErpListGroupDescription className="text-white/72">Manage closures, observances, and working day shifts.</ErpListGroupDescription>
                    <ErpListGroupMeta className="text-white/45">Q3 planning</ErpListGroupMeta>
                  </ErpListGroupItem>
                </ErpListGroup>
              </ErpGrid>

              <div className="space-y-3">
                <div className="text-sm font-medium text-slate-700">Pagination</div>
                <ErpPagination>
                  <ErpPaginationList>
                    <ErpPaginationItem>
                      <ErpPaginationPrevious href="#" />
                    </ErpPaginationItem>
                    <ErpPaginationItem>
                      <ErpPaginationLink href="#" isActive>
                        1
                      </ErpPaginationLink>
                    </ErpPaginationItem>
                    <ErpPaginationItem>
                      <ErpPaginationLink href="#">2</ErpPaginationLink>
                    </ErpPaginationItem>
                    <ErpPaginationItem>
                      <ErpPaginationLink href="#">3</ErpPaginationLink>
                    </ErpPaginationItem>
                    <ErpPaginationItem>
                      <ErpPaginationEllipsis />
                    </ErpPaginationItem>
                    <ErpPaginationItem>
                      <ErpPaginationNext href="#" />
                    </ErpPaginationItem>
                  </ErpPaginationList>
                </ErpPagination>
                <ErpPagination>
                  <ErpPaginationList>
                    <ErpPaginationItem>
                      <ErpPaginationLink href="#" size="sm" variant="subtle" isActive>
                        01
                      </ErpPaginationLink>
                    </ErpPaginationItem>
                    <ErpPaginationItem>
                      <ErpPaginationLink href="#" size="sm" variant="subtle">
                        02
                      </ErpPaginationLink>
                    </ErpPaginationItem>
                    <ErpPaginationItem>
                      <ErpPaginationLink href="#" size="sm" variant="subtle">
                        03
                      </ErpPaginationLink>
                    </ErpPaginationItem>
                  </ErpPaginationList>
                </ErpPagination>
              </div>
            </ErpCardContent>
          </ErpCard>
        </ErpGridItem>

        <ErpGridItem>
          <ErpCard variant="default">
            <ErpCardHeader>
              <ErpBadge variant="outline">Media + visual context</ErpBadge>
              <ErpCardTitle>Images and carousel variations</ErpCardTitle>
              <ErpCardDescription>
                Internal UIs still need visual hierarchy, but the content should serve workflows instead of brand storytelling.
              </ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-5">
              <ErpGrid columns="two" gap="md">
                <ErpImage
                  src={uiImages.dashboard}
                  alt="Admin workspace illustration"
                  title="Default media frame"
                  caption="Use for section covers, summaries, and dashboard previews."
                  ratio="wide"
                >
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Eye className="h-4 w-4" />
                    Workspace preview
                  </div>
                </ErpImage>

                <ErpImage
                  src={uiImages.publishing}
                  alt="Publishing queue illustration"
                  title="Accent media frame"
                  caption="Accent surfaces work well for editorial tools and campaign previews."
                  ratio="portrait"
                  tone="accent"
                />
              </ErpGrid>

              <ErpCarousel items={carouselItems} variant="accent" />
              <ErpCarousel items={carouselItems.slice(0, 2)} variant="dark" showDots={false} />
            </ErpCardContent>
          </ErpCard>
        </ErpGridItem>
      </ErpGrid>

      <ErpGrid columns="two" gap="lg">
        <ErpGridItem>
          <ErpCard variant="default" className="h-full">
            <ErpCardHeader>
              <ErpBadge variant="outline">Menus + floating panels</ErpBadge>
              <ErpCardTitle>Dropdown and popover variations</ErpCardTitle>
              <ErpCardDescription>
                Use dropdowns for command menus and popovers for light contextual panels, hints, or review summaries.
              </ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-5">
              <div className="flex flex-wrap gap-3">
                <ErpDropdownMenu>
                  <ErpDropdownMenuTrigger className={erpButtonVariants({ variant: "outline" })}>
                    Default dropdown
                  </ErpDropdownMenuTrigger>
                  <ErpDropdownMenuContent variant="default">
                    <ErpDropdownMenuLabel>Admissions</ErpDropdownMenuLabel>
                    <ErpDropdownMenuGroup>
                      <ErpDropdownMenuItem>
                        New enquiry
                        <ErpDropdownMenuShortcut>G</ErpDropdownMenuShortcut>
                      </ErpDropdownMenuItem>
                      <ErpDropdownMenuItem>
                        Campus visit
                        <ErpDropdownMenuShortcut>V</ErpDropdownMenuShortcut>
                      </ErpDropdownMenuItem>
                    </ErpDropdownMenuGroup>
                    <ErpDropdownMenuSeparator />
                    <ErpDropdownMenuSub>
                      <ErpDropdownMenuSubTrigger>More actions</ErpDropdownMenuSubTrigger>
                      <ErpDropdownMenuSubContent variant="accent">
                        <ErpDropdownMenuItem>Assign counsellor</ErpDropdownMenuItem>
                        <ErpDropdownMenuItem>Export leads</ErpDropdownMenuItem>
                      </ErpDropdownMenuSubContent>
                    </ErpDropdownMenuSub>
                    <ErpDropdownMenuSeparator />
                    <ErpDropdownMenuItem tone="danger">Archive item</ErpDropdownMenuItem>
                  </ErpDropdownMenuContent>
                </ErpDropdownMenu>

                <ErpDropdownMenu>
                  <ErpDropdownMenuTrigger className={erpButtonVariants({ variant: "primary" })}>
                    Dark dropdown
                  </ErpDropdownMenuTrigger>
                  <ErpDropdownMenuContent variant="dark">
                    <ErpDropdownMenuLabel surface="dark">Publishing</ErpDropdownMenuLabel>
                    <ErpDropdownMenuItem surface="dark">Review draft</ErpDropdownMenuItem>
                    <ErpDropdownMenuItem surface="dark">Schedule notice</ErpDropdownMenuItem>
                    <ErpDropdownMenuSeparator surface="dark" />
                    <ErpDropdownMenuItem surface="dark">Open approvals</ErpDropdownMenuItem>
                  </ErpDropdownMenuContent>
                </ErpDropdownMenu>
              </div>

              <div className="flex flex-wrap gap-3">
                <ErpPopover>
                  <ErpPopoverTrigger className={erpButtonVariants({ variant: "secondary" })}>
                    Default popover
                  </ErpPopoverTrigger>
                  <ErpPopoverContent>
                    <div className="space-y-2">
                      <div className="text-base font-semibold text-slate-950">Counsellor summary</div>
                      <div className="text-sm leading-6 text-slate-600">
                        8 parents require a same-day callback and 3 campus visits are awaiting confirmation.
                      </div>
                    </div>
                  </ErpPopoverContent>
                </ErpPopover>

                <ErpPopover>
                  <ErpPopoverTrigger className={erpButtonVariants({ variant: "primary" })}>
                    Dark popover
                  </ErpPopoverTrigger>
                  <ErpPopoverContent variant="dark" size="sm">
                    <div className="space-y-2">
                      <div className="text-base font-semibold text-white">Next publish slot</div>
                      <div className="text-sm leading-6 text-white/72">
                        Event highlights are scheduled for 4:30 PM after principal approval.
                      </div>
                    </div>
                  </ErpPopoverContent>
                </ErpPopover>
              </div>
            </ErpCardContent>
          </ErpCard>
        </ErpGridItem>

        <ErpGridItem>
          <ErpCard variant="default" className="h-full">
            <ErpCardHeader>
              <ErpBadge variant="outline">Overlays</ErpBadge>
              <ErpCardTitle>Modal and offcanvas variations</ErpCardTitle>
              <ErpCardDescription>
                Use modals for focused confirmation flows and offcanvas panels for richer secondary workspaces.
              </ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-5">
              <div className="flex flex-wrap gap-3">
                <ErpModal>
                  <ErpModalTrigger className={erpButtonVariants({ variant: "outline" })}>
                    Default modal
                  </ErpModalTrigger>
                  <ErpModalContent size="md">
                    <ErpModalHeader>
                      <ErpBadge variant="outline">Review</ErpBadge>
                      <ErpModalTitle>Approve transport route update</ErpModalTitle>
                      <ErpModalDescription>
                        Confirm the revised pickup plan before reminders are sent to parents.
                      </ErpModalDescription>
                    </ErpModalHeader>
                    <ErpModalBody>
                      <ErpAlert variant="warning" density="compact" icon={<CalendarClock className="h-5 w-5" />}>
                        <ErpAlertTitle>Change affects Monday schedule</ErpAlertTitle>
                        <ErpAlertDescription>
                          Two route stops will shift by 10 minutes after approval.
                        </ErpAlertDescription>
                      </ErpAlert>
                    </ErpModalBody>
                    <ErpModalFooter>
                      <ErpButton variant="outline">Cancel</ErpButton>
                      <ErpButton variant="primary">Approve update</ErpButton>
                    </ErpModalFooter>
                  </ErpModalContent>
                </ErpModal>

                <ErpModal>
                  <ErpModalTrigger className={erpButtonVariants({ variant: "primary" })}>
                    Dark modal
                  </ErpModalTrigger>
                  <ErpModalContent variant="dark" size="lg">
                    <ErpModalHeader>
                      <ErpBadge variant="accent">Publishing</ErpBadge>
                      <ErpModalTitle>Launch event banner</ErpModalTitle>
                      <ErpModalDescription>
                        Final check before the homepage event banner and notice strip go live together.
                      </ErpModalDescription>
                    </ErpModalHeader>
                    <ErpModalBody className="space-y-3 text-white/72">
                      <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                        Audience: All parents, homepage visitors, and event page subscribers.
                      </div>
                      <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                        Assets: Banner creative approved, notice copy approved, CTA destination set.
                      </div>
                    </ErpModalBody>
                    <ErpModalFooter>
                      <ErpButton variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                        Back
                      </ErpButton>
                      <ErpButton variant="secondary">Publish now</ErpButton>
                    </ErpModalFooter>
                  </ErpModalContent>
                </ErpModal>
              </div>

              <div className="flex flex-wrap gap-3">
                <ErpOffcanvas>
                  <ErpOffcanvasTrigger className={erpButtonVariants({ variant: "secondary" })}>
                    Right offcanvas
                  </ErpOffcanvasTrigger>
                  <ErpOffcanvasContent side="right" size="md">
                    <ErpOffcanvasHeader>
                      <ErpBadge variant="outline">Side workspace</ErpBadge>
                      <ErpOffcanvasTitle>Lead review panel</ErpOffcanvasTitle>
                      <ErpOffcanvasDescription>
                        Use this pattern when users need more room than a popover but should not leave the current page.
                      </ErpOffcanvasDescription>
                    </ErpOffcanvasHeader>
                    <ErpOffcanvasBody className="space-y-4">
                      <ErpListGroup variant="default">
                        <ErpListGroupItem interactive showChevron>
                          <ErpListGroupTitle>Family enquiry details</ErpListGroupTitle>
                          <ErpListGroupDescription>Class preference, branch interest, and fee questions.</ErpListGroupDescription>
                        </ErpListGroupItem>
                        <ErpListGroupItem interactive showChevron>
                          <ErpListGroupTitle>Counsellor notes</ErpListGroupTitle>
                          <ErpListGroupDescription>Track callbacks, ownership, and visit readiness.</ErpListGroupDescription>
                        </ErpListGroupItem>
                      </ErpListGroup>
                    </ErpOffcanvasBody>
                    <ErpOffcanvasFooter>
                      <ErpButton variant="outline">Close</ErpButton>
                      <ErpButton variant="primary">Convert to visit</ErpButton>
                    </ErpOffcanvasFooter>
                  </ErpOffcanvasContent>
                </ErpOffcanvas>

                <ErpOffcanvas>
                  <ErpOffcanvasTrigger className={erpButtonVariants({ variant: "primary" })}>
                    Bottom offcanvas
                  </ErpOffcanvasTrigger>
                  <ErpOffcanvasContent side="bottom" size="full" variant="dark">
                    <ErpOffcanvasHeader>
                      <ErpBadge variant="accent">Bottom sheet</ErpBadge>
                      <ErpOffcanvasTitle>Publishing review strip</ErpOffcanvasTitle>
                      <ErpOffcanvasDescription>
                        A bottom presentation works well for batch actions, compare views, and quick editorial approvals.
                      </ErpOffcanvasDescription>
                    </ErpOffcanvasHeader>
                    <ErpOffcanvasBody>
                      <ErpGrid columns="three" gap="md">
                        <ErpGridItem surface="none" className="rounded-[24px] border border-white/10 bg-white/5 p-4 text-white/72">
                          Homepage hero banner queued.
                        </ErpGridItem>
                        <ErpGridItem surface="none" className="rounded-[24px] border border-white/10 bg-white/5 p-4 text-white/72">
                          Annual day highlights waiting for copy approval.
                        </ErpGridItem>
                        <ErpGridItem surface="none" className="rounded-[24px] border border-white/10 bg-white/5 p-4 text-white/72">
                          Parent circular scheduled for 6:30 PM.
                        </ErpGridItem>
                      </ErpGrid>
                    </ErpOffcanvasBody>
                    <ErpOffcanvasFooter>
                      <ErpButton variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                        Keep editing
                      </ErpButton>
                      <ErpButton variant="secondary">Approve batch</ErpButton>
                    </ErpOffcanvasFooter>
                  </ErpOffcanvasContent>
                </ErpOffcanvas>
              </div>
            </ErpCardContent>
          </ErpCard>
        </ErpGridItem>
      </ErpGrid>

      <ErpGrid columns="dashboard" gap="lg">
        <ErpGridItem>
          <ErpCard variant="default" className="h-full">
            <ErpCardHeader>
              <ErpBadge variant="outline">Progress</ErpBadge>
              <ErpCardTitle>Progress bars, circles, and workflow steps</ErpCardTitle>
              <ErpCardDescription>
                Use these patterns for application stages, publishing completion, migration jobs, and multi-step internal tasks.
              </ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_140px] lg:items-center">
                <div className="space-y-4">
                  <ErpProgress label="Admissions review" value={34} showValue />
                  <ErpProgress label="Notice publishing" tone="accent" value={61} showValue />
                  <ErpProgress label="Fee follow-up" tone="success" size="lg" value={84} showValue />
                  <ErpProgress label="Transport sync" tone="warning" size="sm" value={18} showValue />
                </div>

                <div className="flex items-center justify-center">
                  <ErpProgressCircle tone="accent" value={72} />
                </div>
              </div>

              <ErpProgressSteps
                tone="success"
                steps={[
                  {
                    title: "Lead captured",
                    description: "Parent enquiry source, class intent, and contact details recorded.",
                    status: "complete",
                  },
                  {
                    title: "Visit scheduled",
                    description: "Family slot selected and counsellor ownership assigned.",
                    status: "complete",
                  },
                  {
                    title: "Admission review",
                    description: "Documents and fee plan currently under verification.",
                    status: "current",
                  },
                  {
                    title: "Enrollment confirmed",
                    description: "Final onboarding package and class allocation pending.",
                    status: "upcoming",
                  },
                ]}
              />
            </ErpCardContent>
          </ErpCard>
        </ErpGridItem>

        <ErpGridItem>
          <ErpCard variant="default" className="h-full">
            <ErpCardHeader>
              <ErpBadge variant="outline">Loading</ErpBadge>
              <ErpCardTitle>Placeholders and spinner states</ErpCardTitle>
              <ErpCardDescription>
                Use these while tables, records, or dashboard sections hydrate so the ERP surface stays structured under load.
              </ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-5">
              <div className="flex flex-wrap items-center gap-4">
                <ErpSpinner size="sm" />
                <ErpSpinner size="md" label="Syncing student records" />
                <div className="rounded-[26px] bg-slate-950 px-4 py-3">
                  <ErpSpinner size="lg" tone="inverse" />
                </div>
                <ErpSpinner size="xl" tone="accent" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3 rounded-[26px] border border-slate-200 bg-white p-4">
                  <ErpPlaceholder shape="line" className="w-1/2" />
                  <ErpPlaceholderText lines={4} />
                  <div className="grid grid-cols-2 gap-3">
                    <ErpPlaceholder shape="block" className="h-20" />
                    <ErpPlaceholder shape="block" className="h-20" />
                  </div>
                </div>

                <ErpPlaceholderCard tone="accent" />
              </div>
            </ErpCardContent>
          </ErpCard>
        </ErpGridItem>
      </ErpGrid>

      <ErpGrid columns="dashboard" gap="lg">
        <ErpGridItem>
          <ErpCard variant="default" className="h-full">
            <ErpCardHeader>
              <ErpBadge variant="outline">Tabs + Tooltips</ErpBadge>
              <ErpCardTitle>Segmented views and contextual hints</ErpCardTitle>
              <ErpCardDescription>
                Tabs help users switch internal contexts quickly, while tooltips carry small bits of guidance without crowding the layout.
              </ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-6">
              <ErpTabs defaultValue="overview">
                <ErpTabsList variant="default">
                  <ErpTabsTrigger value="overview">Overview</ErpTabsTrigger>
                  <ErpTabsTrigger value="pipeline">Pipeline</ErpTabsTrigger>
                  <ErpTabsTrigger value="owners">Owners</ErpTabsTrigger>
                </ErpTabsList>
                <ErpTabsContent value="overview">
                  <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                    Default tabs work well for compact top-level switches inside cards and data modules.
                  </div>
                </ErpTabsContent>
                <ErpTabsContent value="pipeline">
                  <div className="rounded-[26px] border border-[#eadcca] bg-[#fff8f1] p-4 text-sm leading-6 text-slate-600">
                    Use tabs to move between enquiry, visit, review, and enrollment states without leaving the current screen.
                  </div>
                </ErpTabsContent>
                <ErpTabsContent value="owners">
                  <div className="rounded-[26px] border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
                    Ownership tabs can separate counsellors, coordinators, and administrators on the same page.
                  </div>
                </ErpTabsContent>
              </ErpTabs>

              <ErpTabs defaultValue="weekly">
                <ErpTabsList variant="subtle">
                  <ErpTabsTrigger value="daily" variant="subtle">Daily</ErpTabsTrigger>
                  <ErpTabsTrigger value="weekly" variant="subtle">Weekly</ErpTabsTrigger>
                  <ErpTabsTrigger value="monthly" variant="subtle">Monthly</ErpTabsTrigger>
                </ErpTabsList>
                <ErpTabsContent value="weekly">
                  <div className="rounded-[26px] border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
                    Subtle tabs are useful when the page already has strong hierarchy and only needs light secondary grouping.
                  </div>
                </ErpTabsContent>
              </ErpTabs>

              <ErpTabs defaultValue="notices" className="gap-3">
                <ErpTabsList
                  variant="subtle"
                  className="w-full justify-start rounded-none border-b border-slate-200 bg-transparent p-0 shadow-none"
                >
                  <ErpTabsTrigger value="notices" variant="underline">Notices</ErpTabsTrigger>
                  <ErpTabsTrigger value="events" variant="underline">Events</ErpTabsTrigger>
                  <ErpTabsTrigger value="holidays" variant="underline">Holidays</ErpTabsTrigger>
                </ErpTabsList>
                <ErpTabsContent value="notices">
                  <div className="text-sm leading-6 text-slate-600">
                    Underline tabs are better for broader content sections where users expect a page-like switch rather than a chip control.
                  </div>
                </ErpTabsContent>
              </ErpTabs>

              <div className="space-y-3">
                <div className="text-sm font-medium text-slate-700">Tooltip variations</div>
                <div className="flex flex-wrap gap-3">
                  <ErpTooltip>
                    <ErpTooltipTrigger className={erpButtonVariants({ variant: "outline" })}>
                      Default tooltip
                    </ErpTooltipTrigger>
                    <ErpTooltipContent>
                      Use for small explanations on dense admin controls.
                    </ErpTooltipContent>
                  </ErpTooltip>

                  <ErpTooltip>
                    <ErpTooltipTrigger className={erpButtonVariants({ variant: "secondary" })}>
                      Accent tooltip
                    </ErpTooltipTrigger>
                    <ErpTooltipContent variant="accent">
                      Good for editorial hints, publishing notes, and friendly guidance.
                    </ErpTooltipContent>
                  </ErpTooltip>

                  <ErpTooltip>
                    <ErpTooltipTrigger className={erpButtonVariants({ variant: "primary" })}>
                      Dark tooltip
                    </ErpTooltipTrigger>
                    <ErpTooltipContent variant="dark">
                      Reserve for system actions, console surfaces, or dark panels.
                    </ErpTooltipContent>
                  </ErpTooltip>
                </div>
              </div>
            </ErpCardContent>
          </ErpCard>
        </ErpGridItem>

        <ErpGridItem>
          <ErpCard variant="default" className="h-full">
            <ErpCardHeader>
              <ErpBadge variant="outline">Typography</ErpBadge>
              <ErpCardTitle>Text hierarchy for internal screens</ErpCardTitle>
              <ErpCardDescription>
                Keep the ERP language clearer and denser than the website, but still visually structured enough for long-form admin content.
              </ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-5">
              <ErpTypography variant="eyebrow">ERP type system</ErpTypography>
              <ErpTypography variant="display">
                Large display headings should be reserved for top-level internal surfaces.
              </ErpTypography>
              <ErpTypography variant="heading">Section heading for a major workspace area</ErpTypography>
              <ErpTypography variant="subheading" tone="accent">
                Accent subheading for a guided or editorial module
              </ErpTypography>
              <ErpTypography variant="body">
                Body copy should stay direct, operational, and easy to scan. It supports forms, schedules, records, and workflow instructions without sounding like marketing language.
              </ErpTypography>
              <ErpTypography variant="muted">
                Muted text is appropriate for secondary context, timestamps, and low-priority notes.
              </ErpTypography>
              <ErpTypography variant="quote">
                Internal UI should reduce ambiguity and shorten decision time, not decorate the workflow.
              </ErpTypography>
              <ErpTypography variant="code">POST /api/v1/admissions/applications</ErpTypography>

              <div className="rounded-[30px] border border-slate-900 bg-slate-950 p-5">
                <ErpTypography variant="overline" tone="inverse">Inverse surface</ErpTypography>
                <ErpTypography variant="subheading" tone="inverse" className="mt-2">
                  Dark cards need their own readable text hierarchy.
                </ErpTypography>
                <ErpTypography variant="body" tone="inverse" className="mt-2">
                  Use inverse typography for summaries, sticky insights, and dense internal control panels on dark backgrounds.
                </ErpTypography>
              </div>

              <ErpTextList>
                <li>Use display and heading variants only where a clear layout jump is needed.</li>
                <li>Prefer body and muted variants for instructions, metadata, and operational detail.</li>
                <li>Keep quotes and code blocks rare so they remain meaningful.</li>
              </ErpTextList>
            </ErpCardContent>
          </ErpCard>
        </ErpGridItem>
      </ErpGrid>

      <ErpGrid columns="dashboard" gap="lg">
        <ErpGridItem>
          <ErpCard variant="default" className="h-full">
            <ErpCardHeader>
              <ErpBadge variant="outline">Data surfaces</ErpBadge>
              <ErpCardTitle>Filters, selects, and tables for dense admin views</ErpCardTitle>
              <ErpCardDescription>
                This layer should handle search, narrowing, status slicing, and row-heavy views before teams reach for one-off layout patterns.
              </ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-6">
              <ErpFilterBar variant="accent">
                <ErpFilterGroup className="items-stretch lg:flex-nowrap">
                  <ErpFilterSearch
                    variant="accent"
                    placeholder="Search applicant, parent, or counsellor"
                  />

                  <div className="grid flex-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    <ErpSelect defaultValue="all-stage">
                      <ErpSelectTrigger variant="accent">
                        <ErpSelectValue placeholder="Stage" />
                      </ErpSelectTrigger>
                      <ErpSelectContent variant="accent">
                        <ErpSelectGroup>
                          <ErpSelectLabel variant="accent">Stage</ErpSelectLabel>
                          <ErpSelectItem variant="accent" value="all-stage">All stages</ErpSelectItem>
                          <ErpSelectItem variant="accent" value="visit">Campus visit</ErpSelectItem>
                          <ErpSelectItem variant="accent" value="docs">Documents pending</ErpSelectItem>
                          <ErpSelectItem variant="accent" value="fees">Fee discussion</ErpSelectItem>
                        </ErpSelectGroup>
                      </ErpSelectContent>
                    </ErpSelect>

                    <ErpSelect defaultValue="all-owner">
                      <ErpSelectTrigger variant="accent">
                        <ErpSelectValue placeholder="Owner" />
                      </ErpSelectTrigger>
                      <ErpSelectContent variant="accent">
                        <ErpSelectGroup>
                          <ErpSelectLabel variant="accent">Owner</ErpSelectLabel>
                          <ErpSelectItem variant="accent" value="all-owner">All owners</ErpSelectItem>
                          <ErpSelectItem variant="accent" value="aditi">Aditi</ErpSelectItem>
                          <ErpSelectItem variant="accent" value="raghav">Raghav</ErpSelectItem>
                          <ErpSelectItem variant="accent" value="neha">Neha</ErpSelectItem>
                        </ErpSelectGroup>
                      </ErpSelectContent>
                    </ErpSelect>

                    <ErpSelect defaultValue="latest">
                      <ErpSelectTrigger variant="accent">
                        <ErpSelectValue placeholder="Sort" />
                      </ErpSelectTrigger>
                      <ErpSelectContent variant="accent">
                        <ErpSelectGroup>
                          <ErpSelectLabel variant="accent">Sort</ErpSelectLabel>
                          <ErpSelectItem variant="accent" value="latest">Newest first</ErpSelectItem>
                          <ErpSelectItem variant="accent" value="priority">Highest priority</ErpSelectItem>
                          <ErpSelectSeparator variant="accent" />
                          <ErpSelectItem variant="accent" value="owner">By owner</ErpSelectItem>
                        </ErpSelectGroup>
                      </ErpSelectContent>
                    </ErpSelect>
                  </div>
                </ErpFilterGroup>

                <ErpFilterGroup>
                  <ErpFilterChip variant="accent" active>
                    All leads
                  </ErpFilterChip>
                  <ErpFilterChip variant="accent">Fresh today</ErpFilterChip>
                  <ErpFilterChip variant="accent">Needs callback</ErpFilterChip>
                  <ErpFilterChip variant="accent">Visit booked</ErpFilterChip>
                  <ErpFilterChip variant="accent">Escalated</ErpFilterChip>
                </ErpFilterGroup>

                <ErpFilterDivider variant="accent" />

                <ErpFilterGroup className="justify-between gap-3">
                  <ErpFilterSummary variant="accent">
                    29 applicants across 3 counsellors. 8 require same-day follow-up before the evening review.
                  </ErpFilterSummary>
                  <ErpBadge variant="outline">Synced 4 min ago</ErpBadge>
                </ErpFilterGroup>
              </ErpFilterBar>

              <ErpTable>
                <ErpTableCaption>
                  Use compact tables for screening lists, records, approvals, and operations queues that require fast comparison.
                </ErpTableCaption>
                <ErpTableHeader>
                  <tr>
                    <ErpTableHead>Applicant</ErpTableHead>
                    <ErpTableHead>Class</ErpTableHead>
                    <ErpTableHead>Owner</ErpTableHead>
                    <ErpTableHead>Stage</ErpTableHead>
                    <ErpTableHead>Status</ErpTableHead>
                  </tr>
                </ErpTableHeader>
                <ErpTableBody>
                  {admissionsTableRows.map((row) => (
                    <ErpTableRow key={row.id} tone={row.tone} interactive>
                      <ErpTableCell tone={row.tone}>
                        <div className="space-y-0.5">
                          <div className="font-semibold text-slate-950">{row.family}</div>
                          <div className="text-xs uppercase tracking-[0.16em] text-slate-400">{row.id}</div>
                        </div>
                      </ErpTableCell>
                      <ErpTableCell tone={row.tone}>{row.classLevel}</ErpTableCell>
                      <ErpTableCell tone={row.tone}>{row.owner}</ErpTableCell>
                      <ErpTableCell tone={row.tone}>
                        <ErpBadge
                          variant={
                            row.tone === "success"
                              ? "success"
                              : row.tone === "warning"
                                ? "warning"
                                : row.tone === "danger"
                                  ? "danger"
                                  : "accent"
                          }
                        >
                          {row.stage}
                        </ErpBadge>
                      </ErpTableCell>
                      <ErpTableCell tone={row.tone}>{row.status}</ErpTableCell>
                    </ErpTableRow>
                  ))}
                </ErpTableBody>
              </ErpTable>
            </ErpCardContent>
          </ErpCard>
        </ErpGridItem>

        <ErpGridItem>
          <ErpCard variant="default" className="h-full">
            <ErpCardHeader>
              <ErpBadge variant="outline">Controls + fallbacks</ErpBadge>
              <ErpCardTitle>Select variations and empty-state patterns</ErpCardTitle>
              <ErpCardDescription>
                Every admin workflow needs form controls for narrowing context and reliable empty-state language for no-data conditions.
              </ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-6">
              <div className="grid gap-4 xl:grid-cols-2">
                <div className="space-y-4 rounded-[26px] border border-slate-200 bg-slate-50/80 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <Funnel className="h-4 w-4 text-slate-500" />
                    Select surfaces
                  </div>

                  <div className="space-y-3">
                    <ErpSelect defaultValue="day">
                      <ErpSelectTrigger>
                        <ErpSelectValue placeholder="Choose schedule block" />
                      </ErpSelectTrigger>
                      <ErpSelectContent>
                        <ErpSelectGroup>
                          <ErpSelectLabel>Schedule block</ErpSelectLabel>
                          <ErpSelectItem value="day">Day shift</ErpSelectItem>
                          <ErpSelectItem value="evening">Evening callbacks</ErpSelectItem>
                          <ErpSelectItem value="weekend">Weekend visits</ErpSelectItem>
                        </ErpSelectGroup>
                      </ErpSelectContent>
                    </ErpSelect>

                    <ErpSelect defaultValue="editorial">
                      <ErpSelectTrigger variant="accent">
                        <ErpSelectValue placeholder="Choose board" />
                      </ErpSelectTrigger>
                      <ErpSelectContent variant="accent">
                        <ErpSelectGroup>
                          <ErpSelectLabel variant="accent">Content board</ErpSelectLabel>
                          <ErpSelectItem variant="accent" value="editorial">Editorial review</ErpSelectItem>
                          <ErpSelectItem variant="accent" value="notices">Notice approvals</ErpSelectItem>
                          <ErpSelectItem variant="accent" value="events">Event publishing</ErpSelectItem>
                        </ErpSelectGroup>
                      </ErpSelectContent>
                    </ErpSelect>

                    <div className="rounded-[24px] border border-slate-900 bg-slate-950 p-3">
                      <ErpSelect defaultValue="all-live">
                        <ErpSelectTrigger variant="dark">
                          <ErpSelectValue placeholder="Choose live panel" />
                        </ErpSelectTrigger>
                        <ErpSelectContent variant="dark">
                          <ErpSelectGroup>
                            <ErpSelectLabel variant="dark">Live panel</ErpSelectLabel>
                            <ErpSelectItem variant="dark" value="all-live">All live items</ErpSelectItem>
                            <ErpSelectItem variant="dark" value="approvals">Pending approvals</ErpSelectItem>
                            <ErpSelectItem variant="dark" value="alerts">Alert feed</ErpSelectItem>
                          </ErpSelectGroup>
                        </ErpSelectContent>
                      </ErpSelect>
                    </div>
                  </div>
                </div>

                <ErpEmptyState variant="accent" size="sm" align="start">
                  <ErpEmptyStateMedia variant="accent">
                    <CircleOff className="h-6 w-6" />
                  </ErpEmptyStateMedia>
                  <div className="space-y-2">
                    <ErpEmptyStateTitle>No filtered results</ErpEmptyStateTitle>
                    <ErpEmptyStateDescription variant="accent">
                      No applicants match the current owner, stage, and priority combination. Relax one filter or clear chips to reopen the queue.
                    </ErpEmptyStateDescription>
                  </div>
                  <ErpEmptyStateActions>
                    <ErpButton variant="secondary">Clear filters</ErpButton>
                    <ErpButton variant="outline">Save view</ErpButton>
                  </ErpEmptyStateActions>
                </ErpEmptyState>
              </div>

              <ErpEmptyState variant="dark" size="sm" align="start">
                <ErpEmptyStateMedia variant="dark">
                  <Command className="h-6 w-6" />
                </ErpEmptyStateMedia>
                <div className="space-y-2">
                  <ErpEmptyStateTitle>Build a new internal module</ErpEmptyStateTitle>
                  <ErpEmptyStateDescription variant="dark">
                    Finance, transport, HR, and library screens can start from the same shell and data primitives instead of creating local UI rules.
                  </ErpEmptyStateDescription>
                </div>
                <ErpEmptyStateActions>
                  <ErpButton variant="secondary">Create module brief</ErpButton>
                  <ErpButton variant="inverse">Open shell tokens</ErpButton>
                </ErpEmptyStateActions>
              </ErpEmptyState>
            </ErpCardContent>
          </ErpCard>
        </ErpGridItem>
      </ErpGrid>

      <ErpGrid columns="dashboard" gap="lg">
        <ErpGridItem>
          <ErpCard variant="default" className="h-full">
            <ErpCardHeader>
              <ErpBadge variant="outline">Charts</ErpBadge>
              <ErpCardTitle>Bar, donut, and sparkline patterns for internal analytics</ErpCardTitle>
              <ErpCardDescription>
                These chart primitives are meant for operational snapshots, not decorative dashboards. Keep them compact, readable, and easy to compare.
              </ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <ErpBadge variant="outline">Weekly admissions volume</ErpBadge>
                <ErpBadge variant="accent">Ownership mix</ErpBadge>
                <ErpBadge variant="success">Response trend</ErpBadge>
              </div>

              <ErpBarChart data={admissionsChartData} />

              <div className="grid gap-4 xl:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <PieChart className="h-4 w-4 text-slate-500" />
                    Ownership split
                  </div>
                  <ErpDonutChart data={ownershipMix} centerLabel="Active" centerValue="32" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <LineChart className="h-4 w-4 text-slate-500" />
                    Response trend
                  </div>
                  <ErpSparklineChart data={[...responseTrend]} tone="success" />
                </div>
              </div>
            </ErpCardContent>
          </ErpCard>
        </ErpGridItem>

        <ErpGridItem>
          <ErpCard variant="default" className="h-full">
            <ErpCardHeader>
              <ErpBadge variant="outline">Feedback</ErpBadge>
              <ErpCardTitle>Toasts for short-lived workflow signals</ErpCardTitle>
              <ErpCardDescription>
                Toasts should confirm success, warn about delays, or expose lightweight recovery actions without interrupting the operator flow.
              </ErpCardDescription>
            </ErpCardHeader>
            <ErpCardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-4">
                  <BarChart3 className="h-5 w-5 text-slate-500" />
                  <div className="mt-3 text-sm font-semibold text-slate-950">Short horizon</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">
                    Keep toasts for updates that matter right now, not long-lived dashboard state.
                  </div>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-4">
                  <BellRing className="h-5 w-5 text-slate-500" />
                  <div className="mt-3 text-sm font-semibold text-slate-950">Actionable only</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">
                    Include a small follow-up action only when the next step is immediate and unambiguous.
                  </div>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-4">
                  <AlertTriangle className="h-5 w-5 text-slate-500" />
                  <div className="mt-3 text-sm font-semibold text-slate-950">Escalate sparingly</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">
                    Serious failures should still surface in-page summaries, not only in toast notifications.
                  </div>
                </div>
              </div>

              <UiKitToastDemo />
            </ErpCardContent>
          </ErpCard>
        </ErpGridItem>
      </ErpGrid>

      <ErpCard variant="accent">
        <ErpCardHeader>
          <ErpBadge variant="dark">Recommended usage</ErpBadge>
          <ErpCardTitle>Apply this system to admin pages, not the public website</ErpCardTitle>
          <ErpCardDescription>
            The public site should keep its marketing-oriented components. This ERP system is tuned for operations, records, approvals, scheduling, and internal publishing tools.
          </ErpCardDescription>
        </ErpCardHeader>
        <ErpCardContent>
          <ErpGrid columns="three" gap="md">
            <ErpGridItem surface="default" className="space-y-3">
              <Users className="h-5 w-5 text-slate-500" />
              <div className="text-sm font-semibold text-slate-950">Admissions and student ops</div>
              <div className="text-sm leading-6 text-slate-600">Leads, visits, onboarding, records, attendance, and parent handoffs.</div>
            </ErpGridItem>
            <ErpGridItem surface="default" className="space-y-3">
              <BookOpen className="h-5 w-5 text-slate-500" />
              <div className="text-sm font-semibold text-slate-950">Content and notice workflows</div>
              <div className="text-sm leading-6 text-slate-600">Draft review, notice scheduling, media previews, and calendar publishing.</div>
            </ErpGridItem>
            <ErpGridItem surface="default" className="space-y-3">
              <Sparkles className="h-5 w-5 text-slate-500" />
              <div className="text-sm font-semibold text-slate-950">Future internal modules</div>
              <div className="text-sm leading-6 text-slate-600">Finance, transport, HR, library, and analytics pages can now inherit the same system.</div>
            </ErpGridItem>
          </ErpGrid>
        </ErpCardContent>
        <ErpCardFooter className="flex-wrap">
          <Link href="/admin/leads" className={erpButtonVariants({ variant: "primary" })}>
            Start with Leads
          </Link>
          <Link href="/admin/content" className={erpButtonVariants({ variant: "outline" })}>
            Continue to Content
          </Link>
          <Link
            href="/admin/notices"
            className={erpLinkVariants({ variant: "quiet", underline: true })}
          >
            Review notices next
          </Link>
        </ErpCardFooter>
      </ErpCard>
      </div>
    </ErpTooltipProvider>
  )
}