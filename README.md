# Little Lemon Restaurant Capstone Project

A React-based restaurant website for Little Lemon, showcasing the brand, menu, about page, and an interactive table reservation experience.

## Features

- Responsive landing page and navigation
- About, menu, order online, and login routes
- Booking form with validation for date, time, party size, contact details, and email format
- Inline error messages and submission feedback
- Unit tests for the booking service logic

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Router
- Node.js test runner for unit tests

## Project Structure

- src/pages - route-based page components
- src/components - reusable UI sections
- src/services - booking logic and validation helpers
- public - static assets and icons

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal.

### Build for production

```bash
npm run build
```

### Run tests

```bash
node --test src/services/bookingService.test.js
```

## Booking Form Behavior

The reservation form validates:

- required date and time
- party size between 1 and 10 guests
- first and last name
- valid email address
- valid phone number format when provided

## Notes

This project is designed as a frontend capstone project and demonstrates modern React patterns, component structure, validation handling, and basic accessibility practices.
