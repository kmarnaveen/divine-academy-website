"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowUpRight,
  Command,
  LayoutDashboard,
  LogOut,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import {
  clearDummySession,
  readDummySession,
  type DummyAuthSession,
} from "@/lib/dummy-auth-client";
import { cn } from "@/lib/utils";
import {
  ErpAvatar,
  ErpBadge,
  ErpButton,
  erpWorkspaceTokens,
} from "@/components/admin/ui";

import { adminNavItems } from "./admin-navigation";

type AdminShellProps = {
  children: React.ReactNode;
};

const navGroups: Array<{
  label: string;
  items: string[];
}> = [
  {
    label: "Admissions",
    items: ["/admin/leads", "/admin/campus-visit", "/admin/students"],
  },
  {
    label: "Publishing",
    items: [
      "/admin/content",
      "/admin/notices",
      "/admin/holiday",
      "/admin/events",
    ],
  },
  {
    label: "System",
    items: ["/admin/ui-kit"],
  },
];

function isAdminPathActive(pathname: string, href: string) {
  if (href === "/admin") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<DummyAuthSession | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setSession(readDummySession());
  }, []);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const overviewItem = adminNavItems[0];
  const activeItem =
    adminNavItems.find((item) => isAdminPathActive(pathname, item.href)) ??
    overviewItem;
  const isOverviewActive = isAdminPathActive(pathname, overviewItem.href);
  const hasAdminSession = session?.role === "admin";
  const userInitials = session?.displayName
    ? session.displayName
        .split(" ")
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? "")
        .join("")
    : "AD";

  const handleLogout = () => {
    clearDummySession();
    setSession(null);
    router.push("/login/admin");
  };

  return (
    <div className={cn("min-h-screen", erpWorkspaceTokens.shell.canvas)}>
      <div className="flex min-h-screen">
        <div
          className={cn(
            "fixed inset-0 z-40 transition-opacity md:hidden",
            erpWorkspaceTokens.shell.overlay,
            isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />

        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 flex w-[304px] max-w-[calc(100vw-1.5rem)] flex-col transition-transform duration-300 md:static md:translate-x-0",
            erpWorkspaceTokens.sidebar.panel,
            isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="border-b border-white/10 px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <Link href="/admin" className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[24px] border border-white/10 bg-white/[0.08] text-white shadow-[0_20px_40px_-30px_rgba(15,23,42,0.65)]">
                    <Command className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "text-[11px] font-semibold uppercase tracking-[0.24em]",
                        erpWorkspaceTokens.sidebar.brandBadge,
                      )}
                    >
                      Divine Admin
                    </p>
                    <h1
                      className={cn(
                        "mt-1 truncate text-lg font-semibold tracking-[-0.02em]",
                        erpWorkspaceTokens.sidebar.brandTitle,
                      )}
                    >
                      Operations Console
                    </h1>
                  </div>
                </div>
              </Link>

              <ErpButton
                type="button"
                variant="inverse"
                size="icon"
                className="h-10 w-10 md:hidden"
                onClick={() => setIsSidebarOpen(false)}
                aria-label="Close sidebar"
              >
                <X className="h-5 w-5" />
              </ErpButton>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <ErpBadge variant="accent">Internal workspace</ErpBadge>
              <ErpBadge variant={hasAdminSession ? "success" : "outline"}>
                {hasAdminSession ? "Admin session" : "Demo access"}
              </ErpBadge>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-4">
            <Link
              href={overviewItem.href}
              className={cn(
                "flex items-center gap-3 rounded-[22px] border px-3.5 py-3.5 transition-colors",
                isOverviewActive
                  ? erpWorkspaceTokens.sidebar.overviewActive
                  : erpWorkspaceTokens.sidebar.overviewInactive,
              )}
            >
              <div
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-[0_10px_30px_-18px_rgba(243,228,214,0.9)]",
                  isOverviewActive
                    ? erpWorkspaceTokens.sidebar.navIconActive
                    : "bg-[#f3e4d6] text-slate-950",
                )}
              >
                <LayoutDashboard className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold">{overviewItem.title}</p>
                <p className="mt-0.5 truncate text-xs text-current/60">
                  {overviewItem.description}
                </p>
              </div>
            </Link>

            <nav className="mt-6 space-y-5">
              {navGroups.map((group) => {
                const items = adminNavItems.filter((item) =>
                  group.items.includes(item.href),
                );

                return (
                  <div key={group.label}>
                    <p
                      className={cn(
                        "px-2 text-[11px] font-semibold uppercase tracking-[0.24em]",
                        erpWorkspaceTokens.sidebar.groupLabel,
                      )}
                    >
                      {group.label}
                    </p>
                    <div className="mt-2 space-y-1.5">
                      {items.map((item) => {
                        const isActive = isAdminPathActive(pathname, item.href);
                        const Icon = item.icon;

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors",
                              isActive
                                ? erpWorkspaceTokens.sidebar.navActive
                                : erpWorkspaceTokens.sidebar.navInactive,
                            )}
                          >
                            <div
                              className={cn(
                                "flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl transition-colors",
                                isActive
                                  ? erpWorkspaceTokens.sidebar.navIconActive
                                  : erpWorkspaceTokens.sidebar.navIconInactive,
                              )}
                            >
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-medium text-inherit">
                                {item.title}
                              </p>
                              <p
                                className={cn(
                                  "truncate text-xs leading-5",
                                  isActive
                                    ? erpWorkspaceTokens.sidebar.navMetaActive
                                    : erpWorkspaceTokens.sidebar.navMetaInactive,
                                )}
                              >
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-white/8 p-3">
            <div
              className={cn(
                "rounded-[26px] border p-3",
                erpWorkspaceTokens.sidebar.profilePanel,
              )}
            >
              <div className="flex items-center gap-3">
                <ErpAvatar
                  fallback={userInitials}
                  tone="accent"
                  size="md"
                  status={hasAdminSession ? "online" : "offline"}
                  className="shadow-none"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    {session?.displayName ?? "Admin Demo"}
                  </p>
                  <p className="truncate text-xs text-white/48">
                    {session?.email ?? "admin@divineacademy.edu.in"}
                  </p>
                </div>
              </div>

              <div
                className={cn(
                  "mt-3 flex items-center gap-2 rounded-2xl border px-3 py-2.5 text-xs",
                  erpWorkspaceTokens.sidebar.profileMetaPanel,
                )}
              >
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                {hasAdminSession
                  ? "Dummy admin session active"
                  : "No active admin session"}
              </div>

              <div className="mt-3 flex gap-2">
                <ErpButton
                  asChild
                  variant="inverse"
                  className={cn("flex-1", erpWorkspaceTokens.sidebar.siteAction)}
                >
                  <Link href="/">
                    View Site
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </ErpButton>
                <ErpButton
                  type="button"
                  variant="secondary"
                  className={cn("flex-1", erpWorkspaceTokens.sidebar.logoutAction)}
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </ErpButton>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header
            className={cn(
              "sticky top-0 z-30",
              erpWorkspaceTokens.shell.header,
            )}
          >
            <div className="flex items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
              <ErpButton
                type="button"
                variant="outline"
                size="icon"
                className="md:hidden"
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open sidebar"
              >
                <Menu className="h-5 w-5" />
              </ErpButton>

              <div className="min-w-0 flex-1">
                <p
                  className={cn(
                    "text-[11px] font-semibold uppercase tracking-[0.22em]",
                    erpWorkspaceTokens.header.kicker,
                  )}
                >
                  Admin Workspace
                </p>
                <h2
                  className={cn(
                    "mt-1 truncate text-lg font-semibold tracking-[-0.02em]",
                    erpWorkspaceTokens.header.title,
                  )}
                >
                  {activeItem.title}
                </h2>
                <p
                  className={cn(
                    "hidden truncate text-sm sm:block",
                    erpWorkspaceTokens.header.description,
                  )}
                >
                  {activeItem.description}
                </p>
              </div>

              <div className="hidden items-center gap-2 md:flex">
                <ErpBadge variant="accent">ERP shell</ErpBadge>
                <div
                  className={cn(
                    "flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium",
                    erpWorkspaceTokens.header.status,
                  )}
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                {hasAdminSession ? "Signed in as admin" : "Demo access"}
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
