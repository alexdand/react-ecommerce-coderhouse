import React from "react";
import { useHistory } from "react-router-dom";
import ItemCount from "../ItemCount";
import { useCart } from "../../context/CartProvider";
import {
  DetailContainer,
  Details,
  ImageWrapper,
  StyledHeader,
  StyledImage,
} from "./styles.css";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantityOrder] = React.useState(0);
  const { name, price, stock, img, description } = item;
  const history = useHistory();
  const { addProductToCart } = useCart();

  const addItemToCart = quantity => {
    setQuantityOrder(quantity);
    addProductToCart(item, quantity);
  };

  const finishOrder = () => {
    history.push({
      pathname: "/cart",
      state: { quantity: quantity },
    });
  };

  return (
    <DetailContainer>
      <ImageWrapper>
        <StyledImage src={img} alt={name} />
      </ImageWrapper>
      <Details>
        <StyledHeader>{name}</StyledHeader>
        <div>${price}</div>
        <div>{description}</div>
        <ItemCount stock={stock} onAddToCart={addItemToCart} />
        <button onClick={finishOrder}>Terminar Compra</button>
      </Details>
    </DetailContainer>
  );
};

export default ItemDetail;
