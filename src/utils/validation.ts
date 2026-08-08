/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number format (basic international format)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

/**
 * Validate URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate that a value is a number within range
 */
export function isValidNumberRange(value: number, min: number, max: number): boolean {
  return !isNaN(value) && value >= min && value <= max;
}

/**
 * Validate that a string is not empty and meets length requirements
 */
export function isValidString(value: string, minLength: number = 1, maxLength: number = 1000): boolean {
  if (typeof value !== "string") return false;
  const length = value.trim().length;
  return length >= minLength && length <= maxLength;
}

/**
 * Sanitize user input to prevent XSS
 */
export function sanitizeInput(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

/**
 * Validate age range (for children programmes)
 */
export function isValidChildAge(age: number): boolean {
  return isValidNumberRange(age, 4, 18);
}

/**
 * Validate contact form data
 */
export function validateContactForm(data: Record<string, unknown>): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!isValidString(data.name as string, 2, 100)) {
    errors.name = "Name must be between 2 and 100 characters";
  }

  if (!isValidEmail(data.email as string)) {
    errors.email = "Please enter a valid email address";
  }

  if (!isValidPhone(data.phone as string)) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!isValidString(data.message as string, 10, 1000)) {
    errors.message = "Message must be between 10 and 1000 characters";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validate trial class booking form data
 */
export function validateTrialClassForm(data: Record<string, unknown>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!isValidString(data.childName as string, 2, 100)) {
    errors.childName = "Child's name must be between 2 and 100 characters";
  }

  if (!isValidChildAge(data.childAge as number)) {
    errors.childAge = "Child's age must be between 4 and 18 years";
  }

  if (!isValidString(data.parentName as string, 2, 100)) {
    errors.parentName = "Parent name must be between 2 and 100 characters";
  }

  if (!isValidEmail(data.parentEmail as string)) {
    errors.parentEmail = "Please enter a valid email address";
  }

  if (!isValidPhone(data.parentPhone as string)) {
    errors.parentPhone = "Please enter a valid phone number";
  }

  if (!data.selectedProgramme || typeof data.selectedProgramme !== "string") {
    errors.selectedProgramme = "Please select a programme";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
