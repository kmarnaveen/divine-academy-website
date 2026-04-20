"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home as HomeIcon,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Award,
  Users,
  GraduationCap,
  Building,
  BookOpen,
  Heart,
  Trophy,
  User,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { schoolContact } from "@/lib/school-contact";
import { cn } from "@/lib/utils";

// TypeScript interfaces for world-class type safety
interface SubmenuItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

interface NavigationItem {
  name: string;
  href: string;
  submenu?: SubmenuItem[];
  featured?: boolean;
  cta?: boolean;
}

// World-Class Information Architecture - Reduced to 6 strategic items
const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Academics",
    href: "/academics",
    featured: true, // Mark as primary section
    submenu: [
      {
        name: "Curriculum",
        href: "/academics/curriculum",
        description: "CBSE-aligned progressive learning",
        icon: <BookOpen className="h-4 w-4" />,
        imageSrc: "/images/submenu/curriculum.jpg",
        imageAlt: "Students learning in the library",
      },
      {
        name: "Academic Streams",
        href: "/academics/streams",
        description: "Science, Commerce & Humanities",
        icon: <GraduationCap className="h-4 w-4" />,
        imageSrc: "/images/submenu/academic-streams.jpg",
        imageAlt: "Smart classroom at Divine International Academy",
      },
      {
        name: "Achievements",
        href: "/academics/achievements",
        description: "Awards & recognition",
        icon: <Award className="h-4 w-4" />,
        imageSrc: "/images/submenu/achievements.jpg",
        imageAlt: "Students receiving recognition and awards",
      },
      {
        name: "Board Results",
        href: "/academics/board-results",
        description: "Latest Class X results list",
        icon: <Trophy className="h-4 w-4" />,
        imageSrc: "/images/submenu/achievements.jpg",
        imageAlt:
          "Class X board-result recognitions at Divine International Academy",
      },
    ],
  },
  {
    name: "Campus Life",
    href: "/student-life",
    submenu: [
      {
        name: "Facilities",
        href: "/facilities",
        description: "Modern campus & infrastructure",
        icon: <Building className="h-4 w-4" />,
        imageSrc: "/images/submenu/facilities.avif",
        imageAlt: "Aerial view of the school campus",
      },
      {
        name: "Student Activities",
        href: "/student-life",
        description: "Clubs, events & programs",
        icon: <Users className="h-4 w-4" />,
        imageSrc: "/images/submenu/student-activities.jpg",
        imageAlt: "Students performing on stage",
      },
      {
        name: "Sports",
        href: "/facilities/sports",
        description: "Athletic programs & facilities",
        icon: <Heart className="h-4 w-4" />,
        imageSrc: "/images/submenu/sports.avif",
        imageAlt: "Students playing volleyball",
      },
    ],
  },
  {
    name: "Admissions",
    href: "/admissions",
    cta: true, // Mark as conversion-focused
    submenu: [
      {
        name: "Admission Process",
        href: "/admissions/process",
        description: "Step-by-step admission guide",
        icon: <BookOpen className="h-4 w-4" />,
        imageSrc: "/images/submenu/admission-process.jpg",
        imageAlt: "Admissions banner for Divine International Academy",
      },
      {
        name: "Fee Structure",
        href: "/admissions/fees",
        description: "Transparent fee details",
        icon: <Award className="h-4 w-4" />,
        imageSrc: "/images/submenu/fee-structure.avif",
        imageAlt: "Main school campus entrance",
      },
      {
        name: "Apply Online",
        href: "/apply",
        description: "Start your application now",
        icon: <GraduationCap className="h-4 w-4" />,
        imageSrc: "/images/submenu/apply-online.jpg",
        imageAlt: "Admissions call to action at Divine International Academy",
      },
    ],
  },
  { name: "Contact", href: "/contact" },
];

const mobileNavigationMeta: Record<
  string,
  {
    icon: LucideIcon;
    summary: string;
  }
