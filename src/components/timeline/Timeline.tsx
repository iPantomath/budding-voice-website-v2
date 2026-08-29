import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/utils/cn";

export interface TimelineStep {
  title: string;
  description: string;
}

export interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

const Timeline = ({ steps, className }: TimelineProps) => {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-orange/40 via-orange/15 to-transparent"
      />
      <ol className="space-y-10">
        {steps.map((step, index) => (
          <Reveal key={step.title} as="li" index={index} delay={0.06}>
            <div className="relative flex gap-6">
              <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange font-bold text-white shadow-md">
                {index + 1}
              </div>
              <div className="flex-1 pt-1.5">
                <h3 className="mb-2 font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
};

Timeline.displayName = "Timeline";

export { Timeline };
