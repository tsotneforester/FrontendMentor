import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from '../Context';
import LogoSVG from '../assets/logo.svg?react';
import PlaySVG from '../assets/icon-play.svg?react';

import SausageButton from '../components/SausageButton';
import { emerge, modalCard } from '../styles/styles';

import FireballMP3 from '../assets/smb_fireball.mp3';

export default function Home() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);
  const clickFireball = new Audio(FireballMP3);

  return (
    <S.Container>
      <S.OuterCard>
        <S.LogoIcon />
        <S.InnerCard>
          <S.Start
            onClick={() => {
              clickFireball.play();
              navigate('/category');
              dispatch({ type: 'BECAME_FRIEND' });
            }}
          >
            <S.PlayIcon />
          </S.Start>

          <SausageButton
            handler={() => {
              clickFireball.play();
              navigate('/how-to');
              dispatch({ type: 'BECAME_FRIEND' });
            }}
            value="how to play"
          />
        </S.InnerCard>
      </S.OuterCard>
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-height: 100vh;
  min-height: 100svh;
  padding: 25px;
`;

S.Start = styled.div`
  width: 160px;
  height: 160px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: inset 0px -4px 0px 5px #243041, inset 0px -12px 0px 11px #9d2df5;
  border-radius: 50%;
  transition: box-shadow 0.3s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 200px;
    height: 200px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.25);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;

    &::before {
      opacity: 1;
    }
  }
`;
S.LogoIcon = styled(LogoSVG)`
  width: 100%;
  max-width: 263px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 2;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 373px;
  }
`;
S.PlayIcon = styled(PlaySVG)`
  width: 52px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 66px;
  }
`;
S.OuterCard = styled.div`
  animation: ${emerge} ${({ theme }) => theme.transitionDefault};
  position: relative;
  height: 556px;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 608px;
  }
`;
S.InnerCard = styled.main`
  ${modalCard}
  padding: 130px 12px 64px 12px;
  gap: 57px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 130px 12px 51px 12px;
  }
`;
