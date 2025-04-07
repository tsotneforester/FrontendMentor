import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../Context';

import { emerge, modalCard, overlay } from '../styles/styles';
import SecondsToHHMM from './SecondsToHHMM ';
import { useNavigate } from 'react-router-dom';
import { sortObjectByValues } from '../utils/sortObjectByValues';

export default function Modal() {
  const { state, dispatch } = useContext(AppContext);
  let { moves, timer, pairs, numberOfplayers } = state;
  const navigate = useNavigate();
  let { sortedEntries, maxPair } = sortObjectByValues(pairs, numberOfplayers);
  // if (gameStatus == 'running') return null;

  return (
    <Overlay>
      <S.OuterCard>
        <S.InnerCard>
          {numberOfplayers == 1 && 'you didi it!'}

          {numberOfplayers > 1 &&
            sortedEntries.map((e, i) => {
              return (
                <span key={i}>
                  player {e[0]} ({e[1] == maxPair ? 'winner' : null}) -{' '}
                  {e[1] == null ? 0 : e[1]}
                </span>
              );
            })}

          {numberOfplayers == 1 && (
            <>
              <h1>Moves - {moves}</h1>
              <SecondsToHHMM seconds={timer} />
            </>
          )}
          <button
            onClick={() => {
              dispatch({ type: 'RESTART_GAME' });
            }}
          >
            restart
          </button>
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            newgame
          </button>
        </S.InnerCard>
      </S.OuterCard>
    </Overlay>
  );
}
const S = {};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  ${overlay}
`;

S.OuterCard = styled.div`
  position: relative;
  height: 494px;
  width: 100%;
  animation: ${emerge} ${({ theme }) => theme.transitionDefault};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 535px;
  }
`;
S.InnerCard = styled.main`
  ${modalCard}
  ${modalCard}
  padding: 104px 12px 87px 12px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 120px 12px 71px 12px;
  }
`;

S.Controls = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 34px;
`;
