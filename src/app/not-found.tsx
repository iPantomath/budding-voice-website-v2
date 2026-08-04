import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl text-center">
        <h1 className="mb-2 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-4 text-3xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="mb-8 text-lg text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. Please
          check the URL and try again.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-orange px-6 py-3 font-semibold text-white transition-colors hover:bg-opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
