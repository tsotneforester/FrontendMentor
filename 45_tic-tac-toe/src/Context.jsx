import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { baseTheme } from './styles/theme';
import { initialState, reducer } from './AppReducer';

const AppContext = React.createContext();

function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export { Context, AppContext };
