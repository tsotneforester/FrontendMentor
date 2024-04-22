import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { root } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { setTimer } from "../store";

let timerNames = ["pomodoro", "short break", "long break"];

export default function Times() {
  const timer = useSelector((state) => state.timer);
  const dispatcher = useDispatch();
  const refContainer = useRef(null);

  const [ww, SetWw] = useState(null);

  function handler(i) {
    console.log(refContainer.current.getBoundingClientRect().width);
    dispatcher(setTimer(i));
  }

  useEffect(() => {
    SetWw(refContainer.current.getBoundingClientRect().width);
  }, []);

  return (
    <S.Container role="Times">
      <S.Slider ww={ww} tk={timer * ww}></S.Slider>
      {timerNames.map((e, i) => {
        return (
          <h1 ref={refContainer} className={timer == i ? "active" : undefined} key={i} onClick={() => handler(i)}>
            {e}
          </h1>
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

  h1 {
    opacity: 0.4;
    color: ${root.color.light_blue};
    font-family: ${root.font.roboto};
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    transition: opacity 0.5s;
    user-select: none;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media only screen and (min-width: ${root.media.tablet}px) {
      font-size: 14px;
    }

    &:not(.active):hover {
      opacity: 1;
    }

    &.active {
      opacity: 0.99;
      color: ${root.color.dark_blue};
    }
  }
`;

S.Slider = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  width: ${(prop) => prop.ww}px;
  height: 48px;
  border-radius: 26.5px;
  background-color: ${root.theme_color.red};
  transition: transform 0.5s;
  transform: translateX(${(prop) => prop.tk}px);
  /* transform: translateX(210px); */
`;
