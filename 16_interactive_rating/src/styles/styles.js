import styled, { css } from 'styled-components';

export const defaultCard = css`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 24px 24px 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 330px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 412px;
    border-radius: 30px;
    padding: 32px;
  }
`;

export const defaultP = css`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 400;
  text-align: center;
  line-height: 22px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 15px;
    line-height: 24px;
  }
`;

export const defaultH1 = css`
  //thanks
  width: 100%;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 28px;
  }
`;
