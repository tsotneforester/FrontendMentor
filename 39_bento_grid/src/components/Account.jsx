import styled from 'styled-components';
export default function Account() {
  return (
    <S.Container>
      <img src="images/illustration-multiple-platforms.png" alt="multiple-platforms" />
      <h1>Manage multiple accounts and platforms.</h1>
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-area: account;
    height: 100%;
    justify-content: space-between;
    padding: 24px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }

  img {
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      max-width: none;
      width: 316px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      max-width: none;
    }
  }

  h1 {
    max-width: 220px;
    font-weight: 500;
    font-size: 26px;
    line-height: 24px;
    letter-spacing: -0.06em;
    max-width: 268px;
    color: ${({ theme }) => theme.colors.black};
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 28px;
      line-height: 26px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 32px;
      line-height: 28px;
    }
  }
`;
