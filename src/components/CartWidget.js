import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <FiShoppingCart />
      </Link>
    </div>
  );
};

export default CartWidget;
