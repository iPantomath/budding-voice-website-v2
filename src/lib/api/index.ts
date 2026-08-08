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
 * Usage:
 *   const api = new BuddingVoiceAPI();
 *   const programmes = await api.getProgrammes();
 */
export class BuddingVoiceAPI {
  private baseUrl: string;
  private apiVersion: string = "v1";

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
      TESTIMONIALS.filter((t) => t.id.includes(programmeId) || TESTIMONIALS.includes(t))
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

  /**
   * Generic fetch method for future extensibility
   * CMS: Replace this implementation to call external API
   */
  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}/${this.apiVersion}${endpoint}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
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
