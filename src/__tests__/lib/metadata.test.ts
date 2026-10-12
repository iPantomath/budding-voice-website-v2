import { generatePageMetadata, generateStructuredData } from "@/lib/metadata";
import { z } from "zod";

describe("generatePageMetadata", () => {
  it("generates valid metadata with required fields", () => {
    const meta = generatePageMetadata({
      title: "About Us",
      description: "Learn more about Budding Voice and our mission to help children grow with confidence and discover their unique voice through our programs.",
    });

    expect(meta.title).toBe("About Us | Budding Voice");
    expect(meta.keywords).toContain("communication");
    expect(meta.keywords).toContain("leadership");
  });

  it("generates correct canonical URL with path", () => {
    const meta = generatePageMetadata({
      title: "Programmes",
      description: "Explore our communication and leadership programmes designed for all ages and skill levels with personalized guidance and support.",
      path: "/programmes",
    });

    expect(meta.alternates?.canonical).toBe("https://budding-voice.com/programmes");
  });

  it("generates Open Graph metadata with image", () => {
    const meta = generatePageMetadata({
      title: "Home",
      description: "Welcome to Budding Voice, a Communication & Leadership Centre helping children discover their voice and grow with confidence and purpose.",
      image: "https://budding-voice.com/og-home.png",
    });

    expect(meta.openGraph?.images).toEqual([
      { url: "https://budding-voice.com/og-home.png", alt: "Home" },
    ]);
  });

  it("throws Zod error if title is too long", () => {
    expect(() => {
      generatePageMetadata({
        title: "a".repeat(100),
        description: "Valid description that is between 120 and 160 characters for SEO purposes and quality content for our communication centre.",
      });
    }).toThrow(z.ZodError);
  });

  it("throws Zod error if description is too short", () => {
    expect(() => {
      generatePageMetadata({
        title: "Page",
        description: "Too short",
      });
    }).toThrow(z.ZodError);
  });

  it("throws Zod error if description contains HTML", () => {
    expect(() => {
      generatePageMetadata({
        title: "Page",
        description:
          "This is a valid description that contains HTML tags <script>alert(1)</script> somewhere here and everywhere now for testing purposes.",
      });
    }).toThrow(z.ZodError);
  });

  it("throws Zod error if path contains traversal", () => {
    expect(() => {
      generatePageMetadata({
        title: "Page",
        description: "This is a valid description with exactly the right length of characters for SEO tests and quality assurance.",
        path: "/../admin",
      });
    }).toThrow(z.ZodError);
  });

  it("throws Zod error if image is not a valid URL", () => {
    expect(() => {
      generatePageMetadata({
        title: "Page",
        description: "This is a valid description with exactly the right length of characters for SEO tests and quality assurance.",
        image: "not-a-url",
      });
    }).toThrow(z.ZodError);
  });

  it("handles optional fields gracefully", () => {
    const meta = generatePageMetadata({
      title: "Home",
      description: "Welcome to Budding Voice, a Communication & Leadership Centre helping children discover their voice and develop confidence.",
    });

    expect(meta.openGraph?.images).toEqual([]);
    expect(meta.twitter?.images).toEqual([]);
  });
});

describe("generateStructuredData", () => {
  it("generates valid JSON-LD for organization", () => {
    const data = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Budding Voice",
      url: "https://budding-voice.com",
    };

    const result = generateStructuredData(data);

    expect(result.__html).toContain("Budding Voice");
    expect(result.__html).toContain("Organization");
    expect(JSON.parse(result.__html)).toEqual(data);
  });

  it("throws error if data contains invalid types", () => {
    expect(() => {
      generateStructuredData({
        name: "Budding Voice",
        callback: () => {}, // Invalid: function
      });
    }).toThrow("invalid types");
  });

  it("handles nested objects correctly", () => {
    const data = {
      "@context": "https://schema.org",
      author: {
        "@type": "Person",
        name: "John Doe",
      },
    };

    const result = generateStructuredData(data);
    expect(JSON.parse(result.__html)).toEqual(data);
  });

  it("handles arrays correctly", () => {
    const data = {
      keywords: ["communication", "leadership", "education"],
      ages: [4, 5, 6, 7],
    };

    const result = generateStructuredData(data);
    expect(JSON.parse(result.__html)).toEqual(data);
  });

  it("throws error on nested objects with functions", () => {
    expect(() => {
      generateStructuredData({
        name: "Test",
        callback: () => {}, // Functions not allowed
      } as Record<string, unknown>);
    }).toThrow("invalid types");
  });

  it("handles deeply nested structures", () => {
    const data = {
      level1: {
        level2: {
          level3: {
            value: "deep value",
          },
        },
      },
    };

    const result = generateStructuredData(data);
    expect(JSON.parse(result.__html)).toEqual(data);
  });

  it("handles null and undefined in nested structures", () => {
    const data = {
      name: "Test",
      nullable: null,
      nested: {
        value: "test",
      },
    };

    const result = generateStructuredData(data);
    const parsed = JSON.parse(result.__html);
    expect(parsed.name).toBe("Test");
    expect(parsed.nullable).toBeNull();
    expect(parsed.nested.value).toBe("test");
  });
});
