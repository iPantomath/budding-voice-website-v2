import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-20">
      <Container size="sm" noPadding>
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange">
            Error 404
          </p>
          <h1 className="mb-4 text-4xl font-bold text-text-primary sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mb-8 leading-relaxed text-text-secondary">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. Please
            check the URL and try again.
          </p>
          <Button variant="primary" size="lg" href="/">
            Back to Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
