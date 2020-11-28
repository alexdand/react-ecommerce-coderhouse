import React from "react";
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
  const { name, price, stock, img, description } = item;
  const { addProductToCart } = useCart();

  const addItemToCart = quantity => {
    addProductToCart(item, quantity);
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
      </Details>
    </DetailContainer>
  );
};

export default ItemDetail;
