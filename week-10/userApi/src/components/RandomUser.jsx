import React, { useEffect } from "react";

const RandomUser = ({ userName, url, id }) => {
  return (
    <div
      style={{
        width: "170px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
      key={id}
    >
      <div>
        <img
          src={`${url}`}
          alt="prifile pic"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "100px",
          }}
        />
      </div>
      <div>
        <h3>{userName}</h3>
      </div>
    </div>
  );
};

export default RandomUser;
