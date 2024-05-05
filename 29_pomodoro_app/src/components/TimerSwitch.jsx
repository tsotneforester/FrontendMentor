import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { root } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTimer, setSecondsLeft } from "../TimerSlice";

const timerNames = ["pomodoro", "short break", "long break"];

export default function TimerSwitch() {
  const activeTimer = useSelector((state) => state.timer.activeTimer);
  const theme = useSelector((state) => state.timer.theme);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const font = useSelector((state) => state.timer.font);

  const dispatcher = useDispatch();
  const refContainer = useRef(null);

  const [sliderWidth, SetSliderWidth] = useState(null);

  function handler(i) {
    if (!isRunning) {
      dispatcher(setActiveTimer(i));
      dispatcher(setSecondsLeft(null));
    }
  }

  useEffect(() => {
    SetSliderWidth(refContainer.current.getBoundingClientRect().width);

    window.matchMedia(`(min-width: ${root.media.tablet}px)`).addEventListener("change", () => {
      SetSliderWidth(refContainer.current.getBoundingClientRect().width);
    });
  }, [sliderWidth]);

  return (
    <S.Container role="timer-switch">
      <S.Slider width={sliderWidth} translate={activeTimer * sliderWidth} color={theme}></S.Slider>
      {timerNames.map((name, i) => {
        return (
          <S.H1 font={font} ref={refContainer} className={activeTimer == i ? "active" : undefined} key={i} onClick={() => handler(i)}>
            {name}
          </S.H1>
        );
      })}
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  width: 327px;
  height: 63px;
  border-radius: 31.5px;
  background-color: ${root.color.darker_blue};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  align-items: stretch;
  padding: 8px;
  margin: 40px 0 48px 0;
  position: relative;

  @media only screen and (min-width: ${root.media.tablet}px) {
    width: 373px;
    height: 63px;
    border-radius: 31.5px;
    margin: 47px 0 109px 0;
  }
`;

S.H1 = styled.h1`
  color: ${root.color.light_blue};
  font-family: ${(props) => props.font};
  font-size: 12px;
  font-weight: 700;
  text-align: center;

  user-select: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ${root.ms}s;
  @media only screen and (min-width: ${root.media.tablet}px) {
    font-size: 14px;
  }

  &:not(.active) {
    opacity: 0.4;
  }

  &:not(.active):hover {
    opacity: 1;
  }

  &.active {
    opacity: 0.99;
    color: ${root.color.dark_blue};
  }
`;

S.Slider = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  width: ${(prop) => prop.width}px;
  height: 48px;
  border-radius: 26.5px;
  background-color: ${(prop) => prop.color};
  transition: transform ${root.ms}s;
  transform: translateX(${(prop) => prop.translate}px);
  /* transform: translateX(210px); */
`;
