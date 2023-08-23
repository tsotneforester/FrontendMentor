import React from "react";
import ThemeToggler from "./ThemeToggler";
import styled from "styled-components";
import { device, root } from "../theme";

function Header() {
  return (
    <S.Header>
      <h1>todo</h1>
      <ThemeToggler />
    </S.Header>
  );
}

export default Header;

let S = {};
S.Header = styled.header`
  width: 100%;
  max-width: ${root.maxWidth};
  margin: 60px 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & h1 {
    font-weight: 700;
    font-size: 28px;
    color: ${root.white};
    letter-spacing: 10px;
    text-transform: uppercase;
  }
`;
