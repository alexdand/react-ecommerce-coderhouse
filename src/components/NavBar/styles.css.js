import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.LightGray};
  padding: 20px;
`;

export const StyledMenu = styled.ul`
  display: flex;
`;

export const StyledWidgets = styled.div`
  display: flex;
  align-ttems: center;
  justify-content: space-around;
  min-width: 120px;
`;
