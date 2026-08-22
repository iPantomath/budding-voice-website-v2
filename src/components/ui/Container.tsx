import React from "react";
import { cn } from "@/utils/cn";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  noPadding?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "xl", noPadding = false, ...props }, ref) => {
    // Explicit pixel values rather than named max-w-sm/md/lg/xl classes: in
    // this project's Tailwind v4 setup, those named keys collide with the
    // theme's `spacing` scale (which also defines sm/md/lg/xl) and resolve
    // to the wrong value. Arbitrary values sidestep the collision entirely.
    const sizeStyles = {
      sm: "max-w-[640px]",
      md: "max-w-[768px]",
      lg: "max-w-[1024px]",
      xl: "max-w-[1200px]",
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
