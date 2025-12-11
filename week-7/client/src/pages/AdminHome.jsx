import React, { useState, useEffect } from "react";
import AdminLogin from "../components/AdminLogin";
import AdminRegister from "../components/AdminRegister";
import AdminCourses from "../components/AdminCourses";

const AdminHome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsLoggedIn(!!token);
  }, []);
  /*
  Runs once when the component loads.
  Looks for adminToken in localStorage.
    If it exists → isLoggedIn = true
    If not → isLoggedIn = false
  */

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
  };
  /*
  Removes the admin token from local storage.
  Updates isLoggedIn to false, which re-renders the component and shows login/register forms again.
  */

  /*
  Admin logged in (isLoggedIn === true):
    Logout button
    AdminCourses component (to manage or view courses)

  Admin not logged in (isLoggedIn === false):
    AdminRegister and AdminLogin forms side by side
  */
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h2>Admin Dashboard</h2>

      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
          <AdminCourses />
        </div>
      ) : (
        <div style={styles.authContainer}>
          <AdminRegister />
          <AdminLogin />
        </div>
      )}
    </div>
  );
};

const styles = {
  authContainer: { display: "flex", gap: "20px" },
  logoutButton: {
    padding: "8px 12px",
    background: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "15px",
  },
};

export default AdminHome;