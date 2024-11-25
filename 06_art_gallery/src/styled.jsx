import { css } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const root = {
  maxWidth: 'unset',
  color: {
    black: '#151515',
    orange: '#d5966c',
    white: '#fff',
  },
  media: {
    tablet: '768px',
    desktop: '1280px',
  },
};

export const GlobalStyles = createGlobalStyle`

body {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;


}
#root {
  min-height: 100vh;
  min-height: 100svh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 1920px;


}
`;

export const padding = css`
  padding: 0 5vw;
  @media only screen and (min-width: ${root.media.tablet}) {
    padding: 0 6vw;
  }
  @media only screen and (min-width: ${root.media.desktop}) {
    padding: 0 10vw;
  }
`;
