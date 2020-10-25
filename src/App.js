import React from "react";
import { ThemeProvider } from "theme-ui";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import theme from "./theme";
import ItemCount from "./components/ItemCount";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Xbox 360",
      price: 999,
      img: `https://d1f7geppf3ca7.cloudfront.net/origin/84206/1559124526198_microsoft-xbox-360-s-slim-4gb-console-matte-black.jpg`,
    },
    {
      id: 2,
      name: "Play Station 5",
      price: 999,
      img: `https://tecnostore.com.py/tstore/wp-content/uploads/2018/01/ps4-slim-1tb-tres.jpg`,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <ItemListContainer title="Some title" products={products} />
      <ItemCount
        stock={5}
        onAdd={(quantity) => alert(`Added ${quantity} products to cart`)}
      />
    </ThemeProvider>
  );
};

export default App;
