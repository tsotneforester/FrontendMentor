// Base theme with common properties
const baseTheme = {
  max_width: '460px',
  colors: {
    tomato: 'rgb(255, 98, 87)',
    tomato_pale: 'rgba(255, 98, 87, 0.15)',
    dark_slate_grey: 'hsl(234, 29%, 20%)',
    charcoal_grey: 'hsl(235, 18%, 26%)',
    grey: 'hsl(231, 7%, 60%)',
    white: 'hsl(0, 0%, 100%)',
  },
  breakpoints: {
    tablet: '568px',
    desktop: '968px',
  },
};

export const theme = {
  ...baseTheme,
};
