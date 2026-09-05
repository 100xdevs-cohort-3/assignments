'use client';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
export default function Signup() {
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage('');
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setMessage(data.message);
      setDone(true);
    } catch (error) {
      setMessage((error as Error).message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <main className="narrow">
      <h1>Make yourself at home.</h1>
      {done ? (
        <section className="card">
          <p role="status">{message}</p>
          <Link className="button" href="/signin">
            Sign in
          </Link>
        </section>
      ) : (
        <form onSubmit={submit}>
          <label>
            Name
            <input name="username" required minLength={3} maxLength={80} autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required maxLength={254} autoComplete="email" />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              required
              minLength={8}
              maxLength={200}
              autoComplete="new-password"
            />
          </label>
          <button disabled={busy}>{busy ? 'Creating account…' : 'Create account'}</button>
          <p role="status">{message}</p>
        </form>
      )}
    </main>
  );
}
