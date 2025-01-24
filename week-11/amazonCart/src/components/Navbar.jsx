import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { cartTotalSelector } from "../store/cartTotalSelector";
import { useRecoilValue } from "recoil";

const Navbar = () => {
  const { totalProducts } = useRecoilValue(cartTotalSelector);

  return (
    <div className={style.container}>
      <Link to={"/"}>Amazon.in</Link>

      <div className={style.userInformation}>
        <p>Hello, User</p>

        <Link to={"/wishlist"}>
          <Heart />
        </Link>

        <Link to={"/cart"} style={{ position: "relative" }}>
          <span
            style={{
              height: 20,
              width: 20,
              position: "absolute",
              top: -10,
              right: -10,
              backgroundColor: "blue",
              borderRadius: 100,
              textAlign: "center  ",
            }}
          >
            {totalProducts}
          </span>
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
