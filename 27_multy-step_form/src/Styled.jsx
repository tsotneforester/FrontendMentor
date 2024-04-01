import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const root = {
  gradient_height: "80px",
  color: {
    marine_blue: "hsl(213, 96%, 18%)",
    purplish_blue: "hsl(243, 100%, 62%)",
    pastel_blue: "hsl(228, 100%, 84%)",
    light_blue: "hsl(206, 94%, 87%)",
    strawberry_red: "hsl(354, 84%, 57%)",
    cool_gray: "hsl(231, 11%, 63%)",
    light_gray: "hsl(229, 24%, 87%)",
    magnolia: "hsl(217, 100%, 97%)",
    alabaster: "hsl(231, 100%, 99%)",
    white: "hsl(0, 0%, 100%)",
  },
  media: `720px`,
  // {
  //   mobile: `(min-width: 480px)`,
  //    tablet: `(min-width: 768px)`,
  //    laptop: `(min-width: 1024px)`,
  //    desktop: `(min-width: 1280px)`,
  // },
};

export const GlobalStyles = createGlobalStyle`
body {
  min-height: 100svh;
  background-color: ${root.color.magnolia};
  background-image: url("images/bg-sidebar-mobile.svg");
  background-repeat: no-repeat; //repeat-y/repeat-x/repeat/space/round
  background-position: top left; // center/bottom/left/right/(%, px)
  background-attachment: scroll; //fixed / local
  background-size: 100%; //length/cover/containbg-sidebar-mobile


  @media only screen and (min-width: ${root.media}) {
    background-image: none;
  }
}

#root {
  min-height: 100svh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  @media only screen and (min-width: 720px) {
    padding: 0 30px;
  }
}


`;

export const optionContainer = css`
  width: 100%;
  max-width: 460px;
  border-radius: 10px;
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: ${root.media}) {
    padding: 30px;
    background-color: ${root.color.white};
  }
`;

export const formContainer = css`
  background-color: ${root.color.white};
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 24px 28px;
  border-radius: 10px;
  @media only screen and (min-width: ${root.media}) {
    padding: 0;
  }
`;

export const baseBox = css`
  width: 100%;

  padding: 12px;
  height: auto;
  border-radius: 8px;
  background-color: transparent;
  border: 1px ${root.color.light_gray} solid;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  @media only screen and (min-width: ${root.media}) {
    flex-flow: column nowrap;
    gap: 30px;
    padding: 20px;
  }
`;

export const baseActiveBox = css`
  background-color: ${root.color.alabaster};
  border: 1px ${root.color.marine_blue} solid;
`;
