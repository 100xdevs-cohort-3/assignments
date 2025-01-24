import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartItemAtom } from "../store/cartItemState";
import style from "./AmazonCart.module.css";
import { cartTotalSelector } from "../store/cartTotalSelector";
import Modal from "./Modal";

const AmazonCart = () => {
  const [products, setProducts] = useRecoilState(cartItemAtom);
  const { totalProducts, totalPrice } = useRecoilValue(cartTotalSelector);
  const [modalVisibility, setModalVisibility] = useState(false);

  function updateQuantity(id, operation) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + operation) }
          : product
      )
    );
  }

  function removeProduct(id) {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  }

  return (
    <div className={style.container}>
      <div className={style.cartContainer}>
        <h1 style={{ margin: "10px 0" }}>Shopping Cart</h1>
        {products.length === 0 ? (
          <div>No Products.</div>
        ) : (
          products.map((product) => (
            <div className={style.productCard} key={product.id}>
              <img src={product.image} alt="productImage" />

              <div className={style.productInfo}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{product.title}</span>
                  <span>₹ {product.price}</span>
                </div>

                <div className={style.productButtons}>
                  <button onClick={() => updateQuantity(product.id, -1)}>
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button onClick={() => updateQuantity(product.id, +1)}>
                    +
                  </button>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "blue",
                    }}
                    onClick={() => removeProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className={style.summaryContainer}>
        <h1 style={{ margin: "10px 0" }}>Order Summary</h1>
        <div style={{ borderBottom: "1px solid #d8d8d8" }}>
          <span>Items ({totalProducts})</span>
          <span>₹{totalPrice}</span>
        </div>
        <div className={style.orderTotal}>
          <span>Order Total:</span>
          <span>₹{totalPrice}</span>
        </div>
        <button
          className={style.checkoutButton}
          onClick={() => setModalVisibility(true)}
          disabled={products.length === 0}
        >
          Proceed to checkout
        </button>
      </div>

      {modalVisibility && (
        <Modal
          closeHandler={() => {
            setModalVisibility(false);
            setProducts([]);
          }}
          amount={totalPrice}
        />
      )}
    </div>
  );
};

export default AmazonCart;
