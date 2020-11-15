import React from "react";
import { useHistory } from "react-router-dom";
import ItemCount from "../ItemCount";
import { useCart } from "../../context/CartProvider";
import { StyledHeader, StyledImage } from "./styles.css";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantityOrder] = React.useState(0);
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
    <div>
      <StyledHeader>{name}</StyledHeader>
      <StyledImage src={img} alt={name} />
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
