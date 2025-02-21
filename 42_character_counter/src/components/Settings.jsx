import styled, { css } from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../Context';

import CheckSVG from '../assets/check.svg?react';
import {
  getMostFrequentCharacters,
  setLimitExceded,
  countChars,
} from '../functions';
import { defaultCheckbox } from '../styles/styles';
export default function Settings() {
  const { state, dispatch } = useContext(AppContext);
  const { string, readingTime, excludeSpaces, limitActivated, limit } = state;

  return (
    <S.Container>
      <S.Checkboxes>
        <S.Group1>
          <label
            onClick={() => {
              const newValue = !excludeSpaces;
              const limitExceded = setLimitExceded(string, newValue, limit);
              const chars = countChars(string, newValue);
              const topChars = getMostFrequentCharacters(string, newValue);
              dispatch({
                type: 'TOGGLE_SPACE',
                payload: {
                  excludeSpaces: newValue,
                  limitExceded,
                  chars,
                  topChars,
                },
              });
            }}
          >
            <S.Checkbox1 tabIndex="0" $fill={excludeSpaces}>
              {excludeSpaces && <CheckSVG />}
            </S.Checkbox1>
            Exclude Spaces
          </label>
        </S.Group1>
        <S.Group2>
          <label
            onClick={() => {
              const newValue = !limitActivated;
              const limitExceded = setLimitExceded(
                string,
                excludeSpaces,
                limit
              );
              dispatch({
                type: 'TOGGLE_LIMIT',
                payload: { limitActivated: newValue, limitExceded },
              });
            }}
          >
            <S.Checkbox2 tabIndex="0" $fill={limitActivated}>
              {limitActivated && <CheckSVG />}
            </S.Checkbox2>
            Set Character Limit
          </label>
          {limitActivated && (
            <input
              type="text"
              value={limit}
              onChange={(e) => {
                const newValue = e.target.value.replace(/[^0-9]/g, '');
                const limitExceded = setLimitExceded(
                  string,
                  excludeSpaces,
                  newValue
                );

                dispatch({
                  type: 'UPDATE_LIMIT',
                  payload: { limit: newValue, limitExceded },
                });
              }}
            />
          )}
        </S.Group2>
      </S.Checkboxes>

      <p>
        Approx. reading time: &lt;
        {readingTime} minute
      </p>
    </S.Container>
  );
}
const S = {};

S.Container = styled.div`
  margin-top: 16px;
  p {
    margin-top: 12px;
    color: ${({ theme }) => theme.text2};
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin: 0;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
`;

S.Checkboxes = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
  }

  label {
    color: ${({ theme }) => theme.text2};
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  input[type='text'] {
    padding: 4px 12px;
    grid-area: input;
    border: 1px solid ${({ theme }) => theme.limitBorder};
    background-color: transparent;
    border-radius: 6px;
    margin-left: 10px;
    /* width: 60px; */
    width: 70px;
    box-sizing: border-box;
    min-width: unset !important;
    padding: 5px;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -0.6px;
    color: ${({ theme }) => theme.text2};
  }
`;

S.Checkbox1 = styled.div`
  ${defaultCheckbox}
`;
S.Checkbox2 = styled.div`
  ${defaultCheckbox}
`;

const defaultGroup = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

S.Group1 = styled.div`
  ${defaultGroup}
`;
S.Group2 = styled.div`
  ${defaultGroup}
`;
