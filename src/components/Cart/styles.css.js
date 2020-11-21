import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const StyledCart = styled.div`
  display: grid;
  position: relative;
  padding: 10px;
`;

export const StyledList = styled.div`
  display: grid;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const BuyButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: -40px;
  background-color: ${Colors.Green};
  color: ${Colors.White};
  font-size: 18px;
  width: 180px;
  height: 40px;
  border: none;
`;

export const Total = styled.div`
  font-size: 18px;
`;
