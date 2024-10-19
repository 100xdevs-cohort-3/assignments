import axios from "axios";
import React from "react";

function RandomUser({ user, index }) {
  return (
    <div className="card">
      <img src={user.picture.large} alt="" className="profile" />
      <h2 className="name">
        {user.name.first} {user.name.last}
      </h2>
    </div>
  );
}

export default RandomUser;
