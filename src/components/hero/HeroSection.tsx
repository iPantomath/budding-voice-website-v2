import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DecorativeBackground } from "@/components/ui/DecorativeBackground";
import { MessageCircle } from "lucide-react";
import { cn } from "@/utils/cn";

export interface HeroSectionProps {
  eyebrow?: string;
  headline: string;
  supportingText: string;
  primaryCTAText?: string;
  primaryCTAHref?: string;
  secondaryCTAText?: string;
  secondaryCTAHref?: string;
  showVisual?: boolean;
  className?: string;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      eyebrow,
      headline,
      supportingText,
      primaryCTAText = "Book a Trial Class",
      primaryCTAHref = "https://wa.me/1234567890",
      secondaryCTAText = "WhatsApp Us",
      secondaryCTAHref = "https://wa.me/1234567890",
      showVisual = true,
      className,
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-gradient-to-b from-light-grey/60 to-white px-6 py-16 sm:px-12 sm:py-20 lg:py-28",
          className
        )}
      >
        <DecorativeBackground
          variant="hero"
          className="right-[-120px] top-[-160px] hidden opacity-80 lg:block"
        />
        <Container>
          <div
            className={cn(
              "relative grid items-center gap-12",
              showVisual && "lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
            )}
          >
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
              {eyebrow && (
                <Reveal>
                  <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange">
                    {eyebrow}
                  </p>
                </Reveal>
              )}

              <Reveal index={1}>
                <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                  {headline}
                </h1>
              </Reveal>

              <Reveal index={2}>
                <p className="mb-10 text-lg leading-relaxed text-text-secondary sm:text-xl lg:max-w-xl">
                  {supportingText}
                </p>
              </Reveal>

              <Reveal index={3}>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-3 lg:justify-start">
                  <Button
                    variant="primary"
                    size="lg"
                    href={primaryCTAHref}
                    className="w-full sm:w-auto"
                  >
                    {primaryCTAText}
                  </Button>
                  <Button
                    variant="tertiary"
                    size="lg"
                    href={secondaryCTAHref}
                    leftIcon={<MessageCircle className="h-4 w-4" />}
                    className="w-full sm:w-auto"
                  >
                    {secondaryCTAText}
                  </Button>
                </div>
              </Reveal>
            </div>

            {showVisual && (
              <Reveal index={2} className="hidden lg:block">
                <div className="relative mx-auto aspect-square w-full max-w-md">
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-orange/15 via-orange/5 to-transparent" />
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 400 400"
                    className="absolute inset-0 h-full w-full"
                  >
                    <circle
                      cx="200"
                      cy="200"
                      r="150"
                      className="fill-white stroke-orange/20"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="110"
                      className="fill-none stroke-orange/25"
                      strokeWidth="1.5"
                      strokeDasharray="3 10"
                    />
                    <g strokeLinecap="round" className="stroke-orange">
                      <path
                        d="M140 210 q30 -70 60 0 t60 0"
                        strokeWidth="5"
                        fill="none"
                      />
                      <path
                        d="M140 235 q30 -46 60 0 t60 0"
                        strokeWidth="5"
                        fill="none"
                        opacity="0.55"
                      />
                      <path
                        d="M140 260 q30 -22 60 0 t60 0"
                        strokeWidth="5"
                        fill="none"
                        opacity="0.3"
                      />
                    </g>
                    <circle cx="140" cy="150" r="6" className="fill-orange" />
                    <circle
                      cx="270"
                      cy="140"
                      r="9"
                      className="fill-orange/40"
                    />
                    <circle
                      cx="230"
                      cy="120"
                      r="4"
                      className="fill-orange/70"
                    />
                  </svg>
                </div>
              </Reveal>
            )}
          </div>
        </Container>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
