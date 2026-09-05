import { useState } from 'react';
import { AuthProvider, useAuth } from '../context/AuthContext';
import AppBar from './AppBar';
import Home from './Home';
import Login from './Login';
function LiftedStateDemo() {
  const [username, setUsername] = useState('');
  return (
    <>
      <AppBar username={username} onLogout={() => setUsername('')} />
      {username ? <Home username={username} /> : <Login onLogin={setUsername} />}
    </>
  );
}
function ContextAppBar() {
  const { username, logout } = useAuth();
  return <AppBar username={username} onLogout={logout} />;
}
function ContextContent() {
  const { username, login } = useAuth();
  return username ? <Home username={username} /> : <Login onLogin={login} />;
}
export default function AuthSystem() {
  const [mode, setMode] = useState('lifting');
  return (
    <main>
      <p>WEEK 10 / SHARED STATE</p>
      <h1>One login. Two approaches.</h1>
      <label>
        State management approach
        <select value={mode} onChange={(event) => setMode(event.target.value)}>
          <option value="lifting">State lifting</option>
          <option value="context">Context API</option>
        </select>
      </label>
      <p>
        {mode === 'lifting'
          ? 'A parent owns the state and passes values and callbacks through props.'
          : 'A provider owns the state. The app bar and content read it independently through useAuth.'}
      </p>
      {mode === 'lifting' ? (
        <LiftedStateDemo />
      ) : (
        <AuthProvider>
          <ContextAppBar />
          <ContextContent />
        </AuthProvider>
      )}
    </main>
  );
}
