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

const TITLE = "APEX | Ages 13–17 Leadership Programme";
const DESCRIPTION =
  "APEX develops tomorrow's leaders. Advanced communication, critical thinking, leadership skills and confidence for teenagers and young adults.";
const PATH = "/programmes/apex";

export const metadata = generatePageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.placeholderImage}`,
});

export default function APEXPage() {
  const programme = PROGRAMMES.apex;
  const url = `${SITE_CONFIG.url}${PATH}`;

  const webPageSchema = generateWebPageSchema(
    `${TITLE} | ${SITE_CONFIG.name}`,
    DESCRIPTION,
    url,
    [
      { name: "Home", url: SITE_CONFIG.url },
      { name: "APEX", url },
    ]
  );

  const courseSchema = generateCourseSchema(
    "APEX",
    programme.description,
    "13-17 years",
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
        eyebrow="Ages 13–17 · APEX Programme"
        headline={`${programme.name}: Developing Tomorrow's Leaders`}
        supportingText={programme.description}
        primaryCTAText="Book a Trial Class"
        secondaryCTAText="WhatsApp Us"
        secondaryCTAHref="https://wa.me/1234567890"
        showVisual={false}
      />

      {/* What Makes APEX Different */}
      <Section padding="md">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-orange/15 bg-gradient-to-br from-orange/5 via-white to-light-grey/50 p-8 sm:p-10">
            <DecorativeBackground
              variant="dot-grid"
              className="right-0 top-0 opacity-50"
            />
            <p className="relative mb-6 text-xs font-semibold uppercase tracking-wider text-orange">
              What Makes APEX Different
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
              title="What is APEX?"
              subtitle="Beyond public speaking to developing leaders"
              centered={false}
              maxWidth={false}
            />

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                APEX is designed for teenagers aged 13–17 at a critical stage of development. They&apos;re discovering who they are, finding their voice, and preparing for higher education, career decisions and adult responsibilities.
              </p>

              <p>
                While foundational communication skills matter, APEX goes deeper. We develop:
              </p>

              <ul className="space-y-3 list-none ml-0">
                {[
                  "Advanced public speaking and presentation abilities",
                  "Leadership mindset and decision-making skills",
                  "Critical thinking and analysis",
                  "Persuasive and influential communication",
                  "Confidence to lead, challenge and inspire others",
                  "Authentic voice and purposeful communication",
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
                APEX isn&apos;t just a communication programme. It&apos;s about preparing confident, articulate, thoughtful young people who are ready to lead in school, university, and beyond.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What Students Develop Section */}
      <Section alternateBackground padding="lg">
        <Container>
          <SectionHeading
            title="What Your Teenager Will Develop"
            subtitle="Skills that prepare them for success"
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
                    {outcome === "Leadership" &&
                      "Teenagers develop the mindset, skills and confidence to lead teams, make decisions and inspire others."}
                    {outcome === "Critical thinking" &&
                      "Teenagers learn to analyse information, form evidence-based opinions and think independently."}
                    {outcome === "Public speaking" &&
                      "Teenagers master advanced presentation skills, handle difficult questions and influence audiences."}
                    {outcome === "Collaboration" &&
                      "Teenagers learn to work effectively with diverse teams, lead group projects and navigate dynamics."}
                    {outcome === "Confidence" &&
                      "Teenagers feel assured in challenging situations, comfortable taking risks and authentic in their self-expression."}
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
              title="What an APEX Session Looks Like"
              subtitle="Advanced learning for developing leaders"
              centered={false}
              maxWidth={false}
            />

            <div className="mt-12">
              <Timeline
                steps={[
                  {
                    title: "Check-In & Goal Setting",
                    description:
                      "We start by connecting as a community. Teenagers reflect on goals, share what they're working on and support each other.",
                  },
                  {
                    title: "Leadership Skill Development",
                    description:
                      "Each week focuses on an advanced skill: persuasive speaking, leading teams, decision-making, handling pressure, managing conflict or communicating with diverse audiences.",
                  },
                  {
                    title: "Scenario-Based Practice",
                    description:
                      "Rather than simple exercises, teenagers work through realistic scenarios they'll face: presenting to authority figures, leading teams, handling difficult questions, influencing peers.",
                  },
                  {
                    title: "Peer Feedback & Coaching",
                    description:
                      "Teenagers receive feedback not just from coaches, but from peers. This develops their ability to give and receive constructive feedback — a crucial leadership skill.",
                  },
                  {
                    title: "Individual Development",
                    description:
                      "Teenagers identify their specific growth areas and work with coaches on personalised challenges. One teenager might work on public speaking, another on leadership presence.",
                  },
                  {
                    title: "Reflection & Accountability",
                    description:
                      "We close each session with reflection. Teenagers articulate what they learned and set goals for the next week.",
                  },
                ]}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Real-World Application */}
      <Section alternateBackground padding="lg">
        <Container>
          <SectionHeading
            title="Real-World Applications"
            subtitle="Skills that matter immediately in school and beyond"
          />

          <div className="mx-auto max-w-3xl">
            <p className="text-text-secondary leading-relaxed mb-8">
              APEX skills translate directly into success in teenagers&apos; lives right now. Many APEX participants report improvements in:
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "School Presentations",
                  description:
                    "Teenagers deliver assignments, research projects and presentations with confidence and impact.",
                },
                {
                  title: "Class Participation",
                  description:
                    "They participate thoughtfully in discussions, ask intelligent questions and contribute meaningfully.",
                },
                {
                  title: "Interview Preparation",
                  description:
                    "Leadership communication skills help teenagers succeed in university and job interviews.",
                },
                {
                  title: "Extracurricular Leadership",
                  description:
                    "Many APEX teenagers take on leadership roles: debate, student council, clubs, or team captaincy.",
                },
                {
                  title: "Peer Influence",
                  description:
                    "Teenagers become more influential, able to lead friends, challenge unhelpful norms, and inspire positive change.",
                },
                {
                  title: "Confidence in New Situations",
                  description:
                    "Whether joining new schools or facing social challenges, teenagers feel assured and adaptable.",
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
            subtitle="Intensive skill development over 16 weeks"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                label: "Duration",
                value: "16 Weeks",
                description:
                  "One session per week allows teenagers to develop skills progressively while managing school commitments.",
              },
              {
                label: "Group Size",
                value: "Small Cohorts",
                description:
                  "Typically 10–14 teenagers, creating a tight-knit community where peer support and accountability thrive.",
              },
              {
                label: "Approach",
                value: "Leadership-Focused",
                description:
                  "Beyond communication, we develop decision-making, critical thinking, accountability and authentic leadership.",
              },
              {
                label: "Showcase",
                value: "Leadership Project",
                description:
                  "Teenagers complete a leadership project demonstrating what they&apos;ve learned. Options include presentations, facilitating discussions, or leading community initiatives.",
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

      {/* Why Leadership Matters */}
      <Section alternateBackground padding="lg">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="Why Leadership Development Matters Now"
              subtitle="Foundation for success in university and beyond"
              centered={false}
              maxWidth={false}
            />

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Teenagers aged 13–17 are at a critical point. The confidence and skills they develop now shape their trajectory in higher education, careers and life. Teenagers who develop strong leadership and communication skills tend to:
              </p>

              <ul className="space-y-3 list-none ml-0">
                {[
                  "Gain early leadership experience and responsibility",
                  "Develop resilience and ability to handle pressure",
                  "Build authentic confidence based on real capabilities",
                  "Stand out in university applications and interviews",
                  "Feel prepared for emerging adulthood",
                  "Become influencers for positive change in their communities",
                  "Develop a strong sense of purpose and direction",
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
                APEX isn&apos;t about creating polished speakers. It&apos;s about developing young people who think critically, communicate authentically, lead with integrity and are prepared to make meaningful contributions to their world.
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
            subtitle="Everything you need to know about APEX"
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
              title="Prepare for Leadership"
              subtitle="Book a trial session and experience APEX. See how we develop confident, articulate, thoughtful young leaders."
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
              Have questions about APEX? We&apos;re happy to discuss how the programme aligns with your teenager&apos;s goals.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
