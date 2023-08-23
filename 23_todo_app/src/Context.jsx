import React, { useState } from "react";
import { GlobalStyles, light, dark } from "./theme";
const AppContext = React.createContext();
import styled, { ThemeProvider } from "styled-components";

function Context({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
