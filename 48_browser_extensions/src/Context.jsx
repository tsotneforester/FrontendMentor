import React, { useState, useEffect } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { GlobalStyles } from './styles/GlobalStyles';
// import { darkTheme, lightTheme } from './styles/theme';
import raw from './data.json';

const AppContext = React.createContext();

function Context({ children }) {
  const [data, setData] = useState(raw);

  // const [isDarkTheme, setIsDarkTheme] = useState(() => {
  //   const savedTheme = localStorage.getItem('infinitejsTheme');
  //   return savedTheme === 'dark';
  // });

  // const [book, setBook] = useState(() => {
  //   const savedTheme = localStorage.getItem('infiniteBook');
  //   return savedTheme || 'js';
  // });

  // useEffect(() => {
  //   localStorage.setItem('infinitejsTheme', isDarkTheme ? 'dark' : 'light');
  // }, [isDarkTheme]);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {/* <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
      </ThemeProvider> */}
      {children}
    </AppContext.Provider>
  );
}

export { Context, AppContext };
