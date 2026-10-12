export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-1 flex-col items-center justify-center px-6 py-20"
    >
      <div className="max-w-2xl text-center">
        <div className="mb-6 inline-block">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-light-grey border-t-orange" />
        </div>
        <p className="mb-2 text-xl font-semibold text-text-primary">Loading…</p>
        <p className="text-text-secondary">Please wait while we prepare the page.</p>
      </div>
    </div>
  );
}
