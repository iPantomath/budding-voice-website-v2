# Budding Voice Website Product Specification (Version 1.0)

> **Project:** Budding Voice Official Website
>
> **Version:** 1.0
>
> **Status:** Approved for Development
>
> **Purpose:** This document defines the technical and functional requirements for building the Budding Voice website. It serves as the primary implementation guide for Claude Code and future developers.

---

# 1. Project Overview

## Vision

Build a modern, trustworthy and conversion-focused website that positions Budding Voice as a Communication & Leadership Centre rather than a traditional public speaking class.

The website should inspire confidence in parents, education partners and corporate clients while encouraging them to take action through trial class bookings or partnership enquiries.

---

## Primary Goals

- Build credibility
- Increase trial class enquiries
- Increase WhatsApp enquiries
- Explain Budding Voice clearly
- Showcase programmes
- Improve SEO visibility
- Support school partnerships
- Support corporate enquiries

---

## Success Criteria

The website is considered successful when it:

- Generates more qualified enquiries.
- Reduces repetitive questions from parents.
- Clearly explains Budding Voice's learning philosophy.
- Helps visitors quickly identify the appropriate programme.
- Encourages visitors to book a trial class.
- Positions Budding Voice as a premium Communication & Leadership Centre.

---

# 2. Target Audience

## Primary Audience

Parents with children aged 4–17 looking for communication, confidence and leadership development.

### Common Pain Points

- Child is shy.
- Child lacks confidence.
- Child struggles to communicate.
- Child memorises instead of understanding.
- Child avoids speaking.

---

## Secondary Audience

- Preschools
- Schools
- Tuition Centres
- Enrichment Centres

Looking for communication programmes and long-term partnerships.

---

## Tertiary Audience

- HR Departments
- Business Owners
- Corporate Teams

Looking for communication, leadership and presentation training.

---

# 3. Technology Stack

## Framework

- Next.js (App Router)
- React
- TypeScript

## Styling

- Tailwind CSS

## Animation

- Framer Motion

Animations should be subtle and professional.

Examples:

- Fade In
- Slide Up
- Scroll Reveal
- Hover Effects

Avoid excessive animation.

---

## Hosting

- Vercel

---

## Forms

Contact Form

Book Trial Form

Corporate Enquiry Form

School Partnership Form

---

## Analytics

- Google Analytics 4

---

## SEO

Use Next.js Metadata API.

Every page must include:

- Title
- Description
- Open Graph
- Twitter Card
- Canonical URL

---

# 4. Website Structure

```
Home

About

Programmes
    ├── Kaizen
    ├── Orator
    └── APEX

Schools & Partnerships

Corporate Training

Testimonials

Resources

Contact
```

---

# 5. Navigation

Desktop Navigation

- Sticky
- Transparent over hero
- Solid after scrolling

Menu

- Home
- About
- Programmes
- Schools
- Corporate
- Testimonials
- Resources
- Contact

---

Mobile Navigation

- Full-screen drawer
- Hamburger menu
- Sticky CTA
- Floating WhatsApp button

---

# 6. Homepage Specification

## Section 1

Hero Banner

Purpose:

Introduce Budding Voice.

Contains:

- Strong headline
- Supporting text
- Primary CTA
- Secondary CTA
- Background video or hero image

CTA

- Book Trial Class
- WhatsApp Us

---

## Section 2

Problem Statement

Highlight parent pain points.

Examples

- My child is shy.
- My child lacks confidence.
- My child cannot express ideas.

---

## Section 3

Brand Promise

Introduce Budding Voice.

Core message

Communication.

Confidence.

Character.

Connection.

---

## Section 4

Programmes by Age

Display:

- Kaizen
- Orator
- APEX

Each card links to its programme page.

---

## Section 5

Learning Philosophy

Explain:

- Experiential Learning
- Peer Learning
- Reflection
- Practice
- Facilitation

---

## Section 6

Why Budding Voice

Display differentiators.

Examples

- Small Class Sizes
- Real Speaking Opportunities
- Individual Feedback
- Activity-Based Learning
- Parent Collaboration

---

## Section 7

Student Journey

Simple timeline.

Example

Join

↓

Learn

↓

Practice

↓

Showcase

↓

Grow

---

## Section 8

Testimonials

Display

- Parent Reviews
- Student Reviews
- School Reviews

Video testimonials if available.

---

## Section 9

Partners

Display logos of:

- Schools
- Preschools
- Organisations

---

## Section 10

