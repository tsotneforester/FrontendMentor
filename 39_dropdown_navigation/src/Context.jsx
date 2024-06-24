import React, { useState, useEffect } from "react";
import { GlobalStyles, light, dark } from "./styled";
const AppContext = React.createContext();

function Context({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkTheme");
    setIsDarkMode(storedTheme === "true");
  }, []);

  return (
    <AppContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <ThemeProvider theme={isDarkMode ? dark : light}>
        <>
          <GlobalStyles />
          {children}
        </>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export { Context, AppContext };
