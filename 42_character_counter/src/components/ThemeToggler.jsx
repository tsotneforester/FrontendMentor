import styled from 'styled-components';
import MoonSVG from '../assets/moon.svg?react';
import SunSVG from '../assets/sun.svg?react';
import { useContext } from 'react';
import { AppContext } from '../Context';

export default function ThemeToggler() {
  const { isDarkTheme, setIsDarkTheme } = useContext(AppContext);

  function themeHandler() {
    let currentTheme = localStorage.getItem('charCounter');

    if (currentTheme == 'dark') {
      setIsDarkTheme(false);
    } else {
      setIsDarkTheme(true);
    }
  }

  return (
    <S.Toggler onClick={themeHandler}>
      {isDarkTheme ? <SunSVG /> : <MoonSVG />}
    </S.Toggler>
  );
}

const S = {};

S.Toggler = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.themeBg};
  border-radius: 6px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 44px;
    height: 44px;
  }
`;
