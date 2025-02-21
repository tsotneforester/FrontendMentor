// Base theme with common properties
const colors = {
  blue1: '#2b3945',
  blue2: '#202c37',
  blue3: '#111517',
  gray1: '#858585',
  gray2: '#fafafa',
  gray3: '#B2B2B2',
  white: '#fff',
};

const baseTheme = {
  trans: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  maxWidth: '400px',
  breakpoints: {
    mobile: '628px',
    laptop: '1024px',
    desktop: '1320px',
  },
};

// Light theme
export const lightTheme = {
  ...baseTheme,
  bg: colors.gray2,
  text: colors.blue3,
  navBg: colors.white,
  search: { icon: colors.gray3, text: colors.gray3 },
  skeleton: { base: '#ebebeb', highlight: '#f5f5f5' },
  focus: { card: '#5d575782' },
};

// Dark theme
export const darkTheme = {
  ...baseTheme,
  bg: colors.blue2,
  text: colors.white,
  navBg: colors.blue1,
  search: { icon: colors.gray3, text: colors.gray3 },
  skeleton: { base: '#495a66  ', highlight: '#3a4953' },
  focus: { card: '#dad6d682' },
};
