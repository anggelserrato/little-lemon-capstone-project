import test from 'node:test';
import assert from 'node:assert/strict';
import { fetchAvailableTimes, validateBookingForm } from './bookingService.js';

test('validateBookingForm reports missing required fields', () => {
  const errors = validateBookingForm({
    date: '',
    time: '',
    guests: 0,
    firstName: '',
    lastName: '',
    email: 'not-an-email',
    phone: 'abc',
  });

  assert.match(errors.date, /required/i);
  assert.match(errors.time, /required/i);
  assert.match(errors.guests, /between/i);
  assert.match(errors.firstName, /required/i);
  assert.match(errors.lastName, /required/i);
  assert.match(errors.email, /valid/i);
  assert.match(errors.phone, /valid/i);
});

test('validateBookingForm accepts a complete reservation', () => {
  const errors = validateBookingForm({
    date: '2026-08-20',
    time: '19:00',
    guests: 4,
    occasion: 'Birthday',
    seating: 'indoor',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@mail.com',
    phone: '+1 555 123 4567',
    specialRequests: '',
  });

  assert.deepEqual(errors, {});
});

test('fetchAvailableTimes returns a list of slots for a chosen date', () => {
  const slots = fetchAvailableTimes(new Date('2026-08-20T12:00:00'));

  assert.ok(Array.isArray(slots));
  assert.ok(slots.length > 0);
  assert.ok(slots.every((slot) => typeof slot === 'string'));
});