Final CTA

Large conversion section.

Primary CTA

Book Trial Class

Secondary CTA

WhatsApp Us

---

# 7. About Page

Sections

- Hero
- Our Story
- Mission
- Vision
- Core Values
- Learning Philosophy
- Meet the Coaches
- CTA

---

# 8. Programme Pages

Create individual pages for:

- Kaizen
- Orator
- APEX

Each page contains

## Hero

Programme Name

Target Age

CTA

---

## Problems We Solve

Explain challenges.

---

## Learning Outcomes

Explain transformation.

---

## Programme Structure

Duration

16 Weeks

Showcase

Activities

---

## Typical Activities

Examples

- Storytelling
- Games
- Presentations
- Team Activities
- Reflection

---

## Showcase

Explain the importance of the showcase.

---

## Testimonials

Relevant testimonials.

---

## FAQ

Common parent questions.

---

## CTA

Book Trial Class

---

# 9. Schools & Partnerships

Sections

- Hero
- Why Partner With Us
- Programme Types
- Partnership Process
- Benefits
- Testimonials
- Contact Form

---

# 10. Corporate Training

Sections

- Hero
- Services
- Training Areas
- Delivery Format
- Process
- Testimonials
- Contact Form

---

# 11. Testimonials Page

Display

Parent Testimonials

Student Stories

School Feedback

Corporate Feedback

Video Testimonials

---

# 12. Resources

Purpose

Improve SEO.

Publish articles related to

- Communication
- Leadership
- Parenting
- Public Speaking
- Confidence

Architecture should support future blogging.

---

# 13. Contact

Include

- Contact Form
- WhatsApp
- Email
- Phone
- Google Maps
- Operating Hours
- Social Media

---

# 14. Reusable Components

Create reusable React components.

Required

- Navbar
- Footer
- Hero
- CTA
- Programme Card
- Testimonial Card
- Coach Card
- FAQ
- Timeline
- Partner Logo Carousel
- Gallery Grid
- Section Title
- Button
- Card

---

# 15. Design System

Style

- Modern
- Warm
- Professional
- Premium
- Friendly

Avoid childish design.

---

Colours

Primary

- White

Secondary

- Black

Accent

- Orange

---

Typography

Modern Sans Serif.

Large readable headings.

Comfortable spacing.

---

Cards

Rounded corners.

Soft shadows.

Generous padding.

---

Photography

Only use authentic Budding Voice photos.

Avoid stock photography.

---

Animations

Use

- Fade
- Slide
- Hover
- Scroll Reveal

Keep animations subtle.

---

# 16. Mobile Requirements

Mobile-first.

Responsive.

Minimum tap size:

44px

Optimise

- Images
- Videos
- Navigation
- Typography

Floating WhatsApp button required.

---

# 17. SEO Requirements

Every page requires

- Meta Title
- Meta Description
- Open Graph Image
- Canonical URL
- Structured Heading Hierarchy

URLs should be clean.

Examples

```
/about

/programmes

/programmes/kaizen

/programmes/orator

/programmes/apex

/schools

/corporate

/contact
```

---

# 18. Performance

Target

Google Lighthouse

90+

Optimise

- Images
- Fonts
- JavaScript
- Lazy Loading

Use Next Image.

---

# 19. Accessibility

Meet WCAG AA where practical.

Requirements

- Keyboard navigation
- Alt text
- Colour contrast
- ARIA labels
- Semantic HTML

---

# 20. Future Enhancements

Not included in Version 1.

- Online Booking
- Online Payment
- Student Portal
- Parent Dashboard
- Newsletter
- Multi-language
- LMS Integration
- Event Registration
- Coach Portal

---

# 21. Acceptance Criteria

The website is complete when:

- All pages are implemented.
- Mobile responsive.
- Desktop responsive.
- Forms functional.
- WhatsApp CTA operational.
- SEO metadata implemented.
- Images optimised.
- Lighthouse score above 90.
- Deployed to Vercel.
- Matches Budding Voice branding and strategy documents.

---

# Development Principles

Claude Code should prioritise:

1. Simplicity over complexity.
2. Fast loading over excessive animations.
3. Mobile-first design.
4. Clear calls-to-action on every page.
5. Authentic Budding Voice branding.
6. Reusable components.
7. Scalable architecture.
8. Maintainable code.
9. Accessibility.
10. SEO best practices.

This website should feel modern, trustworthy, welcoming and premium while remaining simple to navigate and easy to maintain.