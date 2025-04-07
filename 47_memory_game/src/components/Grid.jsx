import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context';

import ASVG from '../assets/1.svg?react';
import BSVG from '../assets/2.svg?react';
import CSVG from '../assets/3.svg?react';
import DSVG from '../assets/4.svg?react';
import ESVG from '../assets/5.svg?react';
import FSVG from '../assets/6.svg?react';
import GSVG from '../assets/7.svg?react';
import HSVG from '../assets/8.svg?react';
import ISVG from '../assets/9.svg?react';
import JSVG from '../assets/10.svg?react';
import KSVG from '../assets/11.svg?react';
import LSVG from '../assets/12.svg?react';
import MSVG from '../assets/13.svg?react';
import NSVG from '../assets/14.svg?react';
import OSVG from '../assets/15.svg?react';
import PSVG from '../assets/16.svg?react';
import QSVG from '../assets/17.svg?react';
import RSVG from '../assets/18.svg?react';
import { useNavigate } from 'react-router-dom';

let xom = {
  0: <ASVG />,
  1: <BSVG />,
  2: <CSVG />,
  3: <DSVG />,
  4: <ESVG />,
  5: <FSVG />,
  6: <GSVG />,
  7: <HSVG />,
  8: <ISVG />,
  9: <JSVG />,
  10: <KSVG />,
  11: <LSVG />,
  12: <MSVG />,
  13: <NSVG />,
  14: <OSVG />,
  15: <PSVG />,
  16: <QSVG />,
  17: <RSVG />,
};

export default function Grid() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);
  const { gridSize, progress, gridContent, tempProgress, themeIsNumbers } =
    state;

  const handleCircleClick = (index) => {
    if (tempProgress.length >= 2 || tempProgress.includes(index)) return;
    const newHighlighted = [...tempProgress, index];
    dispatch({ type: 'UPDATE_HIGHLIGHTED', payload: newHighlighted });
  };

  useEffect(() => {
    if (!progress) {
      console.log('sadsa');
      navigate('/');
    }
  }, []);

  return (
    <S.Container $size={gridSize}>
      {gridContent?.map((content, index) => (
        <S.Circle
          key={index}
          onClick={() => {
            handleCircleClick(index);
          }}
          $active={progress.includes(index) || tempProgress.includes(index)}
        >
          {themeIsNumbers ? content : xom[content]}
        </S.Circle>
      ))}
    </S.Container>
  );
}
const S = {};

S.Container = styled.div`
  display: grid;
  width: 400px;
  grid-template-columns: repeat(${({ $size }) => $size}, 1fr);
  grid-template-rows: auto;
`;
S.Circle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: green;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: #ffffff;
  font-weight: 400;
  text-align: center;
  position: relative;

  ${({ $active }) =>
    $active ||
    `
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background-color: gray; // Change this to 'green' if you want it to be green when active
    }
  `}
`;
