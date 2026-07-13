import { Link } from 'react-router';

const SPECIALS = [
  {
    id: 1,
    name: 'Greek Salad',
    price: 12.99,
    description:
      'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: '/assets/greek-salad.jpg',
    imageAlt: 'Fresh Greek salad with feta cheese, olives and crispy croutons',
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: 5.99,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: '/assets/bruschetta.jpg',
    imageAlt: 'Toasted bruschetta topped with fresh tomatoes and basil',
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
    image: '/assets/lemon-dessert.jpg',
    imageAlt: 'Creamy lemon dessert served in an elegant glass',
  },
];

function SpecialCard({ name, price, description, image, imageAlt }) {
  return (
    <article aria-label={`${name} special`}>
      <img src={image} alt={imageAlt} width={312} height={200} loading="lazy" />
      <div>
        <div>
          <h3>{name}</h3>
          <span aria-label={`Price: $${price.toFixed(2)}`}>
            ${price.toFixed(2)}
          </span>
        </div>
        <p>{description}</p>
        <Link to="/order-online" aria-label={`Order ${name} for delivery`}>
          Order a delivery →
        </Link>
      </div>
    </article>
  );
}

export default function Specials() {
  return (
    <section aria-labelledby="specials-heading">
      <div>
        <h2 id="specials-heading">Specials</h2>
        <Link to="/menu" aria-label="View our full online menu">
          Online Menu
        </Link>
      </div>
      <ul role="list" aria-label="This week's specials">
        {SPECIALS.map((special) => (
          <li key={special.id}>
            <SpecialCard {...special} />
          </li>
        ))}
      </ul>
    </section>
  );
}
