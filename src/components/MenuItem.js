/** @jsx jsx */
import { jsx } from "theme-ui";

const MenuItem = ({ item, onItemClick }) => {
  return (
    <li
      key={item}
      sx={{
        listStyleType: "none",
        p: "10px",
        mx: "10px",
        fontWeight: "bold",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "text",
          color: "background",
        },
      }}
      onClick={() => onItemClick(item)}
    >
      {item}
    </li>
  );
};

export default MenuItem;
