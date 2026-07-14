export default function ConfirmedBookingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-mist px-card-400 py-card-600">
      <section
        aria-labelledby="confirmed-heading"
        className="flex w-full max-w-lg flex-col gap-card-300 rounded-2xl bg-white p-card-500 text-center shadow-sm"
      >
        <h1 id="confirmed-heading" className="text-preset-2 text-charcoal">
          Booking Confirmed!
        </h1>
        <p className="text-preset-7 text-charcoal">
          Thank you for your reservation. We look forward to seeing you at
          Little Lemon.
        </p>
      </section>
    </main>
  );
}
