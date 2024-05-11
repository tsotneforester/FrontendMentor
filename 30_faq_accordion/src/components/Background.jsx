import React from "react";
import styled from "styled-components";
import { root } from "../styled";

export default function Background() {
  return <S.Container role="background"></S.Container>;
}

const S = {};

S.Container = styled.div`
  width: 100%;
  height: 232px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -3;
  background-image: url("assets/background-pattern-mobile.svg");
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (min-width: ${root.media.tablet}) {
    background-image: url("assets/background-pattern-desktop.svg");
    height: 320px;
  }
`;
