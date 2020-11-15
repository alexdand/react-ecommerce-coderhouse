import React from "react";
import styled from "styled-components";

const StyledMessage = styled.div`
  font-size: 40px;
`;

const Loading = () => {
  const [dots, setDots] = React.useState(".");

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDots(dots === "..." ? "." : dots + ".");
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [dots]);

  return <StyledMessage>Loading{dots}</StyledMessage>;
};

export default Loading;
