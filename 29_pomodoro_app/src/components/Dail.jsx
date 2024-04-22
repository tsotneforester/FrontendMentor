import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { root } from "../styled";
import { setSecondsLeft, setIsRunning } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

export default function Dail() {
  const timer = useSelector((state) => state.timer);
  const theme = useSelector((state) => state.theme);
  const minutes = useSelector((state) => state.minutes);
  let secondsLeft = useSelector((state) => state.secondsLeft);
  const isRunning = useSelector((state) => state.isRunning);
  const font = useSelector((state) => state.font);
  const dispatcher = useDispatch();

  let timerInseconds = secondsLeft || Object.values(minutes)[timer] * 60;

  function secondsToMinutesAndSeconds(totalSeconds) {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    return { minutes: minutes, seconds: seconds };
  }

  let result = secondsToMinutesAndSeconds(timerInseconds);

  function handler() {
    if (isRunning) {
      dispatcher(setIsRunning(false));
    } else {
      dispatcher(setIsRunning(true));
    }
  }

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        dispatcher(setSecondsLeft((timerInseconds -= 1)));
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <S.Container>
      <S.Outer>
        <CircularProgressbarWithChildren
          counterClockwise={true}
          strokeWidth="2.9"
          value={timerInseconds}
          maxValue={Object.values(minutes)[timer] * 60}
          styles={{
            path: {
              strokeLinecap: "round",
              transition: "stroke-dashoffset 0.5s ease 0s",
              stroke: theme,
            },
            trail: {
              stroke: "none",
            },
          }}>
          <S.Timestamp>
            <S.Minutes font={font}>{result.minutes < 10 ? `0${result.minutes}` : result.minutes}</S.Minutes>
            <S.Delimighter font={font}>:</S.Delimighter>
            <S.Seconds font={font}>{result.seconds < 10 ? `0${result.seconds}` : result.seconds}</S.Seconds>
            <S.Button font={font} onClick={handler}>
              {isRunning ? "PAUSE" : "START"}
            </S.Button>
          </S.Timestamp>
        </CircularProgressbarWithChildren>
      </S.Outer>
    </S.Container>
  );
}

const S = {};

const styledTime = css`
  color: ${root.color.light_blue};
  font-family: ${(props) => props.font};
  font-size: 80px;
  font-weight: ${(props) => (props.font == `"Space Mono", monospace` ? 400 : 700)};
  text-align: center;
  letter-spacing: ${(props) => (props.font == `"Space Mono", monospace` ? "-10px" : "0")};
`;

S.Container = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(-45deg, #2e325a 0%, #0e112a 100%);
  background-blend-mode: normal;
  box-shadow: 50px 50px 100px #121530, -50px -50px 100px #272c5a;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${root.media.tablet}px) {
    width: 410px;
    height: 410px;
  }
`;

S.Outer = styled.div`
  width: 267.8px;
  height: 267.8px;
  border-radius: 50%;
  background: #161932;
  padding: 9.8px;
  @media only screen and (min-width: ${root.media.tablet}px) {
    width: 366px;
    height: 366px;
    padding: 13.5px;
  }
`;

S.Timestamp = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-size: 68px;
  color: #1bbb7e;
  font-weight: 400;
  text-align: center;
`;

S.Button = styled.span`
  color: ${root.color.light_blue};
  font-family: ${(props) => props.font};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 15px;
  padding-left: 15px;
  cursor: pointer;
  position: absolute;
  top: 176px;
  left: 50%;
  transform: translateX(-50%);
  @media only screen and (min-width: ${root.media.tablet}px) {
    font-size: 16px;
  }
`;

S.Minutes = styled.div`
  ${styledTime}
`;
S.Delimighter = styled.div`
  ${styledTime}
`;
S.Seconds = styled.div`
  ${styledTime}
`;
