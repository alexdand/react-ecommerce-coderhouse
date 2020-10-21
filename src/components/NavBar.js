/** @jsx jsx */
import { jsx } from "theme-ui";
import ToggleMode from "./ToggleMode";

const NavBar = () => {
  const menuItems = ["HOME", "SHOP", "CONTACT"];
  return (
    <div sx={{ display: "flex", justifyContent: "space-around" }}>
      <div
        sx={{
          display: "flex",
          p: "1rem",
          alignItems: "baseline",
          width: "100%",
        }}
      >
        <h1>Jack Food Service</h1>
        <ul sx={{ display: "flex" }}>
          {menuItems.map((item) => (
            <li
              key={item}
              sx={{ listStyleType: "none", p: "10px", fontWeight: "bold" }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div
        sx={{
          display: "flex",
          justifySelf: "flex-end",
          alignItems: "center",
        }}
      >
        <span>Cart</span>
        <ToggleMode />
      </div>
    </div>
  );
};

export default NavBar;
