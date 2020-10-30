/** @jsx jsx */
import { jsx } from "theme-ui";

const ItemCard = ({ id, name, price, stock, img }) => {
  return (
    <div
      sx={{ opacity: stock === 0 ? "0.5" : "1", cursor: "pointer" }}
      onClick={() => console.log(`Redirect to detail page product id: ${id}`)} // TODO: add routing
    >
      <h4 sx={{ textAlign: "center" }}>{name}</h4>
      <img src={img} alt={name} sx={{ width: "200px", height: "250px" }} />
      <span>{price}</span>
      {stock === 0 ? <p>Out of stock</p> : null}
    </div>
  );
};

export default ItemCard;
