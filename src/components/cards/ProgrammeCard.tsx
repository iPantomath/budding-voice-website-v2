import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export interface ProgrammeCardProps {
  name: string;
  ageRange: string;
  description: string;
  href: string;
  className?: string;
}

const ProgrammeCard = React.forwardRef<HTMLDivElement, ProgrammeCardProps>(
  ({ name, ageRange, description, href, className }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg",
          className
        )}
      >
        <div className="flex-1 space-y-4 p-6 sm:p-8">
          <div>
            <p className="text-sm font-medium text-orange">Age {ageRange}</p>
            <h3 className="mt-2 text-2xl font-bold text-text-primary">
              {name}
            </h3>
          </div>
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
