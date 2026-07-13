import { useState } from 'react';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = ({ target: { name, value } }) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your auth API
    console.log('Login attempt:', form.email);
  };

  return (
    <main id="main-content" aria-labelledby="login-heading">
      <section>
        <h1 id="login-heading">Login</h1>

        <form onSubmit={handleSubmit} aria-label="Login form" noValidate>
          <div>
            <label htmlFor="email">
              Email{' '}
              <abbr title="required" aria-hidden="true">
                *
              </abbr>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="password">
              Password{' '}
              <abbr title="required" aria-hidden="true">
                *
              </abbr>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
              aria-required="true"
            />
          </div>

          <button type="submit">Log in</button>
        </form>
      </section>
    </main>
  );
}
