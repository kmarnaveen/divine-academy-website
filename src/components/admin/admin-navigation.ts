import type { LucideIcon } from "lucide-react";
import {
  Bell,
  CalendarDays,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Mail,
  MapPin,
  Palette,
  Sparkles,
} from "lucide-react";

export type AdminNavItem = {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export const adminNavItems: AdminNavItem[] = [
  {
    title: "Overview",
    href: "/admin",
    description: "Dashboard summary and quick access",
    icon: LayoutDashboard,
  },
  {
    title: "Leads",
    href: "/admin/leads",
    description: "Enquiry follow-up and counselling pipeline",
    icon: Mail,
  },
  {
    title: "Campus Visit",
    href: "/admin/campus-visit",
    description: "Bookings, confirmations, and visit planning",
    icon: MapPin,
  },
  {
    title: "Students",
    href: "/admin/students",
    description: "Student records, sections, and onboarding",
    icon: GraduationCap,
  },
  {
    title: "Content",
    href: "/admin/content",
    description: "Website content, drafts, and publishing queue",
    icon: FileText,
  },
  {
    title: "Notices",
    href: "/admin/notices",
    description: "Circulars, alerts, and parent communication",
    icon: Bell,
  },
  {
    title: "Holiday",
    href: "/admin/holiday",
    description: "Academic holidays and closure planning",
    icon: CalendarDays,
  },
  {
    title: "Events",
    href: "/admin/events",
    description: "School activities, programs, and event calendar",
    icon: Sparkles,
  },
  {
    title: "UI Kit",
    href: "/admin/ui-kit",
    description: "ERP-only design primitives and variation previews",
    icon: Palette,
  },
];
