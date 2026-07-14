export default function OrderOnlinePage() {
  return (
    <main
      id="main-content"
      aria-labelledby="order-heading"
      className="flex min-h-screen items-center justify-center bg-mist px-card-400 py-card-600"
    >
      <section className="flex w-full max-w-lg flex-col gap-card-300 rounded-2xl bg-white p-card-500 text-center shadow-sm">
        <h1 id="order-heading" className="text-preset-2 text-charcoal">
          Order Online
        </h1>
        <p className="text-preset-7 text-charcoal">
          Our online ordering system is coming soon. Call us to order:
        </p>
        <p>
          <a
            href="tel:+13125550199"
            aria-label="Call us at (312) 555-0199"
            className="rounded text-preset-6 text-forest transition-colors duration-200 hover:text-lemon focus-visible:ring-2 focus-visible:ring-lemon focus-visible:outline-none"
          >
            555-0199
          </a>
        </p>
      </section>
    </main>
  );
}
