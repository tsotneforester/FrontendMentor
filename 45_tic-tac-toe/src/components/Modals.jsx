import { useContext } from 'react';
import OSVG from '../assets/icon-o.svg?react';
import XSVG from '../assets/icon-x.svg?react';
import { defaultGameButton } from '../styles/styles';
import { AppContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import styled, { useTheme, keyframes } from 'styled-components';
import { defaultModalMarker } from '../styles/styles';

const Modals = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { state, dispatch } = useContext(AppContext);
  const { player1PlaysWithX, rivalIsCPU, gameStatus } = state;

  const restartGame = () => {
    dispatch({ type: 'RESTART_GAME' });
    if (rivalIsCPU) {
      dispatch({
        type: 'SET_CPU_TURN',
        payload: player1PlaysWithX ? false : true,
      });
    }
  };

  if (gameStatus === 'paused') {
    // ✅ ---- 1 ----
    return (
      <Overlay>
        <ModalContainer>
          <h1>RESTART GAME?</h1>
          <div>
            <button
              onClick={() => {
                dispatch({ type: 'SET_GAME_STATUS', payload: null });
              }}
            >
              no, cancel
            </button>
            <button
              onClick={() => {
                restartGame();
              }}
            >
              yes, restart
            </button>
          </div>
        </ModalContainer>
      </Overlay>
    );
  }
  if (gameStatus === 'tie') {
    // ✅ ---- 2 ----
    return (
      <Overlay>
        <ModalContainer>
          <h1>ROUND TIED</h1>
          <div>
            <button
              onClick={() => {
                // restartGame();

                navigate('/');
              }}
            >
              quit
            </button>
            <button onClick={restartGame}>next round</button>
          </div>
        </ModalContainer>
      </Overlay>
    );
  }
  if (gameStatus === 'x' || gameStatus === 'o') {
    // ✅ ---- 3 ----
    return (
      <Overlay>
        <ModalContainer>
          <h3>
            {rivalIsCPU && player1PlaysWithX && gameStatus === 'x'
              ? 'you won!'
              : null}
            {rivalIsCPU && player1PlaysWithX && gameStatus === 'o'
              ? 'OH NO, YOU LOST…'
              : null}{' '}
            {rivalIsCPU && !player1PlaysWithX && gameStatus === 'o'
              ? 'you won!'
              : null}{' '}
            {rivalIsCPU && !player1PlaysWithX && gameStatus === 'x'
              ? 'OH NO, YOU LOST…'
              : null}
            {/* 🔰 2 player game */}
            {!rivalIsCPU && player1PlaysWithX && gameStatus === 'x'
              ? 'PLAYER 1 WINS!'
              : null}{' '}
            {!rivalIsCPU && player1PlaysWithX && gameStatus === 'o'
              ? 'PLAYER 2 WINS!'
              : null}{' '}
            {!rivalIsCPU && !player1PlaysWithX && gameStatus === 'x'
              ? 'PLAYER 2 WINS!'
              : null}{' '}
            {!rivalIsCPU && !player1PlaysWithX && gameStatus === 'o'
              ? 'PLAYER 1 WINS!'
              : null}
          </h3>
          <h1
            style={{
              color:
                gameStatus == 'x'
                  ? theme.colors.cyanDark
                  : theme.colors.yellowDark,
            }}
          >
            {gameStatus === 'x' ? <S.XIcon /> : <S.OIcon />}
            TAKES THE ROUND
          </h1>
          <div>
            <button
              onClick={() => {
                restartGame();
                navigate('/');
              }}
            >
              quit
            </button>
            <button onClick={restartGame}>next round</button>
          </div>
        </ModalContainer>
      </Overlay>
    );
  }
};

export default Modals;

const S = {};

const emerge = keyframes`
 0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.307);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  height: 228px;
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  animation: ${emerge} ${({ theme }) => theme.transitionSlow};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 266px;
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 1.5px;
    text-align: center;
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.grayDark};
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 24px;

      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
      letter-spacing: 2.5px;
    }
  }

  h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.875px;
    color: ${({ theme }) => theme.colors.grayDark};
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 1px;
    }
  }

  div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 24px;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-top: 31px;
    }
  }

  button:nth-of-type(1) {
    ${defaultGameButton}

    background: ${({ theme }) => theme.colors.grayDark};
    box-shadow: inset 0px -4px 0px ${({ theme }) => theme.colors.grayShadow};

    &:hover {
      background: ${({ theme }) => theme.colors.gray};
    }
  }

  button:nth-of-type(2) {
    ${defaultGameButton}

    background: ${({ theme }) => theme.colors.yellowDark};
    box-shadow: inset 0px -4px 0px ${({ theme }) => theme.colors.yellowShadow};

    &:hover {
      background: ${({ theme }) => theme.colors.yellow};
    }
  }
`;
S.OIcon = styled(OSVG)`
  ${defaultModalMarker}
  color: ${({ theme }) => theme.colors.yellowDark};
`;

S.XIcon = styled(XSVG)`
  ${defaultModalMarker}
  color: ${({ theme }) => theme.colors.cyanDark};
`;
