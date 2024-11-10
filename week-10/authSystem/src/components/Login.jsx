// import React from 'react'
import "../index.css"

import { useContext, useState } from "react"
import { AuthContext } from "./AuthSystem"

const Login = () => {
  const[username, setUsername] = useState('')
  const contextValue = useContext(AuthContext)

  const LoginHandler=({onLogin: propOnLogin})=>{
    if(contextValue?.login){
      contextValue.login(username)
    }else if(propOnLogin){
      propOnLogin(username)
    }
    setUsername(" ")
  }
  return (
    <div>
      <div className="">
        <p>Enter the Username</p>
        <input type="text"
        id="username"
        onChange={(e)=> setUsername(e.target.value)}
        value={username}
        placeholder='Enter Your name Sir. ' />
      </div>
      <div className=" text-white">
        <button className="bg-blue-200" onClick={LoginHandler}>Login</button>
      </div>
    </div>
  )
}

export default Login