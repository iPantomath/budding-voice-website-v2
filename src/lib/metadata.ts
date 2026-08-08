import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";

interface PageMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
}

/**
 * Validate metadata input to prevent SEO issues and XSS vulnerabilities
 */
function validateMetadataInput(props: PageMetadataProps): void {
  const { title, description, path, image } = props;

  if (!title || title.trim().length === 0) {
    throw new Error("Metadata validation: Title is required and cannot be empty");
  }

  if (title.length > 60) {
    throw new Error(
      `Metadata validation: Title exceeds 60 characters (max for SEO). Got: ${title.length}`
    );
  }

  if (/<[^>]*>/.test(title)) {
    throw new Error("Metadata validation: Title cannot contain HTML tags");
  }

  if (!description || description.trim().length === 0) {
    throw new Error("Metadata validation: Description is required and cannot be empty");
  }

  if (description.length < 120 || description.length > 160) {
    throw new Error(
      `Metadata validation: Description must be 120-160 characters for SEO. Got: ${description.length}`
    );
  }

  if (/<[^>]*>/.test(description)) {
    throw new Error("Metadata validation: Description cannot contain HTML tags");
  }

  if (path && (!path.startsWith("/") || path.includes(".."))) {
    throw new Error(
      `Metadata validation: Path must start with "/" and not contain "..". Got: ${path}`
    );
  }

  if (image) {
    try {
      const url = new URL(image);
      if (!["https:", "http:"].includes(url.protocol)) {
        throw new Error("Metadata validation: Image must be an HTTP(S) URL");
      }
    } catch (err) {
      throw new Error(
        `Metadata validation: Invalid image URL. Must be absolute HTTP(S) URL. Got: ${image}`
      );
    }
  }
}

/**
 * Generates SEO metadata for a page with Open Graph and Twitter Card support
 *
 * @param title - Page title (max 60 chars, displayed in browser tab)
 * @param description - Meta description (120-160 chars recommended for SEO)
 * @param keywords - Additional keywords to supplement default set
 * @param path - URL path for canonical tag (e.g., "/programmes")
 * @param image - Open Graph image URL (must be absolute HTTPS URL)
 *
 * @returns Metadata object ready for Next.js export
 *
 * @throws Error if validation fails
 *
 * @example
 * export const metadata = generatePageMetadata({
 *   title: 'Our Programmes',
 *   description: 'Explore our communication programmes designed for children...',
 *   path: '/programmes',
 *   image: 'https://budding-voice.com/og-programmes.png',
 * });
 */
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = "",
  image,
}: PageMetadataProps): Metadata {
  validateMetadataInput({ title, description, keywords, path, image });

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

/**
 * Generates structured data (JSON-LD) for schema.org markup
 *
 * ⚠️ SECURITY: Only pass trusted data. All input should be validated
 * and sanitized before calling this function. Never pass user-submitted data directly.
 *
 * @param data - Structured data object to convert to JSON-LD
 *
 * @returns Object with __html property ready for Next.js dangerouslySetInnerHTML
 *
 * @throws Error if data contains invalid types
 */
export function generateStructuredData(data: Record<string, unknown>) {
  const validateStructured = (obj: unknown): boolean => {
    if (obj === null || obj === undefined) return true;

    const type = typeof obj;
    if (["string", "number", "boolean"].includes(type)) return true;

    if (Array.isArray(obj)) {
      return obj.every(validateStructured);
    }

    if (type === "object") {
      return Object.values(obj).every(validateStructured);
    }

    return false;
  };

  if (!validateStructured(data)) {
    throw new Error(
      "Structured data validation: Data contains invalid types (only strings, numbers, booleans, arrays, and objects allowed)"
    );
  }

  return {
    __html: JSON.stringify(data),
  };
}
