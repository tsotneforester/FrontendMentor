import styled from 'styled-components';
import Modals from '../components/Modals';
import ScoreSheet from '../components/ScoreSheet';
import Header from '../components/Header';
import Grid from '../components/Grid';

export default function Game() {
  return (
    <S.Container>
      <Header />
      <Grid />
      <ScoreSheet />
      <Modals />
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 328px;
  margin: 0 auto;
  padding-top: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    width: calc(3 * 140px + 2 * 28px);
    padding-top: 0;
  }
`;
