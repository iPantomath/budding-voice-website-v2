import React from "react";
import { cn } from "@/utils/cn";

export interface DecorativeBackgroundProps {
  variant?: "hero" | "glow-left" | "glow-right" | "dot-grid";
  className?: string;
}

/**
 * Brand-coloured abstract SVG texture used in place of photography.
 * No real Budding Voice imagery exists yet (see BV_ASSETS_CHECKLIST.md);
 * this gives sections a premium, intentional visual anchor without
 * resorting to stock photos or invented people, which the design system
 * explicitly forbids.
 */
const DecorativeBackground = ({
  variant = "glow-right",
  className,
}: DecorativeBackgroundProps) => {
  if (variant === "dot-grid") {
    return (
      <svg
        aria-hidden="true"
        className={cn("pointer-events-none absolute", className)}
        width="240"
        height="240"
        viewBox="0 0 240 240"
        fill="none"
      >
        <pattern
          id="bv-dot-grid"
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="2" className="fill-orange/20" />
        </pattern>
        <rect width="240" height="240" fill="url(#bv-dot-grid)" />
      </svg>
    );
  }

  if (variant === "hero") {
    return (
      <svg
        aria-hidden="true"
        className={cn("pointer-events-none absolute", className)}
        width="640"
        height="640"
        viewBox="0 0 640 640"
        fill="none"
      >
        <defs>
          <radialGradient id="bv-hero-glow-a" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b45309" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bv-hero-glow-b" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b45309" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="420" cy="220" r="220" fill="url(#bv-hero-glow-a)" />
        <circle cx="180" cy="420" r="180" fill="url(#bv-hero-glow-b)" />
        <g className="stroke-orange/25" strokeWidth="1.5" fill="none">
          <circle cx="420" cy="220" r="120" />
          <circle cx="420" cy="220" r="170" strokeDasharray="2 8" />
        </g>
        <g className="stroke-orange/30" strokeWidth="2" strokeLinecap="round">
          <path d="M300 420 q40 -30 80 0 t80 0" />
          <path d="M300 460 q40 -22 80 0 t80 0" opacity="0.6" />
        </g>
      </svg>
    );
  }

  const isLeft = variant === "glow-left";

  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      width="420"
      height="420"
      viewBox="0 0 420 420"
      fill="none"
    >
      <defs>
        <radialGradient id={`bv-glow-${variant}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#b45309" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle
        cx={isLeft ? 120 : 300}
        cy="210"
        r="210"
        fill={`url(#bv-glow-${variant})`}
      />
    </svg>
  );
};

DecorativeBackground.displayName = "DecorativeBackground";

export { DecorativeBackground };
