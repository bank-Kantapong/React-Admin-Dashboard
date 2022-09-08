import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeContextProvider } from "./context/ThemeContext";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/index.css";
import "./assets/css/theme.css";

document.title = "React Dashboard";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
