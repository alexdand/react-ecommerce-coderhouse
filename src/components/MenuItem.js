/** @jsx jsx */
import { Link } from "react-router-dom";
import { jsx } from "theme-ui";

const MenuItem = ({ item }) => {
  return (
    <li
      key={item}
      sx={{
        listStyleType: "none",
        p: "10px",
        mx: "10px",
        fontWeight: "bold",
      }}
    >
      <Link sx={{ variant: "styles.a" }} to={`/${item}`}>
        {item.toUpperCase()}
      </Link>
    </li>
  );
};

export default MenuItem;
