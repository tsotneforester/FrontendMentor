const MAX_RATING = 5;
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Ratings({ setter, rating }) {
  const navigate = useNavigate();

  return (
    <S.Container>
      {Array.from({ length: MAX_RATING }, (_, i) => {
        return (
          <S.Bubble
            tabIndex={0}
            key={i}
            $active={i + 1 == rating}
            onClick={() => {
              setter(i + 1);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();

                navigate('/thanks', { state: { rating: i + 1 } });
              }
            }}
          >
            {i + 1}
          </S.Bubble>
        );
      })}
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  margin: 24px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 24px 0 32px 0;
    gap: 22px;
  }
`;

S.Bubble = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.white : theme.colors.blue2};
  font-size: 16px;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.blue2 : theme.colors.gray};
  font-weight: 700;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.8s;

  &:focus {
    color: ${({ theme }) => theme.colors.blue2};
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 51px;
    height: 51px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.black};
  }
`;
