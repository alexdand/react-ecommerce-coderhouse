import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledItem = styled.li`
  list-sttyle-type: none;
  padding: 10px;
  margin: 0 10px;
  font-weight: bold;
`;

const MenuItem = ({ item }) => {
  return (
    <StyledItem key={item}>
      <Link to={`/${item}`}>{item.toUpperCase()}</Link>
    </StyledItem>
  );
};

export default MenuItem;
