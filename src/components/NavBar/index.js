import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import MenuItem from "../MenuItem";
import { StyledContainer, StyledMenu, StyledWidgets } from "./styles.css";

const NavBar = () => {
  const menuItems = ["home", "categories"];

  return (
    <StyledContainer>
      <Link to="/">
        <h1>Jack Food Service</h1>
      </Link>
      <StyledMenu>
        {menuItems.map(item => (
          <MenuItem key={item} item={item} />
        ))}
      </StyledMenu>
      <StyledWidgets>
        <CartWidget />
      </StyledWidgets>
    </StyledContainer>
  );
};

export default NavBar;
