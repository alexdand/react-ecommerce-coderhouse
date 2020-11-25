import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px 20px;
  span:nth-child(1) {
    text-align: left;
    flex: 2;
  }
  span {
    flex: 1;
    text-align: center;
  }
`;
