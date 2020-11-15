import React from "react";
import { Link } from "react-router-dom";
import { StyledImage, StyledLink, StyledTitle } from "./styles.css";

const ItemCard = ({ id, name, price, stock, img }) => {
  return (
    <StyledLink>
      <Link to={`/products/${id}`}>
        <StyledTitle>{name}</StyledTitle>
        <StyledImage src={img} alt={name} />
        <span>{price}</span>
        {stock === 0 ? <p>Out of stock</p> : null}
      </Link>
    </StyledLink>
  );
};

export default ItemCard;
