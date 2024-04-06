import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { root } from "../styled";
import dataObject from "../data";

const { spetTitles } = dataObject;

export default function StepProgress() {
  const step = useSelector((state) => state.app.step);

  return (
    <S.Container>
      <main>
        {spetTitles.map((e, i) => {
          return (
            <div className="item" key={i}>
              <div className={`number ${step == i + 1 ? "active" : ""} `}>{i + 1}</div>
              <div className="text">
                <h1>Step {i + 1}</h1>
                <h2>{e}</h2>
              </div>
            </div>
          );
        })}
      </main>
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  width: 100%;
  border-radius: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  grid-area: progress;
  gap: 4px;
  @media only screen and (min-width: ${root.media}) {
    width: 256px;
    padding: 36px;
    border-radius: 20px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    background-image: url("images/bg-sidebar-desktop.svg");
    background-repeat: no-repeat; //repeat-y/repeat-x/repeat/space/round
    background-position: 0% 0%; // center/bottom/left/right/(%, px)
    background-attachment: scroll; //fixed / local
    background-size: auto; //length/cover/contain
  }

  main {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin: 30px 0;
    @media only screen and (min-width: ${root.media}) {
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 0;
    }
  }

  & .item {
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    justify-content: stretch;
    align-items: center;
    gap: 20px;
    font-weight: 600;

    & .number {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px ${root.color.white} solid;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      color: ${root.color.white};
      flex-shrink: 0;
      &.active {
        background-color: ${root.color.light_blue};
        color: ${root.color.marine_blue};
      }
    }
  }

  & .text {
    display: none;
    @media only screen and (min-width: ${root.media}) {
      display: initial;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2px;
    }
    h1 {
      font-size: 13px;
      color: ${root.color.cool_gray};
      font-weight: 400;
      text-align: left;
      text-transform: uppercase;
    }
    h2 {
      text-transform: uppercase;
      font-size: 14px;
      color: ${root.color.white};
      font-weight: 500;
      letter-spacing: 2px;
      text-align: left;
    }
  }
`;
