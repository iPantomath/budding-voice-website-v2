import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
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
      </head>
      <body className="flex min-h-screen flex-col font-sans-serif">{children}</body>
    </html>
  );
}
