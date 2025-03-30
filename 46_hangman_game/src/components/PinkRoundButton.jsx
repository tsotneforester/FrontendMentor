import styled from 'styled-components';
import { pinkGradientS } from '../styles/styles';
import { whiteIcon } from '../styles/styles';
import MenuSVG from '../assets/icon-menu.svg?react';
import BackSVG from '../assets/icon-back.svg?react';

import { useContext } from 'react';
import { AppContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import FireballMP3 from '../assets/smb_fireball.mp3';
import PauseMP3 from '../assets/smb_pause.mp3';

export default function PinkRoundButton({ action }) {
  const clickFireball = new Audio(FireballMP3);
  const clickPause = new Audio(PauseMP3);
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);
  return (
    <S.Container
      $action={action}
      onClick={() => {
        if (action == 'back') {
          clickFireball.play();
          navigate('/');
        } else {
          clickPause.play();
          dispatch({
            type: 'PAUSE_GAME',
          });
        }
      }}
    >
      {action == 'back' ? <S.BackIcon /> : <S.MenuIcon />}
    </S.Container>
  );
}
const S = {};
S.Container = styled.button`
  ${pinkGradientS}
  width: 40px;
  height: 40px;
  border-radius: 50%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 64px;
    height: 64px;

    ${({ $action }) =>
      $action == 'back'
        ? `position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);`
        : null}
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 94px;
    height: 94px;
  }
`;

S.BackIcon = styled(BackSVG)`
  ${whiteIcon}
`;
S.MenuIcon = styled(MenuSVG)`
  ${whiteIcon}
`;
