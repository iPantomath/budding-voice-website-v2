import { generatePageMetadata, generateStructuredData } from "@/lib/metadata";

describe("generatePageMetadata", () => {
  it("generates valid metadata with required fields", () => {
    const meta = generatePageMetadata({
      title: "About Us",
      description: "Learn more about Budding Voice and our mission to help children grow.",
    });

    expect(meta.title).toBe("About Us | Budding Voice");
    expect(meta.description).toBe("Learn more about Budding Voice and our mission to help children grow.");
    expect(meta.keywords).toContain("communication");
    expect(meta.keywords).toContain("leadership");
  });

  it("generates correct canonical URL with path", () => {
    const meta = generatePageMetadata({
      title: "Programmes",
      description: "Explore our communication and leadership programmes designed for all ages.",
      path: "/programmes",
    });

    expect(meta.alternates?.canonical).toBe("https://budding-voice.com/programmes");
  });

  it("generates Open Graph metadata with image", () => {
    const meta = generatePageMetadata({
      title: "Home",
      description: "Welcome to Budding Voice, a Communication & Leadership Centre.",
      image: "https://budding-voice.com/og-home.png",
    });

    expect(meta.openGraph?.images).toEqual([
      { url: "https://budding-voice.com/og-home.png", alt: "Home" },
    ]);
  });

  it("throws error if title is too long", () => {
    expect(() => {
      generatePageMetadata({
        title: "a".repeat(100),
        description: "Valid description that is between 120 and 160 characters for SEO purposes.",
      });
    }).toThrow("Title exceeds 60 characters");
  });

  it("throws error if description is too short", () => {
    expect(() => {
      generatePageMetadata({
        title: "Page",
        description: "Too short",
      });
    }).toThrow("Description must be 120-160 characters");
  });

  it("throws error if description contains HTML", () => {
    expect(() => {
      generatePageMetadata({
        title: "Page",
        description:
          "This is a valid description that contains HTML tags <script>alert(1)</script> somewhere.",
      });
    }).toThrow("Description cannot contain HTML tags");
  });

  it("throws error if path contains traversal", () => {
    expect(() => {
      generatePageMetadata({
        title: "Page",
        description: "This is a valid description between 120 and 160 characters for SEO tests.",
        path: "/../admin",
      });
    }).toThrow("Path must start with");
  });

  it("throws error if image is not a valid URL", () => {
    expect(() => {
      generatePageMetadata({
        title: "Page",
        description: "This is a valid description between 120 and 160 characters for SEO tests.",
        image: "not-a-url",
      });
    }).toThrow("Invalid image URL");
  });

  it("handles optional fields gracefully", () => {
    const meta = generatePageMetadata({
      title: "Home",
      description: "Welcome to Budding Voice, a Communication & Leadership Centre for children.",
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
});
