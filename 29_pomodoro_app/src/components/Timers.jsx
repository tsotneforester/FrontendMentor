import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { root } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { setTimer, setSecondsLeft } from "../store";

let timerNames = ["pomodoro", "short break", "long break"];

export default function Timres() {
  const timer = useSelector((state) => state.timer);
  const theme = useSelector((state) => state.theme);
  const isRunning = useSelector((state) => state.isRunning);
  const font = useSelector((state) => state.font);

  const dispatcher = useDispatch();
  const refContainer = useRef(null);

  const [sliderWidth, SetSliderWidth] = useState(null);

  function handler(i) {
    if (isRunning) {
      console.log("no, it is running");
    } else {
      dispatcher(setTimer(i));
      dispatcher(setSecondsLeft(null));
    }
  }

  useEffect(() => {
    SetSliderWidth(refContainer.current.getBoundingClientRect().width);

    window.matchMedia("(min-width: 768px)").addEventListener("change", (event) => {
      SetSliderWidth(refContainer.current.getBoundingClientRect().width);
    });
  }, [sliderWidth]);

  return (
    <S.Container role="Times">
      <S.Slider ww={sliderWidth} tk={timer * sliderWidth} color={theme}></S.Slider>
      {timerNames.map((e, i) => {
        return (
          <S.H1 font={font} ref={refContainer} className={timer == i ? "active" : undefined} key={i} onClick={() => handler(i)}>
            {e}
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
  position: relative;

  @media only screen and (min-width: ${root.media.tablet}px) {
    width: 373px;
    height: 63px;
    border-radius: 31.5px;
  }
`;

S.H1 = styled.h1`
  color: ${root.color.light_blue};
  font-family: ${(props) => props.font};
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  /* user-select: none; */
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
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
  width: ${(prop) => prop.ww}px;
  height: 48px;
  border-radius: 26.5px;
  background-color: ${(prop) => prop.color};
  transition: transform 0.5s;
  transform: translateX(${(prop) => prop.tk}px);
  /* transform: translateX(210px); */
`;
