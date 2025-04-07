import styled from 'styled-components';
import Cards from './components/Cards';
import Filters from './components/Filters';

export default function App() {
  return (
    <S.Container>
      <Filters />
      <Cards />
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
