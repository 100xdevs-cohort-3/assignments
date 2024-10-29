import React from "react";
import {useState,useRef} from "react" 
const Login = ({login}) => {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  function signin(){
    //assuming successful login 
    login(nameRef.current.value);
  }
  return (
    <div style={{marginLeft:"auto"}}>
        <div>
          <input
            ref={nameRef}
            type="text"
            placeholder="Username"
            id="username"
            style={{height:"30px", margin:10}}
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            id="password"
            style={{height:"30px",  margin:10}}
          />
          <button style={{height:"35px",  margin:10}} onClick={signin}>Login</button>
        </div>
    </div>
  );
};

export default Login;
