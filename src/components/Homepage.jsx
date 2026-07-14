import { Link } from 'react-router';

export default function Homepage() {
  return (
    <section aria-labelledby="hero-heading" className="bg-forest">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-card-400 px-card-400 py-card-600 md:grid-cols-2">
        <div className="flex flex-col gap-card-300">
          <h1
            id="hero-heading"
            className="text-preset-1 leading-none text-lemon"
          >
            Little Lemon
          </h1>
          <p
            aria-label="Location"
            className="-mt-card-200 text-preset-2 text-white"
          >
            Chicago
          </p>
          <p className="text-preset-7 max-w-[55ch] text-white">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <div>
            <Link
              to="/reservations"
              aria-label="Reserve a table at Little Lemon"
              className="inline-block cursor-pointer rounded-lg bg-lemon px-card-300 py-card-200 text-preset-6 text-charcoal transition-colors duration-200 hover:bg-peach focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Reserve a Table
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/images/restaurant-food.jpg"
            alt="Beautifully plated Mediterranean dish from Little Lemon"
            width={400}
            height={480}
            fetchPriority="high"
            className="h-[300px] w-full max-w-sm translate-y-8 rounded-2xl object-cover md:h-[400px] md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
