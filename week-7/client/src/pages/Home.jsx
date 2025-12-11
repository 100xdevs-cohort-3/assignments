import React, { useState, useEffect } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import Courses from "../components/Courses";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // isLoggedIn state keeps track of whether the user is logged in.
  // Initially, it is false (user is not logged in).

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);
  /*
  useEffect runs once when the component mounts ([] dependency array).
  Checks localStorage for a token:
    If a token exists → user is considered logged in → isLoggedIn becomes true
    If no token → isLoggedIn remains false
  */

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  /*
  Removes the token from local storage.
  Sets isLoggedIn to false, which will re-render the component and show the login/register forms again.
  */

  /*
  Logged in (isLoggedIn === true):
    Shows a Logout button
    Shows the <Courses /> component (user can view courses)

  Not logged in (isLoggedIn === false):
    Shows Register and Login forms side by side (styled with flex)
  */
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h2>User Dashboard</h2>

      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
          <Courses />
        </div>
      ) : (
        <>
          <div style={styles.authContainer}>
            <Register />
            <Login />
          </div>
          <div>
            {/* Public Courses view */}
            <Courses />  {/* fetchCourses() inside Courses will load courses from /users/courses */}
          </div>
        </>
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

export default Home;