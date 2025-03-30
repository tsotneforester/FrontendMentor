import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {

  }



  #root {
    min-height: 100vh;
    min-height: 100svh;
    font-family: ${({ theme }) => theme.fonts.mouse};
    background-image: url('/images/background-mobile.svg');
    background-repeat: no-repeat; //repeat-y/repeat-x/no-repeat/space/round 
    background-position: center center; // center/bottom/left/right/(%, px)
    background-attachment: scroll; //fixed / local
    background-size: cover; //length/cover/contain
     @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      background-image: url('/images/background-tablet.svg');
   
  }
   @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
     background-image: url('/images/background-desktop.svg');
  }
  }
`;
