import React from "react";
import styled from "styled-components";
import { root, styledSVG, styledSettingTitle } from "../../../styled";
import { useDispatch, useSelector } from "react-redux";
import { setDurations } from "./tempOptionsSlice";
import ArrowUPSVG from "../../../assets/icon-arrow-up.svg?react";
import ArrowDOWNSVG from "../../../assets/icon-arrow-down.svg?react";

export default function DurationOptions() {
  const durations = useSelector((state) => state.tempOptions.durations);
  const activeTimer = useSelector((state) => state.timer.activeTimer);
  const font = useSelector((state) => state.timer.font);
  const isRunning = useSelector((state) => state.timer.isRunning);
  let arr = Object.entries(durations);

  const dispatcher = useDispatch();

  function handlerIncrease(name, number, index) {
    if (!isRunning || (isRunning && index != activeTimer)) {
      dispatcher(setDurations({ ...durations, [name]: (number += 1) }));
    }
  }

  function handlerDecrease(name, number, index) {
    if (!isRunning || (isRunning && index != activeTimer)) {
      if (number > 1) {
        dispatcher(setDurations({ ...durations, [name]: (number -= 1) }));
      }
    }
  }

  return (
    <S.Container role="Minutes">
      <S.Title font={font}>TIME (MINUTES)</S.Title>
      <S.Options role="options">
        {arr.map((e, i) => {
          const [title, number] = e;
          return (
            <S.Option key={i} role="option" font={font}>
              <label>{title}</label>
              <S.Input role="Input" font={font} status={activeTimer == i && isRunning ? "active" : undefined}>
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
  padding: 24px 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (min-width: ${root.media.tablet}px) {
    gap: 23px;
  }
`;

S.Options = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  @media only screen and (min-width: ${root.media.tablet}px) {
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
`;

S.Title = styled.h1`
  ${styledSettingTitle}
  font-family: ${(props) => props.font};

  @media only screen and (min-width: ${root.media.tablet}px) {
    text-align: left;
    width: 100%;
  }
`;

S.Option = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 45% 55%;
  align-items: center;
  @media only screen and (min-width: ${root.media.tablet}px) {
    display: flex;
    flex-flow: column nowrap;
    /* justify-content: center; */
    align-items: stretch;
    gap: 7px;
  }

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
