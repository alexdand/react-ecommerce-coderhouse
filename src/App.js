import React from "react";
import { ThemeProvider } from "theme-ui";
import NavBar from "./components/NavBar";
import theme from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <NavBar />
  </ThemeProvider>
);

export default App;
