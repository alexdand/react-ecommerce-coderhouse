/** @jsx jsx */
import { jsx } from "theme-ui";
import { FiShoppingCart } from "react-icons/fi";

const CartWidget = () => {
  return (
    <div sx={{ cursor: "pointer" }}>
      <FiShoppingCart sx={{ fontSize: "2rem" }} />
    </div>
  );
};

export default CartWidget;
