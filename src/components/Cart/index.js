import React from "react";
import { useCart } from "../../context/CartProvider";
import {
  StyledCart,
  StyledList,
  StyledRow,
  StyledImage,
  BuyButton,
  Total,
  EmptyCart,
  StyledLink,
} from "./styles.css";
import { db } from "../../firebase";
import firebase from "firebase";

const Cart = () => {
  const { productsInCart, removeProductFromCart } = useCart();

  const totalSum = productsInCart.reduce((sum, { item, count }) => {
    const subtotal = item.price * count;
    return sum + subtotal;
  }, 0);

  const removeFromCart = product => removeProductFromCart(product);

  const createOrder = async () => {
    const newOrder = {
      items: productsInCart,
      date: Date.now(),
    };
    const orders = db.collection("orders");
    try {
      orders.add(newOrder);
      const itemQueryByManyId = await db
        .collection("products")
        .where(
          firebase.firestore.FieldPath.documentId(),
          "in",
          productsInCart.map(({ item }) => item.id)
        )
        .get();
      const items = itemQueryByManyId.docs;
      items.map((item, idx) => {
        const itemOrderQuantity = productsInCart[idx].count;
        if (item.data().stock - itemOrderQuantity > 0) {
          item.ref.update({
            stock: item.data().stock - productsInCart[idx].count,
          });
        }
        return null;
      });
    } catch (err) {
      console.log("Error creating order", err);
    }
  };

  return (
    <StyledCart>
      {productsInCart.length === 0 ? (
        <EmptyCart>
          <h1>Your cart is empty</h1>
          <h4>¿Don't know what to buy? ¡Check out our recommendations!</h4>
          <StyledLink to="/">Go back</StyledLink>
        </EmptyCart>
      ) : (
        <StyledList>
          {productsInCart.map(product => {
            const { item, count } = product;
            return (
              <StyledRow key={item.id}>
                <StyledImage src={item.img} alt={item.name} />
                <span>{item.name}</span>
                <span>{item.price}</span>
                <span>{count}</span>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </StyledRow>
            );
          })}
        </StyledList>
      )}
      {productsInCart.length > 0 && <Total>Total: ${totalSum}</Total>}
      {productsInCart.length > 0 && (
        <BuyButton onClick={createOrder}>Finish Order</BuyButton>
      )}
    </StyledCart>
  );
};

export default Cart;
