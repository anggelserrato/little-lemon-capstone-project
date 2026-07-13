import { Link } from 'react-router';

export default function Homepage() {
  return (
    <section aria-labelledby="hero-heading">
      <div>
        <div>
          <h1 id="hero-heading">Little Lemon</h1>
          <p aria-label="Location">Chicago</p>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations" aria-label="Reserve a table at Little Lemon">
            Reserve a Table
          </Link>
        </div>

        <div>
          <img
            src="/assets/restaurant-food.jpg"
            alt="Beautifully plated Mediterranean dish from Little Lemon"
            width={400}
            height={480}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
