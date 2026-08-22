import Image from "next/image";
import { Container, Section, SectionHeading, Button, Card } from "@/components/ui";
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
        headline={`${programme.name}: Where Confidence Begins`}
        supportingText={programme.description}
        primaryCTAText="Book a Trial Class"
        secondaryCTAText="WhatsApp Us"
        secondaryCTAHref="https://wa.me/1234567890"
      />

      {/* Programme Hero Image Placeholder */}
      <Section padding="md">
        <Container>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-dark-grey/20 bg-light-grey">
            <Image
              src={SITE_CONFIG.placeholderImage}
              alt="Kaizen programme visual placeholder — real photography coming soon"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-xs font-medium text-white">
                Placeholder — real Budding Voice photography coming soon
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Programme Overview Section */}
      <Section padding="lg">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="What is Kaizen?"
              subtitle="An engaging introduction to communication through play and creativity"
              centered={false}
              maxWidth={false}
            />

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Kaizen is designed specifically for young learners aged 4–7 who are at a crucial stage of social and communication development. At this age, children are naturally curious, imaginative and eager to express themselves.
              </p>

              <p>
                Through play-based activities, storytelling and creative tasks, Kaizen creates a safe, supportive environment where children can:
              </p>

              <ul className="space-y-3 list-none ml-0">
                {[
                  "Express ideas and feelings confidently",
                  "Listen to and learn from peers",
                  "Develop imagination and creativity",
                  "Build social confidence and friendships",
                  "Learn to communicate in group settings",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange text-white text-sm font-bold">
                      ✓
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p>
                The programme focuses on making learning fun. We don&apos;t teach children to &quot;perform&quot; — we create space for natural self-expression, helping shy children gradually build confidence and all children develop strong communication foundations.
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
            subtitle="Skills and confidence that extend far beyond the classroom"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programme.learningOutcomes.map((outcome) => (
              <Card key={outcome} className="flex flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                  <div className="h-8 w-8 rounded-full bg-orange" />
                </div>
                <h3 className="font-bold text-text-primary">{outcome}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {outcome === "Increased confidence" &&
                    "Children feel more comfortable speaking and participating in group activities."}
                  {outcome === "Better self-expression" &&
                    "Children learn to share their ideas, feelings and stories clearly."}
                  {outcome === "Listening skills" &&
                    "Children develop the ability to hear, understand and respond to others."}
                  {outcome === "Creativity" &&
                    "Children explore imagination through storytelling and expressive activities."}
                  {outcome === "Social interaction" &&
                    "Children build friendships and learn collaborative skills."}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* What the Experience Looks Like */}
      <Section padding="lg">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="What a Kaizen Class Looks Like"
              subtitle="A typical week in Kaizen"
              centered={false}
              maxWidth={false}
            />

            <div className="mt-12 space-y-8">
              {[
                {
                  title: "Warm-Up Games",
                  description:
                    "We start with fun, energetic games that help children relax and connect with the group. These games develop listening skills and encourage participation.",
                },
                {
                  title: "Storytelling Activities",
                  description:
                    "Children listen to stories, act them out, and create their own. This develops imagination, listening and self-expression in a playful way.",
                },
                {
                  title: "Creative Expression",
                  description:
                    "Through drawing, role-play, music and movement, children express themselves naturally. There's no 'right way' — creativity is celebrated.",
                },
                {
                  title: "Group Participation",
                  description:
                    "Children practise speaking in a safe group. They share ideas, respond to questions and learn from watching peers.",
                },
                {
                  title: "Reflection & Celebration",
                  description:
                    "We end each class by celebrating what children did, encouraging them and building their confidence for next week.",
                },
              ].map((activity, index) => (
                <div key={activity.title} className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-text-primary">
                      {activity.title}
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
            ].map((item) => (
              <Card key={item.label} className="flex flex-col">
                <p className="text-sm font-medium text-orange mb-2">{item.label}</p>
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  {item.value}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Kaizen Matters */}
      <Section padding="lg">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="Why Early Communication Skills Matter"
              subtitle="Confidence built now shapes your child's future"
              centered={false}
              maxWidth={false}
            />

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                The foundation years (4–7) are critical for social and emotional development. Children who develop communication confidence early tend to:
              </p>

              <ul className="space-y-3 list-none ml-0">
                {[
                  "Participate more actively in school",
                  "Build stronger friendships and social connections",
                  "Feel more confident in new situations",
                  "Develop better listening and collaboration skills",
                  "Show increased academic engagement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="text-orange font-bold">→</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p>
                Kaizen isn&apos;t about turning shy children into performers. It&apos;s about helping every child — whether naturally confident or more reserved — discover their voice, express themselves authentically and build the social confidence they need to thrive.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQs Section */}
      <Section alternateBackground padding="lg">
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Answers to common parent questions about Kaizen"
          />

          <div className="mt-12 space-y-6 max-w-3xl mx-auto">
            {programme.faqs.map((faq, index) => (
              <Card key={index} className="flex flex-col">
                <h4 className="mb-3 font-bold text-text-primary text-lg">
                  {faq.question}
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section padding="lg">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              title="Ready to Help Your Child Discover Their Voice?"
              subtitle="Start with a trial class. Experience Kaizen and see how your child grows."
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

            <p className="mt-8 text-sm text-text-secondary">
              Have questions? Feel free to reach out. We&apos;re here to help you find the right programme for your child.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
