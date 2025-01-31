// Base theme with common properties
const baseTheme = {
  font: `"Epilogue", serif;`,
  breakpoints: {
    mobile: '986px',
    desktop: '1280px',
  },
};

// Light theme
export const theme = {
  ...baseTheme,
  colors: {
    white1: 'white',
    white2: '#FAFAFA',
    gray1: '#ADADAD',
    gray2: '#696969',
    black: '#141414',
  },
};
