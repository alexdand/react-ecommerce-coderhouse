/** @jsx jsx */
import { Link } from "react-router-dom";
import { jsx } from "theme-ui";

const ItemCard = ({ id, name, price, stock, img }) => {
  return (
    <Link
      to={`/products/${id}`}
      sx={{
        variant: "styles.a",
        opacity: stock === 0 ? "0.5" : "1",
        cursor: "pointer",
      }}
    >
      <h4 sx={{ textAlign: "center" }}>{name}</h4>
      <img src={img} alt={name} sx={{ width: "200px", height: "250px" }} />
      <span>{price}</span>
      {stock === 0 ? <p>Out of stock</p> : null}
    </Link>
  );
};

export default ItemCard;
