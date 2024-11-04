import { AuthContext } from "./AuthSystem";
import { useContext } from "react";

const AppBar = ({ username: propUsername, isLoggedIn: propIsLoggedIn, logout: propLogout }) => {
  const contextValue = useContext(AuthContext);

  const displayUsername = contextValue?.username ?? propUsername;
  const displayIsLoggedIn = contextValue?.isLoggedIn ?? propIsLoggedIn;
  const handleLogout = contextValue?.logout ?? propLogout;

  return (
    <div style={{
      backgroundColor: '#3f98b5',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Auth System Demo</h1>
      {displayIsLoggedIn ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>Welcome, {displayUsername}!</span>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: 'white',
              color: '#3f51b5',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
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