import styled from 'styled-components';
export default function Stars() {
  return (
    <S.Container>
      <h1>
        Social Media <span>10x</span> Faster with AI
      </h1>
      <img src="images/illustration-five-stars.png" alt="five stars" />
      <p>Over 4,000 5-star reviews</p>
    </S.Container>
  );
}
const S = {};

S.Container = styled.div`
  background-color: ${({ theme }) => theme.colors.purple500};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 32px;
  width: 100%;
  background: ${({ theme }) => theme.colors.purple500};
  border-radius: 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-area: stars;
    padding: 72px 76px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 62px 32px;
  }

  h1 {
    font-weight: 500;
    font-size: 46px;
    line-height: 42px;
    text-align: center;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.white};

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 54px;
      line-height: 48px;
      max-width: 400px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 62px;
      line-height: 58px;
    }

    span {
      color: ${({ theme }) => theme.colors.yellow500};
    }
  }

  img {
    width: 100%;
    max-width: 192px;
    margin-top: 24px;
  }

  p {
    margin-top: 8px;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
