import styled from 'styled-components';
import SourceSVG from '../assets/icon-source.svg?react';
export default function Source({ href }) {
  return (
    <S.Container>
      <span>Source:</span>
      <a href={href} target="_blank">
        Wikipedia
      </a>
      <S.SourceIcon />
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding-bottom: 28px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-area: source;
    justify-content: flex-start;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-bottom: 39px;
  }

  span,
  a {
    font-family: ${({ theme }) => theme.fonts.spartan};
    font-size: 12px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.white};
    mix-blend-mode: normal;
    opacity: 0.5;
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 14px;
      line-height: 25px;
    }
  }
  span {
    font-weight: 200;
    letter-spacing: 1.2px;
  }

  a {
    font-weight: 700;
    text-decoration: underline;
  }
`;
S.SourceIcon = styled(SourceSVG)`
  color: ${({ theme }) => theme.colors.gray1};
`;
