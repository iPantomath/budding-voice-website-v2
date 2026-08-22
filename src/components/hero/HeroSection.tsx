import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export interface HeroSectionProps {
  headline: string;
  supportingText: string;
  primaryCTAText?: string;
  primaryCTAHref?: string;
  secondaryCTAText?: string;
  secondaryCTAHref?: string;
  className?: string;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      headline,
      supportingText,
      primaryCTAText = "Book a Trial Class",
      primaryCTAHref = "https://wa.me/1234567890",
      secondaryCTAText = "WhatsApp Us",
      secondaryCTAHref = "https://wa.me/1234567890",
      className,
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "bg-gradient-to-br from-white to-light-grey px-6 py-12 sm:px-12 sm:py-16 lg:py-24",
          className
        )}
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
              {headline}
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-text-secondary sm:text-xl">
              {supportingText}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button
                variant="primary"
                size="lg"
                href={primaryCTAHref}
                className="w-full sm:w-auto"
              >
                {primaryCTAText}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href={secondaryCTAHref}
                className="w-full sm:w-auto"
              >
                {secondaryCTAText}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
