import React from "react";
import styled from "styled-components";
import { root } from "../styled";

export default function OptionTitle({ align = "left", children }) {
  return <S.H1 align={align}>{children}</S.H1>;
}

const S = {};

S.H1 = styled.h1`
  font-size: 22px;
  width: 100%;
  color: ${root.color.marine_blue};
  font-weight: 600;
  text-align: ${(prop) => prop.align};

  @media only screen and (min-width: ${root.media}) {
    font-size: 30px;
  }
`;
