import React from "react";
import { useColorMode } from "theme-ui";

const ToggleMode = ({ styles }) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div
      style={{
        ...styles,
        backgroundColor: "transparent",
        border: "none",
        fontSize: "2.2rem",
        outline: "none",
        cursor: "pointer",
      }}
      onClick={(e) => {
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
    >
      {colorMode === "default" ? "🌚" : "🌞"}
    </div>
  );
};

export default ToggleMode;
