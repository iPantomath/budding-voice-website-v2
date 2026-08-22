"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui";
import { navigationLinks } from "@/constants/navigation";

export interface NavbarProps {
  transparent?: boolean;
}

const SCROLL_THRESHOLD = 50;

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ transparent = true }, ref) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [isMobileMenuOpen]);

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
              <Button variant="primary" size="sm" href="https://wa.me/1234567890">
                WhatsApp Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-3 text-text-primary transition-colors hover:bg-light-grey md:hidden"
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
                <Button
                  variant="primary"
                  size="md"
                  href="https://wa.me/1234567890"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  WhatsApp Us
                </Button>
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
