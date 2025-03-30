import styled, { css } from 'styled-components';
import { blueGradient } from '../styles/styles';
export default function SausageButton({ handler, value, theme = 'blue' }) {
  return (
    <S.Container onClick={handler} $theme={theme}>
      {value}
    </S.Container>
  );
}
const S = {};

const pinkGradient = css`
  /* Pink Gradient */
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: inset 0px -2px 0px 3px #140e66, inset 0px 1px 0px 6px #c642fb;

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.25),
        rgba(255, 255, 255, 0.25)
      ),
      linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
    box-shadow: inset 0px -2px 0px 3px #140e66, inset 0px 1px 0px 6px #c642fb;
  }
`;

S.Container = styled.button`
  padding: 12px 60px;
  border-radius: 40px;
  font-size: 32px;

  font-size: 32px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ $theme }) => ($theme == 'blue' ? blueGradient : pinkGradient)}
`;
