import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Error from './Error';
import Tilt from 'react-parallax-tilt';
import Paginator from './Paginator';
import { formatPopulation } from '../functions';

export default function CountryList({ loading, data, error }) {
  const [activePage, setActivePage] = useState(1);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentRegion = searchParams.get('region');

  const selectedCountry = searchParams.get('country')?.toLowerCase() || '';
  const selectedRegion = searchParams.get('region') || '';

  let itemsPerPage = 12;

  function getPaginatedData(dataArray, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return dataArray.slice(startIndex, endIndex);
  }

  const generateCountryLink = (countryName) => {
    const baseUrl = `/${countryName}`;
    if (currentRegion) {
      return `${baseUrl}?region=${currentRegion}`;
    }
    return baseUrl;
  };

  if (error) {
    return <Error data={error} />;
  }

  if (!loading && data.length == 0) {
    return <Error data={{ name: 'empty', message: 'no such country' }} />;
  }

  if (loading) {
    return (
      <S.Container>
        {Array.from({ length: 12 }, (_, i) => {
          return (
            <S.Card key={i}>
              <S.Flag>
                <Skeleton
                  style={{ display: 'block' }}
                  width={'100%'}
                  height={'100%'}
                />
              </S.Flag>
              <S.Info>
                <Skeleton width={170} height={22} />
                <S.Details>
                  <Skeleton width={140} height={16} />
                  <Skeleton width={90} height={16} />
                  <Skeleton width={100} height={16} />
                </S.Details>
              </S.Info>
            </S.Card>
          );
        })}
      </S.Container>
    );
  }

  const filteredCountries = data.filter(
    (country) =>
      country.name.common.toLowerCase().includes(selectedCountry) &&
      country.region.includes(selectedRegion)
  );

  return (
    <>
      <S.Container>
        {getPaginatedData(filteredCountries, activePage, itemsPerPage).map(
          (country, i) => {
            const {
              name,
              cca3,
              region,
              population,
              flags,
              capital = '',
            } = country;

            return (
              <Tilt key={i}>
                <S.Card
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      navigate(`${generateCountryLink(cca3)}`);
                    }
                  }}
                  onClick={() => {
                    navigate(`${generateCountryLink(cca3)}`);
                  }}
                >
                  <S.Flag>
                    {loading ? (
                      <Skeleton
                        style={{ display: 'block' }}
                        width={'100%'}
                        height={'100%'}
                      />
                    ) : (
                      <img src={flags.png} alt={name.common} />
                    )}
                  </S.Flag>
                  <S.Info>
                    {loading ? (
                      <Skeleton width={170} height={22} />
                    ) : (
                      <h2>{name.common}</h2>
                    )}

                    <S.Details>
                      {loading ? (
                        <Skeleton width={140} height={16} />
                      ) : (
                        <p>
                          <span>Population: </span>
                          {formatPopulation(population)}
                        </p>
                      )}
                      {loading ? (
                        <Skeleton width={90} height={16} />
                      ) : (
                        <p>
                          <span>Region: </span>
                          {region}
                        </p>
                      )}
                      {loading ? (
                        <Skeleton width={100} height={16} />
                      ) : (
                        <p>
                          <span>Capital: </span>
                          {capital[0]}
                        </p>
                      )}
                    </S.Details>
                  </S.Info>
                </S.Card>
              </Tilt>
            );
          }
        )}
      </S.Container>
      <Paginator
        limit={itemsPerPage} //12
        data={filteredCountries} //[...]
        activePage={activePage} // const [activePage, setActivePage] = useState(1);
        handler={setActivePage}
      />
    </>
  );
}

const S = {};

S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 36px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 74px;
  }

  h2 {
    font-weight: 800;
    font-size: 18px;
    line-height: 26px;
  }
`;
S.Card = styled.div`
  width: 264px;
  background-color: ${({ theme }) => theme.navBg};
  transition: ${({ theme }) => theme.trans};
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;
  overflow: hidden;

  &:focus {
    box-shadow: 0px 0px 7px 2px ${({ theme }) => theme.focus.card};
  }
`;
S.Flag = styled.div`
  width: 100%;
  height: 160px;
  background-image: url(${({ $img }) => $img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);

  & img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;
S.Info = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;
S.Details = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  p,
  span {
    font-size: 14px;
    line-height: 16px;
  }

  p {
    font-weight: 200;
  }
  span {
    font-weight: 600;
  }
`;
