"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";
import { WhatsAppButton } from "@/components/buttons";
import { navigationLinks } from "@/constants/navigation";

export interface NavbarProps {
  transparent?: boolean;
}

const SCROLL_THRESHOLD = 50;
const MOBILE_MENU_ID = "mobile-navigation";
const PROGRAMMES_SUBMENU_ID = "programmes-submenu";
const PROGRAMMES_SUBMENU_MOBILE_ID = "programmes-submenu-mobile";

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ transparent = true }, ref) => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProgrammesOpen, setIsProgrammesOpen] = useState(false);
    const menuToggleRef = useRef<HTMLButtonElement>(null);
    const programmesButtonRef = useRef<HTMLButtonElement>(null);
    const programmesDesktopRef = useRef<HTMLDivElement>(null);

    const closeMobileMenu = (returnFocus: boolean) => {
      setIsMobileMenuOpen(false);
      setIsProgrammesOpen(false);
      if (returnFocus) {
        menuToggleRef.current?.focus();
      }
    };

    const handleMobileLinkClick = () => {
      setIsMobileMenuOpen(false);
      setIsProgrammesOpen(false);
    };

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key !== "Escape") return;
        if (isProgrammesOpen) {
          setIsProgrammesOpen(false);
          programmesButtonRef.current?.focus();
          return;
        }
        if (isMobileMenuOpen) {
          closeMobileMenu(true);
        }
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [isMobileMenuOpen, isProgrammesOpen]);

    useEffect(() => {
      if (!isProgrammesOpen) return;

      const handleClickOutside = (e: MouseEvent) => {
        if (
          programmesDesktopRef.current &&
          !programmesDesktopRef.current.contains(e.target as Node)
        ) {
          setIsProgrammesOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isProgrammesOpen]);

    const shouldHaveSolidBg = !transparent || isScrolled;
    const linkClassName = (isCurrent: boolean) =>
      cn(
        "text-sm font-medium transition-colors duration-200",
        isCurrent ? "text-orange" : "text-text-secondary hover:text-orange",
        "focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded px-2 py-1"
      );

    return (
      <nav
        ref={ref}
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          shouldHaveSolidBg
            ? "bg-white shadow-md"
            : "bg-transparent hover:bg-white/95"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/brand/bv-logo.webp"
                alt="Budding Voice logo"
                width={40}
                height={40}
                className="h-10 w-10"
                priority
              />
              <span className="hidden font-bold text-text-primary sm:inline">
                Budding Voice
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navigationLinks.map((link) => {
                if (link.children) {
                  const isProgrammesActive = pathname?.startsWith("/programmes");
                  return (
                    <div
                      key={link.label}
                      ref={programmesDesktopRef}
                      className="relative"
                    >
                      <button
                        ref={programmesButtonRef}
                        type="button"
                        onClick={() => setIsProgrammesOpen((open) => !open)}
                        aria-expanded={isProgrammesOpen}
                        aria-controls={PROGRAMMES_SUBMENU_ID}
                        className={cn(
                          "flex items-center gap-1",
                          linkClassName(Boolean(isProgrammesActive))
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          aria-hidden="true"
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            isProgrammesOpen && "rotate-180"
                          )}
                        />
                      </button>

                      {isProgrammesOpen && (
                        <ul
                          id={PROGRAMMES_SUBMENU_ID}
                          className="absolute left-0 top-full z-10 mt-2 min-w-[180px] rounded-lg border border-light-grey bg-white p-2 shadow-lg"
                        >
                          {link.children.map((child) => {
                            const isChildCurrent = pathname === child.href;
                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href as string}
                                  aria-current={isChildCurrent ? "page" : undefined}
                                  className={cn(
                                    "block rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
                                    isChildCurrent
                                      ? "text-orange"
                                      : "text-text-secondary hover:bg-light-grey hover:text-orange",
                                    "focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
                                  )}
                                  onClick={() => setIsProgrammesOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  );
                }

                const isCurrent = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href as string}
                    aria-current={isCurrent ? "page" : undefined}
                    className={linkClassName(isCurrent)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden items-center gap-4 md:flex">
              <WhatsAppButton size="sm" />
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuToggleRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-3 text-text-primary transition-colors hover:bg-light-grey md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls={MOBILE_MENU_ID}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div
              id={MOBILE_MENU_ID}
              className="border-t border-light-grey py-4 md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navigationLinks.map((link) => {
                  if (link.children) {
                    return (
                      <div key={link.label}>
                        <button
                          type="button"
                          onClick={() => setIsProgrammesOpen((open) => !open)}
                          aria-expanded={isProgrammesOpen}
                          aria-controls={PROGRAMMES_SUBMENU_MOBILE_ID}
                          className={cn(
                            "flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-base font-medium text-text-secondary",
                            "hover:bg-light-grey hover:text-orange transition-colors duration-200",
                            "focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
                          )}
                        >
                          {link.label}
                          <ChevronDown
                            aria-hidden="true"
                            className={cn(
                              "h-5 w-5 transition-transform duration-200",
                              isProgrammesOpen && "rotate-180"
                            )}
                          />
                        </button>

                        {isProgrammesOpen && (
                          <ul
                            id={PROGRAMMES_SUBMENU_MOBILE_ID}
                            className="mt-1 flex flex-col gap-1 pl-4"
                          >
                            {link.children.map((child) => {
                              const isChildCurrent = pathname === child.href;
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href as string}
                                    aria-current={isChildCurrent ? "page" : undefined}
                                    className={cn(
                                      "block rounded-lg px-4 py-2.5 text-base font-medium",
                                      "focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2",
                                      isChildCurrent
                                        ? "text-orange"
                                        : "text-text-secondary hover:bg-light-grey hover:text-orange",
                                      "transition-colors duration-200"
                                    )}
                                    onClick={handleMobileLinkClick}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    );
                  }

                  const isCurrent = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href as string}
                      aria-current={isCurrent ? "page" : undefined}
                      className={cn(
                        "block rounded-lg px-4 py-2.5 text-base font-medium",
                        "focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2",
                        isCurrent
                          ? "text-orange"
                          : "text-text-secondary hover:bg-light-grey hover:text-orange",
                        "transition-colors duration-200"
                      )}
                      onClick={handleMobileLinkClick}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <WhatsAppButton
                  size="md"
                  className="w-full"
                  onClick={handleMobileLinkClick}
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
);

Navbar.displayName = "Navbar";

export { Navbar };
