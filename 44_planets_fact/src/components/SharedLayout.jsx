import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';

export default function SharedLayout() {
  return (
    <S.Container>
      <Navbar />
      <Outlet />
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: none;
  }
`;
