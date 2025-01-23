import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/AuthContext";

const Login = (props) => {
  const navigate = useNavigate();
  const { isContextOn, setUserData } = useContext(userContext);
  const [formData, setFormData] = useState({
    username: null,
    password: null,
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      alert("Username & Password Required.");
      return;
    }

    if (isContextOn) {
      setUserData(formData);
    } else {
      props.setUserData(formData);
    }
    navigate("/");
  }

  return (
    <div>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                username: e.target.value,
              }))
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                password: e.target.value,
              }))
            }
          />
        </div>

        <button type="submit" onClick={handleSubmit}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
