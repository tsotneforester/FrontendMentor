import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../Context';
import ThemeToggler from './ThemeToggler';
import LogoDark from '../assets/logo-dark-theme.svg?react';
import LogoLight from '../assets/logo-light-theme.svg?react';

export default function Header() {
  const { isDarkTheme, dispatch } = useContext(AppContext);
  function resetHandler() {
    dispatch({
      type: 'RESET',
    });
  }

  return (
    <S.Container>
      <nav>
        {isDarkTheme ? (
          <LogoDark style={{ cursor: 'pointer' }} onClick={resetHandler} />
        ) : (
          <LogoLight style={{ cursor: 'pointer' }} onClick={resetHandler} />
        )}
        <ThemeToggler />
      </nav>
      <h1>Analyze your text in real-time</h1>
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  h1 {
    margin-top: 40px;
    font-weight: 700;
    width: 100%;
    font-size: 40px;
    line-height: 100%;
    text-align: center;
    letter-spacing: -1px;
    max-width: 360px;
    color: ${({ theme }) => theme.text1};
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 64px;
      max-width: 510px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-top: 48px;
    }
  }
`;
