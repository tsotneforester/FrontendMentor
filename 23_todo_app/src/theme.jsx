import { createGlobalStyle } from "styled-components";
import bgLight from "./assets/bg-desktop-light.jpg";
import bgDark from "./assets/bg-desktop-dark.jpg";

export const light = {
  modeToggler: "black",
  modeTogglerDot: "white",
  body: "#e4e5f1",
  text: "#484b6a",
  image: bgLight,
  checkBoxBorder: "#cacde8",
  formBg: "#fafafa",
  checked: "#cacde8",
};
export const dark = {
  modeToggler: "white",
  modeTogglerDot: "black",
  body: "#161722",
  text: "#d2d3db",
  image: bgDark,
  checkBoxBorder: "#484b6a",
  formBg: "#25273c",
  caret: "black",
  checked: "#777a92",
};

export const root = {
  modeIconSize: "26px",
  white: "#fafafa",
  maxWidth: "486px",
  br: "5px",
  formGap: "10px",
  time: "0.4s",
  caret: "#1785bb",
  filter: "#777a92",
  gradient: "linear-gradient(#57ddff,#c058f3)",
  blue: "#3a7bfd",
};

export const device = {
  mobile: `(min-width: 325px)`,
  tablet: `(min-width: 768px)`,
  desktop: `(min-width: 1440px)`,
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(prop) => prop.theme.body};
    color: ${(prop) => prop.theme.text};
    transition: background ${root.time}, color ${root.time} ;
    font-family: 'Josefin Sans', sans-serif;
    padding: 0 10px;
  }
`;
