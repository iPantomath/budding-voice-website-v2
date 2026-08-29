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
                Budding Voice began with a simple belief: public speaking should do more than
                prepare a child to perform on stage. It should help a child become confident,
                understand their own thoughts, express ideas clearly and connect meaningfully with others.
              </p>

              <p>
                We started by helping children overcome shyness and build confidence through speaking activities.
                As we worked with more learners, parents, coaches, preschools and schools, we realised that speaking
                was only the starting point. A child may learn how to deliver a speech, but lasting growth happens
                when the child also discovers what matters to them, recognises what may be holding them back, learns
                to make decisions and takes ownership of their improvement.
              </p>

              <p>
                This shaped Budding Voice into a Communication & Leadership Centre. Today, our programmes combine
                public speaking with self-discovery, character development, critical thinking, teamwork, accountability
                and real opportunities to practise. Through regular classes, school partnerships, workshops and showcases,
                we aim to build a supportive community where learners find their voice and grow into purposeful communicators.
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
              <p className="mt-4 leading-relaxed text-text-secondary">
                We believe that every learner has unique potential waiting to be discovered. Our mission
                is to create safe, encouraging spaces where learners can practice speaking, receive constructive
                feedback and gradually build the confidence and skills to express themselves authentically.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold text-text-primary">
                Our Vision
              </h3>
              <p className="leading-relaxed text-text-secondary">
                Raise a generation of confident, expressive and thoughtful leaders.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                We envision a world where learners are comfortable speaking their minds, where communication
                is valued as a core life skill, and where every voice is heard and respected. We want to inspire
                a generation that doesn&apos;t just follow, but leads with integrity and purpose.
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
                  "We believe every child has a voice worth sharing. We create safe spaces where learners feel empowered to speak up and express themselves.",
              },
              {
                title: "Character",
                description:
                  "We develop not just communicators, but thoughtful people. We emphasise integrity, accountability and how learners show up for themselves and others.",
              },
              {
                title: "Connection",
                description:
                  "Communication thrives in community. We build strong relationships between learners, coaches and families, creating a supportive network.",
              },
              {
                title: "Growth",
                description:
                  "Learning is continuous. We celebrate progress, not perfection, and encourage learners to view challenges as opportunities to develop.",
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
                      "We believe learners grow best by doing. Every class includes interactive activities, games, discussions and opportunities to practice speaking in real scenarios.",
                  },
                  {
                    title: "Reflection",
                    description:
                      "After each activity, learners reflect on what they experienced and what they learned. This helps them connect actions to outcomes and develop self-awareness.",
                  },
                  {
                    title: "Practice",
                    description:
                      "Communication skills develop through repetition in a supportive environment. We provide multiple opportunities to practise, make mistakes and improve without fear.",
                  },
                  {
                    title: "Facilitation",
                    description:
                      "Our coaches guide and support learners, rather than simply lecturing. We ask questions, offer feedback and help learners discover answers themselves.",
                  },
                  {
                    title: "Peer Learning",
                    description:
                      "Small class sizes mean learners learn from each other. They observe their peers, share feedback and build community together.",
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
              />
            </Reveal>
            <Reveal index={1}>
              <CoachCard
                name="Coach Sarah"
                role="Senior Coach"
                bio="Sarah specialises in working with younger learners aged 4–7. She creates fun, engaging activities that help children build confidence through play and exploration."
                specialisation="Early Childhood Development, Play-Based Learning"
              />
            </Reveal>
            <Reveal index={2}>
              <CoachCard
                name="Coach Marcus"
                role="Programme Coach"
                bio="Marcus works with our older learners to develop advanced communication and leadership skills. He emphasises practical application and real-world scenarios."
                specialisation="Teen Leadership, Critical Thinking"
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
                  "Our curriculum combines experiential learning with real speaking opportunities, backed by years of success with learners.",
              },
              {
                title: "Small Class Sizes",
                description:
                  "Personalised attention ensures every learner receives individual support and constructive feedback tailored to their needs.",
              },
              {
                title: "Supportive Community",
                description:
                  "We build a network where learners, coaches and families work together. Everyone is invested in success.",
              },
              {
                title: "Real Opportunities",
                description:
                  "Regular showcases and presentations give learners real chances to apply what they've learned in front of an audience.",
              },
              {
                title: "Parent Collaboration",
                description:
                  "We keep parents informed and provide practical strategies they can support at home to reinforce learning.",
              },
              {
                title: "Continuous Growth",
                description:
                  "Our programmes are designed as a journey. Learners progress through stages and can continue developing advanced skills.",
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
