// Base theme with common properties
const baseTheme = {
  fonts: { lato: `"Lato", serif;` },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
  },
};

// Light theme
export const lightTheme = {
  ...baseTheme,
  bg: 'assets/pattern-light.png',
  colors: {
    bg: '#f0f0f0',
    text: '#333',
    h1: '#e25b5b',
  },
};

// Dark theme
export const darkTheme = {
  ...baseTheme,
  bg: 'assets/pattern-dark.png',
  colors: {
    bg: '#121212',
    text: '#cbcbcb',
    h1: '#00dda1',
  },
};
