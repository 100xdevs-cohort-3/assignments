export default function Login({ onSubmit, busy, mode = 'login' }) {
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    void onSubmit(
      {
        username: String(data.get('username')),
        password: String(data.get('password')),
        role: data.get('role') === 'admin' ? 'admin' : 'user',
      },
      mode,
    );
  }
  return (
    <form onSubmit={submit}>
      <h2>{mode === 'signup' ? 'Create an account' : 'Sign in'}</h2>
      <label>
        Account type
        <select name="role">
          <option value="user">Student</option>
          <option value="admin">Instructor</option>
        </select>
      </label>
      <label>
        Username
        <input name="username" required minLength={3} maxLength={80} autoComplete="username" />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          required
          minLength={8}
          maxLength={200}
          autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
        />
      </label>
      <button disabled={busy}>{busy ? 'Please waitâ€¦' : 'Sign in'}</button>
    </form>
  );
}
