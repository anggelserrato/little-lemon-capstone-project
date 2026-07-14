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
    <main
      id="main-content"
      aria-labelledby="login-heading"
      className="flex min-h-screen items-center justify-center bg-mist px-card-400 py-card-600"
    >
      <section className="w-full max-w-md rounded-2xl bg-white p-card-500 shadow-sm">
        <h1
          id="login-heading"
          className="mb-card-400 text-center text-preset-2 text-charcoal"
        >
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          aria-label="Login form"
          noValidate
          className="flex flex-col gap-card-300"
        >
          <div className="flex flex-col gap-card-100">
            <label
              htmlFor="email"
              className="block text-preset-8 text-charcoal"
            >
              Email{' '}
              <span title="required" aria-hidden="true">
                *
              </span>
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
              className="w-full text-preset-7 rounded-lg border border-mist bg-white px-card-200 py-card-100 text-charcoal focus:ring-2 focus:ring-lemon focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-card-100">
            <label
              htmlFor="password"
              className="block text-preset-8 text-charcoal"
            >
              Password{' '}
              <span title="required" aria-hidden="true">
                *
              </span>
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
              className="w-full text-preset-7 rounded-lg border border-mist bg-white px-card-200 py-card-100 text-charcoal focus:ring-2 focus:ring-lemon focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-card-100 w-full cursor-pointer rounded-xl bg-lemon py-card-300 text-preset-6 text-charcoal transition-colors duration-200 hover:bg-peach focus-visible:ring-2 focus-visible:ring-lemon focus-visible:outline-none"
          >
            Log in
          </button>
        </form>
      </section>
    </main>
  );
}
