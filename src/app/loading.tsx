export default function Loading() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl text-center">
        <div className="mb-6 inline-block">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-orange"></div>
        </div>
        <h1 className="mb-2 text-2xl font-semibold text-gray-900">
          Loading...
        </h1>
        <p className="text-gray-600">Please wait while we prepare the page.</p>
      </div>
    </main>
  );
}
