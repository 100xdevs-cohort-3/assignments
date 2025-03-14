const Home = () => (
  <div style={{ padding: "1rem" }}>
    <h2
      style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}
    >
      Welcome to the Auth System Demo
    </h2>
    <p>
      This demo showcases two approaches to managing authentication state in
      React:
    </p>
    <ul
      style={{
        listStyleType: "disc",
        paddingLeft: "2rem",
        marginTop: "0.5rem",
      }}
    >
      <li>State Lifting</li>
      <li>Context API</li>
    </ul>
    <p style={{ marginTop: "0.5rem" }}>
      Use the toggle above to switch between the two approaches.
    </p>
  </div>
);

export default Home;
