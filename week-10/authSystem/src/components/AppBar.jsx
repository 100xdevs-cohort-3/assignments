// import React from 'react'

import { useContext } from "react";
import { AuthContext } from "./AuthSystem";

const AppBar = ({
  username: propUsername,
  isLoggedIn: propIsLoggedIn,
  logout: propLogout,
}) => {
  const contextValue = useContext(AuthContext);

  const displayUsername = contextValue?.username ?? propUsername;
  const displayIsLoggedIn = contextValue?.isLoggedIn ?? propIsLoggedIn;
  const handleLogout = contextValue?.logout ?? propLogout;
  return (
    <div>
      <div className="text-white bg-blue-300 flex justify-between pl-10 pr-10">
        <p className="mt-3 mb-3 font-bold text-4xl">Auth Demo System</p>
        {displayIsLoggedIn ? (
          <div className="mt-4 mb-4">
            <span className="pr-5">Welcome!, {displayUsername}</span>
            <button
              onClick={handleLogout}
              className="bg-blue-200 p-2 px-4 text-white rounded-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <span>Not Logged-in</span>
        )}
      </div>
    </div>
  );
};

export default AppBar;
