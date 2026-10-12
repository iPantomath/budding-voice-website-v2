import React from "react";
import { cn } from "@/utils/cn";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  size?: "sm" | "md";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const variantStyles = {
      primary: "bg-orange/10 text-orange",
      secondary: "bg-dark-grey/10 text-text-primary",
      success: "bg-success/10 text-success",
      warning: "bg-warning/10 text-warning",
      error: "bg-error/10 text-error",
    };

    const sizeStyles = {
      sm: "px-2.5 py-1 text-xs font-medium",
      md: "px-3 py-1.5 text-sm font-medium",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
