import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", serif;
  }



  #root {
    min-height: 100vh;
    min-height: 100svh;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.bg};
    transition: background-color ${({ theme }) => theme.trans};
  }
`;
