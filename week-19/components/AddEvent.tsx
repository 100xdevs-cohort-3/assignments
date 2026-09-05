'use client';
import { FormEvent, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function AddEvent() {
  const { status } = useSession();
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, date: new Date(String(data.date)).toISOString() }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      router.push('/events');
      router.refresh();
    } catch (error) {
      setMessage((error as Error).message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <main className="narrow">
      <h1>Bring people together.</h1>
      {status === 'loading' ? (
        <p>Loading…</p>
      ) : status !== 'authenticated' ? (
        <p>
          <Link href="/signin">Sign in</Link> to host an event.
        </p>
      ) : (
        <form onSubmit={submit}>
          <label>
            Event title
            <input name="title" required maxLength={150} />
          </label>
          <label>
            What&apos;s happening?
            <textarea name="description" required maxLength={4000} />
          </label>
          <label>
            Location
            <input name="location" required maxLength={200} />
          </label>
          <label>
            Date and time (your local time)
            <input name="date" type="datetime-local" required />
          </label>
          <button disabled={busy}>{busy ? 'Publishing…' : 'Publish event'}</button>
          <p role="alert">{message}</p>
        </form>
      )}
    </main>
  );
}
