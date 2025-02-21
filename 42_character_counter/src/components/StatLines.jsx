import styled from 'styled-components';
import { useContext } from 'react';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../Context';
import { countChars } from '../functions';
import ArrowSVG from '../assets/arrow.svg?react';

export default function StatLines() {
  const { state, dispatch } = useContext(AppContext);
  const { topChars, string, seeMore } = state;

  const lastColumnRef = useRef(null);
  const [maxWidth, setMaxWidth] = useState(0);
  useEffect(() => {
    // Calculate the maximum width of the last column based on the numbers
    if (lastColumnRef.current) {
      const widths = topChars.map((char) => {
        const span = document.createElement('span');
        span.style.visibility = 'hidden';
        span.style.whiteSpace = 'nowrap';
        span.innerText = `${char.count} (${(
          (char.count / countChars(string, true)) *
          100
        ).toFixed(2)}%)`;
        document.body.appendChild(span);
        const width = span.offsetWidth;
        document.body.removeChild(span);
        return width;
      });
      setMaxWidth(Math.max(...widths));
    }
  }, [topChars]);

  return (
    <S.Container>
      <h1>Letter Density</h1>
      {topChars.length > 0 ? (
        <>
          <S.Lines $expend={seeMore} $hgt={`${topChars.length * 34}px`}>
            {topChars.map((char) => {
              return (
                <S.CharLine
                  dynamicWidth={maxWidth * 1 + 6}
                  key={char.character}
                  layout={true}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <h2>{char.character.toUpperCase()}</h2>
                  <progress
                    id="file"
                    value={(
                      (char.count / countChars(string, true)) *
                      100
                    ).toFixed(2)}
                    max="100"
                  >
                    32%{' '}
                  </progress>
                  <p ref={lastColumnRef}>
                    {char.count} (
                    {((char.count / countChars(string, true)) * 100).toFixed(2)}
                    %)
                  </p>
                </S.CharLine>
              );
            })}
          </S.Lines>
          {topChars.length > 5 && (
            <S.SeeMore
              onClick={() => {
                dispatch({
                  type: 'SEE_MORE_TOGGLE',
                  payload: !seeMore,
                });
              }}
            >
              <span>See {seeMore ? 'less' : 'more'}</span>
              <S.ArrowIcon $rotate={seeMore} />
            </S.SeeMore>
          )}
        </>
      ) : (
        <span>No characters found. Start typing to see letter density.</span>
      )}
    </S.Container>
  );
}
const S = {};

S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: -16px;
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    text-align: left;
    color: ${({ theme }) => theme.text2};
  }
  span {
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -0.6px;
    color: ${({ theme }) => theme.text2};
  }
`;

S.Lines = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 12px;
  overflow: hidden;
  transition: all 0.3s linear;
  max-height: ${({ $expend, $hgt }) => ($expend ? $hgt : '156px')};

  p {
    font-size: 16px;
    line-height: 130%;
    text-align: right;
    letter-spacing: -0.6px;
    color: ${({ theme }) => theme.text2};
  }

  h2 {
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -0.6px;
    color: ${({ theme }) => theme.text2};
  }
`;
S.CharLine = styled(motion.div)`
  width: 100%;
  display: grid;
  column-gap: 20px;
  align-items: center;
  grid-template-columns: 20px 1fr ${({ dynamicWidth }) => `${dynamicWidth}px`};
  grid-template-rows: auto;

  progress {
    width: 100%;
    height: 12px;
    border-radius: 17px;
    background-color: ${({ theme }) => theme.textarea.bg};

    &::-webkit-progress-bar {
      background-color: ${({ theme }) => theme.textarea.bg};
      border-radius: 17px;
    }

    &::-moz-progress-bar {
      background-color: ${({ theme }) => theme.purpleBox};
      border-radius: 17px;
    }
    &::-webkit-progress-value {
      background-color: ${({ theme }) => theme.purpleBox};
      border-radius: 17px;

      transition: width 0.5s ease-in-out;
    }
  }
  p {
    white-space: nowrap;
    text-align: right;
  }
`;

S.SeeMore = styled.div`
  display: flex;
  flex-flow: arrow nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

S.ArrowIcon = styled(ArrowSVG)`
  path {
    fill: ${({ theme }) => theme.text2};
  }
  transform: rotate(${({ $rotate }) => ($rotate ? '180deg' : 0)});
`;
