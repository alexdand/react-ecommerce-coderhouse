import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const ItemCount = ({ stock, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();

  const decrease = () =>
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);

  const increase = () =>
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);

  const handleClickBuy = quantity => {
    onAddToCart(quantity);
    history.push("/carrito");
  };

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
          <button onClick={() => handleClickBuy(quantity)}>Comprar</button>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
