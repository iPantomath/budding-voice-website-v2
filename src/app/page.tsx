import { ArrowRight } from "lucide-react";
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
import { PhotoStrip } from "@/components/gallery";
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

const CHILD_HOOKS = [
  "Feels shy speaking up?",
  "Struggles to express ideas?",
  "Avoids classroom participation?",
];

const WHY_BV = [
  {
    title: "Small Class Sizes",
    description: "Personalised attention and individual feedback, every class.",
  },
  {
    title: "Real Speaking Opportunities",
    description: "Students practise live, then showcase what they've learned.",
  },
  {
    title: "More Than Public Speaking",
    description: "Confidence, communication, leadership and character — together.",
  },
];

const GALLERY_ITEMS = [
  {
    src: "/images/hero/homepage-hero.webp",
    alt: "Students engaging in a Budding Voice classroom activity",
    caption: "Every class starts with energy",
  },
  {
    src: "/images/gallery/gallery-coach-demo.webp",
    alt: "A Budding Voice coach leading a hands-on activity with young learners",
    caption: "Coach-led, hands-on learning",
  },
  {
    src: "/images/programmes/kaizen-activity.webp",
    alt: "Young Kaizen learners in a floor circle activity",
    caption: "Play-based confidence building",
  },
  {
    src: "/images/gallery/gallery-teen-presenting.webp",
    alt: "A teenage Apex student presenting to the class",
    caption: "Real speaking practice",
  },
  {
    src: "/images/programmes/kaizen-showcase.webp",
    alt: "A young student presenting on stage at a Budding Voice showcase",
    caption: "Showcase moments",
  },
  {
    src: "/images/gallery/gallery-group-achievement.webp",
    alt: "A group of Budding Voice students and coaches celebrating together",
    caption: "A community that celebrates growth",
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
        image={{
          src: "/images/hero/homepage-hero.webp",
          alt: "Students engaging in a Budding Voice classroom activity",
        }}
      />

      {/* Parent Hook Section */}
      <Section padding="md">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              title="Does Your Child..."
              subtitle="Communication is a skill that can be developed with the right guidance."
            />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {CHILD_HOOKS.map((item, index) => (
                <Reveal key={item} index={index} delay={0.05}>
                  <span className="inline-block rounded-full bg-light-grey px-5 py-2.5 text-sm font-medium text-text-secondary">
                    {item}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Programmes Section */}
      <Section alternateBackground padding="lg">
        <Container>
          <SectionHeading
            eyebrow="Our Programmes"
            title="Programmes Designed for Every Stage of Growth"
            subtitle="Every learner grows differently — from first words of confidence to leadership on stage."
          />

          <div className="mx-auto mb-10 flex max-w-2xl items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-secondary sm:gap-4">
            <span className="rounded-full bg-light-grey px-3 py-1.5">4–7 Kaizen</span>
            <ArrowRight className="h-4 w-4 flex-shrink-0 text-orange" aria-hidden="true" />
            <span className="rounded-full bg-light-grey px-3 py-1.5">8–12 Orator</span>
            <ArrowRight className="h-4 w-4 flex-shrink-0 text-orange" aria-hidden="true" />
            <span className="rounded-full bg-light-grey px-3 py-1.5">13–17 Apex</span>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Reveal index={0}>
              <ProgrammeCard
                name="Kaizen"
                ageRange="4–7 Years"
                tagline="Where Confidence Begins"
                stage={1}
                description="Build confidence, curiosity and self-expression through fun, engaging activities."
                href="/programmes/kaizen"
                image={{
                  src: "/images/programmes/kaizen-activity.webp",
                  alt: "Young Kaizen learners in a floor circle activity",
                }}
                className="h-full"
              />
            </Reveal>
            <Reveal index={1}>
              <ProgrammeCard
                name="Orator"
                ageRange="8–12 Years"
                tagline="Building Confident Communicators"
                stage={2}
                description="Develop storytelling, presentation skills and teamwork."
                href="/programmes/orator"
                image={{
                  src: "/images/programmes/orator-movement.webp",
                  alt: "Orator-age students in a classroom activity",
                }}
                className="h-full"
              />
            </Reveal>
            <Reveal index={2}>
              <ProgrammeCard
                name="Apex"
                ageRange="13–17 Years"
                tagline="Apex Developing Tomorrow's Leaders"
                stage={3}
                description="Advanced communication, leadership and critical thinking."
                href="/programmes/apex"
                image={{
                  src: "/images/programmes/apex-presenting.webp",
                  alt: "A teenage Apex student presenting in class",
                }}
                className="h-full"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* BV in Action Section */}
      <Section padding="lg">
        <Container>
          <SectionHeading
            eyebrow="Budding Voice in Action"
            title="What Happens Inside Our Classes"
            subtitle="A glimpse of the energy, practice and showcase moments every learner experiences."
          />

          <div className="mt-12">
            <PhotoStrip items={GALLERY_ITEMS} />
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
                role="Parent of Apex Student"
                className="h-full"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Why Budding Voice Section */}
      <Section alternateBackground padding="lg">
        <Container>
          <SectionHeading
            eyebrow="Why Budding Voice"
            title="More Than Public Speaking"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {WHY_BV.map((item, index) => (
              <Reveal key={item.title} index={index}>
                <Card padding="lg" className="h-full">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange">
                    <span className="text-lg font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            ))}
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
