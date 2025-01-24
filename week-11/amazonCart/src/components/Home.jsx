import React, { useEffect, useState } from "react";
import {
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { productsState } from "../store/productsState";
import style from "./Home.module.css";
import { Heart } from "lucide-react";
import { cartItemAtom } from "../store/cartItemState";
import { wishItemAtom } from "../store/wishItemState";
import MessageOverlay from "./MessageOverlay";

const Home = () => {
  const products = useRecoilValueLoadable(productsState);
  const setCart = useSetRecoilState(cartItemAtom);
  const setWishlist = useSetRecoilState(wishItemAtom);
  const [messageContent, setMessageContent] = useState("");

  useEffect(() => {
    const clock = setTimeout(() => {
      setMessageContent("");
    }, 3000);

    return () => {
      clearTimeout(clock);
    };
  }, [messageContent]);

  function addToCartOrWishlist(product, type) {
    const newProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    const setFunction = type === "cart" ? setCart : setWishlist;
    const successMessage =
      type === "cart"
        ? "Succesfully added to cart"
        : "Succesfully added to wishlist";
    const errorMessage =
      type === "cart"
        ? "Product already in Cart"
        : "Product already in wishlist";

    setFunction((prevItems) => {
      if (!prevItems.find((product) => product.id === newProduct.id)) {
        setMessageContent(successMessage);
        return [...prevItems, newProduct];
      }

      setMessageContent(errorMessage);
      return prevItems;
    });
  }

  if (products.state === "loading") {
    return <div>Loading...</div>;
  } else if (products.state === "hasError") {
    return <div>Failed to fetch.</div>;
  } else {
    return (
      <div className={style.container}>
        <h1>Products</h1>
        <div className={style.productsContainer}>
          {/* Can be created in Card component seperately */}
          {products.contents.map((product) => (
            <div className={style.productCard} key={product.id}>
              <img src={product.image} alt="productImage" />
              <div className={style.productInfo}>
                <span>{product.title}</span>
                <span>₹ {product.price}</span>
              </div>
              <div className={style.productButtons}>
                <button onClick={() => addToCartOrWishlist(product, "cart")}>
                  Add to Cart
                </button>
                <button
                  onClick={() => addToCartOrWishlist(product, "wishlist")}
                >
                  <Heart />
                </button>
              </div>
            </div>
          ))}
        </div>

        {messageContent && <MessageOverlay message={messageContent} />}
      </div>
    );
  }
};

export default Home;
