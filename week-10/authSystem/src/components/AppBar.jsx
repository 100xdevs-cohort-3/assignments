export default function AppBar({ username, onLogout }) {
  return (
    <header className="card">
      <strong>Learning space</strong>
      {username ? (
        <nav>
          <span>Welcome, {username}</span>
          <button className="secondary" onClick={onLogout}>
            Sign out
          </button>
        </nav>
      ) : (
        <span>Guest</span>
      )}
    </header>
  );
}
