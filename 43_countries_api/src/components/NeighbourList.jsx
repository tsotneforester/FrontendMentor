import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function NeighbourList({ countryName = '', loading }) {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const currentRegion = searchParams.get('region');

  async function fetchNeighbours(cnt) {
    const response = await axios.get(
      `https://restcountries.com/v3.1/alpha?codes=${cnt.borders.join(',')}`
    );

    return response.data;
  }

  const generateCountryLink = (countryName) => {
    const baseUrl = `/${countryName}`;
    if (currentRegion) {
      return `${baseUrl}?region=${currentRegion}`;
    }
    return baseUrl;
  };

  const { data: neighbours, isLoading } = useQuery({
    queryKey: ['neighbours', countryName],
    queryFn: () => fetchNeighbours(countryName),
  });
  if (loading) {
    return (
      <S.Container>
        <S.Heading>
          <Skeleton width={80} height={30} />
        </S.Heading>
        <S.Buttons>
          {Array.from({ length: 3 }).map((_, i) => {
            return <Skeleton key={i} width={80} height={30} />;
          })}
        </S.Buttons>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Heading>Border Countries:</S.Heading>
      <S.Buttons>
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => {
              return <Skeleton key={i} width={80} height={30} />;
            })
          : neighbours.map((e, i) => {
              const { name, cca3 } = e;
              return (
                <S.Button
                  key={i}
                  tabIndex={0}
                  onClick={() => {
                    navigate(`${generateCountryLink(cca3)}`);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      navigate(`${generateCountryLink(cca3)}`);
                    }
                  }}
                >
                  {name.common}
                </S.Button>
              );
            })}
      </S.Buttons>
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  margin-top: 32px;
  user-select: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-area: neighbours;
    margin-top: 48px;
  }
`;
S.Heading = styled.h1`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
S.Buttons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
S.Button = styled.div`
  box-shadow: 0px 0px 4px 1px rgba(17, 21, 23, 0.252406);
  border-radius: 2px;
  background-color: ${({ theme }) => theme.navBg};
  transition: ${({ theme }) => theme.trans};
  border-radius: 5px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 6px 15px;
  width: fit-content;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
  &:focus {
    box-shadow: 0px 0px 7px 2px ${({ theme }) => theme.focus.card};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 14px;
    line-height: 19px;
    padding: 6px 20px;
  }
`;
