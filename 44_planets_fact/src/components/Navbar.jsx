import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import planetsData from '../data.json';
import HamburgerSVG from '../assets/icon-hamburger.svg?react';
import ArrowSVG from '../assets/icon-chevron.svg?react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [navExpended, setNavExpended] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  const planetName = location.pathname.split('/')[1];

  useEffect(() => {
    if (navExpended) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [navExpended]);

  return (
    <S.Container $expanded={navExpended}>
      <h1>THE PLANETS</h1>
      <S.Navlinks>
        {planetsData.map((planet, i) => {
          return (
            <S.Link
              key={i}
              onClick={() => {
                navigate(`/${planet.name.toLowerCase()}`);
                setNavExpended(false);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate(`/${planet.name.toLowerCase()}`);
                  setNavExpended(false);
                }
              }}
              $color={planet.color[1]}
              $active={planetName == planet.name.toLowerCase()}
            >
              <S.Circle style={{ backgroundColor: planet.color[0] }} />
              <p tabIndex={0}>{planet.name}</p>

              <S.Arrowicon />
            </S.Link>
          );
        })}
      </S.Navlinks>

      <S.HamburgerIcon
        $expanded={navExpended}
        onClick={() => setNavExpended(true)}
      />
    </S.Container>
  );
}
const S = {};

S.Container = styled.header`
  height: ${({ $expanded }) => ($expanded ? '100svh' : '72px')};
  overflow: hidden;
  display: grid;
  grid-template-areas:
    'logo menu'
    'links links';
  grid-template-columns: auto;
  grid-template-rows: 70px 1px auto;
  align-items: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 32px 52px 27px 52px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    padding: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 32px;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
    max-width: ${({ theme }) => theme.maxWidth2};
    margin: 0 auto;
  }

  &:after {
    position: absolute;
    width: 100%;
    height: 1px;
    mix-blend-mode: normal;
    opacity: 0.2;
    background-color: ${({ theme }) => theme.colors.white};
    left: 0;
    top: 71px;
    content: 'A String';
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      top: 152px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      top: 86px;
    }
  }

  h1 {
    padding: 16px 24px;
    grid-area: logo;
    font-family: ${({ theme }) => theme.fonts.antonio};
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.05px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    white-space: nowrap;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 0;
      padding-top: 32px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      padding: 22px 32px 27px 32px;
    }
  }
`;

S.HamburgerIcon = styled(HamburgerSVG)`
  margin: 16px 24px;
  grid-area: menu;
  cursor: pointer;
  justify-self: flex-end;
  align-self: center;
  color: ${({ theme }) => theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
  mix-blend-mode: normal;
  opacity: ${({ $expanded }) => ($expanded ? 0.25 : 1)};
`;

S.Navlinks = styled.nav`
  grid-area: links;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
  padding: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 39px 39px 27px 39px;
    margin: 0;
    max-width: ${({ theme }) => theme.maxWidth1};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 32px;
    justify-content: flex-end;
    width: auto;
    align-items: stretch;
    padding: 0;
    max-width: ${({ theme }) => theme.maxWidth2};
  }
`;

S.Link = styled.div`
  display: grid;
  grid-template-areas: 'circle planet arrow';
  grid-template-columns: 20px 1fr 5px;
  grid-template-rows: auto;
  column-gap: 25px;
  row-gap: 20px;
  padding: 20px 0 20px 0;
  width: 100%;
  position: relative;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding: 0;
    width: auto;
  }

  &:after {
    position: absolute;
    width: 100%;
    height: 1px;
    mix-blend-mode: normal;
    opacity: 0.1;
    background-color: ${({ theme }) => theme.colors.white};
    left: 0;
    top: 70px;
    content: 'A String';
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      content: none;
      display: none;
    }
  }

  p {
    grid-area: planet;
    font-family: ${({ theme }) => theme.fonts.spartan};
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    text-align: left;
    letter-spacing: 1.36364px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};

    border-top: 4px solid transparent;
    transition: color ${({ theme }) => theme.transition};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 11px;
      line-height: 25px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: ${({ theme, $active }) =>
        $active ? theme.colors.white : theme.colors.gray2};

      &:focus,
      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      transition: border-top ${({ theme }) => theme.transition},
        color ${({ theme }) => theme.transition};
      border-top: 4px solid
        ${({ $color, $active }) => ($active ? $color : 'transparent')};
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;

      &:focus {
        border-top: 4px solid ${({ $color }) => $color};
      }
    }
  }
`;

S.Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  grid-area: circle;
  align-self: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

S.Arrowicon = styled(ArrowSVG)`
  grid-area: arrow;
  align-self: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
