import React, { useContext } from "react";
import { AuthContext } from "./AuthSystem";

function AppBar() {
  const { loggedin, username, handleLogout } = useContext(AuthContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px",
        color: "white",
        backgroundColor: "#3f98b5",
      }}
    >
      <h3>Auth System Demo</h3>
      {!loggedin && <div>Not logged in</div>}
      {loggedin && (
        <div>
          Welcome {username}!
          <span
            onClick={handleLogout}
            style={{
              padding: "8px",
              background: "white",
              borderRadius: "4px",
              color: "black",
              cursor: "pointer",
              marginLeft: "12px",
            }}
          >
            Logout
          </span>
        </div>
      )}
    </div>
  );
}

export default AppBar;
