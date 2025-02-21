import styled from 'styled-components';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';
import RegionList from '../components/RegionList';
import useCountries from '../hooks/useCountries'; // Import custom hook

import 'react-loading-skeleton/dist/skeleton.css';
import Paginator from '../components/Paginator';

export default function Home() {
  const { countries, loading, error } = useCountries();
  const [searchParams] = useSearchParams();
  const [activePage, setActivePage] = useState(1);
  const selectedCountry = searchParams.get('country')?.toLowerCase() || '';
  const selectedRegion = searchParams.get('region') || '';

  const filteredCountries = useMemo(() => {
    return countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(selectedCountry) &&
        country.region.includes(selectedRegion)
    );
  }, [countries, selectedCountry, selectedRegion]);

  return (
    <S.Container>
      <S.Filters>
        <SearchBar />
        <RegionList data={countries} />
      </S.Filters>
      <CountryList
        data={filteredCountries} //[...]
        activePage={activePage} // const [activePage, setActivePage] = useState(1);
        loading={loading}
        error={error}
        handler={setActivePage}
      />
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
