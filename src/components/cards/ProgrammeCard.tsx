import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export interface ProgrammeCardProps {
  name: string;
  ageRange: string;
  tagline?: string;
  description: string;
  href: string;
  /** 1-based position in the age-progression sequence (Kaizen=1, Orator=2, APEX=3). */
  stage?: number;
  className?: string;
}

const ProgrammeCard = React.forwardRef<HTMLDivElement, ProgrammeCardProps>(
  (
    { name, ageRange, tagline, description, href, stage, className },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg",
          className
        )}
      >
        <div className="flex-1 space-y-4 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-orange">Age {ageRange}</p>
              <h3 className="mt-2 text-2xl font-bold text-text-primary">
                {name}
              </h3>
            </div>
            {stage && (
              <span
                aria-hidden="true"
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-sm font-bold text-orange"
              >
                {stage}
              </span>
            )}
          </div>
          {tagline && (
            <p className="text-sm font-semibold uppercase tracking-wide text-text-primary/70">
              {tagline}
            </p>
          )}
          <p className="leading-relaxed text-text-secondary">{description}</p>
        </div>

        <div className="border-t border-light-grey px-6 py-4 sm:px-8">
          <Button
            variant="primary"
            size="md"
            href={href}
            className="w-full"
          >
            Learn More
          </Button>
        </div>
      </Card>
    );
  }
);

ProgrammeCard.displayName = "ProgrammeCard";

export { ProgrammeCard };
