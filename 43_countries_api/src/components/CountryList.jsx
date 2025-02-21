import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Error from './Error';
import Tilt from 'react-parallax-tilt';

export default function CountryList({ data, loading, error }) {
  const navigate = useNavigate();

  if (error) {
    return <Error data={error} />;
  }

  if (!loading && data.length == 0) {
    return <Error data={{ name: 'empty', message: 'no such country' }} />;
  }

  return (
    <S.Container>
      {data.map((country, i) => {
        const { name, region, population, flags, capital = '' } = country;

        return (
          <Tilt key={i}>
            <S.Card
              onClick={() => {
                navigate(`/${name.official}`);
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
                  <img src={flags.png} alt="flag" />
                )}
              </S.Flag>
              <S.Info>
                <h1>
                  {loading ? <Skeleton width={170} height={22} /> : name.common}
                </h1>
                <S.Details>
                  {loading ? (
                    <Skeleton width={140} height={16} />
                  ) : (
                    <p>
                      <span>Population: </span>
                      {population}
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
      })}
    </S.Container>
  );
}

const S = {};
S.Nodata = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
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
`;
S.Card = styled.div`
  width: 264px;
  background-color: ${({ theme }) => theme.navBg};

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px 5px 0px 0px;
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
