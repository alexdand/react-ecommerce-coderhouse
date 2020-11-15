import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import MenuItem from "../MenuItem";
import { StyledContainer, StyledMenu, StyledWidgets } from "./styles.css";

const NavBar = () => {
  const menuItems = ["home", "contact"];

  return (
    <StyledContainer>
      <StyledMenu>
        <Link to="/">
          <h1>Jack Food Service</h1>
        </Link>
        <ul sx={{ display: "flex" }}>
          {menuItems.map((item) => (
            <MenuItem key={item} item={item} />
          ))}
        </ul>
      </StyledMenu>
      <StyledWidgets>
        <CartWidget />
      </StyledWidgets>
    </StyledContainer>
  );
};

export default NavBar;
