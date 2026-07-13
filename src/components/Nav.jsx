import { useState } from 'react';
import { Link, NavLink } from 'react-router';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/reservations', label: 'Reservations' },
  { to: '/order-online', label: 'Order Online' },
  { to: '/login', label: 'Login' },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header role="banner">
      <nav aria-label="Main navigation">
        <Link to="/" aria-label="Little Lemon — go to homepage">
          <img
            src="/assets/logo.png"
            alt="Little Lemon Restaurant logo"
            width={160}
            height={50}
          />
        </Link>
        <button
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
        >
          <span aria-hidden="true">{isMenuOpen ? '✕' : '☰'}</span>
        </button>

        <ul id="primary-navigation" role="list" data-visible={isMenuOpen}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={closeMenu}
                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
