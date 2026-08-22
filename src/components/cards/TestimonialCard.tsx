import React from "react";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/utils/cn";

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  programme?: string;
  type?: "parent" | "student" | "general";
  isPlaceholder?: boolean;
  className?: string;
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ quote, name, role, programme, type, isPlaceholder, className }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "flex flex-col justify-between transition-all duration-300 hover:shadow-lg",
          className
        )}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex gap-1" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-orange text-orange"
                aria-hidden="true"
              />
            ))}
          </div>
          {isPlaceholder && (
            <Badge variant="secondary" className="whitespace-nowrap text-xs">
              PLACEHOLDER
            </Badge>
          )}
        </div>

        <p className="mb-6 leading-relaxed text-text-secondary italic">
          &ldquo;{quote}&rdquo;
        </p>

        <div className="border-t border-light-grey pt-4">
          <p className="font-semibold text-text-primary">{name}</p>
          <p className="text-sm text-text-secondary">{role}</p>
          {programme && (
            <div className="mt-2">
              <p className="text-xs font-medium text-orange uppercase tracking-wide">
                {programme}
              </p>
            </div>
          )}
        </div>
      </Card>
    );
  }
);

TestimonialCard.displayName = "TestimonialCard";

export { TestimonialCard };
