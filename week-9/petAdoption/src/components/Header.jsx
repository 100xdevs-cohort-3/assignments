import React from "react";

const Header = () => {
  return (
    <div style={{
      position: "relative"
    }}>
   
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "#cb9e7b",
        opacity: 0.5,
        zIndex: 1,
        height:60
      }}></div>
     
      <div style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        zIndex: 2,
      
      }}>
        <h1 style={{ color: "#335624" , margin:20}}>
          Pet Adoption Form
        </h1>
      </div>
    </div>
  );
};

export default Header;