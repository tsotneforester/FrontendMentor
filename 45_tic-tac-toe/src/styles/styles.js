import { css } from 'styled-components';

export const defaultGameButton = css`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.blueDark};
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 1px;

  padding: 15px 16px 17px 16px;
  border-radius: 10px;
  text-transform: uppercase;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  transition: all ${({ theme }) => theme.transitionSlow};
`;

export const defaultModalMarker = css`
  width: 28px;
  height: 28px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 64px;
    height: 64px;
  }
`;

export const defaultScore = css`
  padding: 12px;
  border-radius: 10px;
  flex-grow: 1;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: 15px;
    padding: 13px;
  }

  h1 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.875px;
    color: ${({ theme }) => theme.colors.blueDark};
  }

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 1.25px;
    color: ${({ theme }) => theme.colors.blueDark};
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      letter-spacing: 1.5px;
    }
  }
`;

export const defaultStartButton = css`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.blueDark};
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 1px;
  padding: 14px 14px 22px 14px;
  width: 100%;
  border-radius: 15px;
  text-transform: uppercase;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  transition: all ${({ theme }) => theme.transitionSlow};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    line-height: 25px;
    font-size: 20px;
    letter-spacing: 1.25px;
    padding: 17px 17px 25px 17px;
  }
`;
