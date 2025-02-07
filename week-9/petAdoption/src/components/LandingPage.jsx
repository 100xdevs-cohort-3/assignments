import React from "react";
import FrontPageAnimation from "../assets/FrontPageAnimation.gif";
import { useNavigate } from "react-router-dom";
import "../Styles/LandingPage.css";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/petAdoptionForm");
  };

  return (
    <div className="header-container">
      <h1 className="header-text">
        <Typewriter
          words={["Adopt a pet, save a life", "Be their hero 🐾"]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={70}
          delaySpeed={1000}
        />
      </h1>
      <div className="animation-container">
        <img
          src={FrontPageAnimation}
          alt="Animation"
          className="animation-image"
        />
      </div>
      <button onClick={handleClick} className="adoption-form-button">
        Click to Fill the Adoption Form!
      </button>
    </div>
  );
};

export default Header;
