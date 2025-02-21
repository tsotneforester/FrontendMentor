import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './styles/theme';

const AppContext = React.createContext();

function Context({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('countryTheme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('countryTheme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return (
    <AppContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />

        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export { Context, AppContext };
