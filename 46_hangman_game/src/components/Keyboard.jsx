import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../Context';
import { updateCalledChars } from '../utils/updateCalledChars';
import { updateHealth } from '../utils/updateHealth';
import { checkStatus } from '../utils/checkStatus';

import CoinMP3 from '../assets/smb_coin.mp3';
import BumpMP3 from '../assets/smb_bump.mp3';
import OverMP3 from '../assets/smb_gameover.mp3';
import WinMP3 from '../assets/smb_world_clear.mp3';

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export default function Keyboard() {
  const { state, dispatch } = useContext(AppContext);
  const clickCoin = new Audio(CoinMP3);
  const clickBump = new Audio(BumpMP3);
  const clickOver = new Audio(OverMP3);
  const clickWin = new Audio(WinMP3);
  const { health, calledChars, phraseUniqueChars } = state;

  return (
    <S.Container>
      {alphabet.map((char, i) => {
        return (
          <S.Char
            onClick={() => {
              if (!calledChars.includes(char)) {
                const updatedGameStatus = checkStatus(
                  char,
                  calledChars,
                  phraseUniqueChars,
                  health
                );

                let updatedHealth =
                  health + updateHealth(char, phraseUniqueChars);

                if (updatedGameStatus == 'lost') {
                  clickOver.play();
                } else if (updatedGameStatus == 'won') {
                  clickWin.play();
                } else if (health == updatedHealth) {
                  clickCoin.play();
                } else {
                  clickBump.play();
                }
                dispatch({
                  type: 'KEYBOARD_CLICK',
                  payload: {
                    updatedCalledChars: updateCalledChars(char, calledChars),
                    updatedHealth,
                    updatedGameStatus,
                  },
                });
              }
            }}
            $active={!calledChars.includes(char)}
            key={i}
          >
            {char}
          </S.Char>
        );
      })}
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  column-gap: 8px;
  row-gap: 24px;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidthS};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 704px;
    column-gap: 16px;
    row-gap: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 1173px;
    gap: 24px;
  }
`;
S.Char = styled.span`
  border-radius: 8px;
  width: 27.3px;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.02em;
  padding: 10px;
  color: ${({ theme }) => theme.colors.navy};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all ${({ theme }) => theme.transitionDefault};
  opacity: ${({ $active }) => ($active ? 1 : 0.25)};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  user-select: none;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 48px;
    line-height: 120%;
    width: 64px;
    border-radius: 24px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 109px;
  }

  ${({ $active }) =>
    $active &&
    `
    &:hover {
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
    }
  `}
`;
