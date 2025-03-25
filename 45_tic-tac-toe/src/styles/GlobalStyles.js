import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.blueDark};
  }



  #root {
    min-height: 100vh;
    min-height: 100svh;
    width: 100%;
    font-family: "Outfit", sans-serif;
  }
`;
