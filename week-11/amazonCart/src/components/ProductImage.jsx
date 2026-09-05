import { useState } from 'react';
export default function ProductImage({ item }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="product-image">
      {item.image && !failed ? (
        <img src={item.image} alt={item.name} onError={() => setFailed(true)} />
      ) : (
        <span role="img" aria-label="Product image unavailable">
          ▧
        </span>
      )}
    </div>
  );
}
