import React, { createContext } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const allContext = useTheme();
  return (
    <ThemeContext.Provider value={allContext}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
