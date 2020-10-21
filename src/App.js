import React from "react";
import { ThemeProvider } from "theme-ui";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import theme from "./theme";

const App = () => {
  const products = [
    { id: 1, name: "Xbox 360", price: 999 },
    { id: 2, name: "Play Station 5", price: 999 },
  ];

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <ItemListContainer title="Some title" products={products} />
    </ThemeProvider>
  );
};

export default App;
