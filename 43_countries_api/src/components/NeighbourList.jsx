import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useNeighbours from '../hooks/useNeighbours';

export default function NeighbourList({ countryName }) {
  const navigate = useNavigate();
  const { neighbours, loading } = useNeighbours(countryName);

  const [searchParams] = useSearchParams();
  const currentRegion = searchParams.get('region');

  const generateCountryLink = (countryName) => {
    const baseUrl = `/${countryName}`;
    if (currentRegion) {
      return `${baseUrl}?region=${currentRegion}`;
    }
    return baseUrl;
  };

  return (
    <S.Container>
      <S.Heading>
        {loading ? <Skeleton width={150} height={20} /> : 'Border Countries:'}
      </S.Heading>
      <S.Buttons>
        {loading
          ? Array.from({ length: 3 }).map((_, i) => {
              return <Skeleton key={i} width={80} height={30} />;
            })
          : neighbours.map((e, i) => {
              const { name } = e;
              return (
                <S.Button
                  key={i}
                  tabIndex={0}
                  onClick={() => {
                    navigate(`${generateCountryLink(name.official)}`);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      navigate(`${generateCountryLink(name.official)}`);
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
