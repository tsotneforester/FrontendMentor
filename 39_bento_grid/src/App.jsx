import styled from 'styled-components';
import Stars from './components/Stars';
import Account from './components/Account';
import PostingSchedule from './components/PostingSchedule';
import MediaSchedule from './components/MediaSchedule';
import Followers from './components/Followers';
import Growth from './components/Growth';
import Create from './components/Create';
import Ai from './components/Ai';

export default function App() {
  return (
    <S.Container>
      <Stars />
      <Account />
      <PostingSchedule />
      <MediaSchedule />
      <Followers />
      <Growth />
      <Create />
      <Ai />
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.gapl};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 720px;
    display: grid;
    grid-template-areas:
      'stars stars'
      'account postingschedule'
      'mediaschedule mediaschedule'
      'followers followers'
      'growth growth'
      'createpost usingai';
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 1120px;
    padding: 0;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto 50px auto auto;
    grid-template-areas:
      'createpost stars stars mediaschedule'
      'createpost account postingschedule mediaschedule'
      'usingai account postingschedule mediaschedule'
      'usingai growth followers followers';
    order: 2;
  }
`;
