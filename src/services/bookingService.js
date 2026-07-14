const seededRandom = function (seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return function () {
    s = (s * a) % m;
    return s / m;
  };
};

export function fetchAvailableTimes(date) {
  const slots = [];
  const random = seededRandom(date.getDate());

  for (let hour = 17; hour <= 23; hour += 1) {
    if (random() < 0.5) {
      slots.push(`${hour}:00`);
    }

    if (random() < 0.5) {
      slots.push(`${hour}:30`);
    }
  }

  return slots;
}

export function validateBookingForm(form) {
  const errors = {};

  if (!form.date?.trim()) {
    errors.date = 'Date is required.';
  }

  if (!form.time?.trim()) {
    errors.time = 'Time is required.';
  }

  const guestCount = Number(form.guests);

  if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 10) {
    errors.guests = 'Party size must be between 1 and 10 guests.';
  }

  if (!form.firstName?.trim()) {
    errors.firstName = 'First name is required.';
  }

  if (!form.lastName?.trim()) {
    errors.lastName = 'Last name is required.';
  }

  if (!form.email?.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (form.phone?.trim() && !/^\+?[0-9\s()-]{7,15}$/.test(form.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }

  return errors;
}

export async function submitBooking() {
  return new Promise((resolve) => {
    globalThis.setTimeout(() => {
      resolve({ success: true, reservationId: `LL-${Date.now()}` });
    }, 600);
  });
}
