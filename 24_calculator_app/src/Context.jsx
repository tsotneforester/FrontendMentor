import React, { useState } from "react";

const AppContext = React.createContext();
import styled, { ThemeProvider } from "styled-components";

function Context({ children }) {
  const [themeMode, setThemeMode] = useState("theme1");

  return (
    <AppContext.Provider value={{ themeMode, setThemeMode }}>
      <>{children}</>
    </AppContext.Provider>
  );
}

export { Context, AppContext };
