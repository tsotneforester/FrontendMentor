import React from "react";
import styled from "styled-components";
import { root } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { calculateStrength } from "../reducer";
import { FaCheck } from "react-icons/fa";

let LABELS = ["Include Uppercase Letters", "Include Lowercase Letters", "Include Numbers", "Include Symbols"];

export default function CheckBoxes() {
  const length = useSelector((state) => state.length);
  const checked = useSelector((state) => state.checked);
  const dispatch = useDispatch();

  function handler1(i) {
    let temp = Array.from(checked);
    temp[i] = !temp[i];

    dispatch({ type: "CHECHBOX_TOGGLE", payload: { checked: temp, strength: calculateStrength(length, temp) } });
  }

  return (
    <S.Container>
      {LABELS.map((txt, i) => {
        return (
          <fieldset key={i}>
            <div className={`check-box ${checked[i] ? "active" : ""}`} onClick={() => handler1(i)}>
              {checked[i] ? <S.CheckIcon /> : ""}
            </div>
            <span>{txt}</span>
          </fieldset>
        );
      })}
    </S.Container>
  );
}

const S = {};

S.CheckIcon = styled(FaCheck)`
  color: ${root.color.light_black};
`;

S.Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 22px;
  fieldset {
    border: none;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    .check-box {
      width: 24px;
      height: 24px;
      border: 2px solid ${root.color.green};
      cursor: pointer;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      &.active {
        background-color: ${root.color.green};
      }
    }

    span {
      font-size: 16px;
      color: ${root.color.white};
      font-weight: 600;
      text-align: center;
    }
  }
`;
