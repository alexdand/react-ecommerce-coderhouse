import styled from "styled-components";

export const StyledCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px;
`;

export const StyledCard = styled.div`
  width: 300px;
  height: 300px;
  > a {
    > img {
      width: 100%;
      height: 80%;
    }
  }
`;
