import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import planetsData from '../data.json';
import { useState } from 'react';
import Stats from '../components/Stats';
import Source from '../components/Source';
import PlanetPoster from '../components/PlanetPoster';

let categories = {
  overview: { img: 'planet', fullName: 'overview' },
  structure: { img: 'internal', fullName: 'internal structure' },
  geology: { img: 'planet', fullName: 'surface geology' },
};

export default function Planet() {
  let location = useLocation();
  const planet = location.pathname.split('/')[1];
  const [category, setCategory] = useState('overview');

  const planetData = planetsData.filter(
    (e) => e.name.toLowerCase() == planet
  )[0];

  const { color, name, rotation, revolution, radius, temperature } = planetData;

  return (
    <S.Container>
      <S.Category>
        {Object.keys(categories).map((e, i) => {
          return (
            <S.Button
              key={i}
              onClick={() => {
                setCategory(e);
              }}
              $color={color[1]}
              $active={category == e}
            >
              <span>0{i + 1}</span>
              <S.P $shortName={e} $fullName={categories[e].fullName}></S.P>
            </S.Button>
          );
        })}
      </S.Category>
      <PlanetPoster category={category} planetData={planetData} />
      <S.Title>{name}</S.Title>
      <S.Description>{planetData[category].content}</S.Description>
      <Source href={planetData[category].source} />
      <Stats
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  padding-bottom: 36px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-areas:
      'poster poster'
      'title category'
      'desc category'
      'source category'
      'stats stats';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    column-gap: 69px;
    padding: 0 39px 36px 39px;
    max-width: ${({ theme }) => theme.maxWidth1};
    margin: 0 auto;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: ${({ theme }) => theme.maxWidth2};

    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'poster title'
      'poster desc'
      'poster source'
      'poster category'
      'stats stats';
    padding-bottom: 56px;
    padding-top: 126px;
  }
`;

S.Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.antonio};
  font-size: 40px;
  line-height: 52px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 48px;
    line-height: 62px;
    text-align: left;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 80px;
    line-height: 104px;
  }
`;
S.Description = styled.p`
  padding: 16px 24px 32px 24px;
  font-family: ${({ theme }) => theme.fonts.spartan};
  font-size: 12px;
  line-height: 22px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  mix-blend-mode: normal;
  opacity: 0.5;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-area: desc;
    text-align: left;
    padding: 24px 0;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 14px;
    line-height: 25px;
    padding: 24px 0 49px 0;
  }
`;

S.Category = styled.div`
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-area: category;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    align-self: center;
    padding: 0;
  }
  &:after {
    position: absolute;
    width: 100%;
    height: 1px;
    mix-blend-mode: normal;
    opacity: 0.2;
    background-color: ${({ theme }) => theme.colors.white};
    left: 0;
    bottom: 0;
    content: 'A String';
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      content: none;
      display: none;
    }
  }
`;

S.Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.spartan};
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  background-color: transparent;
  text-align: center;
  letter-spacing: 1.93px;
  text-transform: uppercase;
  transition: border ${({ theme }) => theme.transition},
    background-color ${({ theme }) => theme.transition},
    opacity ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.colors.white};
  mix-blend-mode: normal;
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  border-bottom: 4px solid
    ${({ $color, $active }) => ($active ? $color : 'transparent')};
  padding: 20px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 17px;
    border: 1px solid ${({ $color, $active }) => ($active ? $color : 'gray')};
    width: 100%;
    padding: 8px 20px;

    background-color: ${({ $color, $active }) =>
      $active ? $color : 'transparent'};

    font-size: 9px;
    line-height: 25px;
    letter-spacing: 1.93px;
    opacity: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 2.57px;
  }

  &:hover {
    opacity: 1;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      background-color: ${({ theme }) => theme.colors.gray3};
      border: 1px solid ${({ theme }) => theme.colors.gray3};
    }
  }
  span {
    display: none;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: block;
      opacity: 0.5;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 12px;
      line-height: 25px;
    }
  }
`;
S.P = styled.p`
  &::after {
    content: '${({ $shortName }) => $shortName}';
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      content: '${({ $fullName }) => $fullName}';
    }
  }
`;
