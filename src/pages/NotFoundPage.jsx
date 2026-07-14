import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <main
      id="main-content"
      aria-labelledby="notfound-heading"
      className="flex min-h-screen items-center justify-center bg-mist px-card-400 py-card-600"
    >
      <section className="flex w-full max-w-lg flex-col gap-card-300 rounded-2xl bg-white p-card-500 text-center shadow-sm">
        <h1 id="notfound-heading" className="text-preset-2 text-charcoal">
          Page not found
        </h1>
        <p className="text-preset-7 text-charcoal">
          Sorry, we couldn&apos;t find what you were looking for.
        </p>
        <div>
          <Link
            to="/"
            aria-label="Go back to Little Lemon homepage"
            className="inline-block cursor-pointer rounded-lg bg-lemon px-card-300 py-card-200 text-preset-6 text-charcoal transition-colors duration-200 hover:bg-peach focus-visible:ring-2 focus-visible:ring-lemon focus-visible:outline-none"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
