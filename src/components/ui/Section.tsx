import React from "react";
import { cn } from "@/utils/cn";

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  alternateBackground?: boolean;
  padding?: "sm" | "md" | "lg" | "xl";
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      className,
      alternateBackground = false,
      padding = "lg",
      children,
      ...props
    },
    ref
  ) => {
    const paddingStyles = {
      sm: "py-8 sm:py-12",
      md: "py-12 sm:py-16",
      lg: "py-16 sm:py-24",
      xl: "py-20 sm:py-32",
    };

    return (
      <section
        ref={ref}
        className={cn(
          paddingStyles[padding],
          alternateBackground && "bg-light-grey",
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
