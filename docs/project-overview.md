# Budding Voice Website Project Overview

> Project: Budding Voice Official Website
>
> Version: 1.0
>
> Status: Ready for Development

---

# Project Mission

Build a modern, responsive and trustworthy website for Budding Voice that establishes the organisation as a leading Communication & Leadership Centre in Malaysia.

The website should:

- Build trust with parents.
- Clearly communicate Budding Voice's mission and programmes.
- Increase trial class enquiries.
- Generate WhatsApp enquiries.
- Attract school partnerships.
- Support corporate training enquiries.
- Be easy to maintain and scale.

---

# Business Goals

Primary goals:

- Increase website enquiries.
- Increase trial class bookings.
- Improve online credibility.
- Clearly differentiate Budding Voice from traditional tuition and public speaking centres.

Success is measured by visitor understanding, trust and enquiry conversion rather than visual complexity.

---

# Target Audience

Primary

Parents of children aged 4–17.

Secondary

- Schools
- Preschools
- Enrichment Centres

Tertiary

- Corporate HR
- Business Owners
- Training Managers

---

# Brand Positioning

Budding Voice is **not** simply a public speaking academy.

It is a **Communication & Leadership Centre** that develops:

- Confidence
- Communication
- Leadership
- Critical Thinking
- Character

Every design and implementation decision should reinforce this positioning.

---

# Technology Stack

Framework

- Next.js (App Router)
- React
- TypeScript

Styling

- Tailwind CSS

Animation

- Framer Motion

Forms

- React Hook Form
- Zod

Icons

- Lucide React

Deployment

- Vercel

Package Manager

- pnpm

---

# Design Principles

The website should feel:

- Modern
- Professional
- Warm
- Friendly
- Premium
- Authentic

Avoid:

- Childish design
- Generic templates
- Corporate consulting aesthetics
- Overly colourful interfaces

---

# Development Principles

Prioritise:

1. Simplicity
2. Maintainability
3. Performance
4. Accessibility
5. SEO
6. Scalability

Every component should be reusable whenever practical.

---

# Project Documentation

Read the following documents in order.

## 01. Website Product Specification

File:

```
docs/03-website-product-specification.md
```

Defines:

- Functional requirements
- Technical requirements
- Site architecture

---

## 02. Website Content Blueprint

File:

```
docs/04-website-content-blueprint.md
```

Defines:

- Page structure
- Required sections
- User journeys
- CTAs

---

## 03. Design System

File:

```
docs/05-design-system.md
```

Defines:

- Colours
- Typography
- Components
- Layout
- Visual language

---

## 04. Development Rules

File:

```
docs/06-development-rules.md
```

Defines:

- Folder structure
- Coding standards
- Performance
- Accessibility
- Reusability

---

## 05. AI Development Playbook

File:

```
docs/07-claude-code-instructions.md
```

Defines:

- Development workflow
- Build sequence
- Decision-making rules
- AI behaviour

---

## 06. Launch Checklist

File:

```
docs/08-launch-checklist.md
```

Defines:

- Quality assurance
- Testing
- Deployment
- Launch readiness

---

## 07. Content Library

File:

```
docs/09-content-library.md
```

Defines:

- Approved marketing copy
- Headlines
- CTAs
- Meta descriptions
- Standard messaging

---

# V1 Development Roadmap

The Budding Voice website follows a structured 15-phase development roadmap. Phases 1–3 are **COMPLETE**. Phases 4–15 constitute the V1 scope. Phases 6, 8, and 9 are **DEFERRED** to future versions.

## Completed Phases

### Phase 1 — Initial Setup
**Status: COMPLETE**

- Project initialization
- Tooling configuration (TypeScript, ESLint, Tailwind, Next.js)
- Theme and design token setup
- Global layout components

### Phase 2 — Global Layout & Navigation
**Status: COMPLETE**

- Navbar (desktop/mobile responsive)
- Footer with links and social media
- Shared button components (primary, secondary, tertiary)
- Card components
- Layout infrastructure

### Phase 3 — Homepage Implementation
**Status: COMPLETE**

- Hero section with headline and CTAs
- "Does Your Child..." parent pain-point section
- "Why Budding Voice" benefits section
- Programme cards (Kaizen, Orator, Apex)
- Learning philosophy section
- Testimonials section
- Final CTA section
- **Important:** Phase 3 completion means the homepage is **functionally implemented**. It does **NOT** mean the website is visually launch-ready (visual assets and polish are in later phases).

---

## Upcoming Phases (V1 Scope)

### Phase 4 — About Page + Visual Assets Integration
**Status: NEXT**

- About page with mission/vision/values
- Team/coach bios (if applicable)
- Integration of Budding Voice photography
- Image optimization and alt text
- Visual polish to homepage

