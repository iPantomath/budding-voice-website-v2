# CLAUDE.md

# Budding Voice Website

Welcome to the Budding Voice website project.

This repository contains the official website for Budding Voice, a Communication & Leadership Centre based in Malaysia.

Before making any changes, always read the project documentation under `/docs`.

---

# Documentation Order

Read these documents before implementing features.

1. docs/03-website-product-specification.md
2. docs/04-website-content-blueprint.md
3. docs/05-design-system.md
4. docs/06-development-rules.md
5. docs/07-claude-code-instructions.md
6. docs/08-launch-checklist.md

These documents are the single source of truth.

Do not contradict them.

---

# Project Mission

Build a modern, responsive, premium website that helps Budding Voice:

- Build trust
- Generate enquiries
- Increase trial class bookings
- Attract school partnerships
- Support corporate training enquiries

The website should represent Budding Voice as a Communication & Leadership Centre.

---

# Tech Stack

Framework

- Next.js (App Router)
- React
- TypeScript

Styling

- Tailwind CSS

Animations

- Framer Motion

Deployment

- Vercel

Package Manager

- pnpm

Icons

- Lucide React

Images

- Next/Image

Forms

- React Hook Form
- Zod

---

# Engineering Principles

Always prefer

- Clean code
- Reusable components
- Maintainable architecture
- Type safety
- Accessibility
- Performance

Avoid

- Over-engineering
- Large components
- Duplicated code
- Hardcoded values
- Unnecessary dependencies

---

# Project Priorities

Priority order

1. Functionality
2. Responsive Design
3. Accessibility
4. SEO
5. Performance
6. Visual Polish

---

# Folder Structure

Follow this structure.

```
app/
components/
hooks/
lib/
types/
utils/
constants/
styles/
public/
docs/
```

Do not introduce unnecessary folders.

---

# Design Guidelines

The website should feel

- Modern
- Warm
- Professional
- Premium
- Friendly

Avoid

- Childish UI
- Generic templates
- Corporate styling
- Overly colourful designs

---

# Responsive Design

Build mobile first.

Support

- Mobile
- Tablet
- Laptop
- Desktop

Test every page responsively.

---

# Components

Create reusable components whenever possible.

Expected components include

- Navbar
- Footer
- Hero
- CTA
- ProgrammeCard
- CoachCard
- TestimonialCard
- FAQ
- Timeline
- Gallery
- ContactForm
- Button

Avoid page-specific implementations unless required.

---

# Content Rules

Use the content provided in the documentation.

Do not invent marketing copy.

Do not rewrite the business positioning.

If content is unavailable,

create a clearly labelled placeholder.

---

# Images

Always use authentic Budding Voice images.

Never use stock photography.

If assets are unavailable,

create placeholders with descriptive filenames.

Example

```
hero.jpg

coach-alfred.jpg

student-showcase.jpg
```

---

# Forms

Forms should

- Validate inputs
- Display friendly errors
- Show loading states
- Confirm successful submissions

Only request necessary information.

---

# Animation

Use subtle animation.

Allowed

- Fade
- Slide
- Hover
- Scroll Reveal

Avoid distracting effects.

---

# SEO

Every page should include

- Metadata
- Description
- Open Graph
- Canonical URL
- Proper heading hierarchy

Use clean URLs.

---

# Accessibility

Follow WCAG AA where practical.

Include

- Semantic HTML
- Keyboard navigation
- Alt text
- Focus states
- Colour contrast

---

# Performance

Target

Google Lighthouse 90+

Optimise

- Images
- Fonts
- JavaScript
- Layout Shift

Use lazy loading.

---

# Code Quality

TypeScript strict mode.

Avoid

- any
- duplicated logic
- inline styles
- unnecessary comments

Prefer readable code over clever code.

---

# Git Workflow

Recommended commit order

1. Initial Setup
2. Global Layout
3. Navigation
4. Homepage
5. About
6. Programmes
7. Schools
8. Corporate
9. Testimonials
10. Resources
11. Contact
12. SEO
13. Performance
14. Accessibility
15. Final Polish

Each commit should leave the project in a working state.

---

# Before Completing Any Task

Confirm

- Builds successfully
- No TypeScript errors
- No ESLint errors
- Responsive
- Accessible
- SEO implemented
- Reusable components
- Performance maintained

---

# When Unsure

If a requirement is unclear,

consult the documentation before making assumptions.

If documentation does not specify an implementation,

choose the simplest solution that aligns with the Budding Voice brand.

---

# Definition of Success

A visitor should be able to answer these questions within 30 seconds:

- What is Budding Voice?
- Who is it for?
- Why should I trust them?
- Which programme is right for me?
- How do I contact them?

If the website achieves this clearly and professionally, the implementation is successful.

---

# Final Reminder

This is not a portfolio website.

This is a business website designed to generate enquiries and build trust.

Every design decision, component and interaction should contribute towards helping visitors understand Budding Voice and confidently take the next step.