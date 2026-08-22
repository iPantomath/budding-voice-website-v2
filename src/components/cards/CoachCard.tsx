import React from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/utils/cn";

export interface CoachCardProps {
  name: string;
  role: string;
  bio: string;
  specialisation?: string;
  className?: string;
}

const CoachCard = React.forwardRef<HTMLDivElement, CoachCardProps>(
  ({ name, role, bio, specialisation, className }, ref) => {
    return (
      <Card ref={ref} className={cn("flex flex-col", className)}>
        <div className="mb-6 h-48 w-full bg-gradient-to-br from-orange/10 to-orange/5 rounded-md flex items-center justify-center text-text-secondary">
          <span className="text-sm">Coach Photo</span>
        </div>

        <h3 className="mb-1 font-bold text-text-primary">{name}</h3>
        <p className="mb-4 text-sm font-medium text-orange">{role}</p>

        <p className="mb-4 text-sm leading-relaxed text-text-secondary flex-grow">
          {bio}
        </p>

        {specialisation && (
          <div className="border-t border-light-grey pt-4">
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wide">
              Specialisation
            </p>
            <p className="mt-1 text-sm text-text-primary">{specialisation}</p>
          </div>
        )}
      </Card>
    );
  }
);

CoachCard.displayName = "CoachCard";

export { CoachCard };
