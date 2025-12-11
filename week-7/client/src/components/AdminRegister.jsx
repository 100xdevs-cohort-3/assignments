import React, { useState } from "react";
import axios from "axios";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleRegister() {
    try {
      const response = await axios.post("http://localhost:3000/admin/signup", formData);

      setMessage(response.data.message);

    if (response.data.token) {
        localStorage.setItem("adminToken", response.data.token);
        window.location.reload(); // simple way to refresh Home.jsx state
    }
    } catch (error) {
      setMessage(error.response?.data?.message || "Error occurred");
    }
  }

  return (
    <div style={styles.container}>
      <h3>Create Account</h3>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        style={styles.input}
      />

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

      <button onClick={handleRegister} style={styles.button}>
        Register
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
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default AdminRegister;