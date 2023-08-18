import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Kumbh Sans', sans-serif;
    background: ${(prop) => prop.theme.body};
    color: ${(prop) => prop.theme.text};
    transition: all 0.4s;
  }
`;
export const lightTheme = {
  body: "#F4F6F8",
  card_bg: "white",
  card_position: "#19202d",
  button_bg: "#eeeffc",
  button_bg_hover: "#c5c9f4",
  button_color: "#5964e0",
  checkbox: "#e7e8e9",
};
export const darkTheme = {
  body: "#121721",
  card_bg: "#19202D",
  card_position: "white",
  button_bg: "#303642",
  button_bg_hover: "#696e76",
  button_color: "#fff",
  checkbox: "#313743",
};

export const root = {
  violet: "#5964e0",
  dark_grey: "#6e8098",
  time: "0.4s",
  light_violet: "#939bf4",
  midnight: "#121721",
  light_grey: "#f4f6f8",
  grey: "#9daec2",
  br: "6px",
  max_width: "800px",
  seperator: "#706f6f1d",
};

export const device = {
  mobile: `(min-width: 325px)`,
  mobilem: `(min-width: 410px)`,
  tablet: `(min-width: 768px)`,
  desktop: `(min-width: 1100px)`,
};
