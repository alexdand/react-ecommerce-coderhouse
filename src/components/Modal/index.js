import React from "react";
import {
  CloseButton,
  StyledModal,
  StyledDescription,
  StyledButton,
} from "./styles.css";

const Modal = ({ type, display, title, message, handleClose, button }) => {
  if (!display) {
    return null;
  }
  return (
    <StyledModal type={type}>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <h2>{title}</h2>
      <StyledDescription>{message}</StyledDescription>
      <StyledButton>{button}</StyledButton>
    </StyledModal>
  );
};

export default Modal;
