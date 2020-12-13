import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import { StyledApp } from "./styles.css";
import Orders from "./components/Orders";

const App = () => {
  return (
    <StyledApp>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path={["/", "/inicio"]}>
              <ItemListContainer />
            </Route>
            <Route exact path="/categorias">
              <Categories />
            </Route>
            <Route exact path="/categorias/:category">
              <ItemListContainer />
            </Route>
            <Route exact path="/productos/:productId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/carrito">
              <Cart />
            </Route>
            {/* Acorde al ultimo feedback decidi ocultar esta pagina */}
            <Route exact path="/ordenes">
              <Orders />
            </Route>
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
