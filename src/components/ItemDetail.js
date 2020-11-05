/** @jsx jsx */
import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { jsx } from "theme-ui";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [completeOrdering, setCompleteOrdering] = useState(false);
  const [quantity, setQuantityOrder] = useState(0);

  const addItemToCart = (quantity) => {
    if (quantity > 0) {
      setQuantityOrder(quantity);
      setCompleteOrdering(true);
    }
  };

  const finishOrder = () => {
    history.push({
      pathname: "/cart",
      search: "?cartId=123", // una idea para mas adelante todavia no se como voy a hacer el Cart component
      state: { quantity: quantity },
    });
    console.log(`Added ${quantity} ${item.name} to the cart.`);
  };

  const { name, price, stock, img, description } = item;
  const history = useHistory();

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
      {!completeOrdering ? (
        <Fragment>
          <ItemCount stock={stock} onAdd={addItemToCart} />
        </Fragment>
      ) : (
        <button onClick={finishOrder}>Terminar Compra</button>
      )}
    </div>
  );
};

export default ItemDetail;
