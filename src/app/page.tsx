import { Container, Section, SectionHeading, Button, Card } from "@/components/ui";
import { HeroSection } from "@/components/hero";
import { ProgrammeCard, TestimonialCard } from "@/components/cards";
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
        headline="Discover Their Voice. Unleash Their Potential."
        supportingText="Every child has ideas worth sharing. At Budding Voice, we help children and teenagers develop confidence, communication and leadership through engaging, experiential learning."
      />

      {/* Parent Challenges Section */}
      <Section padding="lg">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              title="Does Your Child..."
              subtitle="Communication is not a talent. It is a skill that can be developed with the right guidance."
            />

            <ul className="mt-12 space-y-4 list-none">
              {[
                "Feel shy speaking in front of others?",
                "Struggle to express ideas clearly?",
                "Lack confidence in social situations?",
                "Memorise instead of understanding?",
                "Avoid classroom participation?",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 rounded-lg bg-light-grey p-4"
                >
                  <div className="h-6 w-6 flex-shrink-0 rounded-full bg-orange text-center text-xs font-bold text-white leading-6">
                    ✓
                  </div>
                  <p className="text-text-secondary">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Why Budding Voice Section */}
      <Section alternateBackground padding="lg">
        <Container>
          <SectionHeading
            title="More Than Public Speaking"
            subtitle="Our programmes go beyond speeches and presentations. We create meaningful learning experiences that build confidence, communication, leadership, critical thinking and character."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Small Class Sizes",
                description:
                  "Personalized attention ensures every learner gets individual feedback and support.",
              },
              {
                title: "Activity-Based Learning",
                description:
                  "Engaging activities make learning fun and help skills stick.",
              },
              {
                title: "Real Speaking Opportunities",
                description:
                  "Students practise in a safe environment before showcase presentations.",
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
            ].map((item) => (
              <Card key={item.title} className="flex flex-col">
                <h3 className="mb-3 font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Programmes Section */}
      <Section padding="lg">
        <Container>
          <SectionHeading
            title="Programmes Designed for Every Stage of Growth"
            subtitle="Every learner grows differently. Our programmes are designed to support children and teenagers at different stages of their communication and leadership journey."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <ProgrammeCard
              name="Kaizen"
              ageRange="4–7 Years"
              description="Build confidence, curiosity and self-expression through fun, engaging and age-appropriate activities."
              href="/programmes/kaizen"
            />
            <ProgrammeCard
              name="Orator"
              ageRange="8–12 Years"
              description="Develop communication, storytelling and presentation skills while strengthening confidence and teamwork."
              href="/programmes/orator"
            />
            <ProgrammeCard
              name="APEX"
              ageRange="13–17 Years"
              description="Prepare future leaders with advanced communication, leadership and critical thinking skills."
              href="/programmes/apex"
            />
          </div>
        </Container>
      </Section>

      {/* Learning Philosophy Section */}
      <Section alternateBackground padding="lg">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              title="How We Help Learners Grow"
              subtitle="Learning happens through doing."
            />

            <p className="mt-8 leading-relaxed text-text-secondary">
              Students participate in activities, reflect on their experiences,
              receive constructive feedback and continuously improve in a safe
              and encouraging environment.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {[
                {
                  step: "1",
                  title: "Join",
                  description:
                    "Welcome to a supportive learning community where every voice matters.",
                },
                {
                  step: "2",
                  title: "Learn",
                  description:
                    "Engage in purposeful activities designed for your age and learning stage.",
                },
                {
                  step: "3",
                  title: "Practice",
                  description:
                    "Apply new skills in a safe environment with guidance and support.",
                },
                {
                  step: "4",
                  title: "Receive Feedback",
                  description:
                    "Get constructive, personalized feedback to guide your growth.",
                },
                {
                  step: "5",
                  title: "Showcase",
                  description:
                    "Share your learning with the community in celebration presentations.",
                },
                {
                  step: "6",
                  title: "Continue Growing",
                  description:
                    "Build on your progress and develop new skills and confidence.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange text-white font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section padding="lg">
        <Container>
          <SectionHeading
            title="What Our Community Says"
            subtitle="Nothing speaks louder than the experiences of our learners, parents and partners."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <TestimonialCard
              quote="My child's confidence has grown so much. They're now happy to speak up in class and share their ideas."
              name="Sarah"
              role="Parent of Kaizen Student"
            />
            <TestimonialCard
              quote="The activity-based approach really works. My son actually looks forward to class now!"
              name="David"
              role="Parent of Orator Student"
            />
            <TestimonialCard
              quote="Our daughter has become a natural presenter. The programme truly prepares them for life."
              name="Priya"
              role="Parent of APEX Student"
            />
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
