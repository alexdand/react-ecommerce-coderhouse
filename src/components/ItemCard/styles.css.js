import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const StyledItemCard = styled.div`
  opacity: ${(props) => (props.stock === 0 ? "0.5" : "1")};
  border: 1px solid ${Colors.LightGray};
  height: 300px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  display: block;
  height: 60%;
  text-decoration: none;
`;

export const StyledTitle = styled.h3`
  text-align: center;
`;

export const StyledPrice = styled.span`
  font-weight: bold;
  text-align: center;
  display: block;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledButton = styled.button`
  color: ${Colors.White};
  background-color: ${Colors.Green};
  border: none;
  padding: 10px 25px;
  cursor: pointer;
  width: 180px;
`;
