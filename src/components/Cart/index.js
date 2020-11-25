import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartProvider";
import Modal from "../Modal";
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
import { calculateTotal, createOrder } from "./utils";

const Cart = () => {
  const [displaySuccessModal, setDisplaySuccessModal] = React.useState(false);
  const [displayErrorModal, setDisplayErrorModal] = React.useState(false);
  const { productsInCart, removeProductFromCart } = useCart();
  const totalSum = calculateTotal(productsInCart);
  const removeFromCart = product => removeProductFromCart(product);

  const onFinishOrder = () => {
    createOrder(productsInCart)
      .then(() => setDisplaySuccessModal(true))
      .catch(() =>
        setDisplayErrorModal("There was an error creating the order")
      );
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
          {productsInCart.map(({ item, count }) => (
            <StyledRow key={item.id}>
              <StyledImage src={item.img} alt={item.name} />
              <span>{item.name}</span>
              <span>{item.price}</span>
              <span>{count}</span>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </StyledRow>
          ))}
        </StyledList>
      )}
      {productsInCart.length > 0 && <Total>Total: ${totalSum}</Total>}
      {productsInCart.length > 0 && (
        <BuyButton onClick={onFinishOrder}>Finish Order</BuyButton>
      )}
      <Modal
        type="success"
        display={displaySuccessModal}
        title="New Order Created"
        message="Order created successfully!"
        handleClose={() => setDisplaySuccessModal(false)}
        button={<Link to="/orders">Go To Orders</Link>}
      />
      <Modal
        type="error"
        display={displayErrorModal}
        title="Error Creating Order"
        message="There was a problem creating the order! Give it another try in a few minutes."
        handleClose={() => setDisplaySuccessModal(false)}
      />
    </StyledCart>
  );
};

export default Cart;
