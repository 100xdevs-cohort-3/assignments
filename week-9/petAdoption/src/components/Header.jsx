import React from "react";

const Header = ({ message }) => {
  return (
    <div>
      <p
        style={{
          fontSize: 30,
          backgroundColor: "#c59771bd",
          padding: 5,
          fontWeight: "bold",
        }}
      >
        {message}
      </p>
    </div>
  );
};

export default Header;
