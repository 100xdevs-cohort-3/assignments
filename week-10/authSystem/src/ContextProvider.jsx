import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [username, setUsername] = useState(null);

  function login(name) {
    setUsername({ name });
  }

  function logout() {
    setUsername(null);
  }

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
