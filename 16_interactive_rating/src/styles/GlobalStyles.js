import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
   background-color: ${({ theme }) => theme.colors.black};
  }



  #root {
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px;
    font-family: "Overpass", sans-serif;
  }
`;
