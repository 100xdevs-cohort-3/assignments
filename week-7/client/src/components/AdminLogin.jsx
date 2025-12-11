import React, { useState } from "react";
import axios from "axios";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleLogin() {
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/login",
        formData
      );

      setMessage(response.data.message);

    if (response.data.token) {
        localStorage.setItem("adminToken", response.data.token);
        window.location.reload(); // simple way to refresh Home.jsx state
    }
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  }

  return (
    <div style={styles.container}>
      <h3>Login</h3>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        style={styles.input}
      />

      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>

      {message && <p>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    marginTop: "10px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px",
    background: "#2196F3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  }
};

export default AdminLogin;