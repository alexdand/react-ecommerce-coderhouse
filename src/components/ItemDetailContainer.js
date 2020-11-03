/** @jsx jsx */
import { Fragment } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { jsx } from "theme-ui";
import ItemDetail from "./ItemDetail";

const itemDetailTask = new Promise((res) => {
  setTimeout(() => {
    res({
      id: 1,
      name: "Xbox 360",
      price: 1200,
      stock: 5,
      img: `https://d1f7geppf3ca7.cloudfront.net/origin/84206/1559124526198_microsoft-xbox-360-s-slim-4gb-console-matte-black.jpg`,
      description: "Some detailed information about the product.",
    });
  }, 2000);
});

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    itemDetailTask.then((item) => setItem(item));
  }, [productId]);

  return <Fragment>{item && <ItemDetail item={item} />}</Fragment>;
};

export default ItemDetailContainer;
