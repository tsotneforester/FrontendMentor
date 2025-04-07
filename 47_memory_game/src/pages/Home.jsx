import { useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from '../Context';
import { useNavigate } from 'react-router-dom';

let theme = [
  { theme: 'numbers', zorg: true },
  { theme: 'icons', zorg: false },
];

export default function Home() {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const { numberOfplayers, gridSize, themeIsNumbers } = state;

  useEffect(() => {
    dispatch({ type: 'QUIT_GAME' });
  }, []);

  return (
    <S.Container>
      <h2>Select Theme</h2>
      {theme.map((e, i) => {
        return (
          <S.GridButton
            $active={themeIsNumbers == e.zorg}
            key={i}
            onClick={() => {
              dispatch({ type: 'SET_THEME', payload: e.zorg });
            }}
          >
            {e.theme}
          </S.GridButton>
        );
      })}

      <h2>Number of Players</h2>
      {[1, 2, 3, 4].map((e, i) => {
        return (
          <S.PlayerButton
            $active={numberOfplayers == e}
            key={i}
            onClick={() => {
              dispatch({ type: 'SET_PLAYERS', payload: e });
            }}
          >
            {e}
          </S.PlayerButton>
        );
      })}
      <h2>Grid Size</h2>
      {[4, 6].map((e, i) => {
        return (
          <S.GridButton
            $active={gridSize == e}
            key={i}
            onClick={() => {
              dispatch({ type: 'SET_GRID_SIZE', payload: e });
            }}
          >
            {e}x{e}
          </S.GridButton>
        );
      })}

      <button
        onClick={() => {
          if (numberOfplayers == 1) {
            dispatch({ type: 'START_GAME' });
            navigate('/solo-game');
          } else {
            dispatch({ type: 'START_GAME' });
            navigate(`/contest?players=${numberOfplayers}`);
          }
        }}
      >
        start Game
      </button>
    </S.Container>
  );
}
const S = {};

const defaultButton = css`
  padding: 12px;
  border-radius: 20px;
  font-size: 28px;
  color: black;
  font-weight: 400;
  text-align: center;
  background-color: cream;
`;
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  button {
    ${defaultButton}
  }
`;
S.PlayerButton = styled.button`
  ${defaultButton}
  background-color: ${({ $active }) => ($active ? 'green' : 'gray')};
`;
S.GridButton = styled.button`
  ${defaultButton}
  background-color: ${({ $active }) => ($active ? 'green' : 'gray')};
`;
/* S.Container = styled.div`
S.Container = styled.div`
S.Container = styled.div`
S.Container = styled.div`
S.Container = styled.div` */
