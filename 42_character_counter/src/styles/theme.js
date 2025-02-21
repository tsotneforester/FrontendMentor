// Base theme with common properties
const baseTheme = {
  purpleBox: '#d3a0fa',
  text: '#12131A',
  orangeBox: '#FF9F00;',
  brownBox: '#FE8159;',
  breakpoints: {
    tablet: '668px',
    desktop: '1280px',
  },
  textareaFocusBorder: '#c27cf8',
  textareaFocusShadow: '#d3a0fa',
  limitBorder: '#404254',
};

// Light theme
export const lightTheme = {
  ...baseTheme,
  bg: `/assets/bg-light-theme.png`,
  text1: '#12131A',
  text2: '#12131A',
  themeBg: '#F2F2F7',
  progress: {},
  textarea: {
    bg: '#f2f2f7',
    color: '#2a2b37',
    passive: '#e4e4ef',
    warning: '#DA3701',
  },
};

// Dark theme
export const darkTheme = {
  ...baseTheme,
  bg: `/assets/bg-dark-theme.png`,
  text1: '#F2F2F7;',
  text2: '#e4e4ef',
  themeBg: '#2A2B37',
  progress: {},
  textarea: {
    bg: '#21222c',
    color: '#E4E4EF',
    passive: '#2a2b37',
    warning: '#FE8159',
  },
};
