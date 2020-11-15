import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartProvider";

const CartWidget = () => {
  const { productsInCart } = useCart();

  return (
    <div>
      <Link to="/cart">
        <FiShoppingCart />
        <span>{productsInCart.length}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
