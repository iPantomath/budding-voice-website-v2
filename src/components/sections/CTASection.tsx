import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/buttons";
import { cn } from "@/utils/cn";

export interface CTASectionProps {
  title: string;
  subtitle: string;
  background?: "gradient" | "alternate";
}

const CTASection = ({
  title,
  subtitle,
  background = "gradient",
}: CTASectionProps) => (
  <Section
    padding="lg"
    alternateBackground={background === "alternate"}
    className={cn(
      background === "gradient" && "bg-gradient-to-r from-orange/5 to-orange/10"
    )}
  >
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-3">
          <WhatsAppButton size="lg" className="w-full sm:w-auto">
            Book a Trial Class
          </WhatsAppButton>
          <WhatsAppButton
            variant="whatsapp-outline"
            size="lg"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </Container>
  </Section>
);

CTASection.displayName = "CTASection";

export { CTASection };
