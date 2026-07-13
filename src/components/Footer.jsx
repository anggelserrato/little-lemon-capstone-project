import { Link } from 'react-router';

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
    href: 'https://facebook.com/littlelemon',
    label: 'Visit Little Lemon on Facebook',
    icon: 'Facebook',
  },
  {
    href: 'https://instagram.com/littlelemon',
    label: 'Visit Little Lemon on Instagram',
    icon: 'Instagram',
  },
  {
    href: 'https://twitter.com/littlelemon',
    label: 'Visit Little Lemon on Twitter / X',
    icon: 'Twitter',
  },
];

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div>
        <div>
          <Link to="/" aria-label="Little Lemon — back to homepage">
            <img
              src="/assets/logo-footer.png"
              alt="Little Lemon Restaurant logo"
              width={120}
              height={40}
              loading="lazy"
            />
          </Link>
        </div>
        <nav aria-label="Footer navigation">
          <h2>Navigation</h2>
          <ul role="list">
            {DOORMAT_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <address>
          <h2>Contact</h2>
          <ul role="list">
            <li>
              <span aria-label="Address">
                123 Mediterranean Ave, Chicago, IL 60601
              </span>
            </li>
            <li>
              <a href="tel:+13125550199" aria-label="Call us: (312) 555-0199">
                (312) 555-0199
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@littlelemon.com"
                aria-label="Email us at hello@littlelemon.com"
              >
                hello@littlelemon.com
              </a>
            </li>
          </ul>
        </address>
        <div>
          <h2>Social Media Links</h2>
          <ul role="list" aria-label="Our social media profiles">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span aria-hidden="true">{icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <small>
        <p>
          © {new Date().getFullYear()} Little Lemon Restaurant. All rights
          reserved.
        </p>
      </small>
    </footer>
  );
}
