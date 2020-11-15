import React from "react";
import styled from "styled-components";
import { useCart } from "../../context/CartProvider";

export const StyledCart = styled.div`
  display: grid;
`;

const Cart = () => {
  const { productsInCart } = useCart();
  console.log(productsInCart);

  return (
    <StyledCart>
      {productsInCart.map((product) => (
        <div key={product.id}>{JSON.stringify(product)}</div>
      ))}
    </StyledCart>
  );
};

export default Cart;
