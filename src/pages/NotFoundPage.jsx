import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <main id="main-content" aria-labelledby="notfound-heading">
      <section>
        <h1 id="notfound-heading">Page not found</h1>
        <p>Sorry, we couldn't find what you were looking for.</p>
        <Link to="/" aria-label="Go back to Little Lemon homepage">
          Back to home
        </Link>
      </section>
    </main>
  );
}
