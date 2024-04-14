import React from "react";
import styled from "styled-components";
import { root } from "../styled";
import { useSelector } from "react-redux";

export default function Length() {
  const length = useSelector((state) => state.length);

  return (
    <S.Container>
      <p>Character Length</p>
      <h1>{length}</h1>
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 18px;
    color: ${root.color.white};
    font-weight: 600;
    text-align: center;
  }
  h1 {
    font-size: 32px;
    color: ${root.color.green};
    font-weight: 800;
    text-align: center;
  }
`;
