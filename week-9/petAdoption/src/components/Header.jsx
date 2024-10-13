import React from "react";

const Header = () => {
  return (
    <header
      style={{
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding : "10px",
        backgroundColor : "#FFBE0B",
        fontSize : '30px'
      }}
    >
      <h1>Pet Adoption Form</h1>
    </header>
  );
};

export default Header;
