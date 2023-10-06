import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { theme1, theme2, theme3 } from "../theme";
import { AppContext } from "../Context";

function Wrapper({ children }) {
  const { themeMode, setThemeMode } = useContext(AppContext);

  return <S.Container color={themeMode}>{children}</S.Container>;
}

export default Wrapper;
const S = {};
S.Container = styled.div`
  background-color: ${(prop) => (prop.color == "theme1" ? theme1.body : prop.color == "theme2" ? theme2.body : theme3.body)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;
