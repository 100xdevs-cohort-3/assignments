import React, { useContext } from 'react'
import {AuthenticationContext} from "./AuthSystem"




const AppBar = ({ username: propUsername, isLogIn: propisLoginIn, logout: propLogout}) => {
 
  const contextValue = useContext(AuthenticationContext);

  const displayUsername = contextValue?.username ?? propUsername;
  const displayIsLogin = contextValue?.isLogIn ?? propisLoginIn;
  const handleLogout = contextValue?.logout ?? propLogout;
 
 
 
  return (
    <div style={{
      backgroundColor: "navy",
      color: "white",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignContent: "center"
      }}>
        <h1 style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
        }}>Auth system demo</h1>
        
        {displayIsLogin ? (
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem"
          }}>

            <span>Welcome {displayUsername}</span>
            <button
            onClick={handleLogout}
            style={{
              backgroundColor: "white",
              color: "#3f51b5",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: 'pointer'
            }}>Logout</button>

          </div>
        ): (
          <span>Not logged in</span>
        )}
    </div>
  )
}

export default AppBar