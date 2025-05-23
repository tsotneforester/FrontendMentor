import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-image: url(${({ theme }) => theme.bg});
    background-repeat: repeat; //repeat-y/repeat-x/no-repeat/space/round 
    background-position: 0% 0%; // center/bottom/left/right/(%, px)
    background-attachment: scroll; //fixed / local
    background-size: auto; //length/cover/contain
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
  }



  #root {
    min-height: 100vh;
    min-height: 100svh;
    width: 600px;
    font-family: ${({ theme }) => theme.fonts.lato};

    color: ${({ theme }) => theme.colors.text};



  
    @media (min-width:${({ theme }) => theme.breakpoints.mobile} ) {
  
    }
  }
`;
