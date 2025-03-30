import styled from 'styled-components';
import {
  emerge,
  helpAndCategoryHeader,
  overlay,
  StrokeTextStyle1,
} from '../styles/styles';

import StrokeText from '../components/StrokeText';
import PinkRoundButton from '../components/PinkRoundButton';

let data = [
  {
    title: 'Choose a category',
    desc: 'First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.',
  },
  {
    title: 'Guess letters',
    desc: 'Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.',
  },
  {
    title: 'Win or lose',
    desc: 'You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.',
  },
];

export default function HowTo() {
  return (
    <S.Container>
      <S.Header>
        <PinkRoundButton action="back" />

        <StrokeText content="How to Play" additionalStyles={StrokeTextStyle1} />
      </S.Header>

      <S.Cards>
        {data.map((e, i) => {
          const { title, desc } = e;
          return (
            <S.Card $delay={i} key={i}>
              <h1>0{i + 1}</h1>
              <h2>{title}</h2>
              <p>{desc}</p>
            </S.Card>
          );
        })}
      </S.Cards>
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
  gap: 80px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 100px;
    padding: 61px 40px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

S.Cards = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  max-width: ${({ theme }) => theme.maxWidthS};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: ${({ theme }) => theme.maxWidthM};
    gap: 32px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    height: 548px;
    gap: 32px;
    max-width: ${({ theme }) => theme.maxWidthL};
  }
`;
S.Card = styled.article`
  /* Frame 26 */

  width: 100%;
  animation: ${emerge} ${({ theme }) => theme.transitionDefault};
  animation-delay: calc(${({ $delay }) => $delay} * 0.1s);
  animation-fill-mode: backwards;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 32px;

  display: grid;
  grid-template-areas:
    'ind title'
    'desc desc';
  grid-template-columns: 20px 1fr;
  grid-template-rows: auto;
  gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 680px;
    padding: 32px 40px;
    border-radius: 40px;
    column-gap: 40px;
    row-gap: 16px;
    grid-template-areas:
      'ind title'
      'ind desc';
    grid-template-columns: 60px 1fr;
    grid-template-rows: auto;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 60px 43px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    max-width: 384px;
    gap: 40px;
  }

  h1 {
    font-size: 24px;
    line-height: 120%;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    /* Blue */
    color: ${({ theme }) => theme.colors.blue};
    grid-area: ind;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 88px;
      line-height: 120%;
      text-align: center;
      align-self: center;
    }
  }
  h2 {
    font-size: 24px;
    line-height: 120%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.navy};
    grid-area: title;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 40px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 47px;
      text-align: center;
    }
  }
  p {
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.05em;
    color: #887dc0;
    grid-area: desc;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 20px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 26px;
      line-height: 120%;
      text-align: center;
    }
  }
`;
