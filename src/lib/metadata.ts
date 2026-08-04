import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";

interface PageMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = "",
  image,
}: PageMetadataProps): Metadata {
  const fullTitle = `${title} | ${SITE_CONFIG.name}`;
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      "communication",
      "leadership",
      "education",
      "Malaysia",
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    openGraph: {
      type: "website",
      locale: SITE_CONFIG.locale,
      url,
      siteName: SITE_CONFIG.name,
      title: fullTitle,
      description,
      images: image ? [{ url: image, alt: title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: image ? [image] : [],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateStructuredData(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data),
  };
}
