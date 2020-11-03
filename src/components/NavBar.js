/** @jsx jsx */
import { Link } from "react-router-dom";
import { jsx } from "theme-ui";
import CartWidget from "./CartWidget";
import MenuItem from "./MenuItem";
import ToggleMode from "./ToggleMode";

const NavBar = () => {
  const menuItems = ["home", "contact"];

  return (
    <div sx={{ display: "flex", justifyContent: "space-around" }}>
      <div
        sx={{
          display: "flex",
          alignItems: "baseline",
          width: "100%",
        }}
      >
        <Link sx={{ variant: "styles.a" }} to="/">
          <h1>Jack Food Service</h1>
        </Link>
        <ul sx={{ display: "flex" }}>
          {menuItems.map((item) => (
            <MenuItem key={item} item={item} />
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
