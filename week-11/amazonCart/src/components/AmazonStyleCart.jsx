import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { cartItemsState } from '../store/cartItemsState';
import { cartTotalSelector } from '../store/cartTotalSelector';
import ProductImage from './ProductImage';
export default function AmazonStyleCart() {
  const [cart, setCart] = useRecoilState(cartItemsState);
  const total = useRecoilValue(cartTotalSelector);
  const [message, setMessage] = useState('');
  function quantity(id, value) {
    const number = Number(value);
    if (Number.isInteger(number) && number >= 1 && number <= 99)
      setCart((previous) =>
        previous.map((item) => (item.id === id ? { ...item, quantity: number } : item)),
      );
  }
  return (
    <>
      <h1>Your shopping cart.</h1>
      <p role="status">{message}</p>
      {!cart.length ? (
        <p>
          Your cart is empty. <Link to="/">Explore your wishlist.</Link>
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <article key={item.id} className="cart-line">
              <ProductImage item={item} />
              <div>
                <h2>{item.name}</h2>
                <p>₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                <label>
                  Quantity
                  <input
                    type="number"
                    min="1"
                    max="99"
                    value={item.quantity}
                    onChange={(event) => quantity(item.id, event.target.value)}
                  />
                </label>
                <button
                  className="secondary"
                  onClick={() =>
                    setCart((previous) => previous.filter((product) => product.id !== item.id))
                  }
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
          <section className="card">
            <h2>
              Subtotal ({total.count} items): ₹{total.price.toLocaleString('en-IN')}
            </h2>
            <p>This is a shopping-cart exercise. No payment is collected.</p>
            <button
              onClick={() => {
                setCart([]);
                setMessage('Demo order complete. Your cart has been cleared.');
              }}
            >
              Complete demo order
            </button>
          </section>
        </>
      )}
    </>
  );
}
