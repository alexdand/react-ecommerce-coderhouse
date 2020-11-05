/** @jsx jsx */
import { useEffect, useState } from "react";
import { jsx } from "theme-ui";

const Loading = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDots(dots === "..." ? "." : dots + ".");
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [dots]);

  return <div sx={{ color: "primary", fontSize: "40px" }}>Loading{dots}</div>;
};

export default Loading;
