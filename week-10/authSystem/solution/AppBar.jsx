import { AuthContext } from "./AuthSystem";
import { useContext } from "react";

const AppBar = ({ username: propUsername, isLoggedIn: propIsLoggedIn, logout: propLogout }) => {
  const contextValue = useContext(AuthContext);

  const displayUsername = contextValue?.username ?? propUsername;
  const displayIsLoggedIn = contextValue?.isLoggedIn ?? propIsLoggedIn;
  const handleLogout = contextValue?.logout ?? propLogout;

  return (
    <div>
      <h1>Auth System Demo</h1>
      {displayIsLoggedIn ? (
        <div>
          <span>Welcome, {displayUsername}!</span>
          <button
          onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <span>Not logged in</span>
      )}
    </div>
  );
};

export default AppBar;