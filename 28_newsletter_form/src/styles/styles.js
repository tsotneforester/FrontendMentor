import { css } from 'styled-components';

export const h1 = css`
  margin: 40px 0 24px 0;
  line-height: 40px;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.dark_slate_grey};
  font-weight: 700;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 56px;
    line-height: 56px;
    margin-top: 0;
  }
`;

export const p = css`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.dark_slate_grey};
`;

export const button = css`
  width: auto;
  height: auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.dark_slate_grey};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  text-align: center;
  line-height: 24px;
  padding: 18px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  transition: all 0.8s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tomato};
  }
`;
