export default function MenuPage() {
  return (
    <main
      id="main-content"
      aria-labelledby="menu-heading"
      className="flex min-h-screen items-center justify-center bg-mist px-card-400 py-card-600"
    >
      <section className="flex w-full max-w-lg flex-col gap-card-300 rounded-2xl bg-white p-card-500 text-center shadow-sm">
        <h1 id="menu-heading" className="text-preset-2 text-charcoal">
          Our Menu
        </h1>
        <p className="text-preset-7 text-charcoal">
          Coming soon — browse our weekly specials on the home page.
        </p>
      </section>
    </main>
  );
}
