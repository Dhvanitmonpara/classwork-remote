import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";
import "./index.css";
import { themeContext } from "./Contexts/theme";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState();
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // class changing

  useEffect(() => {
    const htmlElem = document.querySelector("html");
    htmlElem.classList.remove("dark", "light");
    htmlElem.classList.add(themeMode);
  }, [themeMode]);

  return (
    <themeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App;
