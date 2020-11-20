import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartProvider";
import { StyledCart, StyledList, StyledRow, StyledImage } from "./styles.css";

const Cart = () => {
  const { productsInCart, removeProductFromCart } = useCart();

  const totalSum = productsInCart.reduce((sum, { item, count }) => {
    const subtotal = item.price * count;
    return sum + subtotal;
  }, 0);

  const removeFromCart = (product) => removeProductFromCart(product);

  return (
    <StyledCart>
      <StyledList>
        {productsInCart.length === 0 ? (
          <>
            <span>No products in cart</span>
            <Link to="/">Go back</Link>
          </>
        ) : (
          productsInCart.map((product) => {
            const { item, count } = product;
            return (
              <StyledRow key={item.id}>
                <StyledImage src={item.img} alt={item.name} />
                <span>{item.name}</span>
                <span>{item.price}</span>
                <span>{count}</span>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </StyledRow>
            );
          })
        )}
      </StyledList>
      {productsInCart.length > 0 && <span>Total: {totalSum}</span>}
    </StyledCart>
  );
};

export default Cart;
