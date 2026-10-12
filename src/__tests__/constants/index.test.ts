import { SITE_CONFIG, COLORS, SPACING, NAVIGATION_ITEMS } from "@/constants";

describe("Constants", () => {
  describe("SITE_CONFIG", () => {
    it("contains required site configuration", () => {
      expect(SITE_CONFIG.name).toBe("Budding Voice");
      expect(SITE_CONFIG.url).toBeDefined();
      expect(SITE_CONFIG.locale).toBe("en_MY");
      expect(SITE_CONFIG.timezone).toBe("Asia/Kuala_Lumpur");
    });

    it("has valid URL format", () => {
      expect(SITE_CONFIG.url).toMatch(/^https?:\/\//);
    });
  });

  describe("COLORS", () => {
    it("has all required color definitions", () => {
      expect(COLORS.primary).toBe("#ff8c00");
      expect(COLORS.white).toBe("#ffffff");
      expect(COLORS.black).toBe("#000000");
      expect(COLORS.lightGrey).toBeDefined();
      expect(COLORS.darkGrey).toBeDefined();
      expect(COLORS.textPrimary).toBeDefined();
      expect(COLORS.textSecondary).toBeDefined();
    });

    it("colors are valid hex values", () => {
      const hexRegex = /^#[0-9A-F]{6}$/i;
      Object.values(COLORS).forEach((color) => {
        expect(color).toMatch(hexRegex);
      });
    });
  });

  describe("SPACING", () => {
    it("has all required spacing values", () => {
      expect(SPACING.xs).toBeDefined();
      expect(SPACING.sm).toBeDefined();
      expect(SPACING.md).toBeDefined();
      expect(SPACING.lg).toBeDefined();
      expect(SPACING.xl).toBeDefined();
      expect(SPACING["2xl"]).toBeDefined();
      expect(SPACING["3xl"]).toBeDefined();
    });

    it("spacing values are valid CSS units", () => {
      Object.values(SPACING).forEach((spacing) => {
        expect(spacing).toMatch(/^\d+\.?\d*(rem|px|em)$/);
      });
    });
  });

  describe("NAVIGATION_ITEMS", () => {
    it("contains expected navigation links", () => {
      expect(NAVIGATION_ITEMS.length).toBeGreaterThan(0);

      const labels = NAVIGATION_ITEMS.map((item) => item.label);
      expect(labels).toContain("Home");
      expect(labels).toContain("About");
      expect(labels).toContain("Programmes");
      expect(labels).toContain("Contact");
    });

    it("all navigation items have valid href", () => {
      NAVIGATION_ITEMS.forEach((item) => {
        expect(item.href).toMatch(/^\//);
      });
    });
  });
});
