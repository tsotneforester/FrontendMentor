import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';
import RegionList from '../components/RegionList';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const fetchCountries = async () => {
    const { data } = await axios.get('https://restcountries.com/v3.1/all');

    data.sort((a, b) => {
      return b.population - a.population;
    });
    return data;
  };

  const {
    data: countries,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });

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
