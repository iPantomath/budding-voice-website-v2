export type ErrorType = "network" | "validation" | "notfound" | "auth" | "unknown";
export type ErrorSeverity = "critical" | "warning" | "info";

export interface AppError {
  type: ErrorType;
  severity: ErrorSeverity;
  message: string;
  userMessage: string;
  statusCode?: number;
  originalError?: Error;
  timestamp: Date;
  context?: Record<string, unknown>;
}

/**
 * Classify an error into a typed AppError
 * Determines error type, severity, and user-friendly message
 */
export function classifyError(error: unknown, context?: Record<string, unknown>): AppError {
  const timestamp = new Date();

  if (error instanceof TypeError) {
    if (error.message.includes("fetch")) {
      return {
        type: "network",
        severity: "warning",
        message: "Network request failed",
        userMessage: "Connection error. Please check your internet and try again.",
        originalError: error,
        timestamp,
        context,
      };
    }

    return {
      type: "validation",
      severity: "warning",
      message: error.message,
      userMessage: "Invalid data provided. Please check your input.",
      originalError: error,
      timestamp,
      context,
    };
  }

  if (error instanceof Error) {
    if (error.message.includes("404") || error.message.includes("not found")) {
      return {
        type: "notfound",
        severity: "info",
        message: "Resource not found",
        userMessage: "The page or resource you're looking for doesn't exist.",
        originalError: error,
        timestamp,
        context,
      };
    }

    if (error.message.includes("401") || error.message.includes("unauthorized")) {
      return {
        type: "auth",
        severity: "warning",
        message: "Authentication failed",
        userMessage: "Please log in to continue.",
        originalError: error,
        timestamp,
        context,
      };
    }

    return {
      type: "unknown",
      severity: "critical",
      message: error.message,
      userMessage: "Something unexpected happened. Please try again later.",
      originalError: error,
      timestamp,
      context,
    };
  }

  return {
    type: "unknown",
    severity: "critical",
    message: "Unknown error occurred",
    userMessage: "Something went wrong. Please try again later.",
    timestamp,
    context,
  };
}

/**
 * Log error to console (development) or Sentry (production)
 */
export function logError(error: AppError): void {
  const isDevelopment = process.env.NODE_ENV === "development";

  if (isDevelopment) {
    console.error(`[${error.type.toUpperCase()}] ${error.message}`, {
      severity: error.severity,
      timestamp: error.timestamp.toISOString(),
      originalError: error.originalError,
      context: error.context,
    });
  }

  if (typeof window !== "undefined" && window.Sentry) {
    window.Sentry.captureException(error.originalError || new Error(error.message), {
      level: error.severity === "critical" ? "error" : "warning",
      tags: {
        errorType: error.type,
      },
      contexts: {
        app: error.context,
      },
    });
  }
}

/**
 * Handle async errors with automatic classification and logging
 */
export async function handleAsync<T>(
  promise: Promise<T>,
  context?: Record<string, unknown>
): Promise<{ success: true; data: T } | { success: false; error: AppError }> {
  try {
    const data = await promise;
    return { success: true, data };
  } catch (err) {
    const error = classifyError(err, context);
    logError(error);
    return { success: false, error };
  }
}

declare global {
  interface Window {
    Sentry?: {
      captureException: (error: Error, context?: Record<string, unknown>) => void;
      captureMessage: (message: string, level?: string) => void;
    };
  }
}
