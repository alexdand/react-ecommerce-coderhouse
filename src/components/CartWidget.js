/** @jsx jsx */
import { jsx } from "theme-ui";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div sx={{ cursor: "pointer" }}>
      <Link to="/cart" sx={{ variant: "styles.a" }}>
        <FiShoppingCart sx={{ fontSize: "2rem" }} />
      </Link>
    </div>
  );
};

export default CartWidget;
