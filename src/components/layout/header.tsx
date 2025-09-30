"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
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
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// TypeScript interfaces for world-class type safety
interface SubmenuItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
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
      },
      {
        name: "Academic Streams",
        href: "/academics/streams",
        description: "Science, Commerce & Humanities",
        icon: <GraduationCap className="h-4 w-4" />,
      },
      {
        name: "Achievements",
        href: "/academics/achievements",
        description: "Awards & recognition",
        icon: <Award className="h-4 w-4" />,
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
      },
      {
        name: "Student Activities",
        href: "/student-life",
        description: "Clubs, events & programs",
        icon: <Users className="h-4 w-4" />,
      },
      {
        name: "Sports",
        href: "/facilities/sports",
        description: "Athletic programs & facilities",
        icon: <Heart className="h-4 w-4" />,
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
      },
      {
        name: "Fee Structure",
        href: "/admissions/fees",
        description: "Transparent fee details",
        icon: <Award className="h-4 w-4" />,
      },
      {
        name: "Apply Online",
        href: "/apply",
        description: "Start your application now",
        icon: <GraduationCap className="h-4 w-4" />,
      },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = React.useState<
    string | null
  >(null);
  const submenuRefs = React.useRef<{ [key: string]: HTMLDivElement | null }>(
    {}
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
    setActiveSubmenu(activeSubmenu === itemName ? null : itemName);
  };

  // Close submenu
  const closeSubmenu = () => {
    setActiveSubmenu(null);
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
    window.open("tel:+919876543210", "_self");
  };

  const handleEmailClick = () => {
    window.open("mailto:info@divineacademy.edu.in", "_self");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      {/* Trust & Contact Bar - World-Class Implementation */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Contact Info - Mobile Optimized */}
            <div className="flex items-center space-x-4 text-sm">
              <button
                onClick={handlePhoneClick}
                className="flex items-center space-x-2 hover:text-gray-200 transition-colors group"
                aria-label="Call Divine International Academy"
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">+91 9876543210</span>
                <span className="sm:hidden">Call Now</span>
              </button>

              <button
                onClick={handleEmailClick}
                className="hidden md:flex items-center space-x-2 hover:text-gray-200 transition-colors group"
                aria-label="Email Divine International Academy"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>info@divineacademy.edu.in</span>
              </button>
            </div>

            {/* Trust Signals */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs bg-white/10 px-3 py-1 rounded-full">
                <Award className="h-3 w-3" />
                <span className="hidden sm:inline">CBSE Affiliated</span>
                <span className="sm:hidden">CBSE</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2 text-xs">
                <MapPin className="h-3 w-3" />
                <span>Sirsaganj, Firozabad, UP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - World-Class Design */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {" "}
          {/* Increased height for prominence */}
          {/* Logo & Brand - Proper Visual Hierarchy */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-14 h-14 relative">
              {" "}
              {/* Increased logo size */}
              <Image
                src="/images/logo.png"
                alt="Divine International Academy Logo"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                width={56}
                height={56}
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold font-heading text-gray-900 leading-tight">
                {" "}
                {/* Increased from text-xl */}
                Divine International Academy
              </h1>
              <p className="text-sm text-gray-600 font-medium">
                {" "}
                {/* Increased from text-xs */}
                Excellence in Education Since 2012
              </p>
            </div>
            {/* Mobile Logo Text */}
            <div className="sm:hidden">
              <h1 className="text-lg font-bold font-heading text-gray-900">
                Divine Academy
              </h1>
            </div>
          </Link>
          {/* Desktop Navigation - Enhanced Professional Implementation */}
          <nav
            className="hidden lg:flex items-center space-x-2"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                data-nav-item={item.name}
              >
                {item.submenu ? (
                  <button
                    onClick={(e) => handleSubmenuClick(item.name, e)}
                    className={cn(
                      "relative flex items-center px-4 py-3 font-semibold text-base transition-all duration-300 rounded-xl hover:scale-[1.02] active:scale-[0.98] group w-full text-left",
                      // Enhanced hover effects with subtle animations
                      "before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 before:-translate-x-1/2",
                      "hover:before:w-3/4",
                      // Consistent styling with subtle differentiation for special items
                      item.cta
                        ? "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-primary/90 hover:shadow-xl shadow-primary/25 border border-primary/20 hover:border-primary backdrop-blur-sm"
                        : item.featured
                        ? "text-gray-700 hover:text-primary hover:bg-gradient-to-br hover:from-primary/8 hover:to-primary/4 hover:shadow-lg shadow-primary/15 border border-transparent hover:border-primary/25"
                        : "text-gray-700 hover:text-primary hover:bg-gradient-to-br hover:from-gray-50 hover:to-primary/5 hover:shadow-md border border-transparent hover:border-gray-200/50"
                    )}
                    aria-haspopup="true"
                    aria-expanded={
                      activeSubmenu === item.name ? "true" : "false"
                    }
                  >
                    <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-0.5">
                      {item.name}
                    </span>
                    <ChevronDown
                      className={cn(
                        "ml-2 h-4 w-4 transition-all duration-300 ease-out",
                        activeSubmenu === item.name
                          ? "rotate-180 text-primary scale-110"
                          : "rotate-0 group-hover:text-primary group-hover:scale-110 group-hover:translate-y-0.5"
                      )}
                    />
                    {/* Subtle glow effect for interactive elements */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "relative flex items-center px-4 py-3 font-semibold text-base transition-all duration-300 rounded-xl hover:scale-[1.02] active:scale-[0.98] group",
                      // Enhanced hover effects with subtle animations
                      "before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 before:-translate-x-1/2",
                      "hover:before:w-3/4",
                      // Consistent styling with subtle differentiation for special items
                      item.cta
                        ? "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-primary/90 hover:shadow-xl shadow-primary/25 border border-primary/20 hover:border-primary backdrop-blur-sm"
                        : item.featured
                        ? "text-gray-700 hover:text-primary hover:bg-gradient-to-br hover:from-primary/8 hover:to-primary/4 hover:shadow-lg shadow-primary/15 border border-transparent hover:border-primary/25"
                        : "text-gray-700 hover:text-primary hover:bg-gradient-to-br hover:from-gray-50 hover:to-primary/5 hover:shadow-md border border-transparent hover:border-gray-200/50"
                    )}
                  >
                    <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-0.5">
                      {item.name}
                    </span>
                    {/* Subtle glow effect for interactive elements */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </Link>
                )}

                {/* Enhanced Submenu with Rich Content & Sophisticated Design */}
                {item.submenu && (
                  <div
                    ref={(el) => {
                      submenuRefs.current[item.name] = el;
                    }}
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[28rem] max-w-md bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200/50 overflow-hidden transition-all duration-300 transform",
                      // Enhanced animation states with scale
                      activeSubmenu === item.name
                        ? "opacity-100 visible translate-y-0 scale-100"
                        : "opacity-0 invisible translate-y-6 scale-95 pointer-events-none"
                    )}
                    role="menu"
                  >
                    {/* Submenu header with gradient and better typography */}
                    <div className="bg-gradient-to-r from-primary/8 to-primary/12 px-6 py-4 border-b border-gray-100/60">
                      <h3 className="font-bold text-gray-900 text-lg tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 font-medium">
                        Explore our {item.name.toLowerCase()} offerings
                      </p>
                    </div>

                    <div className="p-5">
                      <div className="grid gap-2">
                        {item.submenu.map((subitem, index) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/8 hover:to-primary/12 transition-all duration-300 group border border-transparent hover:border-primary/15 hover:shadow-lg hover:shadow-primary/10"
                            role="menuitem"
                            style={{
                              animationDelay: `${index * 75}ms`,
                            }}
                          >
                            {"icon" in subitem && subitem.icon && (
                              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-primary/20 flex items-center justify-center text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/90 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                {subitem.icon}
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 text-base mb-1 group-hover:translate-x-1">
                                {subitem.name}
                              </div>
                              {"description" in subitem &&
                                subitem.description && (
                                  <div className="text-sm text-gray-600 group-hover:text-gray-700 line-clamp-2 leading-relaxed">
                                    {subitem.description}
                                  </div>
                                )}
                            </div>
                            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                              <ChevronDown className="h-4 w-4 text-primary rotate-[-90deg]" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced call-to-action footer for featured sections */}
                    {(item.featured || item.cta) && (
                      <div className="bg-gradient-to-r from-gray-50/80 to-gray-100/50 px-6 py-4 border-t border-gray-100/60">
                        <Link
                          href={item.href}
                          className="flex items-center justify-center space-x-2 text-sm font-semibold text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105 group"
                        >
                          <span>View All {item.name}</span>
                          <ChevronDown className="h-3 w-3 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* Conversion-Optimized CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 transition-all duration-200 transform hover:scale-105"
            >
              <Link href="/login" className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Login</span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Link href="/apply" className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5" />
                <span>Apply Now</span>
              </Link>
            </Button>
          </div>
          {/* Mobile Menu Button - Touch Optimized with Animation */}
          <button
            className="lg:hidden p-3 rounded-lg hover:bg-gray-100 transition-all duration-200 touch-manipulation active:scale-95"
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
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Sidebar Panel */}
          <div
            className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-out overflow-hidden"
            id="mobile-navigation"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            {/* Scrollable Content */}
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto mobile-menu-scroll">
                {/* Quick Actions */}
                <div className="p-4 bg-primary/5">
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        handlePhoneClick();
                        closeMobileMenu();
                      }}
                      size="sm"
                      variant="outline"
                      className="justify-center border-primary/20 hover:bg-primary/10"
                    >
                      <Phone className="h-4 w-4 mr-1" />
                      <span className="text-xs">Call</span>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="justify-center border-primary/20 hover:bg-primary/10 text-primary"
                    >
                      <Link href="/login" onClick={closeMobileMenu}>
                        <User className="h-4 w-4 mr-1" />
                        <span className="text-xs">Login</span>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="justify-center bg-primary hover:bg-primary/90 text-white"
                    >
                      <Link href="/apply" onClick={closeMobileMenu}>
                        <GraduationCap className="h-4 w-4 mr-1" />
                        <span className="text-xs">Apply</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="py-2">
                  {navigation.map((item, index) => (
                    <div
                      key={item.name}
                      className="border-b border-gray-50 last:border-b-0"
                    >
                      {/* Main Navigation Item */}
                      <div className="px-4">
                        {item.submenu ? (
                          <button
                            id={`button-${item.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            onClick={() => toggleMobileSubmenu(item.name)}
                            className={cn(
                              "flex items-center justify-between w-full py-4 font-semibold transition-all duration-200 touch-manipulation rounded-lg hover:bg-gray-50/80 active:bg-gray-100",
                              item.featured
                                ? "text-primary hover:text-primary/90"
                                : expandedMobileMenu === item.name
                                ? "text-primary bg-primary/5"
                                : "text-gray-900 hover:text-primary"
                            )}
                            style={{ minHeight: "56px" }}
                            aria-expanded={expandedMobileMenu === item.name}
                            aria-controls={`submenu-${item.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            <span className="text-left font-semibold">
                              {item.name}
                            </span>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-all duration-300 ease-in-out flex-shrink-0",
                                expandedMobileMenu === item.name
                                  ? "rotate-180 text-primary"
                                  : "rotate-0 text-gray-600"
                              )}
                            />
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={closeMobileMenu}
                            className={cn(
                              "flex items-center py-4 font-semibold transition-colors duration-200 touch-manipulation",
                              item.featured
                                ? "text-primary"
                                : "text-gray-900 hover:text-primary"
                            )}
                            style={{ minHeight: "56px" }}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>

                      {/* Submenu Items with Smooth Accordion Animation */}
                      {item.submenu && (
                        <div
                          id={`submenu-${item.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className={cn(
                            "accordion-content overflow-hidden transition-all duration-300 ease-in-out",
                            expandedMobileMenu === item.name
                              ? "max-h-screen opacity-100"
                              : "max-h-0 opacity-0"
                          )}
                          role="region"
                          aria-labelledby={`button-${item.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          <div className="bg-gray-50/50 border-t border-gray-100">
                            {item.submenu.map((subitem, subIndex) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                onClick={closeMobileMenu}
                                className={cn(
                                  "flex items-start space-x-3 px-6 py-4 text-gray-700 hover:text-primary hover:bg-white/70 transition-all duration-200 touch-manipulation border-b border-gray-100/50",
                                  subIndex === item.submenu!.length - 1 &&
                                    "border-b-0"
                                )}
                                style={{ minHeight: "56px" }}
                              >
                                {"icon" in subitem && subitem.icon && (
                                  <div className="text-primary/70 mt-1 flex-shrink-0 transition-colors hover:text-primary">
                                    {subitem.icon}
                                  </div>
                                )}
                                <div className="min-w-0 flex-1">
                                  <div className="font-semibold text-sm leading-tight text-gray-900">
                                    {subitem.name}
                                  </div>
                                  {"description" in subitem &&
                                    subitem.description && (
                                      <div className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                                        {subitem.description}
                                      </div>
                                    )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Footer - Trust Signals & Contact */}
              <div className="border-t border-gray-100 p-4 bg-gray-50/80">
                <div className="text-center mb-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="font-medium">CBSE Affiliated School</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Est. 2011 • 1200+ Students • 98.5% Pass Rate
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleEmailClick();
                    closeMobileMenu();
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-2 text-sm text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@divineacademy.edu.in</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
