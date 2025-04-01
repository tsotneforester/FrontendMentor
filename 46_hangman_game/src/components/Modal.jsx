import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../Context';
import { updateData } from '../utils/updateData';
import { choosePhrase } from '../utils/choosePhrase';
import { emerge, modalCard, overlay, StrokeTextStyle2 } from '../styles/styles';
import SausageButton from './SausageButton';
import StrokeText from './StrokeText';

import FireballMP3 from '../assets/smb_fireball.mp3';
import PauseMP3 from '../assets/smb_pause.mp3';

export default function Modal() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);
  let { data, phrase, category, gameStatus } = state;

  if (gameStatus == 'running') return null;

  const clickFireball = new Audio(FireballMP3);
  const clickPause = new Audio(PauseMP3);

  const handlePlayAgain = () => {
    clickFireball.play();
    dispatch({
      type: 'PLAY_AGAIN',
      payload: {
        updatedData: updateData(phrase, category, data),
        newPhrase: choosePhrase(data, category),
      },
    });
  };

  const handleGameAction = (navigateTo) => {
    clickFireball.play();
    const payload =
      gameStatus === 'won' ? updateData(phrase, category, data) : data;
    setTimeout(() => {
      dispatch({
        type: 'QUIT_GAME',
        payload,
      });
    }, 100);

    navigate(navigateTo);
  };

  const handleResetGame = () => {
    handleGameAction('/category');
  };

  const handleQuitGame = () => {
    handleGameAction('/');
  };

  const handleResume = () => {
    clickPause.play();
    dispatch({
      type: 'RESUME_GAME',
    });
  };

  return (
    gameStatus &&
    gameStatus != 'running' && (
      <Overlay>
        <S.OuterCard>
          {gameStatus == 'won' && (
            <StrokeText additionalStyles={StrokeTextStyle2} content="You Won" />
          )}
          {gameStatus == 'lost' && (
            <StrokeText
              additionalStyles={StrokeTextStyle2}
              content="You Lose"
            />
          )}
          {gameStatus == 'paused' && (
            <StrokeText content="Paused" additionalStyles={StrokeTextStyle2} />
          )}
          <S.InnerCard>
            {gameStatus == 'lost' && (
              <S.Controls>
                <SausageButton handler={handlePlayAgain} value="play again" />
                <SausageButton handler={handleResetGame} value="new category" />
                <SausageButton
                  handler={handleQuitGame}
                  value="quit game"
                  theme="pink"
                />
              </S.Controls>
            )}
            {gameStatus == 'won' && (
              <S.Controls>
                <SausageButton handler={handlePlayAgain} value="play again" />
                <SausageButton handler={handleResetGame} value="new category" />
                <SausageButton
                  handler={handleQuitGame}
                  value="quit game"
                  theme="pink"
                />
              </S.Controls>
            )}
            {gameStatus == 'paused' && (
              <S.Controls>
                <SausageButton handler={handleResume} value="continue" />
                <SausageButton handler={handleResetGame} value="new category" />
                <SausageButton
                  handler={handleQuitGame}
                  value="quit game"
                  theme="pink"
                />
              </S.Controls>
            )}
          </S.InnerCard>
        </S.OuterCard>
      </Overlay>
    )
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
S.StrokeText = styled(StrokeText)`
  font-size: 68px;
`;
S.Controls = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 34px;
`;
