import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const root = {
  padding_mobile: "0 clamp(28px, 10vw, 68px)",
  padding_tablet: "0 clamp(50px, 12vw, 290px)",
  color: {
    pink: "hsl(0, 36%, 70%)",
    red: "hsl(0, 93%, 68%)",
    dark_red: "hsl(0, 6%, 24%)",
    gradient1: "linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(0, 100%, 98%) 100%)",
    gradient2: "linear-gradient(135deg, hsl(0, 80%, 86%) 0%, hsl(0, 74%, 74%) 100%)",
  },
  media: {
    mobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: 1280,
  },
};

export const GlobalStyles = createGlobalStyle`
body {
  
  /* @media only screen and (min-width: ${root.media}) {

  } */
}

#root {
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  background: ${root.color.gradient1};
  padding-bottom: 32px;
   @media only screen and (min-width: ${root.media.tablet}px) {
    padding-bottom: 0;
    display: grid;
    grid-template-areas:
    'logo avatar'
    'main avatar';
    grid-template-columns: 58% 42%;
    grid-template-rows: auto 1fr;
    background-image: url("/assets/bg-pattern-desktop.svg");
    background-repeat: no-repeat; //repeat-y/repeat-x/repeat/space/round
    background-position: 0% 0%; // center/bottom/left/right/(%, px)
    background-size: 58% 100%; //length/cover/contain
  } 
 

}


`;

export const baseActiveBox = css`
  background-color: ${root.color.alabaster};
  border: 1px ${root.color.marine_blue} solid;
`;
