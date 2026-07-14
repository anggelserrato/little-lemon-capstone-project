import { Link } from 'react-router';
import iconDish from '../assets/icon-dish.svg';

const SPECIALS = [
  {
    id: 1,
    name: 'Greek Salad',
    price: 12.99,
    description:
      'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: '/images/greek-salad.jpg',
    imageAlt: 'Fresh Greek salad with feta cheese, olives and crispy croutons',
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: 5.99,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: '/images/bruschetta.jpg',
    imageAlt: 'Toasted bruschetta topped with fresh tomatoes and basil',
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
    image: '/images/lemon-dessert.jpg',
    imageAlt: 'Creamy lemon dessert served in an elegant glass',
  },
];

function SpecialCard({ name, price, description, image, imageAlt }) {
  return (
    <article
      aria-label={`${name} special`}
      className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
    >
      <img
        src={image}
        alt={imageAlt}
        width={312}
        height={200}
        loading="lazy"
        className="h-[200px] w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-card-100 p-card-300">
        <div className="flex items-baseline justify-between gap-card-100">
          <h3 className="text-preset-5 text-charcoal">{name}</h3>
          <span
            aria-label={`Price: $${price.toFixed(2)}`}
            className="shrink-0 text-preset-5 text-lemon"
          >
            ${price.toFixed(2)}
          </span>
        </div>
        <p className="text-preset-7 flex-1 text-charcoal">{description}</p>
        <Link
          to="/order-online"
          aria-label={`Order ${name} for delivery`}
          className="mt-card-100 flex flex-row gap-2 text-preset-8 text-charcoal underline-offset-2 transition-colors duration-200 hover:text-forest"
        >
          Order a delivery <img src={iconDish} alt="" className="h-5 w-5" />
        </Link>
      </div>
    </article>
  );
}

export default function Specials() {
  return (
    <section aria-labelledby="specials-heading" className="bg-mist">
      <div className="mx-auto max-w-6xl px-card-400 py-card-400">
        <div className="mb-card-400 flex items-center justify-between">
          <h2 id="specials-heading" className="text-preset-2 text-charcoal">
            Specials
          </h2>
          <Link
            to="/menu"
            aria-label="View our full online menu"
            className="cursor-pointer rounded-lg bg-charcoal px-card-300 py-card-200 text-preset-6 text-white transition-colors duration-200 hover:bg-forest focus-visible:ring-2 focus-visible:ring-lemon focus-visible:outline-none"
          >
            Online Menu
          </Link>
        </div>
        <ul
          role="list"
          aria-label="This week's specials"
          className="grid grid-cols-1 gap-card-300 md:grid-cols-2 lg:grid-cols-3"
        >
          {SPECIALS.map((special) => (
            <li key={special.id} className="flex">
              <SpecialCard {...special} className="flex-1" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
