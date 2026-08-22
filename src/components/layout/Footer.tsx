import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/utils/cn";

type FooterProps = React.HTMLAttributes<HTMLElement>;

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, ...props }, ref) => {
    const quickLinks = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Testimonials", href: "/testimonials" },
    ];

    const programmeLinks = [
      { label: "Kaizen (4-7 years)", href: "/programmes/kaizen" },
      { label: "Orator (8-12 years)", href: "/programmes/orator" },
      { label: "APEX (13+ years)", href: "/programmes/apex" },
    ];

    return (
      <footer
        ref={ref}
        className={cn("border-t border-light-grey bg-white", className)}
        {...props}
      >
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-12 sm:py-16">
          {/* Footer Content Grid */}
          <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Branding Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange">
                  <span className="text-base font-bold text-white">BV</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-text-primary">
                    Budding Voice
                  </span>
                  <span className="text-xs text-text-secondary">
                    Communication & Leadership
                  </span>
                </div>
              </Link>
              <p className="mt-4 leading-relaxed text-sm text-text-secondary">
                Helping students discover their voice, build confidence, and
                grow with purpose.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 font-semibold text-text-primary">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm text-text-secondary transition-colors duration-200",
                        "hover:text-orange",
                        "focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded px-1"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programmes */}
            <div>
              <h3 className="mb-4 font-semibold text-text-primary">
                Programmes
              </h3>
              <ul className="space-y-2">
                {programmeLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm text-text-secondary transition-colors duration-200",
                        "hover:text-orange",
                        "focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded px-1"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 font-semibold text-text-primary">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:contact@budding-voice.com"
                    className={cn(
                      "inline-flex items-center gap-2 text-sm text-text-secondary",
                      "transition-colors duration-200 hover:text-orange",
                      "focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded px-1"
                    )}
                  >
                    <Mail className="h-4 w-4" />
                    contact@budding-voice.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+60123456789"
                    className={cn(
                      "inline-flex items-center gap-2 text-sm text-text-secondary",
                      "transition-colors duration-200 hover:text-orange",
                      "focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded px-1"
                    )}
                  >
                    <Phone className="h-4 w-4" />
                    +60 1 2345 6789
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-text-secondary" />
                  <span className="text-sm text-text-secondary">
                    Malaysia
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-light-grey" />

          {/* Footer Bottom */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} Budding Voice. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";

export { Footer, type FooterProps };
