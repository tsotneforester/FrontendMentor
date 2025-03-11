import styled from 'styled-components';
export default function MediaSchedule() {
  return (
    <S.Container>
      <h1>Schedule to social media.</h1>
      <img src="images/illustration-schedule-posts.png" alt="posts" />
      <p>Optimize post timings to publish content at the perfect time for your audience.</p>
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 18px;
  gap: 24px;
  width: 100%;
  background: ${({ theme }) => theme.colors.purple100};
  border-radius: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-area: mediaschedule;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 100%;
    padding: 50px 32px;
    overflow: hidden;
    align-items: flex-start;
    justify-content: space-between;
  }

  h1 {
    font-weight: 500;
    font-size: 26px;
    line-height: 24px;
    letter-spacing: -0.06em;

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

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
    max-width: 275px;
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      max-width: 359px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      text-align: left;
    }
  }

  img {
    width: 100%;
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      max-width: 357px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      height: 318px;
      width: auto;
    }
  }
`;
