import Image from "next/image";
import {
  Container,
  Section,
  SectionHeading,
  Card,
  Reveal,
} from "@/components/ui";
import { HeroSection } from "@/components/hero";
import { CTASection } from "@/components/sections";
import { PROGRAMMES } from "@/constants/content";
import {
  generatePageMetadata,
  generateStructuredData,
  generateWebPageSchema,
  generateCourseSchema,
} from "@/lib/metadata";
import { SITE_CONFIG } from "@/constants";

const TITLE = "Orator | Ages 8–12 Public Speaking";
const DESCRIPTION =
  "Orator develops confident public speakers and communicators. Storytelling, presentations, teamwork and critical thinking for primary school children.";
const PATH = "/programmes/orator";

export const metadata = generatePageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.placeholderImage}`,
});

const HIGHLIGHTS = [
  "Public speaking and presentation skills",
  "Storytelling and narrative development",
  "Real speaking opportunities in a supportive environment",
];

export default function OratorPage() {
  const programme = PROGRAMMES.orator;
  const url = `${SITE_CONFIG.url}${PATH}`;

  const webPageSchema = generateWebPageSchema(
    `${TITLE} | ${SITE_CONFIG.name}`,
    DESCRIPTION,
    url,
    [
      { name: "Home", url: SITE_CONFIG.url },
      { name: "Orator", url },
    ]
  );

  const courseSchema = generateCourseSchema(
    "Orator",
    programme.description,
    "8-12 years",
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
        eyebrow="Ages 8–12 · Orator Programme"
        headline={`${programme.name}: Building Confident Communicators`}
        supportingText={programme.description}
        primaryCTAText="Book a Trial Class"
        secondaryCTAText="WhatsApp Us"
        image={{
          src: "/images/programmes/orator-movement.webp",
          alt: "Orator-age students engaged in a classroom activity",
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
              src="/images/hero/homepage-hero.webp"
              alt="Students raising hands to participate in a Budding Voice classroom activity"
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
            subtitle="Consistent learning with real application"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                label: "Duration",
                value: "16 Weeks",
                description: "One session per week allows children to build skills progressively.",
              },
              {
                label: "Class Size",
                value: "Small Groups",
                description:
                  "Classes typically have 10–14 students, allowing personalised attention and support.",
              },
              {
                label: "Activities",
                value: "Skill-Based",
                description:
                  "Each week builds a specific communication skill through activities, practise and feedback.",
              },
              {
                label: "Showcase",
                value: "Celebration Presentation",
                description:
                  "Children present to parents and the community, demonstrating all they've learned.",
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
            subtitle="Everything you need to know about Orator"
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
      <CTASection
        title="Watch Your Child Find Their Voice"
        subtitle="Book a trial class and experience how Orator builds confident communicators."
        background="alternate"
      />
    </>
  );
}
