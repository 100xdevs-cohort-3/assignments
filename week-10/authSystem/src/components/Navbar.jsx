import React, { useContext } from "react";
import { AuthContext } from "../ContextProvider";

function Navbar({ useContextAPI, localUsername, setLocalUsername }) {
  const { username, logout } = useContext(AuthContext);
  function handleLogout() {
    if (useContextAPI) {
      logout();
    } else {
      setLocalUsername(null);
    }
  }
  return (
    <>
      <div className="navbar">
        <div className="heading">
          <h1>Auth System Demo</h1>
        </div>
        <div>
          {useContextAPI ? (
            username ? (
              <div style={{ display: "flex" }}>
                <h2>Welcome! {username.name}</h2>
                <button className="btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <button className="btn">Login</button>
            )
          ) : localUsername ? (
            <div style={{ display: "flex" }}>
              <h2>Welcome! {localUsername.name}</h2>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <button className="btn">Login</button>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
