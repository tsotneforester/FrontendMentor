import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    #root {
      font-family: 'DM Sans', sans-serif;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.gray};
      padding: 32px 16px;

      @media (min-width:${({ theme }) => theme.breakpoints.mobile} ) {
        padding: 52px 40px;
      }
      
      @media (min-width:${({ theme }) => theme.breakpoints.desktop} ) {
        padding: 83px 32px 65px 32px;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: stretch;
        gap: ${({ theme }) => theme.gapl};
      }

    }
`;
