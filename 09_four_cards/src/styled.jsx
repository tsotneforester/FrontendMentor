import { createGlobalStyle } from "styled-components";

export const root = {
  gradient_height: "80px",
  color: {
    white: "white",
    dark_gray: "#4d4f62",
  },
  media: {
    desktop: `1200px`,
  },
};

export const GlobalStyles = createGlobalStyle`

#root {
  min-height: 100svh;
  background-color: white;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 85px 0;
  row-gap: 76px;
}
@media only screen and (min-width: ${root.media.desktop}) {
  #root {
    padding: 80px 0;
    row-gap: 64px;
  }
}


`;
