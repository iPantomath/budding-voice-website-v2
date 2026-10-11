import { Container, Section, SectionHeading, Button, Card, Reveal } from "@/components/ui";
import { HeroSection } from "@/components/hero";
import { CoachCard } from "@/components/cards";
import { Timeline } from "@/components/timeline";
import {
  generatePageMetadata,
  generateStructuredData,
  generateWebPageSchema,
} from "@/lib/metadata";
import { SITE_CONFIG } from "@/constants";

const TITLE = "About Us";
const DESCRIPTION =
  "Learn about Budding Voice's mission, vision and learning philosophy. Discover how we help learners discover their voice and grow with purpose.";
const PATH = "/about";

export const metadata = generatePageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.placeholderImage}`,
});

export default function About() {
  const schema = generateWebPageSchema(
    `${TITLE} | ${SITE_CONFIG.name}`,
    DESCRIPTION,
    `${SITE_CONFIG.url}${PATH}`,
    [
      { name: "Home", url: SITE_CONFIG.url },
      { name: "About", url: `${SITE_CONFIG.url}${PATH}` },
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
        eyebrow="About Budding Voice"
        headline="Helping Every Learner Find Their Voice"
        supportingText="Budding Voice is a Communication & Leadership Centre committed to helping children, teenagers and adults discover confidence, express themselves authentically and grow into thoughtful leaders."
        showVisual={false}
      />

      {/* Our Story Section */}
      <Section padding="lg">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="Our Story"
              centered={false}
              maxWidth={false}
            />

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Budding Voice began with a simple belief: public speaking should do more than prepare
                a child to perform on stage. It should help a child become confident, express ideas
                clearly and connect meaningfully with others.
              </p>

              <p>
                As we worked with more learners, parents, coaches and schools, speaking became just the
                starting point. This shaped Budding Voice into a Communication & Leadership Centre —
                combining public speaking with self-discovery, character, critical thinking and real
                opportunities to practise, through regular classes, school partnerships and showcases.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision Section */}
      <Section alternateBackground padding="lg">
        <Container>
          <SectionHeading
            title="Our Mission & Vision"
            centered={false}
            maxWidth={false}
          />

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-text-primary">
                Our Mission
              </h3>
              <p className="leading-relaxed text-text-secondary">
                Develop confident communicators who lead with purpose.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold text-text-primary">
                Our Vision
              </h3>
              <p className="leading-relaxed text-text-secondary">
                Raise a generation of confident, expressive and thoughtful leaders.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values Section */}
      <Section padding="lg">
        <Container>
          <SectionHeading
            title="Our Core Values"
            subtitle="These pillars guide everything we do and shape how we support every learner."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Confidence",
                description:
                  "Every child has a voice worth sharing — we create safe spaces to speak up.",
              },
              {
                title: "Character",
                description:
                  "We develop thoughtful people, not just communicators.",
              },
              {
                title: "Connection",
                description:
                  "Strong relationships between learners, coaches and families.",
              },
              {
                title: "Growth",
                description:
                  "We celebrate progress, not perfection.",
              },
            ].map((value, index) => (
              <Reveal key={value.title} index={index}>
                <Card className="flex h-full flex-col">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange/10">
                    <div className="h-6 w-6 rounded-full bg-orange/20" />
                  </div>
                  <h3 className="mb-3 font-bold text-text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Learning Philosophy Section */}
      <Section alternateBackground padding="lg">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="How We Approach Learning"
              subtitle="Our learning philosophy is grounded in the belief that lasting growth happens through doing, reflecting and practising in a safe environment."
              centered={false}
              maxWidth={false}
            />

            <div className="mt-12">
              <Timeline
                steps={[
                  {
                    title: "Experiential Learning",
                    description:
                      "",
                  },
                  {
                    title: "Reflection",
                    description:
                      "",
                  },
                  {
                    title: "Practice",
                    description:
                      "",
                  },
                  {
                    title: "Facilitation",
                    description:
                      "",
                  },
                  {
                    title: "Peer Learning",
                    description:
                      "",
                  },
                ]}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Meet the Coaches Section */}
      <Section padding="lg">
        <Container>
          <SectionHeading
            title="Meet Our Coaches"
            subtitle="Our coaches are passionate educators committed to supporting every learner's growth and development."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Reveal index={0}>
              <CoachCard
                name="Coach Alfred"
                role="Founder & Lead Coach"
                bio="Alfred brings years of experience in youth development and communication training. His passion is helping learners discover their unique voice and build genuine confidence."
                specialisation="Leadership Development, Youth Empowerment"
                image="/images/coaches/coach-alfred.webp"
              />
            </Reveal>
            <Reveal index={1}>
              <CoachCard
                name="Coach Bryan"
                role="Senior Coach"
                bio="Bryan specialises in working with younger learners aged 4–7. He creates fun, engaging activities that help children build confidence through play and exploration."
                specialisation="Early Childhood Development, Play-Based Learning"
                image="/images/coaches/coach-bryan.webp"
              />
            </Reveal>
            <Reveal index={2}>
              <CoachCard
                name="Coach Jun Yean"
                role="Programme Coach"
                bio="Jun Yean works with our older learners to develop advanced communication and leadership skills. He emphasises practical application and real-world scenarios."
                specialisation="Teen Leadership, Critical Thinking"
                image="/images/coaches/coach-jun-yean.webp"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Why Choose Budding Voice Section */}
      <Section alternateBackground padding="lg">
        <Container>
          <SectionHeading
            title="Why Choose Budding Voice?"
            subtitle="We're not just teaching public speaking. We're developing confident, thoughtful communicators."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Proven Approach",
                description:
                  "",
              },
              {
                title: "Small Class Sizes",
                description:
                  "",
              },
              {
                title: "Supportive Community",
                description:
                  "",
              },
              {
                title: "Real Opportunities",
                description:
                  "",
              },
              {
                title: "Parent Collaboration",
                description:
                  "",
              },
              {
                title: "Continuous Growth",
                description:
                  "",
              },
            ].map((item, index) => (
              <Reveal key={item.title} index={index}>
                <Card className="flex h-full flex-col">
                  <h3 className="mb-3 font-bold text-text-primary">
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

      {/* Final CTA Section */}
      <Section padding="lg" className="bg-gradient-to-r from-orange/5 to-orange/10">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              title="Ready to Start the Journey?"
              subtitle="Meet our team, learn more about our programmes and discover how Budding Voice can support your child's growth."
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
