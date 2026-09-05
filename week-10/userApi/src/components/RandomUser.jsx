import { useEffect, useState } from 'react';
import axios from 'axios';
export default function RandomUser() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [retry, setRetry] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError('');
    axios
      .get('https://randomuser.me/api/', {
        params: { page, results: 8, seed: '100xdevs' },
        signal: controller.signal,
        timeout: 15000,
      })
      .then(({ data }) => {
        if (!Array.isArray(data.results)) throw new Error('Unexpected response from user service');
        setUsers((previous) => {
          const ids = new Set(previous.map((user) => user.login.uuid));
          return [...previous, ...data.results.filter((user) => !ids.has(user.login.uuid))];
        });
      })
      .catch((error) => {
        if (!controller.signal.aborted) setError(error.message || 'Unable to load users.');
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [page, retry]);
  return (
    <main>
      <p>WEEK 10 / API & PAGINATION</p>
      <h1>Meet someone new.</h1>
      <p>A growing directory, eight people at a time.</p>
      <div className="grid">
        {users.map((user) => (
          <article key={user.login.uuid}>
            <img
              src={user.picture.large}
              alt={user.name.first + ' ' + user.name.last}
              width="100"
              height="100"
              style={{ borderRadius: '50%' }}
            />
            <h2>
              {user.name.first} {user.name.last}
            </h2>
            <p>
              {user.location.city}, {user.location.country}
            </p>
          </article>
        ))}
      </div>
      <p role="status">{loading ? 'Loading people…' : users.length + ' people loaded.'}</p>
      {error && <p role="alert">{error}</p>}
      <button
        disabled={loading}
        onClick={() => (error ? setRetry((value) => value + 1) : setPage((value) => value + 1))}
      >
        {loading ? 'Loading…' : error ? 'Retry' : 'Load more users'}
      </button>
    </main>
  );
}
