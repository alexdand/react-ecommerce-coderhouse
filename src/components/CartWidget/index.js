import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../context/CartProvider";
import { StyledLink } from "./styles.css";

const CartWidget = () => {
  const { productsInCart } = useCart();

  const countItems = productsInCart.reduce(
    (total, { count }) => total + count,
    0
  );

  return (
    <div>
      <StyledLink to="/cart">
        <FiShoppingCart />
        <span>{countItems}</span>
      </StyledLink>
    </div>
  );
};

export default CartWidget;
