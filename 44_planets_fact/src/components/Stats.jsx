import { memo } from 'react';
import styled from 'styled-components';

export default memo(function Stats({
  rotation,
  revolution,
  radius,
  temperature,
}) {
  return (
    <S.Container>
      <S.StatsLine>
        <h3>rotation time</h3>
        <h4>{rotation}</h4>
      </S.StatsLine>
      <S.StatsLine>
        <h3>revolution time</h3>
        <h4>{revolution}</h4>
      </S.StatsLine>
      <S.StatsLine>
        <h3>radius</h3>
        <h4>{radius}</h4>
      </S.StatsLine>
      <S.StatsLine>
        <h3>average temp.</h3>
        <h4>{temperature}</h4>
      </S.StatsLine>
    </S.Container>
  );
});
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 0 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-flow: row nowrap;
    gap: 11px;
    grid-area: stats;
    padding: 0;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 87px;
  }
`;

S.StatsLine = styled.div`
  width: 100%;
  mix-blend-mode: normal;
  padding: 16px 24px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border: 1px solid #393950;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px 19px 15px 16px;
    gap: 6px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.spartan};
    font-style: normal;
    font-weight: 700;
    font-size: 9px;
    line-height: 16px;
    letter-spacing: 1.1px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    mix-blend-mode: normal;
    opacity: 0.5;
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 11px;
      line-height: 25px;
      letter-spacing: 1px;
    }
  }
  h4 {
    font-family: ${({ theme }) => theme.fonts.antonio};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    text-align: right;
    letter-spacing: -0.75px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    opacity: 1;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 24px;
      line-height: 31px;
      letter-spacing: -0.9px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 40px;
      line-height: 52px;
      letter-spacing: -1.5px;
    }
  }
`;
