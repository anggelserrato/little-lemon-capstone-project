import { useState } from 'react';
import {
  fetchAvailableTimes,
  submitBooking,
  validateBookingForm,
} from '../services/bookingService';

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
const errorClass = 'mt-card-100 text-preset-8 text-red-600';

function Field({
  form,
  errors,
  onChange,
  name,
  label,
  type = 'text',
  required = false,
  options = [],
  hint,
  ...props
}) {
  const describedBy = [props['aria-describedby'], hint ? `${name}-hint` : null]
    .filter(Boolean)
    .join(' ');

  const commonProps = {
    ...props,
    id: name,
    name,
    value: form[name],
    onChange,
    className: props.className ?? inputClass,
    required,
    'aria-required': required || undefined,
    'aria-describedby': describedBy || undefined,
  };

  const control =
    type === 'select' ? (
      <select {...commonProps}>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    ) : type === 'textarea' ? (
      <textarea {...commonProps} rows={props.rows ?? 4} />
    ) : (
      <input {...commonProps} type={type} />
    );

  return (
    <div className={fieldClass}>
      <label htmlFor={name} className={labelClass}>
        {label}{' '}
        {required ? (
          <abbr title="required" aria-hidden="true">
            *
          </abbr>
        ) : null}
      </label>
      {control}
      {hint ? (
        <span id={`${name}-hint`} className="sr-only">
          {hint}
        </span>
      ) : null}
      {errors[name] ? <p className={errorClass}>{errors[name]}</p> : null}
    </div>
  );
}

function RadioGroup({ form, onChange, legend, name, options }) {
  return (
    <fieldset className="flex flex-col gap-card-100">
      <legend className="mb-card-100 text-preset-8 text-charcoal">
        {legend}
      </legend>
      <div className="flex gap-card-300">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex text-preset-7 cursor-pointer items-center gap-card-100 text-charcoal"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={form[name] === option.value}
              onChange={onChange}
              className="accent-lemon"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function BookingPage() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [availableTimes, setAvailableTimes] = useState(() =>
    fetchAvailableTimes(new Date())
  );

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'date' ? { time: '' } : {}),
    }));

    setErrors((prev) => {
      if (!prev[name]) {
        return prev;
      }

      const nextErrors = { ...prev };
      delete nextErrors[name];
      return nextErrors;
    });

    if (name === 'date') {
      setAvailableTimes(fetchAvailableTimes(new Date(value || new Date())));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage('');

    const nextErrors = validateBookingForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitBooking(form);

      if (result?.success) {
        setSubmitted(true);
      } else {
        setSubmitMessage('Unable to complete your reservation right now.');
      }
    } catch {
      setSubmitMessage('Something went wrong while saving your reservation.');
    } finally {
      setIsSubmitting(false);
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
              setAvailableTimes(fetchAvailableTimes(new Date()));
              setSubmitted(false);
              setErrors({});
              setSubmitMessage('');
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
          <fieldset className="flex flex-col gap-card-300 rounded-xl border border-mist p-card-300">
            <legend className="px-card-100 text-preset-4 text-charcoal">
              When would you like to visit?
            </legend>

            <Field
              form={form}
              errors={errors}
              onChange={handleChange}
              name="date"
              label="Date"
              type="date"
              required
              min={today}
              hint="Select a date for your reservation. Must be today or later."
            />

            <Field
              form={form}
              errors={errors}
              onChange={handleChange}
              name="time"
              label="Time"
              type="select"
              required
              options={[
                { label: 'Select a time', value: '', disabled: true },
                ...availableTimes.map((slot) => ({ label: slot, value: slot })),
              ]}
            />
          </fieldset>

          <fieldset className="flex flex-col gap-card-300 rounded-xl border border-mist p-card-300">
            <legend className="px-card-100 text-preset-4 text-charcoal">
              Party details
            </legend>

            <Field
              form={form}
              errors={errors}
              onChange={handleChange}
              name="guests"
              label="Number of Guests"
              type="number"
              required
              min={1}
              max={10}
              hint="Enter a number between 1 and 10."
            />

            <Field
              form={form}
              errors={errors}
              onChange={handleChange}
              name="occasion"
              label="Occasion"
              type="select"
              options={[
                {
                  label: 'Select an occasion (optional)',
                  value: '',
                  disabled: true,
                },
                ...OCCASIONS.map((option) => ({
                  label: option,
                  value: option,
                })),
              ]}
            />

            <RadioGroup
              form={form}
              onChange={handleChange}
              legend="Seating preference"
              name="seating"
              options={[
                { label: 'Indoor', value: 'indoor' },
                { label: 'Outdoor', value: 'outdoor' },
              ]}
            />
          </fieldset>

          <fieldset className="flex flex-col gap-card-300 rounded-xl border border-mist p-card-300">
            <legend className="px-card-100 text-preset-4 text-charcoal">
              Your contact information
            </legend>

            <div className="grid grid-cols-1 gap-card-300 sm:grid-cols-2">
              <Field
                form={form}
                errors={errors}
                onChange={handleChange}
                name="firstName"
                label="First Name"
                required
                autoComplete="given-name"
              />
              <Field
                form={form}
                errors={errors}
                onChange={handleChange}
                name="lastName"
                label="Last Name"
                required
                autoComplete="family-name"
              />
            </div>

            <Field
              form={form}
              errors={errors}
              onChange={handleChange}
              name="email"
              label="Email"
              type="email"
              required
              autoComplete="email"
            />

            <Field
              form={form}
              errors={errors}
              onChange={handleChange}
              name="phone"
              label="Phone Number"
              type="tel"
              autoComplete="tel"
              hint="Optional. Include country code if outside the US."
            />
          </fieldset>

          <Field
            form={form}
            errors={errors}
            onChange={handleChange}
            name="specialRequests"
            label="Special Requests"
            type="textarea"
            hint="Optional. Let us know about allergies or any special needs."
            placeholder="Allergies, dietary requirements, high chair needed…"
            className={`${inputClass} resize-none`}
          />

          {submitMessage ? (
            <p className="rounded-lg border border-peach bg-peach/20 px-card-200 py-card-100 text-preset-8 text-charcoal">
              {submitMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full cursor-pointer rounded-xl bg-lemon py-card-300 text-preset-6 text-charcoal transition-colors duration-200 hover:bg-peach focus-visible:ring-2 focus-visible:ring-lemon focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Submitting...' : 'Confirm Reservation'}
          </button>
        </form>
      </section>
    </main>
  );
}
