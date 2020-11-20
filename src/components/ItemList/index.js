import React from "react";
import ItemCard from "../ItemCard";
import { StyledProducts } from "./styles.css";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = React.useState([]);
  const { category } = useParams();

  React.useEffect(() => {
    const products = category
      ? db.collection("products").where("category", "==", `${category}`)
      : db.collection("products");

    products
      .get()
      .then(querySnapshot =>
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
      .then(products => setProducts(products));

    return () => {};
  }, [category]);

  return (
    <div>
      <StyledProducts>
        {products.map(prod => (
          <ItemCard key={prod.id} {...prod} />
        ))}
      </StyledProducts>
    </div>
  );
};

export default ItemListContainer;
