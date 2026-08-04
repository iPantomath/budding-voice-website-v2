"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Oops! Something went wrong
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          We encountered an unexpected error. Please try again.
        </p>
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
