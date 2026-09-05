import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { wishItemsState } from '../store/wishItemsState';
import { cartItemsState } from '../store/cartItemsState';
import ProductImage from './ProductImage';
export default function WishList() {
  const [items, setItems] = useRecoilState(wishItemsState);
  const [cart, setCart] = useRecoilState(cartItemsState);
  const [deleted, setDeleted] = useState(null);
  const [message, setMessage] = useState('');
  function add(item) {
    setCart((previous) =>
      previous.some((product) => product.id === item.id)
        ? previous
        : [...previous, { ...item, quantity: 1 }],
    );
    setMessage(item.name + ' added to cart.');
  }
  function remove(item, index) {
    setDeleted({ item, index });
    setItems((previous) => previous.filter((product) => product.id !== item.id));
    setMessage(item.name + ' removed from wishlist.');
  }
  function undo() {
    setItems((previous) => {
      const next = [...previous];
      if (!next.some((item) => item.id === deleted.item.id))
        next.splice(deleted.index, 0, deleted.item);
      return next;
    });
    setDeleted(null);
    setMessage('Restored to wishlist.');
  }
  return (
    <>
      <h1>Good things, saved.</h1>
      <p role="status">{message}</p>
      {deleted && (
        <button className="secondary" onClick={undo}>
          Undo last deletion
        </button>
      )}
      <div className="grid">
        {!items.length && <p>Your wishlist is empty.</p>}
        {items.map((item, index) => {
          const added = cart.some((product) => product.id === item.id);
          return (
            <article key={item.id}>
              <ProductImage item={item} />
              <h2>{item.name}</h2>
              <p>₹{item.price.toLocaleString('en-IN')}</p>
              <div className="row">
                <button
                  title={added ? 'Added to Cart' : 'Add to Cart'}
                  disabled={added}
                  onClick={() => add(item)}
                >
                  {added ? 'Added to Cart' : 'Add to cart'}
                </button>
                <button className="secondary" onClick={() => remove(item, index)}>
                  Delete
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
