import styled from 'styled-components';
export default function Followers() {
  return (
    <S.Container>
      <img src="images/illustration-grow-followers.png" alt="" />
      <h1>Grow followers with non-stop content.</h1>
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 100%;
  background: ${({ theme }) => theme.colors.purple500};
  border-radius: 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-area: followers;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 22px 24px;
    gap: 11px;
    height: 100%;
  }
  img {
    width: 100%;
    max-width: 228px;
  }

  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.06em;
    margin-top: 40px;
    color: ${({ theme }) => theme.colors.white};
    max-width: 230px;
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      max-width: 257px;
      font-size: 36px;
      line-height: 30px;
      text-align: left;
      margin: 0;
    }
  }
`;
