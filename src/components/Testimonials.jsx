// FIXME: Verify review information for each one
const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    name: 'John D.',
    photo: '/assets/testimonial-john.jpg',
    review:
      'Absolutely incredible food and service. The Greek salad was fresh and full of flavour. Will definitely be coming back!',
  },
  {
    id: 2,
    rating: 4,
    name: 'Sarah M.',
    photo: '/assets/testimonial-sarah.jpg',
    review:
      'Lovely atmosphere and authentic Mediterranean cuisine. The lemon dessert was outstanding. Highly recommend!',
  },
  {
    id: 3,
    rating: 5,
    name: 'Carlos R.',
    photo: '/assets/testimonial-carlos.jpg',
    review:
      'Best bruschetta I have ever had outside of Italy. The staff was friendly and welcoming. A true gem in Chicago.',
  },
  {
    id: 4,
    rating: 4,
    name: 'Emily T.',
    photo: '/assets/testimonial-emily.jpg',
    review:
      'Wonderful dining experience. The food is fresh, the portions are generous, and the prices are very reasonable.',
  },
];

function StarRating({ rating, max = 5 }) {
  return (
    <div role="img" aria-label={`Rated ${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} aria-hidden="true">
          {i < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ rating, name, photo, review }) {
  return (
    <article aria-label={`Review by ${name}`}>
      <StarRating rating={rating} />
      <div>
        <img
          src={photo}
          alt={`Profile photo of ${name}`}
          width={50}
          height={50}
          loading="lazy"
        />
        <span>{name}</span>
      </div>
      <blockquote>
        <p>{review}</p>
      </blockquote>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">Testimonials</h2>
      <ul role="list" aria-label="Customer reviews">
        {TESTIMONIALS.map((t) => (
          <li key={t.id}>
            <TestimonialCard {...t} />
          </li>
        ))}
      </ul>
    </section>
  );
}
