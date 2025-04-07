import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('filter') || '';

  return (
    <S.Container>
      <S.All
        $active={!searchTerm}
        onClick={(e) => {
          setSearchParams({});
        }}
      >
        All
      </S.All>
      <S.Button
        $active={searchTerm == 'active'}
        onClick={(e) => {
          const { innerHTML: value } = e.target;
          setSearchParams({ filter: value });
        }}
      >
        active
      </S.Button>
      <S.Button
        $active={searchTerm == 'inactve'}
        onClick={(e) => {
          const { innerHTML: value } = e.target;
          setSearchParams({ filter: value });
        }}
      >
        inactve
      </S.Button>
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  padding: 40px;
  background-color: blue;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    background-color: white;
    border-radius: 8px;
    padding: 8px;
  }
`;
S.All = styled.button`
  border: 2px solid ${({ $active }) => ($active ? 'black' : 'transparent')};
`;

S.Button = styled.button`
  border: 2px solid ${({ $active }) => ($active ? 'black' : 'transparent')};
`;
