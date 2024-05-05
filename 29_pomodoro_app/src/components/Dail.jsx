import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { root } from "../styled";
import { setSecondsLeft, setIsRunning } from "../TimerSlice";
import { useDispatch, useSelector } from "react-redux";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

export default function Dail() {
  const activeTimer = useSelector((state) => state.timer.activeTimer);
  const theme = useSelector((state) => state.timer.theme);
  const durations = useSelector((state) => state.timer.durations);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const font = useSelector((state) => state.timer.font);
  let secondsLeft = useSelector((state) => state.timer.secondsLeft);
  const dispatcher = useDispatch();

  const timerInSeconds = Object.values(durations)[activeTimer] * 60;
  let displayTime = secondsLeft ?? timerInSeconds;
  const { minutes, seconds } = secondsToMinutesAndSeconds(displayTime);

  function handler() {
    if (isRunning) {
      dispatcher(setIsRunning(false));
    } else {
      if (secondsLeft == 0) {
        dispatcher(setSecondsLeft(timerInSeconds));
      }
      dispatcher(setIsRunning(true));
    }
  }

  useEffect(() => {
    if (secondsLeft == 0) {
      dispatcher(setIsRunning(false));
      dispatcher(setSecondsLeft(0));
    }

    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        dispatcher(setSecondsLeft((displayTime -= 1)));
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, secondsLeft]);

  return (
    <S.Container role="container">
      <S.Outer>
        <CircularProgressbarWithChildren
          counterClockwise={true}
          strokeWidth="2.9"
          value={displayTime || timerInSeconds}
          maxValue={timerInSeconds}
          styles={{
            path: {
              strokeLinecap: "round",
              transition: "stroke-dashoffset 1s linear 0s",
              stroke: theme,
            },
            trail: {
              stroke: "none",
            },
          }}>
          <S.Timestamp>
            <S.Minutes font={font}>{minutes < 10 ? `0${minutes}` : minutes}</S.Minutes>
            <S.Delimighter font={font}>:</S.Delimighter>
            <S.Seconds font={font}>{seconds < 10 ? `0${seconds}` : seconds}</S.Seconds>

            <S.Button font={font} onClick={handler} color={theme}>
              {!isRunning && secondsLeft == 0 ? "RESTART" : isRunning ? "PAUSE" : "START"}
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

  user-select: none;
  font-size: 80px;
  font-weight: ${(props) => (props.font == `"Space Mono", monospace` ? 400 : 700)};
  text-align: center;
  letter-spacing: ${(props) => (props.font == `"Space Mono", monospace` ? "-10px" : "0")};
  @media only screen and (min-width: ${root.media.tablet}px) {
    font-size: 100px;
  }
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

  user-select: none;
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
  transition: color ${root.ms}s;
  @media only screen and (min-width: ${root.media.tablet}px) {
    font-size: 16px;
    top: 242px;
  }

  &:hover {
    color: ${(prop) => prop.color};
  }
`;

S.Minutes = styled.p`
  ${styledTime}
`;
S.Delimighter = styled.p`
  ${styledTime}
`;
S.Seconds = styled.p`
  ${styledTime}
`;

function secondsToMinutesAndSeconds(totalSeconds) {
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
  return { minutes: minutes, seconds: seconds };
}
