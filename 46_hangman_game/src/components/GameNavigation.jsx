import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../Context';
import HeartSVG from '../assets/icon-heart.svg?react';

import PinkRoundButton from './PinkRoundButton';

export default function GameNavigation() {
  const { state } = useContext(AppContext);
  const { health } = state;
  const [searchParams] = useSearchParams();
  const categoryTerm = searchParams.get('category') || '';

  return (
    <S.Container>
      <S.Section>
        <PinkRoundButton action="menu" />
        <S.Category>{categoryTerm}</S.Category>
      </S.Section>
      <S.Section>
        <S.Pregress $step={health} />
        <S.HeartIcon />
      </S.Section>
    </S.Container>
  );
}
const S = {};

S.Container = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;

  max-width: ${({ theme }) => theme.maxWidthS};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: ${({ theme }) => theme.maxWidthM};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: ${({ theme }) => theme.maxWidthL};
  }
`;

S.Section = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 32px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 57px;
  }
`;

S.Category = styled.h2`
  font-size: 40px;
  line-height: 120%;
  text-align: center;
  letter-spacing: -0.005em;
  color: ${({ theme }) => theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 48px;
    letter-spacing: 0.05em;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desctop}) {
    font-size: 88px;
  }
`;

S.HeartIcon = styled(HeartSVG)`
  width: 26.5px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 53px;
  }
`;

S.Pregress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px;

  width: 57px;
  height: 16px;

  background: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.colors.white}
  border-radius: 96px;
  position: relative;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 164px;
    height: 31px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 240px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4.5px;
    height: 8px;
    width: ${({ $step }) => $step * 6}px;
    transition: width ${({ theme }) => theme.transitionDefault};
    background: ${({ theme }) => theme.colors.navy};
    border-radius: 96px;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      top: 8.5px;
      left: 10px;
      height: 13px;
      width: ${({ $step }) => $step * 18}px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      top: 9px;
      left: 10px;
      height: 13px;
      width: ${({ $step }) => $step * 27.5}px;
    }
  }
`;
