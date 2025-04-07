import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context';
import { checkHighlighted } from '../utils/checkHighlighted';
import SecondsToHHMM from '../components/SecondsToHHMM ';
import { useNavigate } from 'react-router-dom';

import Grid from '../components/Grid';
import Modal from '../components/Modal';

export default function Game() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);
  const {
    gridSize,
    progress,
    gridContent,
    tempProgress,
    moves,
    timer,
    showModal,
  } = state;

  useEffect(() => {
    if (tempProgress?.length !== 2) return;

    const isMatch = checkHighlighted(gridContent, tempProgress);

    if (isMatch) {
      const updatedProgress = [...progress, ...tempProgress];
      dispatch({ type: 'UPDATE_PROGRESS', payload: updatedProgress });
    } else {
      const timerId = setTimeout(() => {
        dispatch({ type: 'RESET_HIGHLIGHTED' });
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [tempProgress]);

  useEffect(() => {
    if (progress?.length === gridSize ** 2) {
      dispatch({ type: 'SHOW_MODAL' });
      return;
    }

    const timerId = setInterval(() => {
      dispatch({ type: 'SET_TIMER' });
    }, 1000);

    return () => clearInterval(timerId);
  }, [progress]);

  return (
    <>
      <S.Container>
        <SecondsToHHMM seconds={timer} />
        <h1>Moves - {moves}</h1>
        <Grid />

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
      </S.Container>
      {showModal && <Modal />}
    </>
  );
}
const S = {};

S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

/* S.Container = styled.div`
S.Container = styled.div`
S.Container = styled.div`
S.Container = styled.div`
S.Container = styled.div` */
