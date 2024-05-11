import { createGlobalStyle } from "styled-components";

export const root = {
  animation_time: 560,
  color: {
    green: "hsl(158, 36%, 37%)",
    dark_green: "#1A4032",
    cream: "hsl(30, 38%, 92%)",
    dark_blue: "hsl(212, 21%, 14%)",
    blue: "hsl(228, 12%, 48%)",
    white: "hsl(0, 0%, 100%)",
  },
  media: {
    tablet: 768,
  },
};

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${root.color.cream};
}

#root {
  min-height: 100vh;
  min-height: 100svh;
  padding: 16px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

`;
