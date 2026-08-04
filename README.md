# Budding Voice Website

The official website for **Budding Voice**, a Communication & Leadership Centre in Malaysia dedicated to helping children, teenagers and adults develop confidence, communication and leadership skills through experiential learning.

---

# Project Overview

This project aims to build a modern, responsive and SEO-friendly website that:

* Builds trust with parents and education partners.
* Showcases Budding Voice programmes.
* Generates trial class and WhatsApp enquiries.
* Supports school partnership enquiries.
* Supports corporate training enquiries.
* Establishes Budding Voice as a premium Communication & Leadership Centre.

The website is designed with a mobile-first approach and prioritises performance, accessibility and maintainability.

---

# Technology Stack

## Framework

* Next.js (App Router)
* React
* TypeScript

## Styling

* Tailwind CSS

## Animation

* Framer Motion

## Forms

* React Hook Form
* Zod

## Icons

* Lucide React

## Image Optimisation

* Next/Image

## Deployment

* Vercel

## Package Manager

* pnpm

---

# Project Structure

```text
.
├── app/
├── components/
├── hooks/
├── lib/
├── types/
├── utils/
├── constants/
├── styles/
├── public/
│   ├── images/
│   ├── videos/
│   ├── logos/
│   ├── icons/
│   └── downloads/
├── docs/
│   ├── project-overview.md
│   ├── website-product-specification.md
│   ├── website-content-blueprint.md
│   ├── design-system.md
│   ├── development-rules.md
│   ├── ai-development-playbook.md
│   ├── launch-checklist.md
│   ├── content-library.md
│   └── assets-inventory.md
├── CLAUDE.md
├── README.md
├── package.json
└── ...
```

---

# Documentation

The project documentation serves as the source of truth for development.

| Document                           | Purpose                                                    |
| ---------------------------------- | ---------------------------------------------------------- |
| `project-overview.md`              | High-level project summary, goals and development workflow |
| `website-product-specification.md` | Functional and technical requirements                      |
| `website-content-blueprint.md`     | Page structure, navigation and content organisation        |
| `design-system.md`                 | Visual identity, UI patterns and design guidelines         |
| `development-rules.md`             | Coding standards, architecture and engineering practices   |
| `ai-development-playbook.md`       | Instructions for AI-assisted development                   |
| `launch-checklist.md`              | Pre-launch validation and quality assurance                |
| `content-library.md`               | Approved website copy and messaging                        |
| `assets-inventory.md`              | Asset catalogue and usage reference                        |

---

# AI Development

This repository is designed for AI-assisted development.

Before making any code changes, AI assistants should read:

1. `CLAUDE.md`
2. `docs/project-overview.md`
3. All documentation referenced within the project overview.

These documents define the project's business goals, architecture, design principles and implementation standards.

---

# Getting Started

## Prerequisites

Install the following tools:

* Node.js (LTS)
* pnpm
* Git

---

## Installation

Clone the repository.

```bash
git clone <repository-url>
```

Navigate into the project.

```bash
cd budding-voice
```

Install dependencies.

```bash
pnpm install
```

Start the development server.

```bash
pnpm dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

# Available Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `pnpm dev`        | Start the development server                 |
| `pnpm build`      | Build the production application             |
| `pnpm start`      | Run the production build locally             |
| `pnpm lint`       | Run linting checks                           |
| `pnpm type-check` | Run TypeScript type checking (if configured) |

---

# Development Principles

The project follows these core principles:

* Mobile-first design
* Component reusability
* Clean architecture
* Type safety
* Accessibility
* Performance
* SEO best practices
* Maintainable code

When in doubt, prefer simplicity over complexity.

---

# Design Principles

The website should feel:

* Modern
* Professional
* Warm
* Friendly
* Premium
* Authentic

The website should **not** resemble:

* A tuition centre
* A kindergarten website
* A corporate consultancy
* A generic website template

---

# Deployment

The website is intended to be deployed on **Vercel**.

Typical deployment workflow:

1. Push changes to the Git repository.
2. Vercel builds the project automatically.
3. Verify the deployment.
4. Run the launch checklist.
5. Publish the updated website.

---

# Quality Standards

Before merging or deploying changes, ensure:

* Project builds successfully.
* No TypeScript errors.
* No linting errors.
* Responsive across target devices.
* Accessibility requirements are met.
* SEO metadata is implemented.
* Images are optimised.
* Reusable components are used wherever practical.

---

# Contributing

When contributing to this project:

1. Read the project documentation before making changes.
2. Follow the established design system.
3. Reuse existing components whenever possible.
4. Keep code clean, readable and maintainable.
5. Avoid unnecessary dependencies.
6. Test changes before committing.

---

# Versioning

This project follows iterative development.

Each milestone should leave the project in a working, deployable state.

---

# License

This project is the property of Budding Voice.

All content, branding and assets belong to Budding Voice unless otherwise stated.

---

# Contact

For questions regarding this project, please contact the Budding Voice project owner.

---

> **Mission:** Help every learner discover their voice, communicate with confidence and grow into a purposeful leader.
