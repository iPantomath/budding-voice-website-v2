import React from "react";
import { cn } from "@/utils/cn";

export interface SectionHeadingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
  maxWidth?: boolean;
}

const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  (
    {
      className,
      title,
      subtitle,
      centered = true,
      maxWidth = true,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mb-12 sm:mb-16",
          centered && "text-center",
          maxWidth && "mx-auto max-w-2xl",
          className
        )}
        {...props}
      >
        <h2 className="mb-4 text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="leading-relaxed text-lg text-text-secondary sm:text-xl">{subtitle}</p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";

export { SectionHeading };
