import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";

function App() {
  const [isAdminView, setIsAdminView] = useState(false);

  // Automatically set view based on login state
  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    const userToken = localStorage.getItem("token");

    if (adminToken) {
      setIsAdminView(true);  // admin logged in → show admin view
    } else if (userToken) {
      setIsAdminView(false); // user logged in → show user view
    }
  }, []); // runs only once when app loads

  const toggleView = () => {
    setIsAdminView(prev => !prev);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Online Courses Platform</h1>

      {/* Toggle button */}
      <button
        onClick={toggleView}
        style={{
          marginBottom: "20px",
          padding: "10px 15px",
          background: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Switch to {isAdminView ? "User" : "Admin"} View
      </button>

      {/* Render view */}
      <div>
        {isAdminView ? <AdminHome /> : <Home />}
      </div>
    </div>
  );
}

export default App;