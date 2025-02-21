import { css } from 'styled-components';

export const defaultBox = css`
  padding: 27px 20px;
  width: 100%;
  border-radius: 12px;
  background-repeat: no-repeat;
  background-position: right -50px top -10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-position: right -65px top 1px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background-position: right -31px top 1px;
  }

  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 100%;
    letter-spacing: -1px;
    color: ${({ theme }) => theme.text};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 64px;
    }
  }

  p {
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -0.6px;
    color: ${({ theme }) => theme.text};
    margin-top: 8px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 25px 12px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 26px 16px;
  }
`;

export const defaultPlaceholder = css`
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.6px;
  color: ${({ theme }) => theme.text2}; /* Change the color */
  opacity: 1;
`;
export const defaultCheckbox = css`
  width: 16px;
  height: 16px;
  border: 1px solid
    ${({ theme, $fill }) => ($fill ? theme.textareaFocusBorder : theme.text2)};
  border-radius: 4px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, $fill }) =>
    $fill ? theme.textareaFocusBorder : '#FFFFFF'};

  // Focus effect
  &:focus {
    outline: none;
    border: 1px solid #e4e4ef;
    box-shadow: 0px 0px 0px 2px #ffffff,
      0px 0px 0px 4px ${({ theme }) => theme.textareaFocusBorder};
  }
`;
