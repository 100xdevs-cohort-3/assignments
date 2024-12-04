import React from "react";
import { Link } from "react-router-dom";

const WishListIcon = () => {
  return (
    <Link to="/wishlist">
      <i
        className="fa-regular fa-heart"
        style={{ fontSize: "2rem", cursor: "pointer", color: "white" }}
      ></i>
    </Link>
  );
};

export default WishListIcon;
