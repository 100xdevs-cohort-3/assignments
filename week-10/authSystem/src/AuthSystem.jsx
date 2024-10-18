import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Checkbox from "./components/Checkbox";
import Login from "./components/Login";
import AuthContextProvider from "./ContextProvider";

function AuthSystem() {
  const [useContextAPI, setUseContextAPI] = useState(false);
  const [localUsername, setLocalUsername] = useState(null);
  return (
    <>
      <AuthContextProvider>
        <Navbar
          useContextAPI={useContextAPI}
          localUsername={localUsername}
          setLocalUsername={setLocalUsername}
        />
        <Checkbox
          useContextAPI={useContextAPI}
          setUseContextAPI={setUseContextAPI}
        />
        <Login
          useContextAPI={useContextAPI}
          setLocalUsername={setLocalUsername}
        />
      </AuthContextProvider>
    </>
  );
}

export default AuthSystem;
