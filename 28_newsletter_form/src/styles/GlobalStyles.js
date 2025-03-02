import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-color:${({ theme }) => theme.colors.dark_slate_grey};
  }


 }

#root {
  min-height: 100svh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
   padding: 20px;
  }
}

`;
