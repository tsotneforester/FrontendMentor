import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const root = {
  colors: {
    white: "hsl(0, 0%, 100%)",
    pink: "#f9f0ff",
    dark_pink: "#ad28eb",
    light_purple: "hsl(292, 16%, 49%)",
    dark_purple: "hsl(292, 42%, 14%)",
  },
  media: {
    tablet: "680px",
  },
};

export const GlobalStyles = createGlobalStyle`

body {
  background-color: ${root.colors.pink};
  @media only screen and (min-width: ${root.media.tablet}) {

  }
}

#root {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 142.5px 24px 24px 24px;
  justify-content: flex-start;
  align-items: center;
}

`;
