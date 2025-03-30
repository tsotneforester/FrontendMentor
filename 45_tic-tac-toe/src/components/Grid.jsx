import { useContext, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import checkTicTacToe from '../utils/checkTicTacToe';
import randomCPUMove from '../utils/randomCPUMove';
import { AppContext } from '../Context';
import OSVG from '../assets/icon-o.svg?react';
import XSVG from '../assets/icon-x.svg?react';
import XOutlineSVG from '../assets/icon-x-outline.svg?react';
import OOutlineSVG from '../assets/icon-o-outline.svg?react';
import { motion } from 'motion/react';

export default function Grid() {
  const { state, dispatch } = useContext(AppContext);
  const {
    rivalIsCPU,
    scoreSheet,
    gameStatus,
    turnIsForX,
    isCPUTurn,
    progressMap,
    winningCombo,
    hoveredIndex,
    gridRefresher,
  } = state;

  const updateScoreSheet = (status) => {
    const previousScoreSheet = { ...scoreSheet };

    if (status === 'x') {
      previousScoreSheet.x += 1;
    } else if (status === 'o') {
      previousScoreSheet.o += 1;
    } else if (status === 'tie') {
      previousScoreSheet.tie += 1;
    }
    dispatch({ type: 'UPDATE_SCORE_SHEET', payload: previousScoreSheet });
  };

  const handleCPUClick = (i) => {
    const newProgress = [...progressMap];
    newProgress[i] = turnIsForX ? 'x' : 'o';

    const upcomingStatus = checkTicTacToe(newProgress).status;
    const upcomingCombination = checkTicTacToe(newProgress).combination;

    dispatch({ type: 'SET_PROGRESS_MAP', payload: newProgress });
    dispatch({ type: 'SET_TURN_FOR_X', payload: !turnIsForX });

    if (upcomingStatus == 'running') {
      dispatch({
        type: 'SET_CPU_TURN',
        payload: false,
      });
    } else {
      dispatch({ type: 'SET_GAME_STATUS', payload: upcomingStatus });
      dispatch({ type: 'SET_WINNING_COMBO', payload: upcomingCombination });
      updateScoreSheet(upcomingStatus);
    }
  };

  const handleBoxClick = (i) => {
    if (!isCPUTurn) {
      if (progressMap[i]) return;
      dispatch({ type: 'SET_HOVER_INDEX', payload: null });
      const newProgress = [...progressMap];
      newProgress[i] = turnIsForX ? 'x' : 'o';

      const upcomingStatus = checkTicTacToe(newProgress).status;
      const upcomingCombination = checkTicTacToe(newProgress).combination;

      dispatch({ type: 'SET_PROGRESS_MAP', payload: newProgress });

      if (upcomingStatus == 'running') {
        if (rivalIsCPU) {
          dispatch({
            type: 'SET_CPU_TURN',
            payload: true,
          });
        }
        dispatch({ type: 'SET_TURN_FOR_X', payload: !turnIsForX });
      } else {
        dispatch({ type: 'SET_GAME_STATUS', payload: upcomingStatus });
        dispatch({ type: 'SET_WINNING_COMBO', payload: upcomingCombination });
        updateScoreSheet(upcomingStatus);
      }
    }
  };

  useEffect(() => {
    if (gameStatus == 'running' && rivalIsCPU && isCPUTurn) {
      let place = randomCPUMove(progressMap);
      setTimeout(() => {
        handleCPUClick(place);
      }, 1000);
    }
  }, [isCPUTurn, gameStatus]);

  return (
    <S.Container>
      {progressMap.map((value, i) => (
        <S.Box
          $highlighted={winningCombo?.includes(i)}
          $winner={gameStatus}
          key={i + gridRefresher}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
            delay: i * 0.1,
            duration: 0.3,
          }}
          onClick={() => handleBoxClick(i)}
          onMouseEnter={() => {
            if (!progressMap[i] && !isCPUTurn) {
              dispatch({ type: 'SET_HOVER_INDEX', payload: i });
            }
          }}
          onMouseLeave={() => {
            dispatch({ type: 'SET_HOVER_INDEX', payload: null });
          }}
        >
          {value == 'x' && (
            <S.BoxXIcon $highlighted={winningCombo?.includes(i)} />
          )}
          {value == 'o' && (
            <S.BoxOIcon $highlighted={winningCombo?.includes(i)} />
          )}
          {hoveredIndex === i &&
            (turnIsForX ? <S.HoverXIcon /> : <S.HoverOIcon />)}
        </S.Box>
      ))}
    </S.Container>
  );
}

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

S.Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 64px 0 28px 0;

  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, calc(${({ theme }) => theme.gridS}));
  grid-template-rows: repeat(3, calc(${({ theme }) => theme.gridS} - 8px));

  gap: 28px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 19px 0 27px 0;
    grid-template-columns: repeat(3, ${({ theme }) => theme.gridL});
    grid-template-rows: repeat(3, calc(${({ theme }) => theme.gridL} - 8px));
  }
`;

S.Box = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: ${({ theme, $highlighted, $winner }) => {
    if ($highlighted && $winner == 'x') {
      return theme.colors.cyanDark;
    } else if ($highlighted && $winner == 'o') {
      return theme.colors.yellowDark;
    } else {
      return theme.colors.blue;
    }
  }};

  box-shadow: 0px 8px 0px
    ${({ theme, $highlighted, $winner }) => {
      if ($highlighted && $winner == 'x') {
        return theme.colors.cyanShadow;
      } else if ($highlighted && $winner == 'o') {
        return theme.colors.yellowShadow;
      } else {
        return theme.colors.blueShadow;
      }
    }};
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;

  font-weight: 400;
  text-align: center;
  cursor: pointer;
`;

const defaultBoxMarker = css`
  width: 40px !important;
  height: 40px !important;
  color: ${({ theme }) => theme.colors.grayDark};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 64px !important;
    height: 64px !important;
  }
`;

S.BoxOIcon = styled(OSVG)`
  ${defaultBoxMarker}
  color: ${({ theme, $highlighted }) =>
    $highlighted ? theme.colors.blueDark : theme.colors.yellowDark};
`;

S.BoxXIcon = styled(XSVG)`
  ${defaultBoxMarker}
  color: ${({ theme, $highlighted }) =>
    $highlighted ? theme.colors.blueDark : theme.colors.cyanDark};
`;

S.HoverOIcon = styled(OOutlineSVG)`
  ${defaultBoxMarker}
  animation: ${emerge} ${({ theme }) => theme.transitionFast};
  color: ${({ theme, $highlighted }) =>
    $highlighted ? theme.colors.blueDark : theme.colors.yellowDark};
`;

S.HoverXIcon = styled(XOutlineSVG)`
  ${defaultBoxMarker}
  animation: ${emerge} ${({ theme }) => theme.transitionFast};
  color: ${({ theme, $highlighted }) =>
    $highlighted ? theme.colors.blueDark : theme.colors.cyanDark};
`;
