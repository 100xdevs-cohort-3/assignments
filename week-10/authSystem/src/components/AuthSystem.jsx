import { useState } from "react";
import AppBar from "./AppBar";
import Home from "./Home";
import Login from "./Login";

import { createContext } from "react";

export const AuthContext = createContext();

function AuthSystem() {
  const [loggedin, setLoggedin] = useState(false);
  const [username, setUsername] = useState("");
  function handleLogout() {
    setLoggedin(false);
    setUsername("");
  }
  function handleLogin(username) {
    setUsername(username);
    setLoggedin(true);
  }

  return (
    <AuthContext.Provider
      value={{ loggedin, username, handleLogin, handleLogout }}
    >
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <AppBar
          loggedin={loggedin}
          username={username}
          handleLogout={handleLogout}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "90vh",
            justifyContent: "center",
          }}
        >
          {loggedin ? <Home /> : <Login handleLogin={handleLogin} />}
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default AuthSystem;
