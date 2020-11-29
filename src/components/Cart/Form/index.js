import React from "react";
import { StyledForm } from "./styles.css";

const Form = ({ onHandleError }) => {
  const formRef = React.useRef();
  const [isEmailError, setIsEmailError] = React.useState(false);

  const isValidEmail = e => {
    const { name, value } = e.target;
    const { email, email2 } = formRef.current.elements;
    let isValid = true;
    if (name === "email" && email2.value) {
      if (value !== email2.value) {
        isValid = false;
      }
    }
    if (name === "email2" && email.value) {
      if (value !== email.value) {
        isValid = false;
      }
    }
    setIsEmailError(!isValid);
    return isValid;
  };

  const validate = (e, ...fns) => {
    const isValid = fns.reduce((status, fn) => status && fn(e), true);
    onHandleError(isValid);
  };

  const isFormCompleted = () => {
    return [].slice
      .call(formRef.current.elements)
      .every(element => element.value !== "");
  };

  return (
    <StyledForm ref={formRef}>
      <div>
        <label htmlFor="name">Nombre completo:</label>
        <input
          id="name"
          type="text"
          name="name"
          onKeyUp={e => validate(e, isFormCompleted)}
        />
      </div>
      <div>
        <label htmlFor="phone">Celular:</label>
        <input
          id="phone"
          type="text"
          name="phone"
          onKeyUp={e => validate(e, isFormCompleted)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          onKeyUp={e => validate(e, isValidEmail, isFormCompleted)}
        />
      </div>
      <div>
        <label htmlFor="email2">Reingrese email:</label>
        <input
          id="email2"
          type="email"
          name="email2"
          onKeyUp={e => validate(e, isValidEmail, isFormCompleted)}
        />
      </div>
      {isEmailError && <p>Los emails ingresados deben coincidir.</p>}
    </StyledForm>
  );
};

export default Form;
