import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartProvider";
import Modal from "../Modal";
import Form from "./Form";
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

// TODO:
// - Extraer displaySuccessModal, displayErrorModal, isFormValid y setOrderId
//   a otro componente ya que no es responsabilidad del Cart
const Cart = () => {
  const [displaySuccessModal, setDisplaySuccessModal] = React.useState(false);
  const [displayErrorModal, setDisplayErrorModal] = React.useState(false);
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const { productsInCart, removeProductFromCart } = useCart();
  const totalSum = calculateTotal(productsInCart);
  const removeFromCart = product => removeProductFromCart(product);

  const onFinishOrder = () => {
    createOrder(productsInCart)
      .then(orderId => {
        setOrderId(orderId);
        setDisplaySuccessModal(true);
      })
      .catch(() =>
        setDisplayErrorModal("There was an error creating the order")
      );
  };

  React.useEffect(() => {
    console.log("formError:", isFormValid);
  }, [isFormValid]);

  if (productsInCart.length === 0) {
    return (
      <StyledCart>
        <EmptyCart>
          <h1>Tu carrito esta vacio</h1>
          <h4>
            ¿No sabes que comprar? ¡Todas nuestras opciones son deliciosas!
          </h4>
          <StyledLink to="/">Volver</StyledLink>
        </EmptyCart>
      </StyledCart>
    );
  }

  return (
    <StyledCart>
      <StyledList>
        {productsInCart.map(({ item, count }) => (
          <StyledRow key={item.id}>
            <StyledImage src={item.img} alt={item.name} />
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>{count}</span>
            <button onClick={() => removeFromCart(item)}>Remover</button>
          </StyledRow>
        ))}
      </StyledList>
      <Total>Total: ${totalSum}</Total>
      <Form onHandleError={isError => setIsFormValid(isError)} />
      <BuyButton isDisabled={!isFormValid} onClick={onFinishOrder}>
        Terminar Compra
      </BuyButton>
      <Modal
        type="success"
        display={displaySuccessModal}
        title="Nueva orden"
        message={`Orden creada exitosamente! Id: ${orderId}`}
        handleClose={() => setDisplaySuccessModal(false)}
        button={<Link to="/ordenes">Ir a tus ordenes</Link>}
      />
      <Modal
        type="error"
        display={displayErrorModal}
        title="Error creando la orden"
        message="Hubo un problema creando la orden! Proba de nuevo en unos minutos."
        handleClose={() => setDisplaySuccessModal(false)}
      />
    </StyledCart>
  );
};

export default Cart;
