import { Link } from 'react-router';

export default function CallToAction() {
  return (
    <aside aria-label="Order online promotion">
      <div>
        <h2>Enjoy our dishes at home</h2>
        <p>
          Browse our full menu and place your order online for fast, fresh
          delivery straight to your door.
        </p>
        <Link
          to="/order-online"
          aria-label="View our online menu and order for delivery"
        >
          Online Menu
        </Link>
      </div>
    </aside>
  );
}
