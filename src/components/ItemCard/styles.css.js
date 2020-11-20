import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const StyledItemCard = styled.div`
  opacity: ${props => (props.stock === 0 ? "0.5" : "1")};
  border: 1px solid ${Colors.LightGray};
  height: 300px;
  max-width: 230px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  display: block;
  height: 70%;
  text-decoration: none;
  color: ${Colors.DarkGray};
`;

export const StyledTitle = styled.h3`
  text-align: center;
  height: 20%;
  margin: 10px auto 0 auto;
`;

export const StyledPrice = styled.div`
  font-weight: bold;
  text-align: center;
  display: block;
  margin: 5px 0;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 80%;
`;

export const StyledButton = styled.button`
  color: ${Colors.White};
  background-color: ${Colors.Green};
  border: none;
  padding: 10px 25px;
  cursor: pointer;
  width: 180px;
  display: block;
  margin: 0 auto;
`;
