import styled from 'styled-components';
import { buttonStyles } from '../styles/styles';

export default function Auth() {
  return (
    <S.Container>
      <button className="login">Login</button>
      <button className="register">Register</button>
    </S.Container>
  );
}
const S = {};

S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-flow: row nowrap;
    width: auto;
    gap: 2px;
  }

  .login {
    ${buttonStyles}
  }

  .register {
    ${buttonStyles}
    border: 1.5px solid ${({ theme }) => theme.colors.gray2};
  }
`;
