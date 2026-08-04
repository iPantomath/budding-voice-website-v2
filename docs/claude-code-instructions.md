# Claude Code Development Instructions

> Project: Budding Voice Official Website
>
> Audience: Claude Code
>
> Purpose: This document defines how Claude Code should execute the implementation of the Budding Voice website using the accompanying project documentation.

---

# Mission

Your objective is to build a production-ready website for Budding Voice that reflects the organisation's mission of developing confident communicators and leaders.

The website must be:

- Professional
- Modern
- Fast
- Responsive
- SEO friendly
- Accessible
- Easy to maintain

The website should inspire trust rather than simply present information.

---

# Source Documents

Before implementing anything, read these documents in order.

1. Website Product Specification
2. Website Content Blueprint
3. Design System
4. Development Rules

Treat these documents as the project's source of truth.

Do not invent requirements that contradict these documents.

---

# Development Principles

When making implementation decisions, always prioritise the following order.

1. Correctness
2. Simplicity
3. Maintainability
4. Performance
5. Accessibility
6. Visual Polish

Avoid unnecessary complexity.

---

# Project Goal

The objective is not to build the most visually impressive website.

The objective is to build a website that converts visitors into enquiries while accurately representing the Budding Voice brand.

---

# General Rules

Always prefer:

- Reusable components
- Clean code
- Clear folder structure
- Readable implementation
- Type safety

Avoid:

- Over engineering
- Large monolithic components
- Duplicate layouts
- Duplicate styling
- Hardcoded values
- Unnecessary dependencies

---

# Design Expectations

Follow the Design System strictly.

If a design choice is unspecified:

Choose the option that is:

- Modern
- Minimal
- Professional
- Warm
- Consistent

Never make the website feel childish.

Never make the website look like a generic template.

---

# Responsive Behaviour

Design mobile-first.

Verify every page works correctly on:

- Mobile
- Tablet
- Laptop
- Desktop

Navigation should always remain usable.

---

# Performance Expectations

Optimise for:

- Fast First Load
- Lighthouse Score above 90
- Minimal JavaScript
- Image Optimisation
- Lazy Loading

Avoid unnecessary client-side rendering.

Prefer Server Components where appropriate.

---

# Accessibility Expectations

Every page should support:

- Keyboard navigation
- Semantic HTML
- Accessible labels
- Proper heading hierarchy
- High colour contrast

Accessibility is a requirement, not an enhancement.

---

# SEO Expectations

Every page should include:

- Metadata
- Meta Description
- Open Graph
- Canonical URL
- Structured headings

URLs should remain clean.

Example

/about

/programmes

/contact

Avoid unnecessary URL nesting.

---

# Component Expectations

Every reusable component should have one responsibility.

Examples include:

Navbar

Footer

Hero

Programme Card

CTA Section

Testimonial Card

Timeline

FAQ

Gallery

Button

Avoid page-specific components when a reusable component can be created.

---

# Content Handling

Use the Website Content Blueprint as the primary source.

Do not rewrite content unless necessary for implementation.

Do not invent marketing copy.

Do not generate placeholder text unless specifically marked.

If content is unavailable, create a clearly labelled placeholder for later replacement.

---

# Images

Use authentic Budding Voice images.

If assets are missing:

Create obvious placeholders with descriptive filenames.

Example

hero-classroom.jpg

coach-alfred.jpg

student-showcase.jpg

Do not use stock photos.

---

# Forms

Implement forms with validation.

Forms should include:

- Friendly error messages
- Success confirmation
- Loading states

Avoid excessive required fields.

---

# Animations

Animations should support usability.

Allowed:

- Fade
- Slide
- Hover Lift
- Scroll Reveal

Avoid decorative animations.

---

# Error Handling

Gracefully handle:

- Missing content
- Missing images
- Empty testimonials
- Form submission failures
- Slow network conditions

The user should never encounter an unhandled error.

---

# Folder Structure

Maintain a clean and scalable architecture.

Organise files into:

- app
- components
- hooks
- lib
- types
- utils
- constants
- styles
- public

Avoid deeply nested folders.

---

# Code Quality

Every implementation should:

- Use TypeScript
- Follow consistent naming
- Be self-documenting
- Be reusable
- Be readable

Prioritise clarity over cleverness.

---

# Git Commits

Organise work into logical milestones.

Recommended commit sequence:

1. Project Setup
2. Global Layout
3. Navigation
4. Homepage
5. About Page
6. Programme Pages
7. Schools
8. Corporate
9. Testimonials
10. Resources
11. Contact
12. SEO
13. Performance Optimisation
14. Accessibility
15. Final Polish

Each commit should represent a complete, working feature.

---

# Build Order

Implement the project in this sequence.

Phase 1

- Initialise project
- Configure dependencies
- Configure Tailwind
- Global layout

---

Phase 2

- Navigation
- Footer
- Shared Components

---

Phase 3

Homepage

---

Phase 4

About

Programmes

---

Phase 5

Schools

Corporate

---

Phase 6

Testimonials

Resources

Contact

---

Phase 7

SEO

Accessibility

Performance

Analytics

---

Phase 8

Testing

Final Polish

Deployment

---

# Testing Checklist

Before considering the website complete, verify:

Navigation works.

All links function.

Forms validate correctly.

Images load.

Responsive layout works.

Animations perform smoothly.

SEO metadata exists.

No console errors.

No TypeScript errors.

No ESLint errors.

Build succeeds.

---

# Deployment

Deploy to Vercel.

Verify:

HTTPS enabled.

Metadata generated.

Images optimised.

No broken routes.

404 page exists.

Favicon configured.

Robots.txt present.

Sitemap generated.

---

# Definition of Success

The project is successful when:

A new visitor can immediately understand what Budding Voice does.

Parents can identify the correct programme.

Schools understand partnership opportunities.

Corporate visitors understand available training.

Every page encourages a meaningful next step.

The website feels trustworthy, modern and professional.

---

# When Requirements Are Missing

If a requirement is not explicitly documented:

1. Check the Product Specification.
2. Check the Content Blueprint.
3. Check the Design System.
4. Check the Development Rules.

If still unspecified:

Choose the simplest implementation that aligns with the Budding Voice brand.

Avoid making assumptions that change business intent.

---

# Final Principle

This website is not a portfolio project.

It is a business asset.

Every design decision, every component and every interaction should contribute towards one objective:

Helping Budding Voice earn trust and encourage visitors to take the next step.