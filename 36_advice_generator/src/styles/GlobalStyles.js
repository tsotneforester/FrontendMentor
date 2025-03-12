import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Manrope", sans-serif;
    background-color: ${({ theme }) => theme.colors.blue1};
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }
`;
