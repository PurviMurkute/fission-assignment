import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ContextProvider };

/* const themeContext = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return <div></div>;
};

export default themeContext; */
