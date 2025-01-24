import React, { useEffect, useState } from "react";
import style from "./WishList.module.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { wishItemAtom } from "../store/wishItemState";
import { cartItemAtom } from "../store/cartItemState";
import MessageOverlay from "./MessageOverlay";

const WishList = () => {
  const [products, setProducts] = useRecoilState(wishItemAtom);
  const setCart = useSetRecoilState(cartItemAtom);
  const [messageContent, setMessageContent] = useState("");

  useEffect(() => {
    const clock = setTimeout(() => {
      setMessageContent("");
    }, 3000);

    return () => {
      clearTimeout(clock);
    };
  }, [messageContent]);

  function addToCart(product) {
    const newProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    setCart((prevItems) => {
      if (!prevItems.find((product) => product.id === newProduct.id)) {
        setMessageContent("Succesfully added to cart");
        return [...prevItems, newProduct];
      }

      setMessageContent("Product already in Cart");
      return prevItems;
    });
  }

  function deleteProduct(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <div className={style.container}>
      <h1 style={{ margin: "10px 0" }}>Wishlist</h1>
      <div className={style.productsContainer}>
        {products.length === 0 ? (
          <div>No wishlists.</div>
        ) : (
          products.map((product) => (
            <div className={style.productCard} key={product.id}>
              <img src={product.image} alt="productImage" />

              <div className={style.productInfo}>
                <span>{product.title}</span>
                <span>₹ {product.price}</span>
              </div>

              <div className={style.productButtons}>
                <button onClick={() => addToCart(product)}>Add to cart</button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "blue",
                  }}
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {messageContent && <MessageOverlay message={messageContent} />}
    </div>
  );
};

export default WishList;
