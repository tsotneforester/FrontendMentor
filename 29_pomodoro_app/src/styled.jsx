import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const root = {
  ms: 0.4,
  theme_color: {
    red: "#F87070",
    cyan: "#70F3F8",
    purple: "#D881F8",
  },
  color: {
    white: "#FFFFFF",
    gray: "#EFF1FA",
    darker_blue: "#161932",
    dark_blue: "#1E213F",
    light_blue: "#D7E0FF",
  },
  media: {
    mobile: 480,
    tablet: 768,
  },
  font: {
    kumbh: `"Kumbh Sans", sans-serif`,
    roboto: `"Roboto Slab", serif`,
    space: `"Space Mono", monospace`,
  },
};

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${root.color.dark_blue};
}

#root {
  min-height: 100vh;
  min-height: 100svh;
  padding: 32px 24px  48px 24px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  
 @media only screen and (min-width: ${root.media.tablet}px) {
 padding: 80px 24px 103px 24px;
 }

}


`;

export const circleHover = css`
  box-sizing: content-box;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all ${root.ms}s;
  cursor: pointer;
  outline: 2px ${root.color.gray} solid;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  &:hover {
    outline-offset: 5px;
  }
`;

export const styledSVG = css`
  cursor: pointer;
  path {
    transition: stroke-opacity ${root.ms}s;
  }

  &:hover {
    path {
      stroke-opacity: 1;
    }
  }
`;

export const styledSettingTitle = css`
  color: ${root.color.dark_blue};
  font-size: 11px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 4.3px;
  grid-area: title;
  @media only screen and (min-width: ${root.media.tablet}px) {
    font-size: 13px;
  }
`;
