import React from "react";
import ItemCard from "../ItemCard";
import { StyledProducts } from "./styles.css";

export const mockProducts = [
  {
    id: 1,
    name: "Xbox 360",
    price: 999,
    stock: 5,
    img: `https://d1f7geppf3ca7.cloudfront.net/origin/84206/1559124526198_microsoft-xbox-360-s-slim-4gb-console-matte-black.jpg`,
  },
  {
    id: 2,
    name: "Play Station 5",
    price: 999,
    stock: 5,
    img: `https://tecnostore.com.py/tstore/wp-content/uploads/2018/01/ps4-slim-1tb-tres.jpg`,
  },
];

const itemTask = new Promise((res) => {
  setTimeout(() => {
    res(mockProducts);
  }, 2000);
});

const ItemListContainer = (props) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    itemTask.then((prds) => {
      setProducts(prds);
    });
    return () => {};
  }, []);

  return (
    <div>
      <StyledProducts>
        {products.map((prod) => (
          <ItemCard key={prod.id} {...prod} />
        ))}
      </StyledProducts>
    </div>
  );
};

export default ItemListContainer;
