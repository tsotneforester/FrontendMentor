//reusableStyles.js
import { css } from 'styled-components';

export const buttonStyles = css`
  font-size: 16px;
  line-height: 26px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray2};
  background-color: ${({ theme }) => theme.colors.white1};
  padding: 13px 0;
  /* Medium Grey */
  border-radius: 14px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 13px 23px;
    background-color: ${({ theme }) => theme.colors.white2};
  }
`;
