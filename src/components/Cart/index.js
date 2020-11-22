import React from "react";
import { useCart } from "../../context/CartProvider";
import {
  StyledCart,
  StyledList,
  StyledRow,
  StyledImage,
  BuyButton,
  Total,
  EmptyCart,
  StyledLink,
} from "./styles.css";
import { calculateTotal, createOrder } from "./utils";

const Cart = () => {
  const { productsInCart, removeProductFromCart } = useCart();
  const totalSum = calculateTotal(productsInCart);
  const removeFromCart = product => removeProductFromCart(product);

  return (
    <StyledCart>
      {productsInCart.length === 0 ? (
        <EmptyCart>
          <h1>Your cart is empty</h1>
          <h4>¿Don't know what to buy? ¡Check out our recommendations!</h4>
          <StyledLink to="/">Go back</StyledLink>
        </EmptyCart>
      ) : (
        <StyledList>
          {productsInCart.map(({ item, count }) => (
            <StyledRow key={item.id}>
              <StyledImage src={item.img} alt={item.name} />
              <span>{item.name}</span>
              <span>{item.price}</span>
              <span>{count}</span>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </StyledRow>
          ))}
        </StyledList>
      )}
      {productsInCart.length > 0 && <Total>Total: ${totalSum}</Total>}
      {productsInCart.length > 0 && (
        <BuyButton onClick={createOrder}>Finish Order</BuyButton>
      )}
    </StyledCart>
  );
};

export default Cart;
