import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import DiceSVG from './assets/dice.svg?react';
import MySkeleton from './components/MySkeleton';

async function fetchData() {
  try {
    const response = await axios('https://api.adviceslip.com/advice');
    return response.data.slip;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || 'An error occurred while fetching data'
      );
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
}

function App() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['advice'],
    queryFn: fetchData,
    staleTime: 0,
  });

  if (isError)
    return (
      <S.Container>
        <p>Error loading data!</p>
        <h1>{error.message}</h1>
      </S.Container>
    );

  return (
    <S.Container>
      <p>
        {isLoading ? (
          <MySkeleton width={80} height={16} />
        ) : (
          `ADVICE # ${data.id}`
        )}
      </p>
      <h1>
        {isLoading ? (
          <>
            <MySkeleton height={26} />
            <MySkeleton height={26} />
          </>
        ) : (
          `“${data.advice}”`
        )}
      </h1>

      <S.RefreshButton
        tabIndex={0}
        onClick={refetch}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); //🔰 Prevent scrolling when space is pressed
            refetch();
          }
        }}
      >
        <DiceSVG />
      </S.RefreshButton>
    </S.Container>
  );
}

export default App;

const S = {};

const emerge = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.5);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

S.Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.blue2};
  background: ${({ theme }) => theme.colors.blue2};
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 40px 24px 104px 24px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 24px;
  width: 100%;
  max-width: 480px;
  background-image: url('/assets/divider-mobile.svg');
  background-repeat: no-repeat;
  background-position: center bottom 64px;
  background-attachment: scroll;
  background-size: 86% auto;
  animation: ${emerge} 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 48px 48px 128px 48px;
    max-width: 540px;
    background-image: url('/assets/divider-desktop.svg');
    background-position: center bottom 64px;
  }

  p {
    font-weight: 800;
    font-size: 11px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 3.5px;
    color: ${({ theme }) => theme.colors.green};

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 13px;
      line-height: 18px;
      letter-spacing: 4.1px;
    }
  }

  h1 {
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    letter-spacing: -0.3px;
    color: ${({ theme }) => theme.colors.gray};
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 28px;
      line-height: 38px;
    }
  }
`;

S.RefreshButton = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: calc(-64px / 2);
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.green};
  box-shadow: 0px 0px 0px ${({ theme }) => theme.colors.green};
  transition: all 0.6s;
  cursor: pointer;
  &:focus,
  &:hover {
    box-shadow: 0px 0px 40px ${({ theme }) => theme.colors.green};
  }
`;
