import React from "react";

const Header = ({ message }) => {
  return (
    <div
      style={{
        backgroundColor: "#3ded97",
        opacity: 0.5,
        height: 54,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 24,
        fontWeight: "bold",
      }}
    >
      {message}
    </div>
  );
};

export default Header;
