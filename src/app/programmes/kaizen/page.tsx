import Image from "next/image";
import {
  Container,
  Section,
  SectionHeading,
  Button,
  Card,
  Reveal,
} from "@/components/ui";
import { HeroSection } from "@/components/hero";
import { PROGRAMMES } from "@/constants/content";
import {
  generatePageMetadata,
  generateStructuredData,
  generateWebPageSchema,
  generateCourseSchema,
} from "@/lib/metadata";
import { SITE_CONFIG } from "@/constants";

const TITLE = "Kaizen | Ages 4–7 Communication Programme";
const DESCRIPTION =
  "Kaizen helps young learners aged 4–7 build confidence and self-expression through play, storytelling and engaging activities.";
const PATH = "/programmes/kaizen";

export const metadata = generatePageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.placeholderImage}`,
});

const HIGHLIGHTS = [
  "Play-based communication activities",
  "Storytelling and creative expression",
  "Safe environment for self-expression",
];

export default function KaizenPage() {
  const programme = PROGRAMMES.kaizen;
  const url = `${SITE_CONFIG.url}${PATH}`;

  const webPageSchema = generateWebPageSchema(
    `${TITLE} | ${SITE_CONFIG.name}`,
    DESCRIPTION,
    url,
    [
      { name: "Home", url: SITE_CONFIG.url },
      { name: "Kaizen", url },
    ]
  );

  const courseSchema = generateCourseSchema(
    "Kaizen",
    programme.description,
    "4-7 years",
    url
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredData(webPageSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredData(courseSchema)}
      />
      {/* Hero Section */}
      <HeroSection
        eyebrow="Ages 4–7 · Kaizen Programme"
        headline={`${programme.name}: Where Confidence Begins`}
        supportingText={programme.description}
        primaryCTAText="Book a Trial Class"
        secondaryCTAText="WhatsApp Us"
        secondaryCTAHref="https://wa.me/1234567890"
        image={{
          src: "/images/programmes/kaizen-showcase.webp",
          alt: "A young Kaizen student presenting on stage at a showcase",
        }}
      />

      {/* Highlights */}
      <Section padding="md">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {HIGHLIGHTS.map((item, index) => (
              <Reveal key={item} index={index} delay={0.05}>
                <Card className="flex h-full flex-col">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange/10">
                    <span className="text-sm font-bold text-orange">
                      {index + 1}
                    </span>
                  </div>
                  <p className="font-medium text-text-primary">{item}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Photo Moment */}
      <Section padding="md">
        <Container>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:aspect-[21/9]">
            <Image
              src="/images/programmes/kaizen-activity.webp"
              alt="Young Kaizen learners in a floor circle activity"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      {/* Programme Structure */}
      <Section alternateBackground padding="lg">
        <Container>
          <SectionHeading
            title="Programme Structure"
            subtitle="Consistent, supportive learning over 16 weeks"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                label: "Duration",
                value: "16 Weeks",
                description: "One session per week provides consistent skill-building time.",
              },
              {
                label: "Class Size",
                value: "Small Groups",
                description:
                  "Intimate class sizes (max 10–12) allow our coaches to support each child individually.",
              },
              {
                label: "Activities",
                value: "Play-Based",
                description:
                  "All learning happens through games, stories, creative tasks and social interaction.",
              },
              {
                label: "Showcase",
                value: "Celebration Event",
                description:
                  "At the end of the programme, children share what they've learned in a fun showcase for parents.",
              },
            ].map((item, index) => (
              <Reveal key={item.label} index={index}>
                <Card className="flex h-full flex-col">
                  <p className="text-sm font-medium text-orange mb-2">{item.label}</p>
                  <h3 className="text-2xl font-bold text-text-primary mb-3">
                    {item.value}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQs Section */}
      <Section padding="lg">
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Answers to common parent questions about Kaizen"
          />

          <div className="mt-12 space-y-6 max-w-3xl mx-auto">
            {programme.faqs.slice(0, 2).map((faq, index) => (
              <Reveal key={faq.question} index={index} delay={0.06}>
                <Card className="flex flex-col">
                  <h3 className="mb-3 font-bold text-text-primary text-lg">
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section padding="lg" alternateBackground>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              title="Ready to Help Your Child Discover Their Voice?"
              subtitle="Start with a trial class. Experience Kaizen and see how your child grows."
            />

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-3">
              <Button
                variant="whatsapp"
                size="lg"
                href="https://wa.me/1234567890"
                className="w-full sm:w-auto"
              >
                Book a Trial Class
              </Button>
              <Button
                variant="whatsapp-outline"
                size="lg"
                href="https://wa.me/1234567890"
                className="w-full sm:w-auto"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
