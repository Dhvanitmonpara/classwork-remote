import { createContext, useContext } from "react";

const themeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = themeContext.Provider;

export const useTheme = () => useContext(themeContext);