> = {
  Home: {
    icon: HomeIcon,
    summary: "Homepage overview and key highlights",
  },
  About: {
    icon: Award,
    summary: "School story, leadership, and philosophy",
  },
  Academics: {
    icon: BookOpen,
    summary: "Curriculum, streams, and student outcomes",
  },
  "Campus Life": {
    icon: Building,
    summary: "Facilities, activities, and sports culture",
  },
  Admissions: {
    icon: GraduationCap,
    summary: "Process, fees, and application guidance",
  },
  Contact: {
    icon: Mail,
    summary: "Phone, email, and location details",
  },
};

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null);
  const [submenuPreviewHref, setSubmenuPreviewHref] = React.useState<
    string | null
  >(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = React.useState<
    string | null
  >(null);
  const [portalRoot, setPortalRoot] = React.useState<HTMLElement | null>(null);
  const submenuRefs = React.useRef<{ [key: string]: HTMLDivElement | null }>(
    {}
  );

  React.useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  const isActivePath = React.useCallback(
    (href: string) => {
      if (href === "/") {
        return pathname === "/";
      }

      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname],
  );

  const hasActiveSubmenu = React.useCallback(
    (item: NavigationItem) =>
      item.submenu?.some((subitem) => isActivePath(subitem.href)) ?? false,
    [isActivePath],
  );

  const getDefaultSubmenuPreviewHref = React.useCallback(
    (itemName: string) => {
      const item = navigation.find((navItem) => navItem.name === itemName);
      const submenu = item?.submenu;

      return (
        submenu?.find((subitem) => isActivePath(subitem.href))?.href ??
        submenu?.[0]?.href ??
        null
      );
    },
    [isActivePath],
  );

  const openSubmenu = React.useCallback(
    (itemName: string) => {
      setActiveSubmenu(itemName);
      setSubmenuPreviewHref(getDefaultSubmenuPreviewHref(itemName));
    },
    [getDefaultSubmenuPreviewHref],
  );

  // Enhanced mobile menu management
  const toggleMobileSubmenu = (itemName: string) => {
    setExpandedMobileMenu(expandedMobileMenu === itemName ? null : itemName);
  };

  // Close mobile menu with animation
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  };

  // Handle submenu click (open/close)
  const handleSubmenuClick = (itemName: string, event: React.MouseEvent) => {
    event.preventDefault();

    if (activeSubmenu === itemName) {
      closeSubmenu();
      return;
    }

    openSubmenu(itemName);
  };

  // Close submenu
  const closeSubmenu = () => {
    setActiveSubmenu(null);
    setSubmenuPreviewHref(null);
  };

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Keyboard navigation support
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        closeMobileMenu();
      }
      if (event.key === "Escape" && activeSubmenu) {
        closeSubmenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, activeSubmenu]);

  // Click-outside detection for submenus
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!activeSubmenu) return;

      // Check if click is outside all submenu containers
      let clickedOutside = true;
      Object.values(submenuRefs.current).forEach((ref) => {
        if (ref && ref.contains(event.target as Node)) {
          clickedOutside = false;
        }
      });

      // Also check if click is on a navigation item with submenu
      const clickedElement = event.target as Element;
      const navItem = clickedElement.closest("[data-nav-item]");
      if (navItem) {
        clickedOutside = false;
      }

      if (clickedOutside) {
        closeSubmenu();
      }
    };

    if (activeSubmenu) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [activeSubmenu]);

  // Click-to-call functionality
  const handlePhoneClick = () => {
    window.open(schoolContact.phoneHref, "_self");
  };

  const handleEmailClick = () => {
    window.open(schoolContact.emailHref, "_self");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/90">
      {/* Trust & Contact Bar - World-Class Implementation */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-3 sm:px-4 lg:px-5">
          <div className="flex items-center justify-between gap-3 py-2 sm:py-2.5">
            {/* Contact Info - Mobile Optimized */}
            <div className="flex items-center gap-3 sm:gap-4 text-[13px] font-medium sm:text-sm">
              <button
                onClick={handlePhoneClick}
                className="flex items-center gap-2 transition-colors group hover:text-gray-200"
                aria-label="Call Divine International Academy"
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">
                  {schoolContact.phoneDisplay}
                </span>
                <span className="sm:hidden">Call Now</span>
              </button>

              <button
                onClick={handleEmailClick}
                className="hidden xl:flex items-center gap-2 transition-colors group hover:text-gray-200"
                aria-label="Email Divine International Academy"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>{schoolContact.emailDisplay}</span>
              </button>
            </div>

            {/* Trust Signals */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] sm:px-3 sm:text-xs">
                <Award className="h-3 w-3" />
                <span className="hidden sm:inline">CBSE Affiliated</span>
                <span className="sm:hidden">CBSE</span>
              </div>
              <div className="hidden 2xl:flex items-center gap-2 text-xs">
                <MapPin className="h-3 w-3" />
                <span>Sirsaganj, Firozabad, UP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - World-Class Design */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-5">
        <div className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:h-[68px] lg:h-[72px] lg:grid-cols-[208px_minmax(0,1fr)_auto] lg:gap-4 xl:grid-cols-[232px_minmax(0,1fr)_auto] xl:gap-5">
          {/* Logo & Brand - Proper Visual Hierarchy */}
          <Link
            href="/"
            aria-label="Divine International Academy home"
            className="group flex min-w-0 items-center gap-3 lg:shrink-0"
          >
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12">
              <Image
                src="/images/logo.png"
                alt="Divine International Academy Logo"
                fill
                sizes="(min-width: 1024px) 48px, (min-width: 640px) 44px, 40px"
                className="object-contain transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </div>
            <div className="hidden min-w-0 sm:block lg:max-w-[170px] xl:max-w-none">
              <div className="text-sm font-bold font-heading leading-[1.02] tracking-tight text-gray-900 sm:text-base xl:text-[1.06rem]">
                Divine International Academy
              </div>
              <p className="mt-1 hidden text-xs font-medium text-gray-600 xl:block">
                CBSE | Nursery to XII
              </p>
            </div>
          </Link>
          {/* Desktop Navigation - Enhanced Professional Implementation */}
          <nav
            className="hidden lg:flex min-w-0 items-center justify-center gap-0.5 xl:gap-1"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => {
              const itemIsActive =
                isActivePath(item.href) || hasActiveSubmenu(item);
              const previewItem =
                item.submenu?.find(
                  (subitem) => subitem.href === submenuPreviewHref,
                ) ??
                item.submenu?.find((subitem) => isActivePath(subitem.href)) ??
                item.submenu?.[0] ??
                null;
              const desktopNavClasses = cn(
                "relative flex items-center whitespace-nowrap rounded-lg px-2.5 py-2 text-[14px] font-semibold tracking-tight transition-colors duration-200 xl:px-3 xl:py-2.5 xl:text-[15px]",
                itemIsActive
                  ? "border border-primary/15 bg-primary/8 text-primary shadow-sm"
                  : item.cta
                    ? "border border-primary/20 text-primary hover:bg-primary hover:text-white"
                    : item.featured
                      ? "text-gray-700 hover:bg-primary/6 hover:text-primary"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary",
              );

              return (
                <div
                  key={item.name}
                  className="relative group"
                  data-nav-item={item.name}
                  onMouseEnter={
                    item.submenu ? () => openSubmenu(item.name) : undefined
                  }
                  onMouseLeave={item.submenu ? closeSubmenu : undefined}
                  onBlur={
                    item.submenu
                      ? (event) => {
                          if (
                            !event.currentTarget.contains(
                              event.relatedTarget as Node | null,
                            )
                          ) {
                            closeSubmenu();
                          }
                        }
                      : undefined
                  }
                >
                  {item.submenu ? (
                    <button
                      onClick={(e) => handleSubmenuClick(item.name, e)}
                      onFocus={() => openSubmenu(item.name)}
                      className={cn(desktopNavClasses, "w-full text-left")}
                      aria-haspopup="true"
                      aria-expanded={
                        activeSubmenu === item.name ? "true" : "false"
                      }
                    >
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "ml-1.5 h-3.5 w-3.5 transition-transform duration-200 ease-out xl:h-4 xl:w-4",
                          activeSubmenu === item.name
                            ? "rotate-180 text-primary"
                            : itemIsActive
                              ? "text-primary"
                              : "rotate-0 group-hover:text-primary",
                        )}
                      />
                    </button>
                  ) : (
                    <Link href={item.href} className={desktopNavClasses}>
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  )}

                  {/* Enhanced Submenu with Rich Content & Sophisticated Design */}
                  {item.submenu && (
                    <div
                      ref={(el) => {
                        submenuRefs.current[item.name] = el;
                      }}
                      className={cn(
                        "absolute top-full left-1/2 z-20 mt-2.5 w-[34rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 overflow-hidden rounded-xl border border-gray-200/70 bg-white/96 shadow-[0_28px_70px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl transition-all duration-200 transform xl:w-[38rem]",
                        activeSubmenu === item.name
                          ? "opacity-100 visible translate-y-0 scale-100"
                          : "pointer-events-none invisible translate-y-3 scale-[0.98] opacity-0",
                      )}
                      role="menu"
                    >
                      <div className="border-b border-gray-100/80 bg-gradient-to-r from-primary/7 to-primary/10 px-4 py-3.5 xl:px-5">
                        <h3 className="text-base font-bold tracking-tight text-gray-900 xl:text-[1.05rem]">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-xs font-medium text-gray-600 xl:text-[13px]">
                          Explore our {item.name.toLowerCase()} offerings
                        </p>
                      </div>

                      <div className="grid gap-3 p-3 xl:grid-cols-[minmax(0,1fr)_13rem] xl:gap-4 xl:p-3.5">
                        <div className="grid gap-1.5">
                          {item.submenu.map((subitem, index) => {
                            const subitemIsActive = isActivePath(subitem.href);

                            return (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                onMouseEnter={() =>
                                  setSubmenuPreviewHref(subitem.href)
                                }
                                onFocus={() =>
                                  setSubmenuPreviewHref(subitem.href)
                                }
                                className={cn(
                                  "group flex items-start gap-3 rounded-lg border p-3 transition-all duration-200 xl:p-3.5",
                                  subitemIsActive
                                    ? "bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 shadow-md"
                                    : "border-transparent hover:bg-gradient-to-r hover:from-primary/8 hover:to-primary/12 hover:border-primary/15 hover:shadow-md hover:shadow-primary/10",
                                )}
                                role="menuitem"
                                style={{
                                  animationDelay: `${index * 75}ms`,
                                }}
                              >
                                {subitem.imageSrc ? (
                                  <div className="relative h-12 w-[4.25rem] flex-shrink-0 overflow-hidden rounded-lg border border-black/5 bg-gray-100 xl:h-[3.25rem] xl:w-[4.75rem]">
                                    <Image
                                      src={subitem.imageSrc}
                                      alt={subitem.imageAlt || subitem.name}
                                      fill
                                      sizes="(min-width: 1280px) 76px, 68px"
                                      className="object-cover transition-transform duration-200 group-hover:scale-105"
                                    />
                                    {subitem.icon && (
                                      <div className="absolute bottom-1 left-1 flex h-5 w-5 items-center justify-center rounded-md bg-white/90 text-primary shadow-sm backdrop-blur-sm">
                                        {subitem.icon}
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  subitem.icon && (
                                    <div
                                      className={cn(
                                        "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-200 xl:h-10 xl:w-10",
                                        subitemIsActive
                                          ? "bg-gradient-to-br from-primary to-primary/90 text-white"
                                          : "bg-gradient-to-br from-primary/15 to-primary/20 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/90 group-hover:text-white group-hover:scale-105",
                                      )}
                                    >
                                      {subitem.icon}
                                    </div>
                                  )
                                )}
                                <div className="flex-1 min-w-0">
                                  <div
                                    className={cn(
                                      "mb-0.5 text-sm font-semibold transition-colors duration-200 xl:text-[15px]",
                                      subitemIsActive
                                        ? "text-primary"
                                        : "text-gray-900 group-hover:text-primary",
                                    )}
                                  >
                                    {subitem.name}
                                  </div>
                                  {"description" in subitem &&
                                    subitem.description && (
                                      <div className="line-clamp-2 text-[12px] leading-5 text-gray-600 group-hover:text-gray-700 xl:text-[13px]">
                                        {subitem.description}
                                      </div>
                                    )}
                                </div>
                                <div
                                  className={cn(
                                    "flex-shrink-0 self-center transition-all duration-200",
                                    subitemIsActive
                                      ? "opacity-100 translate-x-1"
                                      : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1",
                                  )}
                                >
                                  <ChevronDown className="h-3.5 w-3.5 rotate-[-90deg] text-primary" />
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {previewItem && previewItem.imageSrc && (
                          <div className="hidden flex-col overflow-hidden rounded-xl border border-primary/10 bg-gradient-to-br from-white to-primary/5 xl:flex">
                            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
                              <Image
                                src={previewItem.imageSrc}
                                alt={previewItem.imageAlt || previewItem.name}
                                fill
                                sizes="208px"
                                className="object-cover"
                              />
                              {previewItem.icon && (
                                <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/92 text-primary shadow-sm backdrop-blur-sm">
                                  {previewItem.icon}
                                </div>
                              )}
                              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                              <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                                <div className="mt-1 text-sm font-semibold leading-tight">
                                  {previewItem.name}
                                </div>
                              </div>
                            </div>

                            {previewItem.description && (
                              <div className="p-3">
                                <p className="text-xs leading-5 text-slate-600">
                                  {previewItem.description}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {(item.featured || item.cta) && (
                        <div className="border-t border-gray-100/80 bg-gradient-to-r from-gray-50/80 to-gray-100/50 px-4 py-3 xl:px-5">
                          <Link
                            href={item.href}
                            className="group flex items-center justify-center gap-2 text-[13px] font-semibold text-primary transition-colors duration-200 hover:text-primary/80 xl:text-sm"
                          >
                            <span>View All {item.name}</span>
                            <ChevronDown className="h-3 w-3 rotate-[-90deg] transition-transform duration-200 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          {/* Conversion-Optimized CTA */}
          <div className="hidden items-center gap-2 lg:flex lg:shrink-0">
            <Button
              asChild
              variant="outline"
              className="h-10 border-primary/25 px-4 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              <Link href="/login" className="flex items-center gap-2">
                <User className="h-4.5 w-4.5" />
                <span>Login</span>
              </Link>
            </Button>
            <Button
              asChild
              className="h-10 bg-primary px-4 text-sm font-bold text-white shadow-md transition-colors duration-200 hover:bg-primary/90"
            >
              <Link href="/apply" className="flex items-center gap-2">
                <GraduationCap className="h-4.5 w-4.5" />
                <span>Apply Now</span>
              </Link>
            </Button>
          </div>
          {/* Mobile Menu Button - Touch Optimized with Animation */}
          <button
            className="rounded-lg p-2.5 transition-all duration-200 touch-manipulation active:scale-95 hover:bg-gray-100 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            style={{ minWidth: "44px", minHeight: "44px" }} // WCAG touch target size
          >
            <div className="relative">
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 transform rotate-0 transition-transform duration-200" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 transform rotate-0 transition-transform duration-200" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu - World-Class Optimization */}
      {portalRoot && mobileMenuOpen
        ? createPortal(
            <>
              {/* Backdrop Overlay */}
              <div
                className="fixed inset-0 z-[70] bg-slate-950/45 backdrop-blur-[3px] lg:hidden"
                onClick={closeMobileMenu}
                aria-hidden="true"
              />

              {/* Sidebar Panel */}
              <div
                className="fixed inset-y-0 right-0 z-[80] flex h-dvh w-[23rem] max-w-[92vw] flex-col overflow-hidden rounded-l-[32px] border-l border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.99)_0%,rgba(248,250,252,0.98)_100%)] shadow-[0_32px_90px_-28px_rgba(15,23,42,0.45)] lg:hidden"
                id="mobile-navigation"
                role="navigation"
                aria-label="Mobile navigation menu"
              >
                <div className="flex h-full flex-col">
                  <div className="border-b border-slate-200/80 bg-[linear-gradient(180deg,rgba(165,28,48,0.07)_0%,rgba(255,255,255,0)_100%)] px-4 pb-4 pt-4">
                    <div className="flex items-start justify-between gap-3">
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className="flex min-w-0 items-center gap-3"
                      >
                        <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                          <Image
                            src="/images/logo.png"
                            alt="Divine International Academy Logo"
                            fill
                            sizes="40px"
                            className="object-contain"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="max-w-[12.25rem] text-[0.96rem] font-bold font-heading leading-tight text-slate-950">
                            Divine International Academy
                          </div>
                          <p className="mt-0.5 text-xs font-medium text-slate-500">
                            Quick access for parents on the go
                          </p>
                        </div>
                      </Link>

                      <button
                        onClick={closeMobileMenu}
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-primary/20 hover:text-primary"
                        aria-label="Close navigation menu"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2.5">
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          handlePhoneClick();
                          closeMobileMenu();
                        }}
                        className="flex min-h-[72px] flex-col items-center justify-center gap-2 rounded-[22px] border border-primary/10 bg-white px-3 py-3 text-primary shadow-sm transition-colors hover:bg-primary/5"
                      >
                        <Phone className="h-4.5 w-4.5" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                          Call
                        </span>
                      </button>

                      <Link
                        href="/login"
                        onClick={closeMobileMenu}
                        className="flex min-h-[72px] flex-col items-center justify-center gap-2 rounded-[22px] border border-slate-200 bg-white px-3 py-3 text-slate-700 shadow-sm transition-colors hover:border-primary/15 hover:bg-primary/5 hover:text-primary"
                      >
                        <User className="h-4.5 w-4.5" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                          Login
                        </span>
                      </Link>

                      <Link
                        href="/apply"
                        onClick={closeMobileMenu}
                        className="flex min-h-[72px] flex-col items-center justify-center gap-2 rounded-[22px] bg-primary px-3 py-3 text-white shadow-[0_18px_35px_-18px_rgba(165,28,48,0.65)] transition-colors hover:bg-primary/92"
                      >
                        <GraduationCap className="h-4.5 w-4.5" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                          Apply
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="mobile-menu-scroll flex-1 overflow-y-auto overscroll-contain px-3 py-3">
                    <nav className="space-y-2.5">
                      {navigation.map((item) => {
                        const itemIsActive =
                          isActivePath(item.href) || hasActiveSubmenu(item);
                        const itemMeta = mobileNavigationMeta[item.name];
                        const ItemIcon = itemMeta.icon;

                        if (!item.submenu) {
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className={cn(
                                "group flex items-start justify-between gap-3 rounded-[26px] border px-4 py-4 shadow-[0_18px_38px_-32px_rgba(15,23,42,0.3)] transition-all duration-200",
                                itemIsActive
                                  ? "border-primary/20 bg-gradient-to-r from-primary/8 to-primary/5"
                                  : "border-slate-200/80 bg-white/92 hover:border-primary/10 hover:bg-white",
                              )}
                            >
                              <div className="flex min-w-0 items-start gap-3">
                                <div
                                  className={cn(
                                    "mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl transition-colors",
                                    itemIsActive
                                      ? "bg-primary text-white"
                                      : "bg-primary/8 text-primary",
                                  )}
                                >
                                  <ItemIcon className="h-5 w-5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-[15px] font-semibold text-slate-950">
                                    {item.name}
                                  </div>
                                  <p className="mt-1 text-xs leading-5 text-slate-500">
                                    {itemMeta.summary}
                                  </p>
                                </div>
                              </div>
                              <ChevronDown className="mt-1 h-4 w-4 rotate-[-90deg] flex-shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5" />
                            </Link>
                          );
                        }

                        const isExpanded = expandedMobileMenu === item.name;

                        return (
                          <div
                            key={item.name}
                            className={cn(
                              "overflow-hidden rounded-[28px] border shadow-[0_18px_38px_-32px_rgba(15,23,42,0.3)] transition-all duration-200",
                              isExpanded || itemIsActive
                                ? "border-primary/20 bg-gradient-to-br from-primary/6 via-white to-white"
                                : "border-slate-200/80 bg-white/92",
                            )}
                          >
                            <button
                              id={`button-${item.name
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              onClick={() => toggleMobileSubmenu(item.name)}
                              className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left transition-colors duration-200"
                              aria-expanded={isExpanded}
                              aria-controls={`submenu-${item.name
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            >
                              <div className="flex min-w-0 items-start gap-3">
                                <div
                                  className={cn(
                                    "mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl transition-colors",
                                    isExpanded || itemIsActive
                                      ? "bg-primary text-white"
                                      : "bg-primary/8 text-primary",
                                  )}
                                >
                                  <ItemIcon className="h-5 w-5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-[15px] font-semibold text-slate-950">
                                      {item.name}
                                    </span>
                                    {item.cta ? (
                                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                                        Popular
                                      </span>
                                    ) : item.featured ? (
                                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-700">
                                        Featured
                                      </span>
                                    ) : null}
                                  </div>
                                  <p className="mt-1 text-xs leading-5 text-slate-500">
                                    {itemMeta.summary}
                                  </p>
                                </div>
                              </div>

                              <div className="flex flex-shrink-0 items-center gap-2 pl-2">
                                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                                  {item.submenu.length}
                                </span>
                                <ChevronDown
                                  className={cn(
                                    "h-4 w-4 transition-transform duration-300 ease-in-out",
                                    isExpanded
                                      ? "rotate-180 text-primary"
                                      : "text-slate-500",
                                  )}
                                />
                              </div>
                            </button>

                            <div
                              id={`submenu-${item.name
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className={cn(
                                "grid overflow-hidden transition-all duration-300 ease-in-out",
                                isExpanded
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0",
                              )}
                              role="region"
                              aria-labelledby={`button-${item.name
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            >
                              <div className="overflow-hidden">
                                <div className="border-t border-slate-100/90 px-3 pb-3 pt-2">
                                  <div className="space-y-2">
                                    {item.submenu.map((subitem) => {
                                      const subitemIsActive = isActivePath(
                                        subitem.href,
                                      );

                                      return (
                                        <Link
                                          key={subitem.name}
                                          href={subitem.href}
                                          onClick={closeMobileMenu}
                                          className={cn(
                                            "flex items-start gap-3 rounded-[22px] border px-3 py-3 transition-all duration-200",
                                            subitemIsActive
                                              ? "border-primary/20 bg-primary/6"
                                              : "border-slate-200/80 bg-white hover:border-primary/10 hover:bg-primary/5",
                                          )}
                                        >
                                          {subitem.imageSrc ? (
                                            <div className="relative mt-0.5 h-12 w-14 flex-shrink-0 overflow-hidden rounded-xl border border-black/5 bg-slate-100">
                                              <Image
                                                src={subitem.imageSrc}
                                                alt={
                                                  subitem.imageAlt ||
                                                  subitem.name
                                                }
                                                fill
                                                sizes="56px"
                                                className="object-cover"
                                              />
                                              {subitem.icon && (
                                                <div className="absolute bottom-1 left-1 flex h-5 w-5 items-center justify-center rounded-md bg-white/92 text-primary shadow-sm backdrop-blur-sm">
                                                  {subitem.icon}
                                                </div>
                                              )}
                                            </div>
                                          ) : subitem.icon ? (
                                            <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                                              {subitem.icon}
                                            </div>
                                          ) : null}
                                          <div className="min-w-0 flex-1">
                                            <div
                                              className={cn(
                                                "text-sm font-semibold leading-tight",
                                                subitemIsActive
                                                  ? "text-primary"
                                                  : "text-slate-900",
                                              )}
                                            >
                                              {subitem.name}
                                            </div>
                                            {subitem.description && (
                                              <div className="mt-1.5 text-xs leading-relaxed text-slate-500">
                                                {subitem.description}
                                              </div>
                                            )}
                                          </div>
                                          <ChevronDown className="mt-1 h-3.5 w-3.5 rotate-[-90deg] flex-shrink-0 text-primary" />
                                        </Link>
                                      );
                                    })}
                                  </div>

                                  <Link
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className="mt-3 flex items-center justify-center gap-2 rounded-[20px] bg-primary/8 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/12"
                                  >
                                    <span>View all {item.name}</span>
                                    <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </nav>

                    <div className="mt-4 rounded-[28px] bg-slate-950 p-4 text-white shadow-[0_24px_60px_-32px_rgba(15,23,42,0.7)]">
                      <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
                        <Award className="h-4 w-4 text-accent" />
                        <span>CBSE Affiliated School</span>
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-2.5">
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center">
                          <div className="text-sm font-bold text-white">
                            2011
                          </div>
                          <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/55">
                            Established
                          </div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center">
                          <div className="text-sm font-bold text-white">
                            1200+
                          </div>
                          <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/55">
                            Students
                          </div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center">
                          <div className="text-sm font-bold text-white">
                            98.5%
                          </div>
                          <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/55">
                            Results
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          handleEmailClick();
                          closeMobileMenu();
                        }}
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-[20px] border border-white/10 bg-white/6 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                      >
                        <Mail className="h-4 w-4 text-accent" />
                        <span>{schoolContact.emailDisplay}</span>
                      </button>

                      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/55">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>Sirsaganj, Firozabad, UP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>,
            portalRoot,
          )
        : null}
    </header>
  );
}
