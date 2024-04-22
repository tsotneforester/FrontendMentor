import React from "react";
import styled from "styled-components";
import { root } from "../styled";
import { useDispatch, useSelector } from "react-redux";

export default function Title() {
  const data = useSelector((state) => state.data);
  const dispatcher = useDispatch();

  return <H1>pomodoro</H1>;
}

const S = {};

const H1 = styled.h1`
  width: 100%;
  font-family: ${root.font.roboto};

  color: ${root.color.light_blue};
  font-family: "Kumbh Sans";
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  /* border: solid white 2px; */
  font-size: 32px;
`;

// @media only screen and (min-width: ${root.media.tablet}px) {

// }
