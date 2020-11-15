import styled from "styled-components";

export const StyledLink = styled.a.attrs((props) => ({
  opacity: props.stock === 0 ? "0.5" : "1",
}))`
  cursor: pointer;
`;

export const StyledTitle = styled.h3`
  text-align: center;
`;

export const StyledImage = styled.img`
  width: 200px;
  height: 250px;
`;
