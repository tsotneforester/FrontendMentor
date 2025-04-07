import { css, keyframes } from 'styled-components';

export const overlay = css`
  background: linear-gradient(
    180deg,
    rgba(26, 4, 58, 0.75) 0%,
    rgba(21, 18, 120, 0.75) 70.31%,
    rgba(43, 22, 119, 0.75) 100%
  );
`;

export const pinkGradientS = css`
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: inset 0px -5px 0px -1px rgba(157, 45, 245, 0.25);
  position: relative;
  cursor: pointer;

  /* Create an overlay that will fade in */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0);
    transition: background ${({ theme }) => theme.transitionDefault};
    border-radius: 50%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    box-shadow: inset 0px -6px 0px 7px rgba(157, 45, 245, 0.25);
  }

  &:hover::after {
    background: rgba(255, 255, 255, 0.25);
  }
`;

export const whiteIcon = css`
  width: 18px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 27px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 41px;
  }
`;

export const helpAndCategoryHeader = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidthS};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: ${({ theme }) => theme.maxWidthM};
    position: relative;
    justify-content: center;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: ${({ theme }) => theme.maxWidthL};
  }
`;

export const StrokeTextStyle1 = css`
  font-size: 48px;
  letter-spacing: 0.05em;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 104px;
    letter-spacing: -0.005em;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 136px;
  }

  &:before,
  &:after {
    font-size: 48px;
    letter-spacing: 0.05em;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 104px;
      letter-spacing: -0.005em;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 136px;
    }
  }
`;

export const StrokeTextStyle2 = css`
  font-size: 94px;
  letter-spacing: -0.005em;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 134px;
  }

  &:before,
  &:after {
    font-size: 94px;
    letter-spacing: -0.005em;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 134px;
    }
  }

  z-index: 2;
`;

export const modalCard = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 100%;
  z-index: 1;
  background: linear-gradient(180deg, #344aba 0%, rgba(0, 20, 121, 0.83) 100%);
  box-shadow: inset 0px -8px 0px 4px #140e66, inset 0px 6px 0px 8px #2463ff;
  border-radius: 48px;

  max-width: 324px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 592px;
    border-radius: 72px;
  }
`;

export const blueGradient = css`
  background: #2463ff;
  box-shadow: inset 0px -2px 0px 3px #140e66, inset 0px 1px 0px 6px #3c74ff;
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitionDefault};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0.25)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const emerge = keyframes`
 0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
