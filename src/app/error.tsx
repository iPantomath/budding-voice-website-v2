"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { classifyError, logError } from "@/lib/errorHandler";
import { Container, Button } from "@/components/ui";

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
    <div className="flex flex-1 items-center justify-center px-6 py-20">
      <Container size="sm" noPadding>
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange/10">
            <AlertTriangle className="h-7 w-7 text-orange" aria-hidden="true" />
          </div>
          <h1 className="mb-3 text-3xl font-bold text-text-primary">
            {appError.severity === "critical" ? "Something went wrong" : "A small hiccup"}
          </h1>
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-text-secondary">
            {appError.type.charAt(0).toUpperCase() + appError.type.slice(1)} Error
          </p>
          <p className="mb-8 leading-relaxed text-text-secondary">
            {appError.userMessage}
          </p>

          {process.env.NODE_ENV === "development" && (
            <div className="mb-8 rounded-lg bg-light-grey p-4 text-left">
              <p className="font-mono text-sm text-text-secondary">
                <strong>Debug Info:</strong> {appError.message}
              </p>
            </div>
          )}

          <Button variant="primary" size="lg" onClick={reset}>
            Try Again
          </Button>
        </div>
      </Container>
    </div>
  );
}
