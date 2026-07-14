import { Link } from 'react-router';
import bigLogo from '../assets/big-yellow-logo.png';

const DOORMAT_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/reservations', label: 'Reservations' },
  { to: '/order-online', label: 'Order Online' },
  { to: '/login', label: 'Login' },
];

const SOCIAL_LINKS = [
  {
    href: 'https://facebook.com/',
    label: 'Visit Little Lemon on Facebook',
    icon: 'Facebook',
  },
  {
    href: 'https://instagram.com/',
    label: 'Visit Little Lemon on Instagram',
    icon: 'Instagram',
  },
  {
    href: 'https://twitter.com/',
    label: 'Visit Little Lemon on Twitter / X',
    icon: 'Twitter',
  },
];

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-card-400 px-card-400 py-card-600 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo */}
        <div>
          <Link to="/" aria-label="Little Lemon — back to homepage">
            <img
              src={bigLogo}
              alt="Little Lemon Restaurant logo"
              width={120}
              height={40}
              loading="lazy"
              className="h-50 w-auto"
            />
          </Link>
        </div>

        {/* Doormat navigation */}
        <nav aria-label="Footer navigation">
          <h2 className="mb-card-200 text-preset-4 text-charcoal">
            Navigation
          </h2>
          <ul role="list" className="flex flex-col gap-card-100">
            {DOORMAT_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="rounded text-preset-8 text-charcoal transition-colors duration-200 hover:text-lemon focus-visible:ring-2 focus-visible:ring-lemon focus-visible:outline-none"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <address>
          <h2 className="mb-card-200 text-preset-4 text-charcoal not-italic">
            Contact
          </h2>
          <ul role="list" className="flex flex-col gap-card-100">
            <li>
              <span
                aria-label="Address"
                className="text-preset-7 text-charcoal not-italic"
              >
                1234 Mockingbird Lane
              </span>
            </li>
            <li>
              <a
                href="tel:+13125550199"
                aria-label="Call us: (312) 555-0199"
                className="text-preset-7 rounded text-charcoal transition-colors duration-200 hover:text-lemon focus-visible:ring-2 focus-visible:ring-lemon focus-visible:outline-none"
              >
                555-0199
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@littlelemon.com"
                aria-label="Email us at hello@littlelemon.com"
                className="text-preset-7 rounded text-charcoal transition-colors duration-200 hover:text-lemon focus-visible:ring-2 focus-visible:ring-lemon focus-visible:outline-none"
              >
                contact@littlelemon.com
              </a>
            </li>
          </ul>
        </address>

        {/* Social media */}
        <div>
          <h2 className="mb-card-200 text-preset-4 text-charcoal">
            Social Media Links
          </h2>
          <ul
            role="list"
            aria-label="Our social media profiles"
            className="flex flex-col gap-card-100"
          >
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-preset-7 rounded text-charcoal transition-colors duration-200 hover:text-lemon focus-visible:ring-2 focus-visible:ring-lemon focus-visible:outline-none"
                >
                  <span aria-hidden="true">{icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-charcoal/10">
        <small className="mx-auto block text-preset-7 max-w-6xl px-card-400 py-card-200 text-center text-charcoal/60">
          <p>
            &copy; {new Date().getFullYear()} Little Lemon Restaurant. All
            rights reserved.
          </p>
        </small>
      </div>
    </footer>
  );
}
