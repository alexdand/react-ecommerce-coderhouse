import { Colors } from "../../styles/colors";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: #202020;
  padding: 10px;
  font-size: 30px;
  position: relative;
  > span {
    font-size: 16px;
    width: 20px;
    height: 20px;
    text-align: center;
    position: absolute;
    background-color: ${Colors.Green};
    color: ${Colors.White};
    border-radius: 50%;
    padding: 5px;
    top: -10px;
    right: -10px;
    display: block;
  }
`;
