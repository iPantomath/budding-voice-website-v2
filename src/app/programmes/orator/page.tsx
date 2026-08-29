import { Check, ArrowRight } from "lucide-react";
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
import { Timeline } from "@/components/timeline";
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
        secondaryCTAHref="https://wa.me/1234567890"
        showVisual={false}
      />

      {/* What Makes Orator Different */}
      <Section padding="md">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-orange/15 bg-gradient-to-br from-orange/5 via-white to-light-grey/50 p-8 sm:p-10">
            <DecorativeBackground
              variant="dot-grid"
              className="right-0 top-0 opacity-50"
            />
            <p className="relative mb-6 text-xs font-semibold uppercase tracking-wider text-orange">
              What Makes Orator Different
            </p>
            <div className="relative grid gap-5 sm:grid-cols-2">
              {programme.features.map((feature, index) => (
                <Reveal key={feature} index={index} delay={0.05}>
                  <div className="flex items-start gap-3">
                    <div
                      aria-hidden="true"
                      className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange text-white"
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </div>
                    <p className="text-text-secondary">{feature}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Programme Overview Section */}
      <Section padding="lg">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="What is Orator?"
              subtitle="Communication excellence for confident kids"
              centered={false}
              maxWidth={false}
            />

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Orator is designed for children aged 8–12 at a stage where they&apos;re developing their own identity, building friendships, and increasingly participating in school and social settings.
              </p>

              <p>
                In Orator, children develop not just public speaking skills, but the communication foundation that helps them succeed in every area of life. We focus on:
              </p>

              <ul className="space-y-3 list-none ml-0">
                {[
                  "Speaking confidently in front of audiences",
                  "Crafting and telling engaging stories",
                  "Collaborating effectively with peers",
                  "Thinking critically about ideas",
                  "Receiving feedback and improving continuously",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div
                      aria-hidden="true"
                      className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange text-white"
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p>
                Orator creates regular opportunities for children to speak, present and receive constructive feedback in a supportive community. This builds real confidence that transfers to the classroom, school activities and beyond.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What Students Develop Section */}
      <Section alternateBackground padding="lg">
        <Container>
          <SectionHeading
            title="What Your Child Will Develop"
            subtitle="Skills that help in school, activities and life"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programme.learningOutcomes.map((outcome, index) => (
              <Reveal key={outcome} index={index}>
                <Card className="flex h-full flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                    <div className="h-8 w-8 rounded-full bg-orange" />
                  </div>
                  <h3 className="font-bold text-text-primary">{outcome}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {outcome === "Presentation skills" &&
                      "Children learn to organise thoughts, deliver presentations and engage audiences."}
                    {outcome === "Storytelling" &&
                      "Children develop narrative skills, learn to captivate listeners and express ideas compellingly."}
                    {outcome === "Teamwork" &&
                      "Children practise collaboration, listening to teammates and contributing meaningfully to group work."}
                    {outcome === "Confidence" &&
                      "Children feel assured speaking in front of others, asking questions and participating in class."}
                    {outcome === "Communication" &&
                      "Children learn to express ideas clearly, listen actively and adapt their communication to audiences."}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* What the Experience Looks Like */}
      <Section padding="lg">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="What a Typical Orator Class Looks Like"
              subtitle="Learning through doing, in a supportive environment"
              centered={false}
              maxWidth={false}
            />

            <div className="mt-12">
              <Timeline
                steps={[
                  {
                    title: "Ice-Breaker & Connection",
                    description:
                      "We start by building community. Children connect with peers through games and activities that help them feel relaxed and ready to participate.",
                  },
                  {
                    title: "Skill-Building Activity",
                    description:
                      "Each week focuses on a specific communication skill: storytelling, voice projection, body language, or handling nervousness. Children learn through interactive activities, not lectures.",
                  },
                  {
                    title: "Practise in Small Groups",
                    description:
                      "Children apply the skill in small group activities. This gives everyone speaking practice in a lower-pressure environment before moving to larger presentations.",
                  },
                  {
                    title: "Individual Presentations",
                    description:
                      "Children deliver short presentations to the full group. Our coaches provide supportive, constructive feedback that helps them understand what they did well and what to work on.",
                  },
                  {
                    title: "Reflection & Celebration",
                    description:
                      "We celebrate each child's effort and progress. Children reflect on what they learned and set goals for next week.",
                  },
                ]}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Showcase & Presentations */}
      <Section alternateBackground padding="lg">
        <Container>
          <SectionHeading
            title="The Showcase: Celebrating Growth"
            subtitle="Real-world practice builds real confidence"
          />

          <div className="mx-auto max-w-3xl">
            <p className="text-text-secondary leading-relaxed mb-6">
              Throughout the 16-week programme, children build towards a final showcase presentation where they share what they&apos;ve learned with parents, friends and the Budding Voice community.
            </p>

            <p className="text-text-secondary leading-relaxed mb-6">
              This isn&apos;t a stressful performance. It&apos;s a celebration. Children present topics they&apos;re genuinely interested in, supported by all the skills they&apos;ve developed over 16 weeks. Parents see firsthand how much their child has grown.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 mt-8">
              {[
                {
                  title: "Safe Environment",
                  description:
                    "Children perform in front of a supportive community of parents and peers who celebrate their effort.",
                },
                {
                  title: "Peer Support",
                  description:
                    "Friends and classmates are in the audience, creating a familiar and encouraging atmosphere.",
                },
                {
                  title: "Confidence Boost",
                  description:
                    "Successfully presenting what they&apos;ve learned reinforces skills and builds lasting confidence.",
                },
                {
                  title: "Memory & Motivation",
                  description:
                    "The showcase becomes a proud memory that motivates children to continue developing these important skills.",
                },
              ].map((item, index) => (
                <Reveal key={item.title} index={index}>
                  <Card className="h-full">
                    <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Programme Structure */}
      <Section padding="lg">
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
                  "Children present to parents and the community, demonstrating all they&apos;ve learned.",
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

      {/* Why Communication Skills Matter */}
      <Section alternateBackground padding="lg">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="Why Communication Skills Matter at This Age"
              subtitle="Foundation skills that lead to success"
              centered={false}
              maxWidth={false}
            />

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Ages 8–12 are formative years. Children who develop strong communication skills now tend to:
              </p>

              <ul className="space-y-3 list-none ml-0">
                {[
                  "Perform better in class presentations and academic discussions",
                  "Build stronger friendships and social connections",
                  "Develop leadership skills and confidence in group settings",
                  "Show increased participation and engagement in school",
                  "Feel more assured in new and challenging situations",
                  "Develop critical thinking and independent voice",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <ArrowRight
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 flex-shrink-0 text-orange"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p>
                These aren&apos;t just speaking skills. Orator develops confident, articulate, thoughtful young people who are prepared to lead, contribute and succeed in school and beyond.
              </p>
            </div>
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
            {programme.faqs.map((faq, index) => (
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
      <Section padding="lg">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              title="Watch Your Child Find Their Voice"
              subtitle="Book a trial class and experience how Orator builds confident communicators."
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

            <p className="mt-8 text-sm text-text-secondary">
              Questions about Orator? We&apos;re here to help you make the right choice for your child.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
