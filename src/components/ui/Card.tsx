import React from "react";
import { cn } from "@/utils/cn";

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "xl";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, hover = true, padding = "lg", children, ...props },
    ref
  ) => {
    const paddingStyles = {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg bg-white shadow-md",
          hover && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          paddingStyles[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