### Phase 5 — Programmes Detail Pages
**Status: V1**

- Kaizen detail page (4–7 years)
- Orator detail page (8–12 years)
- Apex detail page (13–17 years)
- Programme-specific CTAs and imagery

### Phase 6 — Schools/Corporate Pages
**Status: DEFERRED** (not V1)

- Schools partnership page
- Corporate training page
- Partnership inquiry forms
- Custom quotes/proposals workflow

**Rationale:** While valuable, these pages are deferred to focus V1 on the core parent/student audience. School and corporate partnerships can be supported via contact forms during V1.

### Phase 7 — Testimonials Page
**Status: V1**

- Dedicated testimonials/case studies page
- Testimonial filtering by programme
- Video testimonials (if available)
- Trust-building content

### Phase 8 — Resources/Blog
**Status: DEFERRED** (not V1)

- Blog/resources infrastructure
- Educational articles
- Parenting tips
- Leadership resources

**Rationale:** Blog infrastructure is deferred. However, static informational content needed for the V1 website (e.g., FAQ, learning resources) may still be created.

### Phase 9 — Contact Form
**Status: DEFERRED** (not V1)

- Dedicated contact page with form
- Form validation
- Email notification system
- Success/error handling

**Important:** While a dedicated contact form is deferred, V1 **must** provide a simple, accessible way for visitors to take action (via WhatsApp button, email link, or external contact mechanism).

### Phase 10 — SEO & Metadata
**Status: V1**

- Meta titles and descriptions for all pages
- Open Graph tags
- Canonical URLs
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration

### Phase 11 — Performance Optimization
**Status: V1**

- Image optimization and lazy-loading
- Font optimization
- Code splitting and bundling optimization
- Lighthouse score target: 90+
- Core Web Vitals optimization

### Phase 12 — Accessibility Polish
**Status: V1**

- WCAG AA compliance audit
- Keyboard navigation verification
- Focus state refinement
- Contrast ratio compliance (already addressed in Phase 3)
- Semantic HTML verification
- Screen reader testing

### Phase 13 — Final Visual Polish
**Status: V1**

Comprehensive visual and UX evaluation including:

- Visual hierarchy and information architecture
- Typography consistency and readability
- Spacing and layout rhythm
- Responsive behaviour across all breakpoints
- Image quality and composition
- Colour consistency and branding
- Trust signals and credibility markers
- Conversion funnel clarity
- Emotional positioning and brand perception
- Professional appearance and premium feel
- Overall coherence and polish

### Phase 14 — Testing & QA
**Status: V1**

- Functional testing (navigation, links, forms)
- Responsive testing (mobile, tablet, desktop)
- Browser compatibility (Chrome, Safari, Firefox, Edge)
- Visual regression testing
- Accessibility testing
- Performance testing
- Error state handling
- Cross-device verification

### Phase 15 — Pre-Launch Review
**Status: V1** (Final Gate)

**Objective:** Final decision point. Is this website genuinely ready for public viewing?

Verification checklist:

- All content is accurate, approved, and complete
- All pages are responsive and accessible
- Visual design is professional and on-brand
- Performance meets Lighthouse targets
- SEO is configured
- Analytics are set up
- All links work
- No unfinished placeholders remain
- All team approvals are obtained

**Decision:** Approve for public launch OR identify remaining work.

---

# Quality Standards — Distinguishing "Done"

It is critical to understand that early phases may achieve **functional completion** without being **launch-ready**. These are different standards:

## Functional Done
- The feature works technically.
- The code is correct.
- The component renders without errors.
- Basic functionality is present.

**Example:** Homepage has a "Book a Trial Class" button that links to /contact. ✓ Functional.

## Product Done
- The feature communicates its intended value clearly to the visitor.
- The content is complete and approved.
- The experience is intuitive.
- The call-to-action is clear.

**Example:** "Book a Trial Class" button is visually prominent, has supporting context, and clearly invites action. ✓ Product-ready.

## Launch Done
- The feature is polished and professional.
- Visual design is consistent with brand.
- Responsive behaviour is correct across all devices.
- Accessibility standards are met.
- Performance is optimized.
- The feature builds trust and credibility.

**Example:** "Book a Trial Class" button has proper contrast, responsive sizing, hover states, is keyboard-accessible, and the entire page conveys professionalism and trust. ✓ Launch-ready.

**Principle:** Early phases (1–3) may achieve Functional Done without being Launch Done. By Phase 13–15, the website must meet the Launch Done standard across all features.

---

# V1 Launch Readiness Criteria

A new visitor who has never heard of Budding Voice should be able to understand **within approximately 30–60 seconds**:

