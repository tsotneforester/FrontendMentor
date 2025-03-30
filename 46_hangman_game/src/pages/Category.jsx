import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../Context';
import { choosePhrase } from '../utils/choosePhrase';
import {
  blueGradient,
  emerge,
  helpAndCategoryHeader,
  overlay,
  StrokeTextStyle1,
  whiteIcon,
} from '../styles/styles';
import BackSVG from '../assets/icon-back.svg?react';
import FireballMP3 from '../assets/smb_fireball.mp3';
import StrokeText from '../components/StrokeText';
import PinkRoundButton from '../components/PinkRoundButton';

export default function Category() {
  const { state, dispatch } = useContext(AppContext);
  const { categories, data } = state;
  const clickFireball = new Audio(FireballMP3);
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Header>
        <PinkRoundButton action="back" />

        <StrokeText
          content="Pick a Category"
          additionalStyles={StrokeTextStyle1}
        />
      </S.Header>

      <S.Categories>
        {categories.map((e, i) => {
          return (
            <S.Category
              $delay={i}
              key={i}
              onClick={() => {
                clickFireball.play();
                dispatch({ type: 'SET_CATEGORY', payload: e });
                dispatch({
                  type: 'SET_PHRASE',
                  payload: choosePhrase(data, e),
                });
                navigate(`/game?category=${e}`);
              }}
            >
              {e}
            </S.Category>
          );
        })}
      </S.Categories>
    </S.Container>
  );
}
const S = {};

S.Header = styled.header`
  ${helpAndCategoryHeader}
`;
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  min-height: 100vh;
  min-height: 100svh;
  padding: 32px 25px;
  ${overlay}
  width: 100%;
  gap: 100px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 114px;
    padding: 61px 40px;
  }
`;

S.Categories = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidthS};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: ${({ theme }) => theme.maxWidthM};
    gap: 32px;
    display: grid;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: ${({ theme }) => theme.maxWidthL};
    column-gap: 32px;
    row-gap: 50px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
  }
`;
S.Category = styled.button`
  animation: ${emerge} ${({ theme }) => theme.transitionDefault};
  animation-delay: calc(${({ $delay }) => $delay} * 0.1s);
  animation-fill-mode: backwards;
  width: 100%;
  ${blueGradient}
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 8px;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  font-size: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 48px;
    padding: 64px 32px;
    border-radius: 40px;
  }
`;
S.BackIcon = styled(BackSVG)`
  ${whiteIcon}
`;
