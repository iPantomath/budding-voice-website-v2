import {
  isValidEmail,
  isValidPhone,
  isValidUrl,
  isValidNumberRange,
  isValidString,
  validateContactForm,
  validateTrialClassForm,
} from "@/utils/validation";

describe("Validation Utils", () => {
  describe("isValidEmail", () => {
    it("validates correct email formats", () => {
      expect(isValidEmail("test@example.com")).toBe(true);
      expect(isValidEmail("user.name@domain.co.uk")).toBe(true);
      expect(isValidEmail("hello+tag@example.com")).toBe(true);
    });

    it("rejects invalid email formats", () => {
      expect(isValidEmail("invalid-email")).toBe(false);
      expect(isValidEmail("@example.com")).toBe(false);
      expect(isValidEmail("user@")).toBe(false);
      expect(isValidEmail("")).toBe(false);
    });
  });

  describe("isValidPhone", () => {
    it("validates common phone formats", () => {
      expect(isValidPhone("(123) 456-7890")).toBe(true);
      expect(isValidPhone("123-456-7890")).toBe(true);
      expect(isValidPhone("1234567890")).toBe(true);
      expect(isValidPhone("+1 (123) 456-7890")).toBe(true);
    });

    it("rejects invalid phone formats", () => {
      expect(isValidPhone("123")).toBe(false);
      expect(isValidPhone("")).toBe(false);
      expect(isValidPhone("abc-def-ghij")).toBe(false);
    });
  });

  describe("isValidUrl", () => {
    it("validates correct URLs", () => {
      expect(isValidUrl("https://example.com")).toBe(true);
      expect(isValidUrl("http://example.com/path")).toBe(true);
      expect(isValidUrl("https://subdomain.example.co.uk")).toBe(true);
    });

    it("rejects invalid URLs", () => {
      expect(isValidUrl("not-a-url")).toBe(false);
      expect(isValidUrl("example.com")).toBe(false);
      expect(isValidUrl("")).toBe(false);
    });
  });

  describe("isValidNumberRange", () => {
    it("validates numbers within range", () => {
      expect(isValidNumberRange(5, 0, 10)).toBe(true);
      expect(isValidNumberRange(0, 0, 10)).toBe(true);
      expect(isValidNumberRange(10, 0, 10)).toBe(true);
    });

    it("rejects numbers outside range", () => {
      expect(isValidNumberRange(15, 0, 10)).toBe(false);
      expect(isValidNumberRange(-5, 0, 10)).toBe(false);
    });
  });

  describe("isValidString", () => {
    it("validates strings within length requirements", () => {
      expect(isValidString("hello", 1, 10)).toBe(true);
      expect(isValidString("test", 2, 10)).toBe(true);
    });

    it("rejects strings outside length requirements", () => {
      expect(isValidString("hi", 3, 10)).toBe(false);
      expect(isValidString("hello world test", 1, 10)).toBe(false);
      expect(isValidString("", 1, 10)).toBe(false);
    });
  });

  describe("validateContactForm", () => {
    it("validates correct form data", () => {
      const result = validateContactForm({
        name: "John Doe",
        email: "john@example.com",
        phone: "(123) 456-7890",
        message: "This is a valid message with sufficient length for testing.",
      });

      expect(result.valid).toBe(true);
      expect(Object.keys(result.errors)).toHaveLength(0);
    });

    it("validates required fields", () => {
      const result = validateContactForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      expect(result.valid).toBe(false);
      expect(result.errors.name).toBeDefined();
      expect(result.errors.email).toBeDefined();
      expect(result.errors.phone).toBeDefined();
      expect(result.errors.message).toBeDefined();
    });

    it("validates email format", () => {
      const result = validateContactForm({
        name: "John Doe",
        email: "invalid-email",
        phone: "(123) 456-7890",
        message: "This is a valid message with sufficient length for testing.",
      });

      expect(result.valid).toBe(false);
      expect(result.errors.email).toBeDefined();
    });
  });

  describe("validateTrialClassForm", () => {
    it("validates correct form data", () => {
      const result = validateTrialClassForm({
        childName: "Jane Doe",
        childAge: 7,
        parentName: "John Doe",
        parentEmail: "john@example.com",
        parentPhone: "(123) 456-7890",
        selectedProgramme: "kaizen",
      });

      expect(result.valid).toBe(true);
      expect(Object.keys(result.errors)).toHaveLength(0);
    });

    it("validates child age range", () => {
      const result = validateTrialClassForm({
        childName: "Jane Doe",
        childAge: 3,
        parentName: "John Doe",
        parentEmail: "john@example.com",
        parentPhone: "(123) 456-7890",
        selectedProgramme: "kaizen",
      });

      expect(result.valid).toBe(false);
      expect(result.errors.childAge).toBeDefined();
    });

    it("validates programme selection", () => {
      const result = validateTrialClassForm({
        childName: "Jane Doe",
        childAge: 7,
        parentName: "John Doe",
        parentEmail: "john@example.com",
        parentPhone: "(123) 456-7890",
        selectedProgramme: "",
      });

      expect(result.valid).toBe(false);
      expect(result.errors.selectedProgramme).toBeDefined();
    });
  });
});
