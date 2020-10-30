import React from "react";
import { ThemeProvider } from "theme-ui";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import theme from "./theme";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <ItemListContainer title="Some title" />
      <ItemDetailContainer />
    </ThemeProvider>
  );
};

export default App;
