import styled from 'styled-components';
export default function Ai() {
  return (
    <S.Container>
      <h1>Write your content using AI.</h1>
      <img src="images/illustration-ai-content.png" alt="" />
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;
  width: 100%;
  background: ${({ theme }) => theme.colors.yellow500};
  border-radius: 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-area: usingai;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 100%;
    min-height: 50%;
    justify-content: space-between;
  }

  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 28px;
    letter-spacing: -0.06em;
    color: ${({ theme }) => theme.colors.black};
    max-width: 260px;
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 36px;
      line-height: 30px;
      max-width: 232px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 40px;
      line-height: 36px;
      max-width: 182px;
    }
  }

  img {
    width: 100%;
    max-width: 220px;
  }
`;
