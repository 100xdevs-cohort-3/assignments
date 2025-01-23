import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/AuthContext";

const AppBar = (props) => {
  const { isContextOn, userData, setUserData } = useContext(userContext);

  function LogOut() {
    if (isContextOn) {
      setUserData({
        username: null,
        password: null,
      });
    } else {
      props.setUserData({
        username: null,
        password: null,
      });
    }
  }

  if (isContextOn) {
    if (userData.username) {
      return (
        <div className="app-bar">
          <h1>Auth System Demo</h1>
          <div className="user-section">
            <h1>Hi, {userData.username}</h1>
            <button onClick={LogOut}>Log Out</button>
          </div>
        </div>
      );
    }
    return (
      <div className="app-bar">
        <h1>Auth System Demo</h1>
        <div className="user-section">
          <button>
            <Link to={"/login"}>Log In</Link>
          </button>
        </div>
      </div>
    );
  } else {
    if (props.username) {
      return (
        <div className="app-bar">
          <h1>Auth System Demo</h1>
          <div className="user-section">
            <h1>Hi, {props.username}</h1>
            <button onClick={LogOut}>Log Out</button>
          </div>
        </div>
      );
    }
    return (
      <div className="app-bar">
        <h1>Auth System Demo</h1>
        <div className="user-section">
          <button>
            <Link to={"/login"}>Log In</Link>
          </button>
        </div>
      </div>
    );
  }
};

export default AppBar;
