import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { root, device, theme1, theme2, theme3 } from "../theme";
import { AppContext } from "../Context";

function Header() {
  const { themeMode, setThemeMode } = useContext(AppContext);

  return (
    <S.Container color={themeMode}>
      <div className="title">calc</div>
      <div className="theme">
        <h1>THEME</h1>
        <div className="toggler">
          <div className="digits">
            <span onClick={() => setThemeMode("theme1")}>1</span>
            <span onClick={() => setThemeMode("theme2")}>2</span>
            <span onClick={() => setThemeMode("theme3")}>3</span>
          </div>
          <div className="slider">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </S.Container>
  );
}

export default Header;

const S = {};
S.Container = styled.div`
  width: ${root.calculator_width};
  @media ${device.mobile} {
    width: ${root.calculator_width_mobile};
  }
  height: 80px;
  border-radius: 12px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  & .title {
    color: ${(prop) => (prop.color == "theme1" ? theme1.text : prop.color == "theme2" ? theme2.text : theme3.text)};
    font-size: 34px;
    font-weight: 700;
  }
  & .theme {
    color: ${(prop) => (prop.color == "theme1" ? theme1.text : prop.color == "theme2" ? theme2.text : theme3.text)};
    text-align: right;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 40px;
    & h1 {
      font-size: 12px;
      letter-spacing: 1px;
      font-weight: 700;
    }

    .toggler {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 6px;
      & .digits {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        font-weight: 700;
        & span {
          cursor: pointer;
        }
      }

      & .slider {
        width: 60px;
        height: 20px;
        border-radius: 20px;
        background-color: ${(prop) => (prop.color == "theme1" ? theme1.keypad : prop.color == "theme2" ? theme2.keypad : theme3.keypad)};
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 4px;
      }
      & .circle {
        width: 14px;
        height: 14px;
        background-color: ${(prop) => (prop.color == "theme1" ? theme1.equals_bg : prop.color == "theme2" ? theme2.equals_bg : theme3.equals_bg)};
        border-radius: 50%;
        transition: transform ${root.animation_time}, color ${root.animation_time};
        transform: translateX(${(prop) => (prop.color == "theme1" ? "0px" : prop.color == "theme2" ? "17px" : "38px")});
        &:hover {
          background-color: ${(prop) => (prop.color == "theme1" ? theme1.equals_hover : prop.color == "theme2" ? theme2.equals_hover : theme3.equals_hover)};
          cursor: pointer;
        }
      }
    }
  }
`;
