import React from "react";

const Card = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div
        style={{
          height: 100,
          width: 100,
          border: "1px solid gray",
          borderRadius: 5,
          padding: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: 5,
        padding: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
