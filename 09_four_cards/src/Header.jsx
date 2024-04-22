import React from "react";
import styled from "styled-components";
import { root } from "./styled";

export function Header() {
  return (
    <S.Header>
      <h1>Reliable, efficient delivery</h1>
      <h2>Powered by Technology</h2>
      <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
    </S.Header>
  );
}

const S = {};

S.Header = styled.header`
  width: 311px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${root.media.desktop}) {
    width: 540px;
  }
  & h1 {
    font-size: 24px;
    color: ${root.color.dark_gray};
    font-weight: 275;
    text-align: center;
  }
  @media only screen and (min-width: ${root.media.desktop}) {
    & h1 {
      font-size: 36px;
    }
  }
  & h2 {
    font-size: 24px;
    color: ${root.color.dark_gray};
    font-weight: 600;
    text-align: center;
  }
  @media only screen and (min-width: ${root.media.desktop}) {
    & h2 {
      font-size: 36px;
    }
  }
  & p {
    font-size: 15px;
    color: ${root.color.dark_gray};
    font-weight: 400;
    text-align: center;
    margin-top: 12px;
    opacity: 0.5;
  }
`;
