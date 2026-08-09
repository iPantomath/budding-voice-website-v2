import React from "react";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/utils/cn";

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  className?: string;
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ quote, name, role, className }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "flex flex-col justify-between transition-all duration-300 hover:shadow-lg",
          className
        )}
      >
        <div className="mb-6 flex gap-1" aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 fill-orange text-orange"
              aria-hidden="true"
            />
          ))}
        </div>

        <p className="mb-6 leading-relaxed text-text-secondary italic">
          &ldquo;{quote}&rdquo;
        </p>

        <div className="border-t border-light-grey pt-4">
          <p className="font-semibold text-text-primary">{name}</p>
          <p className="text-sm text-text-secondary">{role}</p>
        </div>
      </Card>
    );
  }
);

TestimonialCard.displayName = "TestimonialCard";

export { TestimonialCard };
