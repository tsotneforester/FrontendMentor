import { useContext } from 'react';
import OSVG from '../assets/icon-o.svg?react';
import XSVG from '../assets/icon-x.svg?react';
import { AppContext } from '../Context';

import styled, { css } from 'styled-components';
import LogoSVG from '../assets/logo.svg?react';
import RestartSVG from '../assets/icon-restart.svg?react';

const Header = () => {
  const { state, dispatch } = useContext(AppContext);
  const { turnIsForX, progressMap } = state;

  return (
    <S.Container>
      <S.LogoIcon />
      <S.Turn>
        {turnIsForX ? <S.TurnXIcon /> : <S.TurnOIcon />} <span>Turn</span>
      </S.Turn>
      <S.Reset
        onClick={() => {
          if (progressMap.some((item) => item !== null)) {
            dispatch({ type: 'SET_GAME_STATUS', payload: 'paused' });
          }
        }}
      >
        <S.RestartIcon />
      </S.Reset>
    </S.Container>
  );
};

export default Header;

const S = {};

S.Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
S.LogoIcon = styled(LogoSVG)`
  width: 72px;
`;

S.Turn = styled.div`
  padding: 9px 15px 13px 15px;

  background: ${({ theme }) => theme.colors.blue};
  box-shadow: inset 0px -4px 0px ${({ theme }) => theme.colors.blueShadow};
  border-radius: 5px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 13px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 13px 30px 19px 30px;
    border-radius: 10px;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.875px;
    color: ${({ theme }) => theme.colors.grayDark};
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 1px;
    }
  }
`;

const defaultTurnMarker = css`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.grayDark};
`;

S.TurnOIcon = styled(OSVG)`
  ${defaultTurnMarker}
`;

S.TurnXIcon = styled(XSVG)`
  ${defaultTurnMarker}
`;
S.Reset = styled.button`
  padding: 12.5px;
  background: ${({ theme }) => theme.colors.grayDark};
  box-shadow: inset 0px -4px 0px ${({ theme }) => theme.colors.grayShadow};
  border-radius: 5px;
  transition: all ${({ theme }) => theme.transitionSlow};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 16px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray};
  }
`;
S.RestartIcon = styled(RestartSVG)`
  color: ${({ theme }) => theme.colors.blue};
  width: 16px;
  height: 16px;
  display: block;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 20px;
    height: 20px;
  }
`;
