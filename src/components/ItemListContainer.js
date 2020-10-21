import React from "react";

const ItemListContainer = ({ title, products }) => {
  return (
    <div>
      <h2>{title}</h2>
      {JSON.stringify(products, null, 2)}
    </div>
  );
};

export default ItemListContainer;
