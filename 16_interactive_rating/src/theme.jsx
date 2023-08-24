import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(prop) => prop.theme.body};
    color: ${(prop) => prop.theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
export const light = {
  modeToggler: "black",
  modeTogglerDot: "white",
  body: "#f1f1f1",
  text: "black",
};
export const dark = {
  modeToggler: "white",
  modeTogglerDot: "black",
  body: "#121620",
  text: "white",
};

export const root = {
  cyan: "#00C29B",
  brown: "#5A3324",
  cream: "#FFE69D",
  carrot: "#FF8800",
  orange: "#FF5500",
  padding: "6px 8px",
  borderRadius: "8px",
  fontSize: "20px",
  animationTime: "0.2s",
};

export const device = {
  mobile: `(min-width: 325px)`,
  tablet: `(min-width: 768px)`,
  desktop: `(min-width: 1100px)`,
};
