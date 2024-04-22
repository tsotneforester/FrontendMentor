import styled from "styled-components";
import React from "react";
import { setModalOpened } from "../store";
import { root, styledSVG } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import ThemeOptions from "./ThemeOptions";
import FontOptions from "./FontOptions";
import MinuteOptions from "./MinuteOptions";
import CloseSVG from "../assets/icon-close.svg?react";

import { useState } from "react";

function Modal() {
  const modalOpened = useSelector((state) => state.modalOpened);
  const theme = useSelector((state) => state.theme);
  const font = useSelector((state) => state.font);
  const dispatcher = useDispatch();
  console.log(font);

  return (
    <>
      <S.Container role="modal" zorg={`${modalOpened ? "kaia" : "cudia"}`}>
        <S.Card font={font}>
          <S.Title font={font}>
            <h1>Settings</h1>
            <CloseIcon onClick={() => dispatcher(setModalOpened())} />
          </S.Title>
          <S.HR />
          <MinuteOptions />
          <FontOptions />
          <ThemeOptions />
          <S.Apply theme={theme} font={font}>
            Apply
          </S.Apply>
        </S.Card>
      </S.Container>
      <S.Backdrop opacity={`${modalOpened ? 1 : 0}`}></S.Backdrop>
    </>
  );
}

export default Modal;

const S = {};

S.Container = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  padding: 44px 24px 74px 24px;
  height: 100svh;
  border-radius: 0;
  display: flex;
  bottom: ${(prop) => (prop.zorg == "kaia" ? "0" : "-100%")};
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: bottom 0.5s ease;
  animation: ${(prop) => (prop.zorg == "kaia" ? "slideIn 0.8s ease forwards;" : "none")};

  @keyframes slideIn {
    0% {
      transform: translateY(-280px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

S.Card = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 21px);
  max-width: 327px;
  border-radius: 20px;
  background-color: ${root.color.white};
  padding: 28px 24px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  h6 {
    color: black;
  }
`;

S.Title = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  h1 {
    font-family: ${(prop) => prop.font};
    color: ${root.color.darker_blue};
    font-size: 20px;
    font-weight: 700;
  }
`;

S.Backdrop = styled.div`
  background-color: #0a0c1c7b;
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  top: 0;
  left: 0;
  opacity: ${(prop) => prop.opacity};
  transition: opacity ease 0.5s;
`;

S.Apply = styled.button`
  background-color: ${(prop) => prop.theme};
  transition: all ease 0.5s;
  position: absolute;
  bottom: -28px; //dynamic
  padding: 17px 46.5px;
  color: ${root.color.white};
  font-family: ${(prop) => prop.font};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border-radius: 26.5px;
  opacity: 1;
  filter: brightness(100%);
  &:hover {
    filter: brightness(135%);
  }
`;

const CloseIcon = styled(CloseSVG)`
  cursor: pointer;
  path {
    transition: all 0.5s;
  }

  &:hover {
    path {
      opacity: 1;
    }
  }
`;

S.HR = styled.hr`
  position: absolute;
  top: 78px;
  left: 0;
  width: 100%;

  border-top: 1px solid #e3e1e1;
`;
