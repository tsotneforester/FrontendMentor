import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { AppContext } from '../Context';
import { useSearchParams } from 'react-router-dom';
import { choosePhrase } from '../utils/choosePhrase';

export default function Phrase() {
  const { state, dispatch } = useContext(AppContext);
  const { calledChars, phraseArray, data, category } = state;
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';

  useEffect(() => {
    if (categoryParam != category) {
      dispatch({
        type: 'FORCED_SET_PHRASE',
        payload: {
          newPhrase: choosePhrase(data, categoryParam),
          newCategory: categoryParam,
        },
      });
    }
  }, []);

  return (
    <S.Container>
      {phraseArray.map((word, wordIndex) => {
        return (
          <S.Word key={wordIndex}>
            {word.split('').map((char, charIndex) => {
              return (
                <S.WordLetter
                  $active={calledChars.includes(char)}
                  key={charIndex}
                >
                  {calledChars.includes(char) ? char : ''}
                </S.WordLetter>
              );
            })}
          </S.Word>
        );
      })}
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  column-gap: 56px;
  row-gap: 12px;
  width: 100%;
  margin: 78px 0 118px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    row-gap: 16px;
    column-gap: 112px;
    margin: 111px 0 134px 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: ${({ theme }) => theme.maxWidthL};
    column-gap: 144px;
    margin: 88px 0 120px 0;
  }
`;

S.Word = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  column-gap: 8px;
  row-gap: 12px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    column-gap: 12px;
    row-gap: 16px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    column-gap: 16px;
  }
`;
S.WordLetter = styled.span`
  font-size: 40px;
  line-height: 120%;
  /* identical to box height, or 48px */
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  user-select: none;
  /* White */
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 9px 0;
  width: 40px;
  height: 66px;

  background: ${({ theme }) => theme.colors.blue};
  box-shadow: inset 0px -2px 0px 3px #140e66, inset 0px 1px 0px 6px #3c74ff;
  border-radius: 12px;
  transition: opacity ${({ theme }) => theme.transitionDefault};
  opacity: ${({ $active }) => ($active ? 1 : 0.25)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 64px;
    line-height: 120%;

    width: 88px;
    height: 112px;

    border-radius: 32px;
  }
`;
