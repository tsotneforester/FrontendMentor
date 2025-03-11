import styled from 'styled-components';
export default function PostingSchedule() {
  return (
    <S.Container>
      <h1>Maintain a consistent posting schedule.</h1>
      <img src="images/illustration-consistent-schedule.png" alt="schedule" />
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
  height: 218px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.yellow500};
  border-radius: 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-area: postingschedule;
    height: 247px;
    padding: 24px;
  }

  h1 {
    font-weight: 500;
    font-size: 26px;
    line-height: 24px;
    letter-spacing: -0.06em;
    color: ${({ theme }) => theme.colors.black};
    max-width: 275px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 32px;
      line-height: 28px;
      letter-spacing: -2px;
    }
  }

  img {
    width: 100%;
    max-width: 212px;
  }
`;
