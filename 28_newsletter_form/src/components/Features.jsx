import React from "react";
import styled from "styled-components";
import { p } from "../styled";

let data = ["Product discovery and building what matters", "Measuring to ensure updates are a success", "And much more!"];

export default function Features() {
  return (
    <S.Container>
      {data.map((e, i) => {
        return (
          <S.Feature key={i}>
            <img src="assets/icon-list.svg" alt="" />
            <p>{e}</p>
          </S.Feature>
        );
      })}
    </S.Container>
  );
}

const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 24px;
`;

S.Feature = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;

  p {
    ${p}
  }
`;
