import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("");
  const [color, setColor] = useState("");

  const data = {
    mode,
    setMode,
    color,
    setColor,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
}

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("Error context undefined");
  }
  return context;
}

export { ThemeContextProvider, useThemeContext };
