import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { HeroSection } from "@/components/hero";
import { TestimonialCard } from "@/components/cards";
import { TESTIMONIALS, PROGRAMMES } from "@/constants/content";
import {
  generatePageMetadata,
  generateStructuredData,
  generateWebPageSchema,
} from "@/lib/metadata";
import { SITE_CONFIG } from "@/constants";

const TITLE = "Testimonials";
const DESCRIPTION =
  "Read what parents and students say about Budding Voice programmes and how our Communication & Leadership Centre makes a difference.";
const PATH = "/testimonials";

export const metadata = generatePageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.placeholderImage}`,
});

export default function Testimonials() {
  const schema = generateWebPageSchema(
    `${TITLE} | ${SITE_CONFIG.name}`,
    DESCRIPTION,
    `${SITE_CONFIG.url}${PATH}`,
    [
      { name: "Home", url: SITE_CONFIG.url },
      { name: "Testimonials", url: `${SITE_CONFIG.url}${PATH}` },
    ]
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredData(schema)}
      />
      {/* Hero Section */}
      <HeroSection
        headline="What Parents & Students Say"
        supportingText="Read real experiences from our learning community. Parents and students share how Budding Voice has made a difference in their communication and confidence journey."
      />

      {/* Testimonials Grid */}
      <Section padding="lg">
        <Container>
          <div className="mb-12">
            <SectionHeading
              title="Learning Stories"
              subtitle="These testimonials represent the experiences of our community members across different programmes."
              centered={false}
              maxWidth={false}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.author}
                role={testimonial.role}
                programme={testimonial.programme}
                type={testimonial.type}
                isPlaceholder={testimonial.isPlaceholder}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Programme Connection Section */}
      <Section alternateBackground padding="lg">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="Meet Our Programmes"
              subtitle="Each testimonial relates to one of our programmes designed for different age groups and learning needs."
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(PROGRAMMES).map(([id, programme]) => (
                <div key={id} className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-1 text-xl font-bold text-orange">
                    {programme.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-text-secondary">
                    Age {programme.age}
                  </p>
                  <p className="text-text-secondary">
                    {programme.description}
                  </p>
                  <div className="mt-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      href={`/programmes/${id}`}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Ready to Join CTA Section */}
      <Section padding="lg" className="bg-gradient-to-r from-orange/5 to-orange/10">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              title="Ready to Start Your Journey?"
              subtitle="Book a trial class and experience how Budding Voice can help your child build confidence, express themselves and grow."
            />

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button
                variant="primary"
                size="lg"
                href="https://wa.me/1234567890"
                className="w-full sm:w-auto"
              >
                Book a Trial Class
              </Button>
              <Button
                variant="secondary"
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
