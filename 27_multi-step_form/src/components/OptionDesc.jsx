import React from "react";
import styled from "styled-components";
import { root } from "../styled";

export default function OptionDesc({ align = "left", maxwidth = "100%", children }) {
  return (
    <S.H2 align={align} maxwidth={maxwidth}>
      {children}
    </S.H2>
  );
}

const S = {};

S.H2 = styled.h2`
  font-size: 18px;
  width: 100%;
  line-height: 24px;
  color: ${root.color.cool_gray};
  font-weight: 400;
  text-align: ${(prop) => prop.align};
  max-width: ${(prop) => prop.maxwidth};
  margin: 20px 0;

  @media only screen and (min-width: ${root.media}) {
    margin: 16px 0;
    font-size: 16px;
  }
`;
