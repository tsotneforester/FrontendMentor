import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import { root } from "../theme";
import { ReactComponent as MoonIcon } from "../assets/moon.svg";
import { ReactComponent as SunIcon } from "../assets/sun.svg";
import { AppContext } from "../Context";

function ThemeToggler() {
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  return (
    <>
      <Toggler onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? <Sun /> : <Moon />}</Toggler>
    </>
  );
}

export default ThemeToggler;

const DefaultIcon = css`
  width: ${root.modeIconSize};
  height: ${root.modeIconSize};
  & path {
    fill: ${root.white};
  }
`;

const Moon = styled(MoonIcon)`
  ${DefaultIcon}
`;

const Sun = styled(SunIcon)`
  ${DefaultIcon}
`;

const Toggler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
