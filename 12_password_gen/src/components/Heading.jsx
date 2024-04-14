import React from "react";
import styled from "styled-components";
import { root } from "../styled";

export default function Heading() {
  return <S.Container>Password Generator</S.Container>;
}

const S = {};

S.Container = styled.header`
  font-size: 24px;
  color: ${root.color.violet_black};
  font-weight: 600;
  text-align: center;
`;
