import React, { useState } from "react";
import styled from "styled-components";
import { root } from "../theme";
import Moon from "../assets/moon.svg";
import Sun from "../assets/sun.svg";

function ThemeToggler({ theme, handler }) {
  return (
    <>
      <S.Toggler>
        <img src={Sun} alt="" />
        <S.Slider onClick={handler}>
          <S.Spot possition={theme ? "26px" : "0"} />
        </S.Slider>
        <img src={Moon} alt="" />
      </S.Toggler>
    </>
  );
}

export default ThemeToggler;
let S = {};

S.Toggler = styled.div`
  /* position: absolute;
  top: 10px;
  right: 10px; */
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: white;
  z-index: 1;
`;

S.Slider = styled.div`
  width: 50px;
  height: 22px;
  border-radius: 12px;
  background-color: white;
  padding: 3px;
`;

S.Spot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${root.violet};
  transform: translateX(${(prop) => prop.possition});
  transition: all ${root.time};
`;

//${(prop) => prop.theme.icon}
