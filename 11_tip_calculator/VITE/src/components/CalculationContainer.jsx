import React from "react";
import styled from "styled-components";

export default function CalculationContainer({ children, tipPP, totalPP }) {
  return (
    <S.CalculationContainer>
      <S.AmountLine>
        <section>
          <h2>Tip Amount</h2>
          <h3>/ person</h3>
        </section>
        <h4>{tipPP}</h4>
      </S.AmountLine>
      <S.AmountLine>
        <section>
          <h2>Total</h2>
          <h3>/ person</h3>
        </section>
        <h4>{totalPP}</h4>
      </S.AmountLine>
      {children}
    </S.CalculationContainer>
  );
}

let S = {};

S.CalculationContainer = styled.div`
  width: 311px;
  height: 257px;
  border-radius: 15px;
  background-color: var(--dark-green);
  padding: 39px 22px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  @media only screen and (min-width: 980px) {
    grid-area: 1/2 / span 3 / span 1;
    padding: 40px;
    height: 417px;
    width: 413px;
  }
`;

S.AmountLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
