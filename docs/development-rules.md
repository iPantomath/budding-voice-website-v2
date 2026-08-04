# Budding Voice Website Development Rules (Version 1.0)

> Project: Budding Voice Official Website
>
> Purpose: Define the engineering standards, architecture, coding conventions and development practices for the Budding Voice website.

---

# Development Philosophy

The website should prioritise:

1. Simplicity
2. Maintainability
3. Performance
4. Accessibility
5. Scalability
6. SEO
7. Clean Code

Every implementation should favour long-term maintainability over clever code.

---

# Technology Stack

Framework

- Next.js (Latest Stable)
- React
- TypeScript

Styling

- Tailwind CSS

Animation

- Framer Motion

Deployment

- Vercel

Icons

- Lucide React

Forms

- React Hook Form
- Zod Validation

Images

- Next/Image

Package Manager

- pnpm

---

# Folder Structure

```
app/
    about/
    programmes/
        kaizen/
        orator/
        apex/
    schools/
    corporate/
    testimonials/
    resources/
    contact/

components/
    layout/
    navigation/
    hero/
    buttons/
    cards/
    forms/
    sections/
    testimonials/
    timeline/
    faq/
    gallery/

lib/
hooks/
types/
constants/
utils/
styles/
public/
docs/
```

---

# Component Rules

Each component should:

- Have one responsibility
- Be reusable
- Be typed
- Be composable
- Accept props
- Avoid duplicated code

Never create page-specific components unless absolutely necessary.

---

# Naming Convention

Components

```
Hero.tsx
ProgrammeCard.tsx
CoachCard.tsx
```

Pages

```
page.tsx
layout.tsx
loading.tsx
error.tsx
```

Utilities

```
formatDate.ts
generateSEO.ts
```

Hooks

```
useScroll.ts
useWindowSize.ts
```

---

# File Naming

Use PascalCase

```
HeroSection.tsx
ProgrammeGrid.tsx
```

Never use

```
hero.tsx

myComponent.tsx

component1.tsx
```

---

# Import Order

1. React
2. Next.js
3. Third-party libraries
4. Internal components
5. Hooks
6. Utilities
7. Types
8. Styles

---

# Styling Rules

Use Tailwind only.

Avoid inline styles.

Avoid custom CSS unless necessary.

Avoid !important.

Keep class names readable.

---

# Responsive Rules

Always build mobile first.

Support

Mobile

Tablet

Laptop

Desktop

Ultra-wide

Never create desktop-only layouts.

---

# Layout Rules

Maximum content width

1200px

Consistent padding

Consistent spacing

Large whitespace

No crowded layouts.

---

# Component Library

Required reusable components

Navbar

Footer

Hero

CTA

SectionTitle

ProgrammeCard

CoachCard

TestimonialCard

PartnerLogoGrid

Timeline

FAQAccordion

GalleryGrid

Button

Badge

StatCard

VideoCard

ContactForm

---

# Animation Rules

Use Framer Motion.

Allowed animations

Fade

Slide

Scale

Hover Lift

Scroll Reveal

Avoid

Bounce

Rotate

Long loading animations

Excessive parallax

Animation should support the content.

---

# Performance Rules

Target Lighthouse

90+

Optimise

Images

Fonts

JavaScript

Use lazy loading.

Use Next/Image.

Use dynamic imports when appropriate.

Avoid unnecessary dependencies.

---

# SEO Rules

Every page must include

Title

Description

Canonical URL

Open Graph

Twitter Card

Structured headings

Clean URLs

Internal links

Descriptive alt text

Schema markup where appropriate.

---

# Accessibility Rules

Use semantic HTML.

All buttons require accessible labels.

All images require alt text.

Maintain keyboard accessibility.

Visible focus states.

Sufficient colour contrast.

Target WCAG AA compliance.

---

# Form Rules

Validate all inputs.

Required fields only.

Display friendly error messages.

Prevent duplicate submissions.

Provide clear success feedback.

---

# Error Handling

Gracefully handle

Missing images

Broken links

Empty states

Form failures

Unexpected errors

Never expose technical errors to users.

---

# Image Rules

Use only authentic Budding Voice assets.

Optimise every image.

Use WebP where possible.

Lazy load non-critical images.

Provide descriptive alt text.

---

# Video Rules

Compress videos.

Autoplay only hero background videos.

Mute autoplay videos.

Lazy load embedded videos.

Avoid large video files.

---

# Content Rules

Never hardcode text directly inside components.

Store page content in structured data where practical.

Components should separate presentation from content.

---

# Reusability

If the same UI appears twice,

Create a reusable component.

Avoid duplicated layouts.

Avoid duplicated styles.

---

# State Management

Prefer local state.

Use Context only when necessary.

Avoid unnecessary global state.

Keep state close to where it is used.

---

# TypeScript

Strict mode enabled.

No use of `any`.

Create reusable types.

Type all component props.

---

# Code Quality

Readable code over clever code.

Short functions.

Meaningful variable names.

Meaningful component names.

Avoid deeply nested logic.

Prefer composition over inheritance.

---

# Security

Validate all form inputs.

Sanitise user input.

Do not expose secrets.

Use environment variables.

Protect API keys.

---

# Analytics

Track

Page Views

Trial Button Clicks

WhatsApp Clicks

Contact Form Submissions

Programme Page Visits

Scroll Depth

---

# Browser Support

Latest versions of

Chrome

Edge

Safari

Firefox

Responsive across modern mobile browsers.

---

# Deployment

Platform

Vercel

Environment

Production

Preview

Development

Use Git-based deployments.

---

# Documentation

Every major reusable component should include:

- Purpose
- Props
- Example usage

Document complex logic.

Avoid unnecessary comments.

---

# Code Review Checklist

Before considering a feature complete:

- Builds successfully
- No TypeScript errors
- No ESLint errors
- Mobile responsive
- Accessibility checked
- Images optimised
- SEO metadata added
- Performance acceptable
- Component reusable
- No duplicated code

---

# Definition of Done

A task is complete only if:

- Functionality works as intended.
- Responsive on all target devices.
- Meets design specifications.
- Passes accessibility checks.
- Meets performance targets.
- Uses reusable components.
- Code is clean and maintainable.
- Ready for deployment.

---

# Guiding Principle

Every implementation should answer:

- Is this simple?
- Is this reusable?
- Is this maintainable?
- Is this fast?
- Is this accessible?
- Is this aligned with the Budding Voice brand?

If the answer to any is "No", refactor before considering the task complete.