/** @jsx jsx */
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { jsx } from "theme-ui";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartProvider";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantityOrder] = useState(0);
  const { name, price, stock, img, description } = item;
  const history = useHistory();
  const { addProductToCart } = useCart();

  const addItemToCart = (quantity) => {
    setQuantityOrder(quantity);
    addProductToCart(item, quantity);
  };

  const finishOrder = () => {
    history.push({
      pathname: "/cart",
      search: "?cartId=123", // TODO: una idea para mas adelante todavia no se como voy a hacer el Cart component
      state: { quantity: quantity },
    });
  };

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
      <ItemCount stock={stock} onAddToCart={addItemToCart} />
      <button onClick={finishOrder}>Terminar Compra</button>
    </div>
  );
};

export default ItemDetail;
