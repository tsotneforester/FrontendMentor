import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import ThemeToggler from './ThemeToggler';
import { SkeletonTheme } from 'react-loading-skeleton';
import { useTheme } from 'styled-components';

export default function SharedLayout() {
  const theme = useTheme();
  return (
    <SkeletonTheme
      baseColor={theme.skeleton.base}
      highlightColor={theme.skeleton.highlight}
    >
      <S.Container>
        <S.Navbar>
          <nav>
            <h1>Where in the world?</h1>
            <ThemeToggler />
          </nav>
        </S.Navbar>
        <main>
          <Outlet />
        </main>
      </S.Container>
    </SkeletonTheme>
  );
}
const S = {};

let maxWidth = {
  mobile: '600px',
  laptop: '864px',
  desktop: '1278px',
};

S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  main {
    max-width: ${maxWidth.mobile};
    width: 100%;
    padding: 24px 16px;
    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
      max-width: ${maxWidth.laptop};
      padding: 30px 0;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      max-width: ${maxWidth.desktop};
      padding: 48px 0;
    }
  }
`;

S.Navbar = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.navBg};

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  nav {
    max-width: ${maxWidth.mobile};

    width: 100%;
    padding: 30px 16px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
      max-width: ${maxWidth.laptop};
      padding: 30px 0;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      max-width: ${maxWidth.desktop};
    }
    h1 {
      font-weight: 800;
      font-size: 14px;
      line-height: 20px;

      @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 24px;
        line-height: 33px;
      }
    }
  }
`;
