import { useState } from 'react';
// import { fetchAPI, submitAPI } from '../api.js ';

const OCCASIONS = ['Birthday', 'Engagement', 'Anniversary'];

const INITIAL_STATE = {
  date: '',
  time: '',
  guests: 1,
  occasion: '',
  seating: 'indoor',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  specialRequests: '',
};

const inputClass =
  'bg-white border border-mist rounded-lg px-card-200 py-card-100 text-preset-7 text-charcoal focus:outline-none focus:ring-2 focus:ring-lemon w-full';
const labelClass = 'text-preset-8 text-charcoal block mb-card-100';
const fieldClass = 'flex flex-col';

export default function BookingPage() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [availableTimes, setAvailableTimes] = useState(fetchAPI(new Date()));

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'date' ? { time: '' } : {}),
    }));

    if (name === 'date') {
      setAvailableTimes(fetchAPI(new Date(value)));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = submitAPI(form);

    if (success) {
      console.log('Booking submitted:', form);
      setSubmitted(true);
    } else {
      alert('Unable to complete your reservation.');
    }
  };

  if (submitted) {
    return (
      <section
        aria-labelledby="confirmation-heading"
        role="status"
        className="flex min-h-screen items-center justify-center bg-mist px-card-400 py-card-600"
      >
        <div className="flex w-full max-w-lg flex-col gap-card-300 rounded-2xl bg-white p-card-500 text-center shadow-sm">
          <h1 id="confirmation-heading" className="text-preset-2 text-charcoal">
            Booking Confirmed!
          </h1>
          <p className="text-preset-7 text-charcoal">
            Thank you, {form.firstName}! Your table for {form.guests}{' '}
            {form.guests === 1 ? 'guest' : 'guests'} on {form.date} at{' '}
            {form.time} has been reserved.
          </p>
          <button
            type="button"
            onClick={() => {
              setForm(INITIAL_STATE);
              setAvailableTimes(fetchAPI(new Date()));
              setSubmitted(false);
            }}
            className="w-full cursor-pointer rounded-xl bg-lemon py-card-300 text-preset-6 text-charcoal transition-colors duration-200 hover:bg-peach focus-visible:ring-2 focus-visible:ring-lemon focus-visible:outline-none"
          >
            Make another reservation
          </button>
        </div>
      </section>
    );
  }

  return (
    <main
      aria-labelledby="booking-heading"
      className="min-h-screen bg-mist px-card-400 py-card-600"
    >
      <section className="mx-auto max-w-2xl rounded-2xl bg-white p-card-500 shadow-sm">
        <h1
          id="booking-heading"
          className="mb-card-200 text-preset-2 text-charcoal"
        >
          Reserve a Table
        </h1>
        <p className="mb-card-400 text-preset-7 text-charcoal">
          Fill in the details below and we will get your table ready. Fields
          marked <abbr title="required">*</abbr> are required.
        </p>

        <form
          onSubmit={handleSubmit}
          aria-label="Table reservation form"
          noValidate
          className="flex flex-col gap-card-400"
        >
          {/* ── Date & Time ── */}
          <fieldset className="flex flex-col gap-card-300 rounded-xl border border-mist p-card-300">
            <legend className="px-card-100 text-preset-4 text-charcoal">
              When would you like to visit?
            </legend>

            <div className={fieldClass}>
              <label htmlFor="date" className={labelClass}>
                Date{' '}
                <abbr title="required" aria-hidden="true">
                  *
                </abbr>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
                aria-required="true"
                aria-describedby="date-hint"
                className={inputClass}
              />
              <span id="date-hint" className="sr-only">
                Select a date for your reservation. Must be today or later.
              </span>
            </div>

            <div className={fieldClass}>
              <label htmlFor="time" className={labelClass}>
                Time{' '}
                <abbr title="required" aria-hidden="true">
                  *
                </abbr>
              </label>
              <select
                id="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                aria-required="true"
                className={inputClass}
              >
                <option value="" disabled>
                  Select a time
                </option>
                {availableTimes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>

          {/* ── Party Details ── */}
          <fieldset className="flex flex-col gap-card-300 rounded-xl border border-mist p-card-300">
            <legend className="px-card-100 text-preset-4 text-charcoal">
              Party details
            </legend>

            <div className={fieldClass}>
              <label htmlFor="guests" className={labelClass}>
                Number of Guests{' '}
                <abbr title="required" aria-hidden="true">
                  *
                </abbr>
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={form.guests}
                onChange={handleChange}
                min={1}
                max={10}
                required
                aria-required="true"
                aria-describedby="guests-hint"
                className={inputClass}
              />
              <span id="guests-hint" className="sr-only">
                Enter a number between 1 and 10.
              </span>
            </div>

            <div className={fieldClass}>
              <label htmlFor="occasion" className={labelClass}>
                Occasion
              </label>
              <select
                id="occasion"
                name="occasion"
                value={form.occasion}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select an occasion (optional)</option>
                {OCCASIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            {/* Seating preference as radio group */}
            <fieldset className="flex flex-col gap-card-100">
              <legend className="mb-card-100 text-preset-8 text-charcoal">
                Seating preference
              </legend>
              <div className="flex gap-card-300">
                {['indoor', 'outdoor'].map((option) => (
                  <label
                    key={option}
                    className="flex text-preset-7 cursor-pointer items-center gap-card-100 text-charcoal"
                  >
                    <input
                      type="radio"
                      name="seating"
                      value={option}
                      checked={form.seating === option}
                      onChange={handleChange}
                      className="accent-lemon"
                    />
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </label>
                ))}
              </div>
            </fieldset>
          </fieldset>

          {/* ── Contact Information ── */}
          <fieldset className="flex flex-col gap-card-300 rounded-xl border border-mist p-card-300">
            <legend className="px-card-100 text-preset-4 text-charcoal">
              Your contact information
            </legend>

            <div className="grid grid-cols-1 gap-card-300 sm:grid-cols-2">
              <div className={fieldClass}>
                <label htmlFor="firstName" className={labelClass}>
                  First Name{' '}
                  <abbr title="required" aria-hidden="true">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  required
                  aria-required="true"
                  className={inputClass}
                />
              </div>

              <div className={fieldClass}>
                <label htmlFor="lastName" className={labelClass}>
                  Last Name{' '}
                  <abbr title="required" aria-hidden="true">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  required
                  aria-required="true"
                  className={inputClass}
                />
              </div>
            </div>

            <div className={fieldClass}>
              <label htmlFor="email" className={labelClass}>
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
                className={inputClass}
              />
            </div>

            <div className={fieldClass}>
              <label htmlFor="phone" className={labelClass}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
                aria-describedby="phone-hint"
                className={inputClass}
              />
              <span id="phone-hint" className="sr-only">
                Optional. Include country code if outside the US.
              </span>
            </div>
          </fieldset>

          {/* ── Special Requests ── */}
          <div className={fieldClass}>
            <label htmlFor="specialRequests" className={labelClass}>
              Special Requests
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={form.specialRequests}
              onChange={handleChange}
              rows={4}
              placeholder="Allergies, dietary requirements, high chair needed…"
              aria-describedby="requests-hint"
              className={`${inputClass} resize-none`}
            />
            <span id="requests-hint" className="sr-only">
              Optional. Let us know about allergies or any special needs.
            </span>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-lemon py-card-300 text-preset-6 text-charcoal transition-colors duration-200 hover:bg-peach focus-visible:ring-2 focus-visible:ring-lemon focus-visible:outline-none"
          >
            Confirm Reservation
          </button>
        </form>
      </section>
    </main>
  );
}
