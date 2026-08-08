import { COACHES, PROGRAMMES, TESTIMONIALS } from "@/constants/content";
import type { Coach, Programme, Testimonial } from "@/types";
import { classifyError, logError, type AppError } from "@/lib/errorHandler";

/**
 * API Response wrapper for consistent error handling
 */
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: AppError;
}

/**
 * BuddingVoiceAPI - Abstraction layer for all data fetching
 *
 * Currently uses static content constants.
 * When CMS integration happens, replace data sources without changing client code.
 *
 * TODO: Phase 3 CMS Integration
 * - Replace constant returns with actual API calls
 * - Implement fetch() method with baseUrl and apiVersion
 * - Add retry logic and caching strategy
 * - Add error recovery and fallback mechanisms
 *
 * Usage:
 *   const api = new BuddingVoiceAPI();
 *   const programmes = await api.getProgrammes();
 */
export class BuddingVoiceAPI {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.buddingvoice.com";
  }

  /**
   * Get all programmes
   */
  async getProgrammes(): Promise<Programme[]> {
    return Promise.resolve(Object.values(PROGRAMMES));
  }

  /**
   * Get a specific programme by ID
   */
  async getProgrammeById(id: string): Promise<Programme | null> {
    return Promise.resolve(PROGRAMMES[id] || null);
  }

  /**
   * Get all coaches
   */
  async getCoaches(): Promise<Coach[]> {
    return Promise.resolve(Object.values(COACHES));
  }

  /**
   * Get a specific coach by ID
   */
  async getCoachById(id: string): Promise<Coach | null> {
    return Promise.resolve(COACHES[id] || null);
  }

  /**
   * Get all testimonials
   */
  async getTestimonials(): Promise<Testimonial[]> {
    return Promise.resolve(TESTIMONIALS);
  }

  /**
   * Get testimonials for a specific programme
   */
  async getTestimonialsByProgramme(programmeId: string): Promise<Testimonial[]> {
    return Promise.resolve(
      TESTIMONIALS.filter((t) => t.id.includes(programmeId))
    );
  }

  /**
   * Submit trial class booking form
   */
  async submitTrialClassBooking(data: Record<string, unknown>): Promise<APIResponse<{ success: true; message: string }>> {
    try {
      if (!data.parentEmail || !data.childName) {
        const error = classifyError(new Error("Missing required fields"));
        return { success: false, error };
      }

      return Promise.resolve({
        success: true,
        data: { success: true, message: "Booking submitted successfully" },
      });
    } catch (err) {
      const error = classifyError(err);
      logError(error);
      return { success: false, error };
    }
  }

  /**
   * Submit contact form
   */
  async submitContactForm(data: Record<string, unknown>): Promise<APIResponse<{ success: true; message: string }>> {
    try {
      if (!data.email || !data.message) {
        const error = classifyError(new Error("Missing required fields"));
        return { success: false, error };
      }

      return Promise.resolve({
        success: true,
        data: { success: true, message: "Message sent successfully" },
      });
    } catch (err) {
      const error = classifyError(err);
      logError(error);
      return { success: false, error };
    }
  }

}

/**
 * Singleton instance for use throughout the application
 */
export const api = new BuddingVoiceAPI();

/**
 * Export API type for type safety
 */
export type { BuddingVoiceAPI as BuddingVoiceAPIType };
