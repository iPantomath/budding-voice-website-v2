"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";

export interface NavbarProps {
  transparent?: boolean;
}

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Schools", href: "/schools" },
  { label: "Corporate", href: "/corporate" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ transparent = true }, ref) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const shouldHaveSolidBg = !transparent || isScrolled;

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
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange">
                <span className="text-sm font-bold text-white">BV</span>
              </div>
              <span className="hidden font-bold text-text-primary sm:inline">
                Budding Voice
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200",
                    "text-text-secondary hover:text-orange",
                    "focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded px-2 py-1"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden items-center gap-4 md:flex">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center rounded-lg bg-orange px-6 py-2.5",
                  "text-sm font-medium text-white transition-all duration-300",
                  "hover:bg-orange/90 hover:shadow-lg active:scale-95",
                  "focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
                )}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-text-primary transition-colors hover:bg-light-grey md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
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
            <div className="border-t border-light-grey py-4 md:hidden">
              <div className="flex flex-col gap-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block rounded-lg px-4 py-2.5 text-base font-medium",
                      "text-text-secondary hover:bg-light-grey hover:text-orange",
                      "transition-colors duration-200"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className={cn(
                    "block rounded-lg bg-orange px-4 py-2.5 text-base font-medium",
                    "text-center text-white transition-all duration-300",
                    "hover:bg-orange/90 active:scale-95"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
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
