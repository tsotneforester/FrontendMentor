import { memo } from "react";
import styled from "styled-components";

function TipContainer({ data, handler, style, children }) {
  console.log("Button Rendered");

  return (
    <S.TipContainer>
      <h1>Select Tip %</h1>
      <div id="group">
        {data.map((amount, ind) => {
          return (
            <S.Button value={amount} className={amount == style ? `tip-btn clicked` : "tip-btn"} key={ind} onClick={handler}>
              {`${amount}%`}
            </S.Button>
          );
        })}
        {children}
      </div>
    </S.TipContainer>
  );
}

export default memo(TipContainer);

let S = {};

S.TipContainer = styled.div`
  @media only screen and (min-width: 980px) {
    & h1 {
      margin-bottom: 16px;
    }
  }
  & #group {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }
  @media only screen and (min-width: 980px) {
    & #group {
      -moz-column-gap: 14px;
      column-gap: 14px;
      row-gap: 16px;
    }
  }

  & input {
    width: 146px;
    height: 48px;
    border-radius: 5px;
    background-color: #f3f9fa;
    font-size: 24px;
    color: var(--dark-green);
    font-weight: 700;
    text-align: right;
    border: none;
    line-height: 36px;
    padding-right: 18px;
  }
  @media only screen and (min-width: 980px) {
    & input {
      width: 117px;
    }
  }
`;

S.Button = styled.button`
  width: 146px;
  height: 48px;
  border-radius: 5px;
  background-color: var(--dark-green);
  font-size: 24px;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
  line-height: 36px;
  padding: 5px;
  border: none;

  @media only screen and (min-width: 980px) {
    width: 117px;
  }
  &:hover {
    background-color: var(--bright-green-1);
  }
  &.clicked {
    background-color: var(--bright-green-2);
    color: var(--dark-green);
  }
`;
