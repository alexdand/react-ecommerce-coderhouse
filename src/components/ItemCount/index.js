import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const decrease = () =>
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);

  const increase = () =>
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);

  return (
    <div>
      {stock === 0 ? (
        <p>Stock no disponible</p>
      ) : (
        <div>
          <div>
            <button onClick={decrease}>-</button>
            <span>{quantity}</span>
            <button onClick={increase}>+</button>
          </div>
          <button disabled={quantity < 1} onClick={() => onAddToCart(quantity)}>
            Agregar al carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
