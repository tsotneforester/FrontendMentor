import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const root = {
  max_width_s: "460px",
  max_width_l: "540px",
  color: {
    red: "hsl(0, 100%, 74%)",
    green: "hsl(154, 59%, 51%)",
    light_green: "#77e2b3",
    blue: "hsl(248, 32%, 49%)",
    dark_blue: "hsl(249, 10%, 26%)",
    grayish_blue: "hsl(246, 25%, 77%)",
    white: "#fff",
    border: "#dedede",
  },
  media: {
    mobile: "768px",
  },
  time: "1s",
};

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${root.color.red};
  background-image: url("images/bg-intro-mobile.png");
  background-repeat: no-repeat; //repeat-y/repeat-x/repeat/space/round
  background-position: top left; // center/bottom/left/right/(%, px)
  background-attachment: scroll; //fixed / local
  background-size: cover; //length/cover/containbg-sidebar-mobile


  @media only screen and (min-width: ${root.media.mobile}) {
    background-image: url("images/bg-intro-desktop.png");
  }
}

#root {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 88px 24px;
  @media only screen and (min-width: ${root.media.mobile}) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 45px;
    padding:0 30px;
  }

}


`;

export const baseActiveBox = css`
  background-color: ${root.color.alabaster};
  border: 1px ${root.color.marine_blue} solid;
`;
