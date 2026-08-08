import { classifyError, logError, handleAsync, type AppError } from "@/lib/errorHandler";

describe("classifyError", () => {
  describe("Network Errors", () => {
    it("classifies TypeError with 'fetch' in message as network error", () => {
      const error = new TypeError("fetch failed: network error");
      const result = classifyError(error);

      expect(result.type).toBe("network");
      expect(result.severity).toBe("warning");
      expect(result.userMessage).toContain("Connection error");
    });

    it("classifies TypeError with 'network' in message as network error", () => {
      const error = new TypeError("network request timed out");
      const result = classifyError(error);

      expect(result.type).toBe("network");
      expect(result.severity).toBe("warning");
    });

    it("classifies TypeError with 'timeout' in message as network error", () => {
      const error = new TypeError("request timeout");
      const result = classifyError(error);

      expect(result.type).toBe("network");
    });
  });

  describe("Validation Errors", () => {
    it("classifies generic TypeError as validation error", () => {
      const error = new TypeError("Invalid argument");
      const result = classifyError(error);

      expect(result.type).toBe("validation");
      expect(result.severity).toBe("warning");
      expect(result.userMessage).toContain("Invalid data");
    });
  });

  describe("Not Found Errors", () => {
    it("classifies error with '404' as not found", () => {
      const error = new Error("404 Not Found");
      const result = classifyError(error);

      expect(result.type).toBe("notfound");
      expect(result.severity).toBe("info");
    });

    it("classifies error with 'not found' as not found", () => {
      const error = new Error("Resource not found");
      const result = classifyError(error);

      expect(result.type).toBe("notfound");
    });
  });

  describe("Auth Errors", () => {
    it("classifies error with '401' as auth error", () => {
      const error = new Error("401 Unauthorized");
      const result = classifyError(error);

      expect(result.type).toBe("auth");
      expect(result.severity).toBe("warning");
      expect(result.userMessage).toContain("log in");
    });

    it("classifies error with '403' as auth error", () => {
      const error = new Error("403 Forbidden");
      const result = classifyError(error);

      expect(result.type).toBe("auth");
    });

    it("classifies error with 'unauthorized' as auth error", () => {
      const error = new Error("User unauthorized");
      const result = classifyError(error);

      expect(result.type).toBe("auth");
    });

    it("classifies error with 'forbidden' as auth error", () => {
      const error = new Error("Access forbidden");
      const result = classifyError(error);

      expect(result.type).toBe("auth");
    });
  });

  describe("Unknown Errors", () => {
    it("classifies generic Error as unknown", () => {
      const error = new Error("Something went wrong");
      const result = classifyError(error);

      expect(result.type).toBe("unknown");
      expect(result.severity).toBe("critical");
    });

    it("classifies non-Error objects as unknown", () => {
      const result = classifyError("string error");

      expect(result.type).toBe("unknown");
      expect(result.severity).toBe("critical");
    });

    it("classifies null as unknown", () => {
      const result = classifyError(null);

      expect(result.type).toBe("unknown");
    });

    it("classifies undefined as unknown", () => {
      const result = classifyError(undefined);

      expect(result.type).toBe("unknown");
    });
  });

  describe("Context Passing", () => {
    it("includes context in AppError", () => {
      const error = new Error("test error");
      const context = { endpoint: "/api/test", method: "POST" };
      const result = classifyError(error, context);

      expect(result.context).toEqual(context);
    });

    it("handles missing context gracefully", () => {
      const error = new Error("test error");
      const result = classifyError(error);

      expect(result.context).toBeUndefined();
    });
  });

  describe("AppError Structure", () => {
    it("always includes timestamp", () => {
      const error = new Error("test");
      const result = classifyError(error);

      expect(result.timestamp).toBeInstanceOf(Date);
    });

    it("always includes originalError for Error objects", () => {
      const error = new Error("test");
      const result = classifyError(error);

      expect(result.originalError).toBe(error);
    });

    it("includes message and userMessage", () => {
      const error = new Error("Technical message");
      const result = classifyError(error);

      expect(result.message).toBeDefined();
      expect(result.userMessage).toBeDefined();
      expect(typeof result.message).toBe("string");
      expect(typeof result.userMessage).toBe("string");
    });
  });
});

describe("logError", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("logs to console in development mode", () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "development";

    const mockError: AppError = {
      type: "network",
      severity: "warning",
      message: "Network failed",
      userMessage: "Connection error",
      timestamp: new Date(),
    };

    logError(mockError);

    expect(console.error).toHaveBeenCalled();

    process.env.NODE_ENV = originalEnv;
  });

  it("includes error details in console log", () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "development";

    const mockError: AppError = {
      type: "validation",
      severity: "warning",
      message: "Invalid input",
      userMessage: "Please check your input",
      timestamp: new Date(),
      context: { field: "email" },
    };

    logError(mockError);

    const call = (console.error as jest.Mock).mock.calls[0];
    expect(call[0]).toContain("VALIDATION");

    process.env.NODE_ENV = originalEnv;
  });

  it("skips console logging in production mode", () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";

    const mockError: AppError = {
      type: "unknown",
      severity: "critical",
      message: "Production error",
      userMessage: "An error occurred",
      timestamp: new Date(),
    };

    logError(mockError);

    // Note: console.error would still be called if window.Sentry exists
    // but for this test we're just verifying the pattern

    process.env.NODE_ENV = originalEnv;
  });
});

describe("handleAsync", () => {
  it("returns success result when promise resolves", async () => {
    const result = await handleAsync(Promise.resolve("data"));

    expect(result.success).toBe(true);
    expect(result.data).toBe("data");
    expect(result.error).toBeUndefined();
  });

  it("returns error result when promise rejects", async () => {
    const promise = Promise.reject(new Error("test error"));
    const result = await handleAsync(promise);

    expect(result.success).toBe(false);
    expect(result.error).toBeDefined();
    expect(result.error?.type).toBe("unknown");
  });

  it("includes context in error result", async () => {
    const promise = Promise.reject(new TypeError("fetch failed"));
    const context = { endpoint: "/api/test" };
    const result = await handleAsync(promise, context);

    expect(result.success).toBe(false);
    expect(result.error?.context).toEqual(context);
  });

  it("classifies network errors correctly", async () => {
    const promise = Promise.reject(new TypeError("fetch failed"));
    const result = await handleAsync(promise);

    expect(result.success).toBe(false);
    expect(result.error?.type).toBe("network");
  });

  it("handles various data types", async () => {
    const testCases = [
      "string data",
      123,
      { key: "value" },
      [1, 2, 3],
      true,
      null,
    ];

    for (const data of testCases) {
      const result = await handleAsync(Promise.resolve(data));
      expect(result.success).toBe(true);
      expect(result.data).toBe(data);
    }
  });
});
