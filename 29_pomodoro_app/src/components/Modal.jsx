import styled from "styled-components";
import React from "react";
import { setModalOpened, mergeTemp } from "../TimerSlice";
import { root } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import ThemeOptions from "./features/options/ThemeOptions";
import FontOptions from "./features/options/FontOptions";
import DurationOptions from "./features/options/DurationOptions";
import CloseSVG from "../assets/icon-close.svg?react";

function Modal() {
  const modalOpened = useSelector((state) => state.timer.modalOpened);
  const theme = useSelector((state) => state.timer.theme);
  const tempTheme = useSelector((state) => state.tempOptions.theme);
  const font = useSelector((state) => state.timer.font);
  const tempFont = useSelector((state) => state.tempOptions.font);
  const durations = useSelector((state) => state.timer.durations);
  const tempDurations = useSelector((state) => state.tempOptions.durations);
  const activeTimer = useSelector((state) => state.timer.activeTimer);
  const secondsLeft = useSelector((state) => state.timer.secondsLeft);
  const dispatcher = useDispatch();

  let timerInSeconds = Object.values(durations)[activeTimer];
  let tempTimerInSeconds = Object.values(tempDurations)[activeTimer];

  return (
    <>
      <S.Container role="modal" visible={`${modalOpened ? "true" : undefined}`}>
        <S.Card role="card" font={font}>
          <S.Title font={font}>
            <h1>Settings</h1>
            <CloseIcon onClick={() => dispatcher(setModalOpened())} />
          </S.Title>
          <S.HR />
          <DurationOptions />
          <FontOptions />
          <ThemeOptions />
          <S.Apply
            color={theme}
            font={font}
            onClick={() => {
              let hasActiceDurationChanged = timerInSeconds == tempTimerInSeconds;

              dispatcher(setModalOpened());
              dispatcher(mergeTemp({ theme: tempTheme, font: tempFont, durations: tempDurations, seconds: hasActiceDurationChanged ? secondsLeft : tempTimerInSeconds * 60 }));
            }}>
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
  height: 100vh;
  height: 100svh;
  border-radius: 0;
  display: flex;
  bottom: ${(prop) => (prop.visible == "true" ? "0" : "-100%")};
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: bottom ${root.ms}s ease;
  animation: ${(prop) => (prop.visible == "true" ? "slideIn 0.8s ease forwards;" : "none")};

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
  height: auto;
  max-width: 327px;
  border-radius: 20px;
  background-color: ${root.color.white};
  padding: 28px 24px 0 24px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: ${root.media.tablet}px) {
    max-width: 575px;
    padding: 34px 40px 0 40px;
  }
`;

S.Title = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (min-width: ${root.media.tablet}px) {
    height: 52px;
  }

  h1 {
    font-family: ${(prop) => prop.font};
    color: ${root.color.darker_blue};
    font-size: 20px;
    font-weight: 700;
  }
`;

S.Backdrop = styled.div`
  background-color: #0a0c1c7b;
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  top: 0;
  left: 0;
  opacity: ${(prop) => prop.opacity};
  transition: opacity ease ${root.ms}s;
`;

S.Apply = styled.button`
  background-color: ${(prop) => prop.color};
  transition: all ease ${root.ms}s;
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
    transition: all ${root.ms}s;
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
  @media only screen and (min-width: ${root.media.tablet}px) {
    top: 84px;
  }
`;
