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
    <header role="banner" className="bg-forest">
      <nav
        aria-label="Main navigation"
        className="flex items-center justify-between px-card-400 py-card-200"
      >
        <Link
          to="/"
          aria-label="Little Lemon — go to homepage"
          className="text-preset-1 leading-none text-lemon"
        >
          <img
            src="/src/assets/logo.svg"
            alt="Little Lemon Restaurant logo"
            width={120}
            height={40}
            loading="lazy"
            className="h-10 w-auto"
          />
        </Link>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
          className="cursor-pointer rounded p-1 text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-lemon focus-visible:outline-none md:hidden"
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            {isMenuOpen ? '✕' : '☰'}
          </span>
        </button>

        {/* Nav links */}
        <ul
          id="primary-navigation"
          role="list"
          data-visible={isMenuOpen}
          className={`absolute top-full left-0 z-50 w-full flex-col gap-card-200 bg-forest px-card-400 py-card-300 md:static md:flex md:w-auto md:flex-row md:gap-card-300 md:bg-transparent md:p-0 ${isMenuOpen ? 'flex' : 'hidden'} `}
        >
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={closeMenu}
                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                className={({ isActive }) =>
                  `cursor-pointer rounded text-preset-4 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-lemon focus-visible:outline-none ${
                    isActive ? 'text-lemon' : 'text-white hover:text-lemon'
                  }`
                }
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
