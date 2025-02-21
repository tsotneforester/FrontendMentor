import styled, { css } from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import BackSVG from '../assets/back.svg?react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Error from '../components/Error';
import NeighbourList from '../components/NeighbourList';
import useCountry from '../hooks/useCountry';

export default function Country() {
  let { country } = useParams();
  const { countryData, loading, error, hasNeighbours } = useCountry(country);
  const navigate = useNavigate();

  if (error) {
    return (
      <S.Container>
        <S.Link onClick={() => navigate('/')}>
          <BackIcon />
          <h1>Back</h1>
        </S.Link>
        <Error data={error} />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Link onClick={() => navigate('/')}>
        <BackIcon />
        <h1>Back</h1>
      </S.Link>
      {countryData.map((e, i) => {
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
        } = e;
        return (
          <S.Card key={i}>
            <S.Flag>
              {loading ? (
                <Skeleton width={'100%'} height={'100%'} />
              ) : (
                <img src={flags.png} alt="flag" />
              )}
            </S.Flag>

            <S.CountryName>
              {loading ? <Skeleton width={170} height={30} /> : name.common}
            </S.CountryName>

            <S.Info1>
              {loading ? (
                <Skeleton width={130} height={20} />
              ) : (
                <p>
                  <span>Native Name: </span>
                  {name.nativeName && Object.values(name.nativeName)[0]?.common}
                </p>
              )}

              {loading ? (
                <Skeleton width={150} height={20} />
              ) : (
                <p>
                  <span>Population: </span>
                  {population}
                </p>
              )}

              {loading ? (
                <Skeleton width={90} height={20} />
              ) : (
                <p>
                  <span>Region: </span>
                  {region}
                </p>
              )}
              {loading ? (
                <Skeleton width={150} height={20} />
              ) : (
                <p>
                  <span>Sub Region: </span>
                  {subregion}
                </p>
              )}

              {loading ? (
                <Skeleton width={70} height={20} />
              ) : (
                <p>
                  <span>Capital: </span>
                  {capital[0]}
                </p>
              )}
            </S.Info1>
            <S.Info2>
              {loading ? (
                <Skeleton width={130} height={20} />
              ) : (
                <p>
                  <span>Top Level Domain: </span>
                  {tld[0]}
                </p>
              )}

              {loading ? (
                <Skeleton width={90} height={20} />
              ) : (
                <p>
                  <span>Currencies: </span>
                  {currencies && Object.keys(currencies).join(', ')}
                </p>
              )}

              {loading ? (
                <Skeleton width={100} height={20} />
              ) : (
                <p>
                  <span>Languages: </span>
                  {languages && Object.values(languages).join(', ')}
                </p>
              )}
            </S.Info2>
            {hasNeighbours && <NeighbourList countryName={countryData[0]} />}
          </S.Card>
        );
      })}
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
