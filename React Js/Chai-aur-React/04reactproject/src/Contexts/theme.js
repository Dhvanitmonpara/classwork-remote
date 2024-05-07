import { createContext, useContext } from "react";

export const themeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

// export const themeProvider = themeContext.Provider;

export default function useTheme() {
  return useContext(themeContext);
}
