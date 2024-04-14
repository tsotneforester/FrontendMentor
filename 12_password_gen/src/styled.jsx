import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const root = {
  strength_bar_height: "36px",
  color: {
    black: "rgb(20, 19, 27)",
    green: "rgb(164, 255, 175)",
    white: "#e6e5ea",
    yellow: "rgb(248, 205, 101)",
    red: "rgb(246, 74, 74)",
    orange: "rgb(251, 124, 88)",
    violet_black: "rgb(129, 125, 146)",
    placeholder_gray: "#55545C",
    medium_black: "#18171F",
    light_black: "#24232C",
  },
  media: {
    mobile: `(min-width: 480px)`,
  },
};

export const GlobalStyles = createGlobalStyle`
body {
  min-height: 100svh;
  background-color: ${root.color.black};

}

#root {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 24px;
}
`;
