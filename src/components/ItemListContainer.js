/** @jsx jsx */
import { jsx } from "theme-ui";
import ItemCard from "./ItemCard";

const ItemListContainer = ({ title, products }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div sx={{ display: "flex" }}>
        {products.map((prod) => (
          <ItemCard key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
