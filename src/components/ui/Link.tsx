import React from "react";
import NextLink from "next/link";
import { cn } from "@/utils/cn";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  underline?: boolean;
  /**
   * Set to true for external URLs (e.g., https://example.com).
   * This adds target="_blank" and rel="noopener noreferrer" for security and UX.
   * Required for external links; internal routes use Next.js Link by default.
   */
  external?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      href,
      variant = "primary",
      underline = false,
      external = false,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary:
        "text-orange hover:underline focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded",
      secondary:
        "text-text-primary hover:text-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded",
      ghost: "text-text-secondary hover:text-text-primary",
    };

    const Component = external ? "a" : NextLink;

    return (
      <Component
        ref={ref}
        href={href}
        className={cn(
          "transition-colors duration-200",
          variantStyles[variant],
          underline && "underline",
          className
        )}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Link.displayName = "Link";

export { Link };
