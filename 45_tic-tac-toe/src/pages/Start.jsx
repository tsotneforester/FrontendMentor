import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import LogoSVG from '../assets/logo.svg?react';
import OSVG from '../assets/icon-o.svg?react';
import XSVG from '../assets/icon-x.svg?react';
import { defaultStartButton } from '../styles/styles';
import { AppContext } from '../Context';

export default function Start() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);
  const { player1PlaysWithX } = state;

  return (
    <S.Container>
      <S.LogoIcon />
      <S.Markers>
        <h1>PICK PLAYER 1’S MARK</h1>
        <S.Toggler $position={player1PlaysWithX}>
          <S.MarkerOptions>
            <S.XIcon
              $position={player1PlaysWithX}
              onClick={() => {
                dispatch({ type: 'SET_PLAYER1_MARK', payload: true });
              }}
            />
            <S.OIcon
              $position={player1PlaysWithX}
              onClick={() => {
                dispatch({ type: 'SET_PLAYER1_MARK', payload: false });
              }}
            />
          </S.MarkerOptions>
        </S.Toggler>

        <h2>REMEMBER : X GOES FIRST</h2>
      </S.Markers>
      <S.Rival>
        <S.vsCPU
          onClick={() => {
            dispatch({ type: 'SET_CPU_RIVAL', payload: true });
            dispatch({
              type: 'SET_CPU_TURN',
              payload: player1PlaysWithX ? false : true,
            });
            dispatch({ type: 'RESET_SCORE_SHEET' });
            dispatch({ type: 'RESTART_GAME' });

            navigate('/game?rival=cpu');
          }}
        >
          NEW GAME (VS CPU)
        </S.vsCPU>
        <S.vsHuman
          onClick={() => {
            dispatch({ type: 'SET_CPU_RIVAL', payload: false });
            dispatch({ type: 'RESET_SCORE_SHEET' });
            dispatch({ type: 'RESET_PROGRESS_MAP' });
            dispatch({ type: 'RESTART_GAME' });

            navigate('/game?rival=human');
          }}
        >
          NEW GAME (VS PLAYER)
        </S.vsHuman>
      </S.Rival>
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  max-width: 460px;
  margin: 0 auto;
  gap: 32px;
  padding: 12px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 40px;
  }
`;
S.Markers = styled.div`
  padding: 24px 24px 30px 24px;
  width: 100%;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.blue};
  box-shadow: inset 0px -8px 0px ${({ theme }) => theme.colors.blueShadow};

  h1 {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.grayDark};
  }

  h2 {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.875px;
    color: ${({ theme }) => theme.colors.grayDark};
  }
`;

S.Toggler = styled.div`
  margin: 24px 0 17px 0;
  background: ${({ theme }) => theme.colors.blueDark};
  border: 9px solid ${({ theme }) => theme.colors.blueDark};
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  height: 70px;

  &:after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 50%;
    background-color: ${({ theme }) => theme.colors.grayDark};
    border-radius: 10px;
    height: 100%;
    transition: all ${({ theme }) => theme.transitionSlow};
    transform: translateX(${({ $position }) => ($position ? 0 : '100%')});
  }
`;

S.MarkerOptions = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`;

S.Rival = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 20px;
  }
`;

S.vsCPU = styled.button`
  ${defaultStartButton}
  background: ${({ theme }) => theme.colors.yellowDark};
  box-shadow: inset 0px -8px 0px ${({ theme }) => theme.colors.yellowShadow};

  &:hover {
    background: ${({ theme }) => theme.colors.yellow};
  }
`;

S.vsHuman = styled.button`
  ${defaultStartButton}
  background: ${({ theme }) => theme.colors.cyanDark};
  box-shadow: inset 0px -8px 0px ${({ theme }) => theme.colors.cyanShadow};
  &:hover {
    background: ${({ theme }) => theme.colors.cyan};
  }
`;

S.LogoIcon = styled(LogoSVG)`
  width: 72px;
`;

const defaultMarker = css`
  transition: all ${({ theme }) => theme.transitionSlow};
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

S.OIcon = styled(OSVG)`
  ${defaultMarker}
  color: ${({ $position, theme }) =>
    $position ? theme.colors.grayDark : theme.colors.blueDark};
`;

S.XIcon = styled(XSVG)`
  ${defaultMarker}
  color: ${({ $position, theme }) =>
    $position ? theme.colors.blueDark : theme.colors.grayDark};
`;