1. **What Budding Voice is** — A Communication & Leadership Centre (not a tuition centre or public speaking academy)
2. **Who Budding Voice serves** — Children aged 4–17, and potentially schools/organizations
3. **What programmes/services are offered** — Kaizen, Orator, Apex (by age group)
4. **Why Budding Voice is credible and trustworthy** — Through testimonials, clear methodology, professional presentation
5. **What action the visitor should take next** — Book a trial class, contact via WhatsApp, or explore programmes

## Appropriate For

The website must be professional and appropriate for the following audiences:

- Parents of children aged 4–17
- Teenagers and students
- Potential school partners
- Potential corporate/organizational partners
- General visitors discovering Budding Voice for the first time

## Launch Standard

**"Technically complete" is NOT sufficient for launch.**

By Phase 15, the website must demonstrate:

- Professional visual design
- Clear, credible messaging
- Responsive behaviour on all devices
- Accessibility compliance
- Performance optimization
- Trust and credibility signals
- Clear conversion path
- No unfinished or placeholder content

---

# Development Workflow & Review Gates

Development must follow this disciplined workflow for every phase:

## Gate 1 — Build
- Implement only the current phase's approved scope.
- Do not expand scope without explicit approval.
- Follow the Design System and approved Content Library.
- Write clean, maintainable code.

## Gate 2 — Review
- Run appropriate review skill(s) based on the change type.
- Use judgment; do not automatically run every skill.
- **Available review skills:**
  - **Architecture Review** — For structural/architectural changes
  - **Code Review** — For significant implementation work
  - **UI/UX Review** — For UI-heavy changes and user-facing features
  - **Debugging Review** — For identified bugs or issues

- **Examples:**
  - Homepage update → Run UI/UX Review
  - New component structure → Run Architecture Review + Code Review
  - Bug fix → Run Debugging Review
  - SEO implementation → Run Code Review

## Gate 3 — Fix
- Resolve all issues identified during the review.
- Do not proceed until issues are addressed.

## Gate 4 — Acceptance
- Verify the phase meets its acceptance criteria (documented in each phase).
- Confirm scope has not been exceeded.
- Confirm the phase is "launch-ready" for the current standard (not just "functionally done").

## Gate 5 — Proceed
- Only after acceptance should development move to the next phase.
- Document completion in this roadmap.

---

# Scope Control Rules

This roadmap is the **authoritative V1 scope** for the Budding Voice website.

**Claude must NOT:**
- Revert to any previous roadmap found in another document without explicit approval.
- Automatically implement deferred Phases 6, 8, or 9.
- Introduce new major features simply because they appear useful.
- Expand V1 scope without explicit approval from the project owner.
- Skip phases or rearrange the sequence without approval.

**Scope management:**
- If another documentation file conflicts with this roadmap, flag the conflict and request clarification.
- The project has one authoritative roadmap (this document).
- New scope may only be introduced when explicitly approved.

---

# Future Enhancement Backlog

The following features are **not** part of V1 scope but are candidates for future development:

## Phase 6 — Schools/Corporate Pages (Deferred)
- Dedicated schools partnership page
- Corporate training/workshops page
- School inquiry form
- Corporate quote request form
- Custom partnership workflows

## Phase 8 — Resources/Blog (Deferred)
- Blog/resource center infrastructure
- Educational articles and guides
- Leadership resources
- Parenting tips and insights
- Downloadable materials

## Phase 9 — Contact Form (Deferred)
- Dedicated contact page
- Email-based contact form
- Form validation and submission
- Email notification system
- Success/error pages

## Future Enhancements (To Be Determined)
- Member login/dashboard
- Online class booking system
- Payment integration
- Advanced analytics
- Email campaigns
- SMS notifications
- Social media integration
- Video hosting
- Third-party integrations

---

---

# When Requirements Conflict

If two documents appear to conflict, follow this order of precedence:

1. Website Product Specification
2. Website Content Blueprint
3. Design System
4. Development Rules
5. AI Development Playbook
6. Content Library
7. Launch Checklist

If the conflict cannot be resolved, stop and request clarification before implementation.

---

# Definition of Success

The website is successful when a first-time visitor can answer these questions within 30 seconds:

- What is Budding Voice?
- Who are the programmes for?
- Why should I trust Budding Voice?
- Which programme is suitable for me or my child?
- How do I get started?

The website should encourage visitors to take the next step by contacting Budding Voice or booking a trial class.

---

# Current Project Status

Current Phase:

**Development Ready**

Documentation Status:

- ✅ Product Specification
- ✅ Content Blueprint
- ✅ Design System
- ✅ Development Rules
- ✅ AI Development Playbook
- ✅ Launch Checklist
- ✅ Content Library

Next Step:

Review the documentation, initialise the project, and begin implementation following the defined development workflow.