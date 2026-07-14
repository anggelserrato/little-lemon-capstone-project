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
      <section aria-labelledby="confirmation-heading" role="status">
        <h1 id="confirmation-heading">Booking Confirmed!</h1>
        <p>
          Thank you, {form.firstName}! Your table for {form.guests}{' '}
          {form.guests === 1 ? 'guest' : 'guests'} on {form.date} at {form.time}{' '}
          has been reserved.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(INITIAL_STATE);
            setAvailableTimes(fetchAPI(new Date()));
            setSubmitted(false);
          }}
        >
          Make another reservation
        </button>
      </section>
    );
  }

  return (
    <main aria-labelledby="booking-heading">
      <section>
        <h1 id="booking-heading">Reserve a Table</h1>
        <p>
          Fill in the details below and we will get your table ready. Fields
          marked <abbr title="required">*</abbr> are required.
        </p>

        <form
          onSubmit={handleSubmit}
          aria-label="Table reservation form"
          noValidate
        >
          {/* ── Date & Time ── */}
          <fieldset>
            <legend>When would you like to visit?</legend>

            <div>
              <label htmlFor="date">
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
              />
              <span id="date-hint" className="sr-only">
                Select a date for your reservation. Must be today or later.
              </span>
            </div>

            <div>
              <label htmlFor="time">
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
          <fieldset>
            <legend>Party details</legend>

            <div>
              <label htmlFor="guests">
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
              />
              <span id="guests-hint" className="sr-only">
                Enter a number between 1 and 10.
              </span>
            </div>

            <div>
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                name="occasion"
                value={form.occasion}
                onChange={handleChange}
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
            <fieldset>
              <legend>Seating preference</legend>
              {['indoor', 'outdoor'].map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="seating"
                    value={option}
                    checked={form.seating === option}
                    onChange={handleChange}
                  />
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </label>
              ))}
            </fieldset>
          </fieldset>

          {/* ── Contact Information ── */}
          <fieldset>
            <legend>Your contact information</legend>

            <div>
              <label htmlFor="firstName">
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
              />
            </div>

            <div>
              <label htmlFor="lastName">
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
              />
            </div>

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
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
                aria-describedby="phone-hint"
              />
              <span id="phone-hint" className="sr-only">
                Optional. Include country code if outside the US.
              </span>
            </div>
          </fieldset>

          {/* ── Special Requests ── */}
          <div>
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={form.specialRequests}
              onChange={handleChange}
              rows={4}
              placeholder="Allergies, dietary requirements, high chair needed…"
              aria-describedby="requests-hint"
            />
            <span id="requests-hint" className="sr-only">
              Optional. Let us know about allergies or any special needs.
            </span>
          </div>

          <button type="submit">Confirm Reservation</button>
        </form>
      </section>
    </main>
  );
}
