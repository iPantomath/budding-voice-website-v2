import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export interface ProgrammeCardProps {
  name: string;
  ageRange: string;
  tagline?: string;
  description: string;
  href: string;
  /** 1-based position in the age-progression sequence (Kaizen=1, Orator=2, Apex=3). */
  stage?: number;
  image?: { src: string; alt: string };
  className?: string;
}

const ProgrammeCard = React.forwardRef<HTMLDivElement, ProgrammeCardProps>(
  (
    { name, ageRange, tagline, description, href, stage, image, className },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          className
        )}
      >
        {image && (
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
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
      </div>
    );
  }
);

ProgrammeCard.displayName = "ProgrammeCard";

export { ProgrammeCard };
