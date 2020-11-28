import React from "react";
import {
  StyledItemCard,
  StyledImage,
  StyledLink,
  StyledTitle,
  StyledPrice,
  StyledButton,
} from "./styles.css";
import { useCart } from "../../context/CartProvider";

const ItemCard = item => {
  const { addProductToCart } = useCart();

  const addToCart = (evt, item) => {
    addProductToCart(item, 1);
    evt.stopPropagation();
  };

  const { id, name, price, stock, img } = item;

  return (
    <StyledItemCard>
      <StyledLink to={`/productos/${id}`}>
        <StyledImage src={img} alt={name} />
        <StyledTitle>{name}</StyledTitle>
      </StyledLink>
      <StyledPrice>${price}</StyledPrice>
      {stock === 0 ? <p>Out of stock</p> : null}
      <StyledButton onClick={evt => addToCart(evt, item)}>
        Agregar al carrito
      </StyledButton>
    </StyledItemCard>
  );
};

export default ItemCard;
