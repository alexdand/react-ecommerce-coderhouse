import React from "react";
import { Link } from "react-router-dom";
import { StyledItem } from "./styles.css";

const MenuItem = ({ item }) => {
  return (
    <StyledItem key={item}>
      <Link to={`/${item}`}>{item.toUpperCase()}</Link>
    </StyledItem>
  );
};

export default MenuItem;
