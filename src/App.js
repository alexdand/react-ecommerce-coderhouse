import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import { StyledApp } from "./styles.css";

const App = () => {
  return (
    <StyledApp>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path={["/", "/home"]}>
              <ItemListContainer />
            </Route>
            <Route exact path="/categories">
              <Categories />
            </Route>
            <Route exact path="/categories/:category">
              <ItemListContainer />
            </Route>
            <Route exact path="/products/:productId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
