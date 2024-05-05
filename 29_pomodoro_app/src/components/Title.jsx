import React from "react";
import styled from "styled-components";
import { root } from "../styled";

export default function Title() {
  return <S.Container>pomodoro</S.Container>;
}

const S = {};

S.Container = styled.h1`
  width: 100%;
  font-family: ${root.font.roboto};
  color: ${root.color.light_blue};
  font-family: "Kumbh Sans";
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  @media only screen and (min-width: ${root.media.tablet}px) {
    font-size: 32px;
  }
`;
