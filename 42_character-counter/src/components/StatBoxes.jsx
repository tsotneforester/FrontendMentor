import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../Context';
import { formatSeconds } from '../functions';
import { defaultBox } from '../styles/styles';

export default function StatBoxes() {
  const { state } = useContext(AppContext);
  const { sentences, words, chars } = state;
  return (
    <S.Container>
      <S.Chars>
        <h1>{formatSeconds(chars)}</h1>
        <p>Total Characters</p>
      </S.Chars>
      <S.Words>
        <h1>{formatSeconds(words)}</h1>
        <p>Word Count</p>
      </S.Words>
      <S.Sentence>
        <h1>{formatSeconds(sentences)}</h1>
        <p>Sentence Count</p>
      </S.Sentence>
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-flow: row nowrap;
  }
`;

S.Chars = styled.div`
  ${defaultBox}
  background-color: ${({ theme }) => theme.purpleBox};
  background-image: url('/assets/pattern-character-count.svg');
`;
S.Words = styled.div`
  ${defaultBox} background-color: ${({ theme }) => theme.orangeBox};
  background-image: url('/assets/pattern-word-count.svg');
`;
S.Sentence = styled.div`
  ${defaultBox} background-color: ${({ theme }) => theme.brownBox};
  background-image: url('/assets/pattern-sentence-count.svg');
`;
