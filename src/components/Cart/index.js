import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartProvider";
import {
  StyledCart,
  StyledList,
  StyledRow,
  StyledImage,
  BuyButton,
  Total,
} from "./styles.css";
import { db } from "../../firebase";
import firebaseApp from "../../firebase";

const Cart = () => {
  const { productsInCart, removeProductFromCart } = useCart();

  const totalSum = productsInCart.reduce((sum, { item, count }) => {
    const subtotal = item.price * count;
    return sum + subtotal;
  }, 0);

  const removeFromCart = product => removeProductFromCart(product);

  const createOrder = async () => {
    console.log(productsInCart);
    const newOrder = {
      items: productsInCart,
      date: Date.now(),
    };
    const orders = db.collection("orders");
    try {
      // Error creating order TypeError: Cannot read property 'documentId' of undefined
      orders.add(newOrder);
      const itemQueryByManyId = await db
        .collection("products")
        .where(
          firebaseApp.firestore.FieldPath.documentId(), // does not work
          "in",
          productsInCart.map(product => product.id)
        )
        .get();
      const [item] = itemQueryByManyId.docs;
      console.log("ITEMS?:", item);
      item.ref.update({ stock: item.data().stock - 1 });
    } catch (err) {
      console.log("Error creating order", err);
    }
  };

  return (
    <StyledCart>
      <StyledList>
        {productsInCart.length === 0 ? (
          <>
            <span>No products in cart</span>
            <Link to="/">Go back</Link>
          </>
        ) : (
          productsInCart.map(product => {
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
          })
        )}
      </StyledList>
      {productsInCart.length > 0 && <Total>Total: ${totalSum}</Total>}
      {productsInCart.length > 0 && (
        <BuyButton onClick={createOrder}>Finish Order</BuyButton>
      )}
    </StyledCart>
  );
};

export default Cart;
