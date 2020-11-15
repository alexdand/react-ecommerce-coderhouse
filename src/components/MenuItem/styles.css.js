import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const StyledItem = styled.li`
  list-sttyle-type: none;
  padding: 10px;
  margin: 0 10px;
  font-weight: bold;

  > a {
    text-decoration: none;
  }

  > a:hover {
    color: ${Colors.Green};
  }
`;
