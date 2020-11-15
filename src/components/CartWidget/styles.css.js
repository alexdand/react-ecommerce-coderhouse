import { Colors } from "../../styles/colors";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: #202020;
  padding: 10px;
  font-size: 30px;
  position: relative;
  > span {
    font-size: 10px;
    width: 10px;
    height: 10px;
    text-align: center;
    position: absolute;
    background-color: ${Colors.Green};
    color: ${Colors.White};
    border-radius: 50%;
    padding: 5px;
    top: 0px;
    right: 0px;
    display: block;
  }
`;
