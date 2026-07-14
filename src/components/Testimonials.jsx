import john from '../assets/image-john.jpg';
import sarah from '../assets/image-sarah.jpg';
import carlos from '../assets/image-carlos.jpg';
import emily from '../assets/image-emily.jpg';

const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    name: 'John D.',
    photo: john,
    review:
      'Absolutely incredible food and service. The Greek salad was fresh and full of flavour. Will definitely be coming back!',
  },
  {
    id: 2,
    rating: 4,
    name: 'Sarah M.',
    photo: sarah,
    review:
      'Lovely atmosphere and authentic Mediterranean cuisine. The lemon dessert was outstanding. Highly recommend!',
  },
  {
    id: 3,
    rating: 5,
    name: 'Carlos R.',
    photo: carlos,
    review:
      'Best bruschetta I have ever had outside of Italy. The staff was friendly and welcoming. A true gem in Chicago.',
  },
  {
    id: 4,
    rating: 4,
    name: 'Emily T.',
    photo: emily,
    review:
      'Wonderful dining experience. The food is fresh, the portions are generous, and the prices are very reasonable.',
  },
];

function StarRating({ rating, max = 5 }) {
  return (
    <div
      role="img"
      aria-label={`Rated ${rating} out of ${max} stars`}
      className="flex gap-0.5 text-xl text-lemon"
    >
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
    <article
      aria-label={`Review by ${name}`}
      className="flex flex-col gap-card-200 rounded-2xl bg-mist p-card-300"
    >
      <StarRating rating={rating} />
      <div className="flex items-center gap-card-200">
        <img
          src={photo}
          alt={`Profile photo of ${name}`}
          width={50}
          height={50}
          loading="lazy"
          className="h-12 w-12 shrink-0 rounded-full object-cover"
        />
        <span className="text-preset-6 text-charcoal">{name}</span>
      </div>
      <blockquote>
        <p className="text-preset-7 text-charcoal">{review}</p>
      </blockquote>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-white">
      <div className="mx-auto max-w-6xl px-card-400 py-card-600">
        <h2
          id="testimonials-heading"
          className="mb-card-400 text-center text-preset-2 text-charcoal"
        >
          Testimonials
        </h2>
        <ul
          role="list"
          aria-label="Customer reviews"
          className="grid grid-cols-1 gap-card-300 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TESTIMONIALS.map((t) => (
            <li key={t.id}>
              <TestimonialCard {...t} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
