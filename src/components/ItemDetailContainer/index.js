import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import Loading from "../Loading";
import { Fragment } from "react";
import { db } from "../../firebase";

const getItem = (productId) =>
  db
    .collection("products")
    .get()
    .then((querySnapshot) => {
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return products.find((p) => p.id === productId);
    });

const ItemDetailContainer = () => {
  const [item, setItem] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const { productId } = useParams();

  React.useEffect(() => {
    getItem(productId).then((item) => {
      // NOTE: Previously, this piece was setLoading(false) and then setItem(item)
      // But this caused ItemDetail to get rendered twice. Need to look into useReducer.
      setItem(item);
      setLoading(false);
    });
  }, [productId]);

  if (loading) {
    return <Loading />;
  }

  return <Fragment>{<ItemDetail item={item} />}</Fragment>;
};

export default ItemDetailContainer;
