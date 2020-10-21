import React from "react";
import { useColorMode } from "theme-ui";

const ToggleMode = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          fontSize: "2rem",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      >
        {colorMode === "default" ? "🌚" : "🌞"}
      </button>
    </header>
  );
};

export default ToggleMode;
