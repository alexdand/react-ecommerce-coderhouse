import React from "react";
import { ThemeProvider } from "theme-ui";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import theme from "./theme";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path={["/", "/home"]}>
              <ItemListContainer title="Some title" />
            </Route>
            <Route exact path="/products/:productId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <p>Proximamente Cart Component</p>
            </Route>
            <Route exact path="/contact">
              <p>Proximamente Contact Component</p>
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </CartProvider>
  );
};

export default App;
