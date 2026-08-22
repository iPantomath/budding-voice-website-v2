import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components/layout";
import { generateStructuredData } from "@/lib/metadata";
import { SITE_CONFIG } from "@/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans-serif",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
  ],
};

export const metadata: Metadata = {
  title: "Budding Voice | Communication & Leadership Centre",
  description:
    "Budding Voice is a Communication & Leadership Centre helping students discover their voice, build confidence, and grow with purpose.",
  keywords: [
    "communication",
    "leadership",
    "education",
    "public speaking",
    "confidence building",
    "Malaysia",
  ],
  authors: [{ name: "Budding Voice" }],
  creator: "Budding Voice",
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://budding-voice.com",
    siteName: "Budding Voice",
    title: "Budding Voice | Communication & Leadership Centre",
    description:
      "Budding Voice is a Communication & Leadership Centre helping students discover their voice, build confidence, and grow with purpose.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Budding Voice | Communication & Leadership Centre",
    description:
      "Budding Voice is a Communication & Leadership Centre helping students discover their voice, build confidence, and grow with purpose.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://budding-voice.com",
  },
  verification: {
    google: "[PLACEHOLDER: Google Search Console Verification Code]",
  },
};

/**
 * Logo and sameAs (social profile URLs) are intentionally omitted.
 * No logo asset exists in /public yet (pending Phase 4 visual assets), and
 * business-questionnaire.md marks all social URLs as unconfirmed ("TBC").
 * Adding either would assert unverified identity claims in machine-readable
 * data. Add them once real values are confirmed.
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: ["en", "ms"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "MY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={generateStructuredData(organizationSchema)}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans-serif">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
