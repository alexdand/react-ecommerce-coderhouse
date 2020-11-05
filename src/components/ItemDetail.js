/** @jsx jsx */
import { jsx } from "theme-ui";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const addItemToCart = (quantity) => {
    if (quantity > 0) {
      console.log(`Added ${quantity} ${item.name} to the cart.`);
    }
  };

  const { name, price, stock, img, description } = item;

  return (
    <div sx={{}}>
      <h2
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        {name}
      </h2>
      <img sx={{ width: "300px", height: "400px" }} src={img} alt={name} />
      <div>
        <span>${price}</span>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <ItemCount stock={stock} onAdd={addItemToCart} />
    </div>
  );
};

export default ItemDetail;
