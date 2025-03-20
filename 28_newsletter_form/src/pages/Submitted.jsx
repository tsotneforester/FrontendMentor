import styled from 'styled-components';
import { p, h1, button } from '../styles/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import PageSound from '../assets/page.mp3';

export default function Submitted() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [turningPage] = useSound(PageSound);

  useEffect(() => {
    if (!state?.email) {
      navigate('/');
    } else {
      setLoading(false); // Set loading to false if email exists
    }
  }, [state, navigate]);

  if (loading) {
    return null; // Render nothing while loading
  }

  return (
    <S.Container>
      <img src="assets/icon-success.svg" alt="" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <span>{state?.email}</span>.
        Please open it and click the button inside to confirm your subscription.
      </p>

      <button
        tabIndex={0}
        onClick={() => {
          navigate(-1);
          turningPage();
        }}
      >
        Dismiss message
      </button>
    </S.Container>
  );
}

const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme.max_width};
  padding: 0 24px;
  gap: 32px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-color: ${({ theme }) => theme.colors.white};
    padding: 48px 64px 64px 64px;
    border-radius: 36px;
    max-width: 504px;
  }

  img {
    width: 64px;
  }

  h1 {
    ${h1}
    margin: 0;
  }

  p {
    ${p}

    span {
      font-weight: 700;
    }
  }

  button {
    ${button}
    margin-top: 100px;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin: 0;
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.tomato};
    }
  }
`;
