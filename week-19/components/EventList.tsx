'use client';
import { FormEvent, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { BookingRecord, EventRecord } from '@/lib/types';
export default function EventList({ bookedOnly = false }: { bookedOnly?: boolean }) {
  const { status } = useSession();
  const [events, setEvents] = useState<EventRecord[]>([]);
  const [booked, setBooked] = useState<number[]>([]);
  const [userId, setUserId] = useState<number | null>(null);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (status === 'loading') return;
    if (bookedOnly && status !== 'authenticated') {
      setLoading(false);
      return;
    }
    const controller = new AbortController();
    setLoading(true);
    async function get(path: string) {
      const response = await fetch(path, { signal: controller.signal });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Unable to load events');
      return data;
    }
    Promise.all([
      get('/api/events?q=' + encodeURIComponent(search)),
      status === 'authenticated' ? get('/api/bookings') : Promise.resolve({ bookings: [] }),
      status === 'authenticated' ? get('/api/user') : Promise.resolve({ id: null }),
    ])
      .then(([catalog, purchases, user]) => {
        const bookings: BookingRecord[] = purchases.bookings;
        setEvents(bookedOnly ? bookings.map((booking) => booking.event) : catalog.events);
        setBooked(bookings.map((booking) => booking.eventId));
        setUserId(user.id);
      })
      .catch((error) => {
        if (!controller.signal.aborted) setMessage(error.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [status, search, refresh, bookedOnly]);
  async function action(id: number, method: string, removeEvent = false) {
    setBusy(id);
    setMessage('');
    try {
      const response = await fetch('/api/events/' + id + (removeEvent ? '' : '/book'), { method });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setMessage(
        removeEvent
          ? 'Event deleted.'
          : method === 'POST'
            ? 'You’re booked. See you there!'
            : 'Booking cancelled.',
      );
      setRefresh((value) => value + 1);
    } catch (error) {
      setMessage((error as Error).message);
    } finally {
      setBusy(null);
    }
  }
  function submitSearch(event: FormEvent) {
    event.preventDefault();
    setSearch(query.trim());
  }
  return (
    <main>
      <p>{bookedOnly ? 'YOUR UPCOMING PLANS' : 'GOOD PEOPLE. GREAT EXPERIENCES.'}</p>
      <h1>{bookedOnly ? 'You have plans.' : 'Find your next gathering.'}</h1>
      <p>Workshops, meetups, and moments worth making time for.</p>
      {!bookedOnly && (
        <form onSubmit={submitSearch} className="row">
          <label style={{ flex: 1 }}>
            Search events
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by topic or location"
            />
          </label>
          <button>Search</button>
        </form>
      )}
      <p role="status">{message || (loading ? 'Loading events…' : '')}</p>
      {bookedOnly && status === 'unauthenticated' ? (
        <p>
          <Link href="/signin">Sign in</Link> to view your bookings.
        </p>
      ) : (
        <div className="grid">
          {!loading && !events.length && <p>No events found.</p>}
          {events.map((event) => (
            <article key={event.id}>
              <span className="tag">
                {new Date(event.date).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p>
                <strong>{event.location}</strong>
                <br />
                {new Date(event.date).toLocaleTimeString(undefined, {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
                <br />
                Hosted by {event.createdBy.username}
              </p>
              <div className="row">
                {status !== 'authenticated' ? (
                  <Link href="/signin" className="button">
                    Sign in to book
                  </Link>
                ) : booked.includes(event.id) ? (
                  <button
                    className="secondary"
                    disabled={busy !== null}
                    onClick={() => action(event.id, 'DELETE')}
                  >
                    Cancel booking
                  </button>
                ) : (
                  <button
                    disabled={busy !== null || new Date(event.date).getTime() <= Date.now()}
                    onClick={() => action(event.id, 'POST')}
                  >
                    {busy === event.id ? 'Booking…' : 'Book event'}
                  </button>
                )}
                {userId === event.createdById && (
                  <button
                    className="danger"
                    disabled={busy !== null}
                    onClick={() => {
                      if (confirm('Delete this event and its bookings?'))
                        action(event.id, 'DELETE', true);
                    }}
                  >
                    Delete event
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
      {!loading && message.includes('Unable') && (
        <button onClick={() => setRefresh((value) => value + 1)}>Retry</button>
      )}
    </main>
  );
}
