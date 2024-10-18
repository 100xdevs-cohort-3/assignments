import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../ContextProvider";

function Login({ useContextAPI, setLocalUsername }) {
  const nameRef = useRef();

  const { login } = useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    if (useContextAPI) {
      login(name);
    } else {
      setLocalUsername({ name });
    }
  }

  return (
    <div className="login-form">
      <form action="" onSubmit={handleLogin}>
        <div className="input-div">
          <input
            type="text"
            placeholder="Enter username"
            className="username-input"
            ref={nameRef}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
