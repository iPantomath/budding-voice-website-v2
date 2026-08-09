import { Container, Section, SectionHeading, Card, Button, Badge } from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* Design System Showcase */}
      <Section alternateBackground padding="lg">
        <Container>
          <SectionHeading
            title="Phase 2 Complete: Design System & Shared UI"
            subtitle="All core components are ready for use across the website"
          />

          {/* Components Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Buttons */}
            <Card>
              <h3 className="mb-4 text-xl font-semibold text-text-primary">
                Buttons
              </h3>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Small Primary</Button>
                  <Button variant="secondary" size="sm">
                    Small Secondary
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="md">Medium Primary</Button>
                  <Button variant="tertiary" size="md">
                    Medium Tertiary
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="lg">Large Primary</Button>
                  <Button variant="ghost" size="lg">
                    Large Ghost
                  </Button>
                </div>
                <Button fullWidth isLoading>
                  Loading State
                </Button>
              </div>
            </Card>

            {/* Cards & Badges */}
            <Card>
              <h3 className="mb-4 text-xl font-semibold text-text-primary">
                Cards & Badges
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-sm font-medium text-text-secondary">
                    Card Component
                  </p>
                  <Card padding="md">
                    <p className="leading-relaxed text-sm text-text-secondary">
                      Reusable card with hover animation and customizable padding.
                    </p>
                  </Card>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-text-secondary">
                    Badges
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="success">Success</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Typography */}
            <Card>
              <h3 className="mb-4 text-xl font-semibold text-text-primary">
                Typography
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-1 font-semibold text-text-primary">
                    Heading
                  </h4>
                  <p className="leading-relaxed text-sm text-text-secondary">
                    Clean, readable, modern sans-serif (Inter)
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-text-secondary">
                    Body Text
                  </p>
                  <p className="leading-relaxed text-sm text-text-secondary">
                    Optimized line spacing for comfortable reading
                  </p>
                </div>
              </div>
            </Card>

            {/* Layout Components */}
            <Card>
              <h3 className="mb-4 text-xl font-semibold text-text-primary">
                Layout
              </h3>
              <div className="space-y-3 leading-relaxed text-sm text-text-secondary">
                <p>✓ Sticky Navbar with mobile menu</p>
                <p>✓ Responsive Footer with links & social</p>
                <p>✓ Container component (max 1200px)</p>
                <p>✓ Section component with alternate backgrounds</p>
              </div>
            </Card>
          </div>

          {/* Checklist */}
          <Card className="mt-8">
            <h3 className="mb-6 text-2xl font-bold text-text-primary">
              Phase 2 Deliverables
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold text-orange">
                  UI Components
                </h4>
                <ul className="space-y-2 leading-relaxed text-sm text-text-secondary">
                  <li>✓ Button (4 variants, 4 sizes)</li>
                  <li>✓ Card (with hover animation)</li>
                  <li>✓ Container (responsive max-width)</li>
                  <li>✓ Section (with alternating backgrounds)</li>
                  <li>✓ SectionHeading (reusable heading pattern)</li>
                  <li>✓ Badge (5 variants)</li>
                  <li>✓ Link (3 variants, internal/external)</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-orange">
                  Layout Components
                </h4>
                <ul className="space-y-2 leading-relaxed text-sm text-text-secondary">
                  <li>✓ Navbar (sticky, transparent, mobile menu)</li>
                  <li>✓ Footer (links, contact, social)</li>
                  <li>✓ Navigation links (8 pages)</li>
                  <li>✓ Responsive behavior (mobile-first)</li>
                  <li>✓ Focus states & accessibility</li>
                  <li>✓ Design tokens (colors, spacing)</li>
                  <li>✓ Animation utilities (Framer Motion ready)</li>
                </ul>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
