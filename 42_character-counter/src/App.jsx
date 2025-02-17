import styled from 'styled-components';
import Header from './components/Header';
import Textarea from './components/Textarea';
import StatBoxes from './components/StatBoxes';
import StatLines from './components/StatLines';

export default function App() {
  return (
    <S.Container>
      <Header />
      <Textarea />
      <StatBoxes />
      <StatLines />
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 40px;
  padding: 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 18px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 32px;
    gap: 40px;
  }
`;
