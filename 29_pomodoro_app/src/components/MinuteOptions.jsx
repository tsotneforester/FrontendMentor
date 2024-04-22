import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { root, circleHover, styledSVG, styledSettingTitle } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { setMinutes } from "../store";
import ArrowUPSVG from "../assets/icon-arrow-up.svg?react";
import ArrowDOWNSVG from "../assets/icon-arrow-down.svg?react";

let arr = [1, 2, 3];

export default function MinuteOptions() {
  const minutes = useSelector((state) => state.minutes);
  const timer = useSelector((state) => state.timer);
  const font = useSelector((state) => state.font);
  const isRunning = useSelector((state) => state.isRunning);
  let arr = Object.entries(minutes);

  const { pomodoro, short, long } = minutes;

  const dispatcher = useDispatch();

  function handlerIncrease(name, number, index) {
    if (!isRunning || (isRunning && index != timer)) {
      dispatcher(setMinutes({ ...minutes, [name]: (number += 1) }));
    }
  }

  function handlerDecrease(name, number, index) {
    if (!isRunning || (isRunning && index != timer)) {
      dispatcher(setMinutes({ ...minutes, [name]: (number -= 1) }));
    }
  }

  return (
    <S.Container role="Minutes">
      <S.Title font={font}>TIME (MINUTES)</S.Title>
      <S.Options>
        {arr.map((e, i) => {
          const [title, number] = e;
          return (
            <S.Option font={font}>
              <label>{title}</label>
              <S.Input role="Input" font={font} status={timer == i && isRunning ? "active" : undefined}>
                <h1>{number}</h1>
                <S.Controls>
                  <UpIcon onClick={() => handlerIncrease(title, number, i)} />
                  <DownIcon onClick={() => handlerDecrease(title, number, i)} />
                </S.Controls>
              </S.Input>
            </S.Option>
          );
        })}
      </S.Options>
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  width: 100%;
  padding: 16px 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

S.Options = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

S.Title = styled.h1`
  ${styledSettingTitle}
  font-family: ${(props) => props.font};
`;

S.Option = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 45% 55%;

  label {
    opacity: 0.4;
    color: ${root.color.dark_blue};
    font-size: 12px;
    font-weight: 700;
    font-family: ${(prop) => prop.font};
  }
`;
S.Input = styled.div`
  height: 50px;
  padding: 12px 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: ${root.color.gray};
  border-radius: 8px;
  border: 1px solid ${(prop) => (prop.status == "active" ? "red" : "transparent")};
  h1 {
    color: ${root.color.dark_blue};
    font-size: 14px;
    font-weight: 700;
    align-self: center;
    font-family: ${(prop) => prop.font};
  }
`;
S.Controls = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`;

const UpIcon = styled(ArrowUPSVG)`
  ${styledSVG}
`;

const DownIcon = styled(ArrowDOWNSVG)`
  ${styledSVG}
`;
