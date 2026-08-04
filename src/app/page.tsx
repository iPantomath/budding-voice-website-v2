export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-12 sm:px-12">
      <div className="max-w-2xl text-center">
        <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl">
          Budding Voice
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          Communication & Leadership Centre
        </p>
        <div className="rounded-lg bg-light-grey p-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Project Foundation Ready
          </h2>
          <p className="mb-4 text-gray-700">
            The Next.js project foundation has been successfully initialized with:
          </p>
          <ul className="mb-6 space-y-2 text-left">
            <li className="flex items-center gap-2">
              <span className="text-orange">✓</span> Next.js 16 with App Router
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange">✓</span> TypeScript with strict mode
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange">✓</span> Tailwind CSS v4 with design tokens
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange">✓</span> Framer Motion for animations
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange">✓</span> React Hook Form & Zod validation
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange">✓</span> Lucide React icons
            </li>
          </ul>
          <p className="text-sm text-gray-500">
            Next: Proceed with Phase 2 - Navigation & Shared Components
          </p>
        </div>
      </div>
    </main>
  );
}
