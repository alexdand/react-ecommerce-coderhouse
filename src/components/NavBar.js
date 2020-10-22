/** @jsx jsx */
import { jsx } from "theme-ui";
import CartWidget from "./CartWidget";
import MenuItem from "./MenuItem";
import ToggleMode from "./ToggleMode";

const NavBar = () => {
  const menuItems = ["HOME", "SHOP", "CONTACT"];

  const handleMenuItemClick = (item) => {
    console.log("You've just clicked a menu item:", item);
  };

  return (
    <div sx={{ display: "flex", justifyContent: "space-around" }}>
      <div
        sx={{
          display: "flex",
          alignItems: "baseline",
          width: "100%",
        }}
      >
        <h1>Jack Food Service</h1>
        <ul sx={{ display: "flex" }}>
          {menuItems.map((item) => (
            <MenuItem
              key={item}
              item={item}
              onItemClick={handleMenuItemClick}
            />
          ))}
        </ul>
      </div>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          minWidth: "120px",
        }}
      >
        <CartWidget />
        <ToggleMode styles={{ paddingBottom: "10px" }} />
      </div>
    </div>
  );
};

export default NavBar;
