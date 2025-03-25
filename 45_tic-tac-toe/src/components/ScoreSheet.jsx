import { useContext } from 'react';
import { defaultScore } from '../styles/styles';
import { AppContext } from '../Context';
import styled from 'styled-components';

const ScoreSheet = () => {
  const { state } = useContext(AppContext);
  const { player1PlaysWithX, rivalIsCPU, scoreSheet } = state;

  return (
    <S.Container>
      <S.P1>
        <h1>
          X{' '}
          <span>
            {rivalIsCPU && (player1PlaysWithX ? '(you)' : '(cpu)')}
            {!rivalIsCPU && (player1PlaysWithX ? '(p1)' : '(p2)')}
          </span>
        </h1>
        <h2>{scoreSheet.x}</h2>
      </S.P1>
      <S.Draw>
        <h1>Ties</h1>
        <h2>{scoreSheet.tie}</h2>
      </S.Draw>
      <S.P2>
        <h1>
          o{' '}
          <span>
            {rivalIsCPU && (player1PlaysWithX ? '(cpu)' : '(you)')}
            {!rivalIsCPU && (player1PlaysWithX ? '(p2)' : '(p1)')}
          </span>
        </h1>
        <h2>{scoreSheet.o}</h2>
      </S.P2>
    </S.Container>
  );
};

export default ScoreSheet;

const S = {};

S.Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, ${({ theme }) => theme.gridS});
  grid-template-rows: auto;
  gap: 20px;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, ${({ theme }) => theme.gridL});
  }
`;
S.P1 = styled.div`
  ${defaultScore}
  background: ${({ theme }) => theme.colors.cyanDark};
`;
S.P2 = styled.div`
  ${defaultScore}
  background: ${({ theme }) => theme.colors.yellowDark};
`;
S.Draw = styled.div`
  ${defaultScore}
  background: ${({ theme }) => theme.colors.grayDark};
`;
