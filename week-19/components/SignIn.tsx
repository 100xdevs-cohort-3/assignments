'use client';
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function SignIn() {
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setBusy(true);
    setMessage('');
    try {
      const result = await signIn('credentials', {
        email: data.get('email'),
        password: data.get('password'),
        redirect: false,
      });
      if (!result?.ok) throw new Error('Unable to sign in. Check your email and password.');
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
      <h1>Welcome back.</h1>
      <form onSubmit={submit}>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            required
            maxLength={200}
            autoComplete="current-password"
          />
        </label>
        <button disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
        <p role="alert">{message}</p>
        <Link href="/signup">Create an account</Link>
      </form>
    </main>
  );
}
