export default function Home({ username }) {
  return (
    <section className="card">
      <h2>Hello, {username}.</h2>
      <p>Your name now appears in the app bar because the components share authentication state.</p>
    </section>
  );
}
