import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';
import RegionList from '../components/RegionList';
import useCustomQuery from '../useCustomQuery';

export default function Home() {
  const { data: countries, error, isLoading } = useCustomQuery();

  return (
    <S.Container>
      <S.Filters>
        <SearchBar />
        <RegionList data={countries} />
      </S.Filters>
      <CountryList data={countries} loading={isLoading} error={error} />
    </S.Container>
  );
}
const S = {};
S.Filters = styled.div`
  max-width: 390px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    gap: 48px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    max-width: none;
  }
`;
S.Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    gap: 48px;
  }
`;
