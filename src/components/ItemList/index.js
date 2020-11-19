import React from "react";
import ItemCard from "../ItemCard";
import { StyledProducts } from "./styles.css";
import { db } from "../../firebase";

const ItemListContainer = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const getProducts = () => db.collection("products").get();
    getProducts().then((querySnapshot) => {
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(products);
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
