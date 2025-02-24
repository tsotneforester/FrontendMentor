import styled, { css } from 'styled-components';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import BackSVG from '../assets/back.svg?react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Error from '../components/Error';
import { useQuery } from '@tanstack/react-query';
import { formatPopulation } from '../functions';
import axios from 'axios';

import NeighbourList from '../components/NeighbourList';
import { useEffect } from 'react';

export default function Country() {
  let { country: code } = useParams();

  const fetchCountryDetails = async (countryCode) => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );

    return response.data[0];
  };

  const {
    data: country,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['country', code],
    queryFn: () => fetchCountryDetails(code),
  });

  const [searchParams] = useSearchParams();
  const selectedRegion = searchParams.get('region') || '';
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Backspace') {
        navigate({
          pathname: '/',
          search: selectedRegion ? `?region=${selectedRegion}` : '',
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  if (error) {
    return (
      <S.Container>
        <S.Link
          onClick={() => {
            navigate({
              pathname: '/',
              search: selectedRegion ? `?region=${selectedRegion}` : '',
            });
          }}
        >
          <BackIcon />
          <h1>Back</h1>
        </S.Link>
        <Error data={error} />
      </S.Container>
    );
  }

  if (isLoading) {
    return (
      <S.Container>
        <S.Link
          onClick={() => {
            navigate({
              pathname: '/',
              search: selectedRegion ? `?region=${selectedRegion}` : '',
            });
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              navigate({
                pathname: '/',
                search: selectedRegion ? `?region=${selectedRegion}` : '',
              });
            }
          }}
        >
          <BackIcon />
          <h1>Back</h1>
        </S.Link>
        <S.Card>
          <S.Flag>
            <Skeleton width={'100%'} height={'100%'} />
          </S.Flag>

          <S.CountryName>
            <Skeleton width={170} height={30} />
          </S.CountryName>

          <S.Info1>
            <Skeleton width={130} height={20} />
            <Skeleton width={150} height={20} />
            <Skeleton width={90} height={20} />
            <Skeleton width={150} height={20} />
            <Skeleton width={70} height={20} />
          </S.Info1>
          <S.Info2>
            <Skeleton width={130} height={20} />
            <Skeleton width={90} height={20} />
            <Skeleton width={100} height={20} />
          </S.Info2>
          {<NeighbourList loading={isLoading} />}
        </S.Card>
      </S.Container>
    );
  }

  const {
    name,
    region,
    population,
    flags,
    subregion = '',
    languages = '',
    tld = '',
    capital = '',
    currencies,
  } = country;

  return (
    <S.Container>
      <S.Link
        onClick={() => {
          navigate({
            pathname: '/',
            search: selectedRegion ? `?region=${selectedRegion}` : '',
          });
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            navigate({
              pathname: '/',
              search: selectedRegion ? `?region=${selectedRegion}` : '',
            });
          }
        }}
      >
        <BackIcon />
        <h1>Back</h1>
      </S.Link>
      <S.Card>
        <S.Flag>
          <img src={flags.png} alt="flag" />
        </S.Flag>

        <S.CountryName>{name.common}</S.CountryName>

        <S.Info1>
          <p>
            <span>Native Name: </span>
            {name.nativeName && Object.values(name.nativeName)[0]?.common}
          </p>

          <p>
            <span>Population: </span>
            {formatPopulation(population)}
          </p>

          <p>
            <span>Region: </span>
            {region}
          </p>

          <p>
            <span>Sub Region: </span>
            {subregion}
          </p>

          <p>
            <span>Capital: </span>
            {capital[0]}
          </p>
        </S.Info1>
        <S.Info2>
          <p>
            <span>Top Level Domain: </span>
            {tld[0]}
          </p>

          <p>
            <span>Currencies: </span>
            {currencies && Object.keys(currencies).join(', ')}
          </p>

          <p>
            <span>Languages: </span>
            {languages && Object.values(languages).join(', ')}
          </p>
        </S.Info2>

        <NeighbourList countryName={country} loading={isLoading} />
      </S.Card>
    </S.Container>
  );
}
const S = {};

const defaultInfo = css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-top: 23px;
  }
  p,
  span {
    font-size: 14px;
    line-height: 24px;
    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
      font-size: 16px;
    }
  }

  p {
    font-weight: 200;
  }
  span {
    font-weight: 600;
  }
`;

S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 64px;
  margin-top: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 32px;
    gap: 64px;
  }
`;

S.Flag = styled.div`
  width: 100%;
  height: 194px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-area: flag;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 340px;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;
S.Card = styled.div`
  width: 320px;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 100%;
    display: grid;
    grid-template-areas:
      'flag country country'
      'flag info1 info2'
      'flag neighbours neighbours';
    grid-template-columns: 300px 1fr 1fr;
    grid-template-rows: auto;
    column-gap: 60px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 560px 1fr 1fr;
  }
`;
S.CountryName = styled.h1`
  font-weight: 800;
  font-size: 22px;
  line-height: 30px;
  margin-top: 44px;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-area: country;
    margin-top: 0;
  }
`;
S.Info1 = styled.div`
  margin-top: 16px;
  ${defaultInfo}
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-area: info1;
  }
`;
S.Info2 = styled.div`
  margin-top: 32px;
  ${defaultInfo}
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-area: info2;
  }
`;
S.Neighbours = styled.div``;

S.Link = styled.div`
  align-self: flex-start;
  background-color: ${({ theme }) => theme.navBg};
  transition: ${({ theme }) => theme.trans};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 6px 24px;
  width: fit-content;
  gap: 8px;
  cursor: pointer;

  &:focus {
    box-shadow: 0px 0px 7px 2px ${({ theme }) => theme.focus.card};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 10px 39px;
  }
  h1 {
    font-weight: 300;
    line-height: 20px;

    font-size: 14px;

    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
      font-size: 16px;
    }
  }
`;

const BackIcon = styled(BackSVG)`
  path {
    fill: ${({ theme }) => theme.text};
  }
`;
