import React from "react";
import styled from "styled-components";
import { root } from "../styled";
import { useDispatch, useSelector } from "react-redux";

export default function Title() {
  const data = useSelector((state) => state.data);
  const dispatcher = useDispatch();

  return <H1>pomodoro logo</H1>;
}

const S = {};

// @media only screen and (min-width: ${root.media.tablet}px) {

// }
