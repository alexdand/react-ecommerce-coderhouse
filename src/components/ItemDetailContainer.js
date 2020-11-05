/** @jsx jsx */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { jsx } from "theme-ui";

import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { mockProducts } from "./ItemListContainer";
import { Fragment } from "react";

const itemDetailTask = (productId) =>
  new Promise((res) => {
    setTimeout(() => {
      const id = Number(productId);
      res(mockProducts.find((prod) => prod.id === id));
    }, 2000);
  });

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    itemDetailTask(productId).then((item) => {
      setLoading(false);
      setItem(item);
    });
  }, [productId]);

  if (loading) {
    return <Loading />;
  }

  return <Fragment>{<ItemDetail item={item} />}</Fragment>;
};

export default ItemDetailContainer;
