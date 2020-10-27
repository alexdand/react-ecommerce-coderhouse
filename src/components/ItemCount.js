/** @jsx jsx */
import { useState } from "react";
import { jsx } from "theme-ui";

// Will be used in ProductDetail component..

const ItemCount = ({ stock, initial = 0, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const decrease = () =>
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);

  const increase = () =>
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);

  return (
    <div sx={{}}>
      {stock === 0 ? (
        <p>Stock no disponible</p>
      ) : (
        <div>
          <div>
            <button onClick={decrease}>-</button>
            <span>{quantity}</span>
            <button onClick={increase}>+</button>
          </div>
          <button disabled={quantity < 1} onClick={() => onAdd(quantity)}>
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
