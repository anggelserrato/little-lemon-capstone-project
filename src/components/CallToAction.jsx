import { Link } from 'react-router';

export default function CallToAction() {
  return (
    <aside aria-label="Order online promotion" className="bg-mist">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-card-300 px-card-400 py-card-600 text-center">
        <h2 className="text-preset-2 text-balance text-charcoal">
          Enjoy our dishes at home
        </h2>
        <p className="text-preset-7 max-w-[55ch] text-charcoal">
          Browse our full menu and place your order online for fast, fresh
          delivery straight to your door.
        </p>
        <Link
          to="/order-online"
          aria-label="View our online menu and order for delivery"
          className="inline-block cursor-pointer rounded-lg bg-lemon px-card-300 py-card-200 text-preset-6 text-charcoal transition-colors duration-200 hover:bg-peach focus-visible:ring-2 focus-visible:ring-lemon focus-visible:outline-none"
        >
          Online Menu
        </Link>
      </div>
    </aside>
  );
}
