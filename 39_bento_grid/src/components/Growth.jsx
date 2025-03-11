import styled from 'styled-components';
export default function Growth() {
  return (
    <S.Container>
      <h1>&gt;56%</h1>
      <p>faster audience growth</p>
      <img src="images/illustration-audience-growth.png" alt="growth" />
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-area: growth;
    display: grid;
    grid-template-areas:
      'h1 img'
      'p img';
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 100%;
    display: flex;
  }

  h1 {
    font-weight: 500;
    font-size: 46px;
    line-height: 42px;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.black};
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-area: h1;
      font-size: 54px;
      line-height: 48px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 62px;
      line-height: 58px;
    }
  }

  p {
    margin: 15px 0 24px 0;
    font-size: 18px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.black};
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-area: p;
      margin: 0;
      align-self: flex-end;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin: 15px 0 38px 0;
    }
  }

  img {
    width: 100%;
    max-width: 178px;
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-area: img;
      justify-self: flex-end;
      align-self: center;
    }
  }
`;
