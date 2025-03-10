import { useState } from 'react';
import Ratings from '../componenets/Ratings';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { defaultCard, defaultP, defaultH1 } from '../styles/styles';
import StarSVG from '../assets/star.svg?react';

export default function Home() {
  const [rating, setRating] = useState(null);
  const navigate = useNavigate();

  function submitHandler() {
    navigate('/thanks', { state: { rating } });
  }

  return (
    <S.Container>
      <S.Star>
        <StarSVG />
      </S.Star>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Ratings setter={(e) => setRating(e)} rating={rating} />
      <button onClick={submitHandler}>SUBMIT</button>
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  ${defaultCard}

  h1 {
    ${defaultH1}
    margin: 16px 0 10px 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin: 30px 0 7px 0;
    }
  }

  p {
    ${defaultP}
    text-align: left;
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 400;
    text-align: center;
    line-height: 22px;
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 15px;
      line-height: 24px;
    }
  }

  button {
    width: 100%;
    border-radius: 22px;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.black};
    border: none;
    cursor: pointer;
    transition: all 0.8s;
    padding: 14px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 2px;
    text-align: center;
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 15px;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;

S.Star = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.blue2};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  align-self: flex-start;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.blue2};
  }
`;
