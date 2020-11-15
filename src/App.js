import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import Cart from "./components/Cart";

const App = () => {
  return (
    <CartProvider>
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
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
