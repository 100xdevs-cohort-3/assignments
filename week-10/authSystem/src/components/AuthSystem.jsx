import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "./AppBar";
import Home from "./Home";
import Login from "./Login";
import { userContext } from "../context/AuthContext";
import "../Auth.css";

const AuthSystem = () => {
  const { isContextOn, setIsContextOn } = useContext(userContext);

  if (isContextOn) {
    return (
      <div>
        <BrowserRouter>
          <AppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  const [userData, setUserData] = useState({
    username: null,
    password: null,
  });

  return (
    <div>
      <BrowserRouter>
        <AppBar
          isContextOn={isContextOn}
          setUserData={setUserData}
          username={userData.username}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login userData={userData} setUserData={setUserData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AuthSystem;
