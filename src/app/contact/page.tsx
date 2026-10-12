import { Mail, Phone, MessageCircle, Clock, Share2 } from "lucide-react";
import { Container, Section, SectionHeading, Card, Badge, Reveal } from "@/components/ui";
import { HeroSection } from "@/components/hero";
import { ContactForm } from "@/components/forms";
import {
  generatePageMetadata,
  generateStructuredData,
  generateWebPageSchema,
} from "@/lib/metadata";
import { SITE_CONFIG } from "@/constants";
import { CONTACT_INFO, CONTACT_TBC_LABEL } from "@/constants/contact";

const TITLE = "Contact";
const DESCRIPTION =
  "Get in touch with Budding Voice. Book a trial class, enquire about school partnerships or corporate training, and contact us via WhatsApp, email or our form.";
const PATH = "/contact";

export const metadata = generatePageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.placeholderImage}`,
});

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_INFO.phone,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT_INFO.whatsappNumber,
  },
  {
    icon: Clock,
    label: "Operating Hours",
    value: CONTACT_INFO.operatingHours,
  },
  {
    icon: Share2,
    label: "Social",
    value: CONTACT_INFO.social,
  },
];

export default function ContactPage() {
  const schema = generateWebPageSchema(
    `${TITLE} | ${SITE_CONFIG.name}`,
    DESCRIPTION,
    `${SITE_CONFIG.url}${PATH}`,
    [
      { name: "Home", url: SITE_CONFIG.url },
      { name: "Contact", url: `${SITE_CONFIG.url}${PATH}` },
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
        eyebrow="Get in Touch"
        headline="Let's Start the Conversation"
        supportingText="Whether you're looking for the right programme, exploring a school partnership or planning corporate training, we'd love to hear from you."
        showVisual={false}
      />

      {/* Enquiry Form Section */}
      <Section padding="lg">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              title="Send Us an Enquiry"
              subtitle="Fill in your details and we'll prepare a message you can send us directly on WhatsApp."
              centered={false}
              maxWidth={false}
            />

            <Card padding="lg">
              <ContactForm />
            </Card>
          </div>
        </Container>
      </Section>

      {/* Contact Information Section */}
      <Section alternateBackground padding="lg">
        <Container>
          <SectionHeading
            title="Other Ways to Reach Us"
            subtitle="Our contact details are being finalised. Check back soon, or use the enquiry form above in the meantime."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contactDetails.map((detail, index) => (
              <Reveal key={detail.label} index={index}>
                <Card className="flex h-full flex-col">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange/10">
                    <detail.icon className="h-5 w-5 text-orange" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-bold text-text-primary">
                    {detail.label}
                  </h3>
                  {detail.value ? (
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {detail.value}
                    </p>
                  ) : (
                    <Badge variant="secondary" size="sm" className="w-fit">
                      {CONTACT_TBC_LABEL}
                    </Badge>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
