import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context';
import { checkHighlighted } from '../utils/checkHighlighted';
import { useNavigate } from 'react-router-dom';
import Grid from '../components/Grid';
import Modal from '../components/Modal';

export default function Contest() {
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
    numberOfplayers,
    activePlayer,
    pairs,
  } = state;

  useEffect(() => {
    if (tempProgress?.length !== 2) return;

    const isMatch = checkHighlighted(gridContent, tempProgress);

    if (isMatch) {
      const updatedProgress = [...progress, ...tempProgress];
      dispatch({ type: 'UPDATE_PROGRESS', payload: updatedProgress });
    } else {
      let newActivePlayer =
        activePlayer == numberOfplayers ? 1 : activePlayer + 1;

      dispatch({ type: 'SWITCH_ACTIVE_PLAYER', payload: newActivePlayer });

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
  }, [progress]);

  return (
    <>
      <S.Container>
        {Array.from({ length: numberOfplayers }, (_, i) => {
          return (
            <S.Player $active={activePlayer == i + 1} key={i}>
              <h1>
                player {i + 1} - {pairs[i + 1] ?? 0}
              </h1>
            </S.Player>
          );
        })}

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

S.Player = styled.section`
  border: 2px ${({ $active }) => ($active ? 'red' : 'black')} solid;
`;

/* S.Container = styled.div`
S.Container = styled.div`
S.Container = styled.div`
S.Container = styled.div`
S.Container = styled.div` */
