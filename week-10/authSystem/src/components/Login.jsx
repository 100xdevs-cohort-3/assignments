import { useState } from 'react';
export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (username.trim()) onLogin(username.trim());
      }}
    >
      <h2>Welcome</h2>
      <p>This exercise demonstrates UI state; enter a name to sign in to the demo.</p>
      <label>
        Your name
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
          maxLength={80}
          autoComplete="username"
        />
      </label>
      <button>Sign in</button>
    </form>
  );
}
