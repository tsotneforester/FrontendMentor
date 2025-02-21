import { useContext } from 'react';
import styled from 'styled-components';
import MoonSVG from '../assets/moon.svg?react';
import SunSVG from '../assets/sun.svg?react';

import { AppContext } from '../Context';

export default function ThemeToggler() {
  const { isDarkTheme, setIsDarkTheme } = useContext(AppContext);

  function themeHandler() {
    let currentTheme = localStorage.getItem('countryTheme');

    if (currentTheme == 'dark') {
      setIsDarkTheme(false);
    } else {
      setIsDarkTheme(true);
    }
  }

  return (
    <S.Contianer onClick={themeHandler}>
      {!isDarkTheme ? <MoonIcon /> : <SunIcon />}
      <p>{!isDarkTheme ? 'Dark' : 'Light'} Mode</p>
    </S.Contianer>
  );
}

const S = {};

S.Contianer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 16px;
      line-height: 22px;
    }
  }
`;

const MoonIcon = styled(MoonSVG)`
  color: ${({ theme }) => theme.text};
  width: 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 20px;
  }
`;

const SunIcon = styled(SunSVG)`
  width: 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 20px;
  }
`;
