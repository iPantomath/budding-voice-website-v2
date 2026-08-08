"use client";

import { useEffect } from "react";
import { classifyError, logError } from "@/lib/errorHandler";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    const appError = classifyError(error, { digest: error.digest });
    logError(appError);
  }, [error]);

  const appError = classifyError(error);

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl text-center">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">
          {appError.severity === "critical" ? "⚠️ Error" : "⚠️ Warning"}
        </h1>
        <h2 className="mb-4 text-lg font-semibold text-gray-700">
          {appError.type.charAt(0).toUpperCase() + appError.type.slice(1)} Error
        </h2>
        <p className="mb-8 text-lg text-gray-600">{appError.userMessage}</p>

        {process.env.NODE_ENV === "development" && (
          <div className="mb-8 rounded-lg bg-gray-100 p-4 text-left">
            <p className="text-sm font-mono text-gray-700">
              <strong>Debug Info:</strong> {appError.message}
            </p>
          </div>
        )}

        <button
          onClick={reset}
          className="inline-block rounded-lg bg-orange px-6 py-3 font-semibold text-white transition-colors hover:bg-opacity-90"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
