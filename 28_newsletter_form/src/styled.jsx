import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const root = {
  max_width: "460px",
  color: {
    tomato: "rgb(255, 98, 87)",
    tomato_pale: "rgba(255, 98, 87, 0.15)",
    dark_slate_grey: "hsl(234, 29%, 20%)",
    charcoal_grey: "hsl(235, 18%, 26%)",
    grey: "hsl(231, 7%, 60%)",
    white: "hsl(0, 0%, 100%)",
  },
  media: "768px",
};

export const GlobalStyles = createGlobalStyle`
body {
  @media only screen and (min-width: ${root.media}) {
    background-color: ${root.color.dark_slate_grey};
  }
}

#root {
  min-height: 100svh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: ${root.media}) {
   padding: 20px;
  }
}
`;

export const h1 = css`
  margin: 40px 0 24px 0;
  line-height: 40px;
  font-size: 40px;
  color: ${root.color.dark_slate_grey};
  font-weight: 700;
  text-align: left;
  @media only screen and (min-width: ${root.media}) {
    font-size: 56px;
    line-height: 56px;
    margin-top: 0;
  }
`;

export const p = css`
  font-size: 16px;
  line-height: 24px;
  color: ${root.color.dark_slate_grey};
`;

export const button = css`
  width: auto;
  height: auto;
  border-radius: 8px;
  background-color: ${root.color.dark_slate_grey};
  font-size: 16px;
  color: ${root.color.white};
  font-weight: 700;
  text-align: center;
  line-height: 24px;
  padding: 18px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  transition: all 0.8s;

  &:hover {
    background-color: ${root.color.tomato};
  }
`;
