import { createContext, useState } from "react";
import "../index.css";
import AppBar from "./AppBar";
import Home from "./Home";
import Login from "../../solution/Login";

export const AuthContext = createContext("undefined");

const AuthSystem = () => {
  const [useContextApi] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (newUsername) => {
    setUsername(newUsername);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUsername("");
    setIsLoggedIn(false);
  };

  const contextValue = useContextApi
    ? { username, isLoggedIn, login, logout }
    : undefined;
  return (
    <AuthContext.Provider value={contextValue}>
      <div>
        <AppBar username={username} isLoggedIn={isLoggedIn} logout={logout} />
      </div>
      <div className="h-screen bg-slate-800">
        <main>{isLoggedIn ? <Home /> : <Login onLogin={login} />}</main>
      </div>
    </AuthContext.Provider>
  );
};

export default AuthSystem;
