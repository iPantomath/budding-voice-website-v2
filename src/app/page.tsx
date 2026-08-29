import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/utils/cn";
import {
  Container,
  Section,
  SectionHeading,
  Button,
  Card,
  Reveal,
  DecorativeBackground,
} from "@/components/ui";
import { HeroSection } from "@/components/hero";
import { ProgrammeCard, TestimonialCard } from "@/components/cards";
import { Timeline } from "@/components/timeline";
import {
  generatePageMetadata,
  generateStructuredData,
  generateWebPageSchema,
} from "@/lib/metadata";
import { SITE_CONFIG } from "@/constants";

const TITLE = "Discover Their Voice, Unleash Potential";
const DESCRIPTION =
  "Develop confidence, communication and leadership through Budding Voice's experiential learning programmes for children and teenagers.";

export const metadata = generatePageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.placeholderImage}`,
});

const FEATURED_REASONS = [
  {
    title: "Small Class Sizes",
    description:
      "Personalized attention ensures every learner gets individual feedback and support.",
  },
  {
    title: "Real Speaking Opportunities",
    description:
      "Students practise in a safe environment before showcase presentations.",
  },
];

const SECONDARY_REASONS = [
  {
    title: "Activity-Based Learning",
    description: "Engaging activities make learning fun and help skills stick.",
  },
  {
    title: "Personalised Feedback",
    description:
      "Constructive guidance helps learners understand their progress and growth areas.",
  },
  {
    title: "Showcase Opportunities",
    description:
      "Regular presentations build confidence and reinforce learning.",
  },
  {
    title: "Parent Collaboration",
    description:
      "We keep parents informed and share practical strategies for home support.",
  },
];

const LEARNING_STEPS = [
  {
    title: "Join",
    description:
      "Welcome to a supportive learning community where every voice matters.",
  },
  {
    title: "Learn",
    description:
      "Engage in purposeful activities designed for your age and learning stage.",
  },
  {
    title: "Practice",
    description:
      "Apply new skills in a safe environment with guidance and support.",
  },
  {
    title: "Receive Feedback",
    description:
      "Get constructive, personalized feedback to guide your growth.",
  },
  {
    title: "Showcase",
    description:
      "Share your learning with the community in celebration presentations.",
  },
  {
    title: "Continue Growing",
    description:
      "Build on your progress and develop new skills and confidence.",
  },
];

export default function Home() {
  const schema = generateWebPageSchema(
    `${TITLE} | ${SITE_CONFIG.name}`,
    DESCRIPTION,
    SITE_CONFIG.url,
    [{ name: "Home", url: SITE_CONFIG.url }]
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredData(schema)}
      />
      {/* Hero Section */}
      <HeroSection
        eyebrow="Communication & Leadership Centre · Ages 4–17"
        headline="Discover Their Voice. Unleash Their Potential."
        supportingText="Every child has ideas worth sharing. At Budding Voice, we help children and teenagers develop confidence, communication and leadership through engaging, experiential learning."
      />

      {/* Parent Challenges Section */}
      <Section padding="lg">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              title="Does Your Child..."
              subtitle="Communication is not a talent. It is a skill that can be developed with the right guidance."
            />

            <ul className="mt-12 grid gap-4 text-left sm:grid-cols-2 list-none">
              {[
                "Feel shy speaking in front of others?",
                "Struggle to express ideas clearly?",
                "Lack confidence in social situations?",
                "Memorise instead of understanding?",
                "Avoid classroom participation?",
              ].map((item, index) => (
                <Reveal
                  key={item}
                  as="li"
                  index={index}
                  delay={0.05}
                  className={cn(index === 4 && "sm:col-span-2")}
                >
                  <div className="flex h-full items-center gap-4 rounded-lg bg-light-grey p-4">
                    <div
                      aria-hidden="true"
                      className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange text-white"
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </div>
                    <p className="text-text-secondary">{item}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Why Budding Voice Section */}
      <Section alternateBackground padding="lg">
        <Container>
          <SectionHeading
            eyebrow="Why Budding Voice"
            title="More Than Public Speaking"
            subtitle="Our programmes go beyond speeches and presentations. We create meaningful learning experiences that build confidence, communication, leadership, critical thinking and character."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {FEATURED_REASONS.map((item, index) => (
              <Reveal key={item.title} index={index}>
                <Card padding="xl" className="h-full">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange">
                    <span className="text-lg font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SECONDARY_REASONS.map((item, index) => (
              <Reveal key={item.title} index={index + 2}>
                <Card padding="md" className="flex h-full flex-col">
                  <h3 className="mb-2 font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Programmes Section */}
      <Section padding="lg">
        <Container>
          <SectionHeading
            eyebrow="Our Programmes"
            title="Programmes Designed for Every Stage of Growth"
            subtitle="Every learner grows differently. Our programmes are designed to support children and teenagers at different stages of their communication and leadership journey."
          />

          <div className="mx-auto mb-10 flex max-w-2xl items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-secondary sm:gap-4">
            <span className="rounded-full bg-light-grey px-3 py-1.5">4–7 Kaizen</span>
            <ArrowRight className="h-4 w-4 flex-shrink-0 text-orange" aria-hidden="true" />
            <span className="rounded-full bg-light-grey px-3 py-1.5">8–12 Orator</span>
            <ArrowRight className="h-4 w-4 flex-shrink-0 text-orange" aria-hidden="true" />
            <span className="rounded-full bg-light-grey px-3 py-1.5">13–17 APEX</span>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Reveal index={0}>
              <ProgrammeCard
                name="Kaizen"
                ageRange="4–7 Years"
                tagline="Where Confidence Begins"
                stage={1}
                description="Build confidence, curiosity and self-expression through fun, engaging and age-appropriate activities."
                href="/programmes/kaizen"
                className="h-full"
              />
            </Reveal>
            <Reveal index={1}>
              <ProgrammeCard
                name="Orator"
                ageRange="8–12 Years"
                tagline="Building Confident Communicators"
                stage={2}
                description="Develop communication, storytelling and presentation skills while strengthening confidence and teamwork."
                href="/programmes/orator"
                className="h-full"
              />
            </Reveal>
            <Reveal index={2}>
              <ProgrammeCard
                name="APEX"
                ageRange="13–17 Years"
                tagline="Developing Tomorrow's Leaders"
                stage={3}
                description="Prepare future leaders with advanced communication, leadership and critical thinking skills."
                href="/programmes/apex"
                className="h-full"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Learning Philosophy Section */}
      <Section alternateBackground padding="lg">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="How It Works"
              title="How We Help Learners Grow"
              subtitle="Learning happens through doing."
            />

            <p className="mb-12 leading-relaxed text-text-secondary">
              Students participate in activities, reflect on their experiences,
              receive constructive feedback and continuously improve in a safe
              and encouraging environment.
            </p>

            <Timeline steps={LEARNING_STEPS} />
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section padding="lg" className="relative overflow-hidden bg-orange/5">
        <DecorativeBackground
          variant="glow-left"
          className="left-[-160px] top-[-100px] hidden opacity-70 lg:block"
        />
        <Container className="relative">
          <SectionHeading
            eyebrow="Trusted by Families"
            title="What Our Community Says"
            subtitle="Nothing speaks louder than the experiences of our learners, parents and partners."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Reveal index={0}>
              <TestimonialCard
                quote="My child's confidence has grown so much. They're now happy to speak up in class and share their ideas."
                name="Sarah"
                role="Parent of Kaizen Student"
                className="h-full"
              />
            </Reveal>
            <Reveal index={1}>
              <TestimonialCard
                quote="The activity-based approach really works. My son actually looks forward to class now!"
                name="David"
                role="Parent of Orator Student"
                className="h-full"
              />
            </Reveal>
            <Reveal index={2}>
              <TestimonialCard
                quote="Our daughter has become a natural presenter. The programme truly prepares them for life."
                name="Priya"
                role="Parent of APEX Student"
                className="h-full"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section padding="lg" className="bg-gradient-to-r from-orange/5 to-orange/10">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              title="Ready to Begin the Journey?"
              subtitle="Help your child discover confidence, communication and leadership through meaningful learning experiences."
            />

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-3">
              <Button
                variant="primary"
                size="lg"
                href="https://wa.me/1234567890"
                className="w-full sm:w-auto"
              >
                Book a Trial Class
              </Button>
              <Button
                variant="tertiary"
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
