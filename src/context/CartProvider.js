import React from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = React.useState([]);

  const clearCart = () => {
    setProductsInCart([]);
  };

  const addProductToCart = (newProduct, quantity) => {
    const isProductInState = productsInCart.find(
      ({ item }) => item.id === newProduct.id
    );
    if (isProductInState) {
      const updatedProducts = productsInCart.map(({ item, count }) =>
        item.id === newProduct.id
          ? { count: count + quantity, item: newProduct }
          : { item, count }
      );
      setProductsInCart(updatedProducts);
    } else {
      setProductsInCart([
        ...productsInCart,
        { count: quantity, item: newProduct },
      ]);
    }
  };

  const removeProductFromCart = (productToRemove) => {
    const updatedProducts = productsInCart.filter(
      ({ item }) => item.id !== productToRemove.id
    );
    setProductsInCart(updatedProducts);
  };

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        clearCart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export default CartProvider;
