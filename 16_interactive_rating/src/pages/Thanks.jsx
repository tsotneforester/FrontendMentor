import styled from 'styled-components';
import { defaultCard, defaultH1, defaultP } from '../styles/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ThankSVG from '../assets/thank.svg?react';

export default function Thanks() {
  let location = useLocation();
  const navigate = useNavigate();
  let { rating } = location.state || {};

  useEffect(() => {
    if (!rating) {
      navigate('/');
    }
  }, [rating, navigate]);

  return (
    <S.Container>
      <ThankSVG />
      <h2>You selected {rating} out of 5</h2>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  ${defaultCard}
  padding-top: 34px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 45px 40px 45px 32px;
  }

  p {
    ${defaultP}
  }

  h1 {
    ${defaultH1}
    margin-bottom: 10px;
    text-align: center;
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin-bottom: 7px;
    }
  }

  h2 {
    border-radius: 22.5px;
    background-color: ${({ theme }) => theme.colors.blue2};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 400;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 24px 0;
    padding: 5px 12px;
  }
`;
