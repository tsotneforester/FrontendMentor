import React from "react";
import styled from "styled-components";
import { root } from "../styled";

export default function Heading() {
  return (
    <S.Container>
      <h1>Learn to code by watching others</h1>
      <h2>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</h2>
    </S.Container>
  );
}

const S = {};
S.Container = styled.header`
  align-self: center;
  @media only screen and (min-width: ${root.media.mobile}) {
    max-width: ${root.max_width_l};
    flex-grow: 1;
  }

  h1 {
    width: 100%;
    max-width: ${root.max_width_s};
    color: ${root.color.white};
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
    @media only screen and (min-width: ${root.media.mobile}) {
      text-align: left;
      font-size: 50px;
      line-height: 55px;
    }
  }

  h2 {
    max-width: ${root.max_width_s};
    color: ${root.color.white};
    margin-top: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    text-align: center;
    @media only screen and (min-width: ${root.media.mobile}) {
      text-align: left;
      margin-top: 18px;
      max-width: ${root.max_width_l};
    }
  }
`;
