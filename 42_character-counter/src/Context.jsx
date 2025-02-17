import React, { useState, useEffect, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './styles/theme';
import { initialState, reducer } from './reducer/AppReducer';

const AppContext = React.createContext();

function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('charCounter');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('charCounter', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, setIsDarkTheme, state, dispatch }}
    >
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export { Context, AppContext };
