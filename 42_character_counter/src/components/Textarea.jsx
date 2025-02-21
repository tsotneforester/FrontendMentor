import styled from 'styled-components';
import InfoSVG from '../assets/info.svg?react';
import { useContext } from 'react';
import {
  getMostFrequentCharacters,
  setLimitExceded,
  calculateReadingTime,
  countChars,
  countSentences,
  countWords,
} from '../functions';
import Settings from './Settings';
import { AppContext } from '../Context';
import { defaultPlaceholder } from '../styles/styles';

// import Settings from './Settings';

export default function Textarea() {
  const { state, dispatch } = useContext(AppContext);
  const { string, limitExceded, excludeSpaces, limitActivated, limit } = state;

  return (
    <S.Container>
      <S.Textarea
        placeholder="Start typing here… (or paste your text)"
        name="string"
        value={string}
        $warning={limitActivated && limitExceded}
        onChange={(e) => {
          const newValue = e.target.value;
          const limitExceded = setLimitExceded(newValue, excludeSpaces, limit);
          const topChars = getMostFrequentCharacters(newValue);
          const sentences = countSentences(newValue); //
          const words = countWords(newValue);
          const readingTime = calculateReadingTime(newValue);
          const chars = countChars(newValue, excludeSpaces);
          dispatch({
            type: 'UPDATE_STRING_AND_COUNT',
            payload: {
              string: newValue,
              limitExceded,
              readingTime,
              topChars,
              sentences,
              words,
              chars,
            },
          });
        }}
      />
      {limitActivated && limitExceded && (
        <S.Warning>
          <InfoSVG />
          <p>Limit reached! Your text exceeds {limit} characters.</p>
        </S.Warning>
      )}
      <Settings />
    </S.Container>
  );
}
const S = {};
S.Container = styled.div``;
S.Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  background: ${({ theme }) => theme.textarea.bg};
  border: 2px solid
    ${({ theme, $warning }) =>
      $warning ? theme.textarea.warning : theme.textarea.passive};
  box-shadow: 0px 0px 10px
    ${({ theme, $warning }) =>
      $warning ? theme.textarea.warning : 'transparent'};
  border-radius: 12px;
  padding: 16px;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.6px;
  color: ${({ theme }) => theme.textarea.color};
  &:focus {
    border: 2px solid ${({ theme }) => theme.textareaFocusBorder};
    border: 2px solid
      ${({ theme, $warning }) =>
        $warning ? theme.textarea.warning : theme.textareaFocusBorder};
    box-shadow: 0px 0px 10px
      ${({ theme, $warning }) =>
        $warning ? theme.textarea.warning : theme.textareaFocusShadow};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px;
  }

  input,
  textarea {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  /* Styling the placeholder */
  &::placeholder {
    ${defaultPlaceholder}
  }

  /* For WebKit browsers (Chrome, Safari) */
  &::-webkit-input-placeholder {
    ${defaultPlaceholder}
  }

  /* For Mozilla Firefox */
  &:-moz-placeholder {
    ${defaultPlaceholder}
  }

  /* For Internet Explorer 10-11 */
  &:-ms-input-placeholder {
    ${defaultPlaceholder}
  }

  /* For Edge */
  &::-ms-input-placeholder {
    ${defaultPlaceholder}
  }
`;
S.Warning = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  p {
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -0.6px;
    color: ${({ theme }) => theme.textarea.warning};
  }
`;
