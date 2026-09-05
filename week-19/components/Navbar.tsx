'use client';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
export default function Navbar() {
  const { data: session, status } = useSession();
  return (
    <header className="site-nav">
      <Link href="/" className="brand">
        Gather.
      </Link>
      <nav>
        <Link href="/events">Explore events</Link>
        {session ? (
          <>
            <Link href="/events/new">Add event</Link>
            <Link href="/bookings">My bookings</Link>
            <span>{session.user?.name}</span>
            <button className="secondary" onClick={() => signOut({ callbackUrl: '/' })}>
              Sign out
            </button>
          </>
        ) : (
          status !== 'loading' && (
            <>
              <Link href="/signin">Sign in</Link>
              <Link href="/signup" className="button">
                Join us
              </Link>
            </>
          )
        )}
      </nav>
    </header>
  );
}
