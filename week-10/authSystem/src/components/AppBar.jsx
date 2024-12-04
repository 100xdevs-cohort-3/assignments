import React, { useState } from 'react'
import Login from './Login'

const AppBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  
  function login(username) {
    setLoggedIn(true);
    setUsername(username);
  }
  function logout(){
    setLoggedIn(false);
    setUsername("");
  }
  return (
    <div style={{ backgroundColor : "rgb(64, 152, 181)", height:"100px", display:"flex",padding:10}}>
    <div>
        <h1 style={{color:"white"}}>Auth System</h1>
    </div>
        {loggedIn ? <div style={{marginLeft:"auto", fontSize:"30px", color:"white", display:"flex"}}>Welcome {username} <button onClick={logout} style={{height:"30px", marginLeft:10}}>Logout</button></div> : <Login login={login}/>}
    </div>
  )
}

export default AppBar
