import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const StyledModal = styled.div`
  position: absolute;
  text-align: center;
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  top: calc(50% - 100px);
  left: calc(50% - 250px);
  border: 1px solid black;
  padding-bottom: 20px;
  h2 {
    background-color: ${props =>
      props.type === "success"
        ? Colors.Green
        : props.type === "error"
        ? Colors.Error
        : Colors.DarkGray};
    color: ${Colors.White};
    font-size: 20px;
    padding: 10px;
  }
`;

export const StyledDescription = styled.p`
  background-color: ${Colors.White};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 40px;
  width: 40px;
  background-color: transparent;
  border: none;
  color: ${Colors.White};
  cursor: pointer;
`;

export const StyledButton = styled.button`
  margin: 0 auto;
  display: block;
  background-color: ${Colors.DarkGray};
  color: ${Colors.White};
  padding: 10px;
  a {
    text-decoration: none;
  }
`;
