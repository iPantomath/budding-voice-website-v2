import React from "react";
import { cn } from "@/utils/cn";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  noPadding?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "xl", noPadding = false, ...props }, ref) => {
    // Size values map to Tailwind max-width classes defined in tailwind.config.ts
    // Default size="xl" = 1200px (defined in config, not Tailwind default)
    const sizeStyles = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      full: "w-full",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full",
          sizeStyles[size],
          !noPadding && "px-6 sm:px-12",
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export { Container };
