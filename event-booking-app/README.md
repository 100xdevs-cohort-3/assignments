# Event Booking Application

Event Booking Application build using Next.js and TypeScript where users can browse, search, add, and book events.

---

## Features

- **Browse Events**: View a list of upcoming events.
- **Search Events**: Search for events using keywords.
- **Add Events**: Users can add events via a simple form.
- **Book Events**: Book one or multiple events seamlessly.
- **Authentication**: Simple login and registration system using NextAuth.js.

---

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, TypeScript
- **Backend**: API routes in Next.js
- **Database**: MongoDB (via Prisma ORM)
- **Authentication**: NextAuth.js
---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/username/event-booking-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd event-booking-app
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

5. Set up Prisma:

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

6. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. Open the application in your browser:

   ```
   http://localhost:3000
   ```

---

## Folder Structure

```
.
├── app               # Next.js App Router components
│   ├── api          # API routes for events and user authentication
│   │   ├── event    # API endpoints for add, delete, get, and book events
│   │   ├── user     # API endpoints for sign-in and sign-up
│   ├── signin       # Sign-in page
│   ├── signup       # Sign-up page
│   ├── events       # Routes for listing and adding events
├── components        # Reusable UI components (EventList, AddEvent, Navbar, SignIn, SignUp)
├── lib               # Prisma client singleton and helpers
├── prisma            # Prisma schema and migration files
├── public            # Static files like images
├── styles            # Global and component-specific styles
├── next.config.js    # Next.js configuration
├── package.json      # Project metadata and dependencies
└── tailwind.config.ts # Tailwind CSS configuration
```

---

## Core Components

- **EventList.tsx**: Displays a list of events and allows users to book them.
- **AddEvent.tsx**: A form to add new events, submitting data to MongoDB.
- **Navbar.tsx**: Navigation bar with links to different pages.
- **BookedEvents.tsx**: Displays a list of events the user has booked.
- **SignIn.tsx**: User login form using NextAuth.
- **SignUp.tsx**: User registration form for new accounts.

---

