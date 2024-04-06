import React from "react";
import styled from "styled-components";
import { root } from "../styled";

import { useDispatch, useSelector } from "react-redux";

const data = ["too weak!", "weak", "medium", "strong"];
const color = [root.color.red, root.color.orange, root.color.yellow, root.color.green];

export default function Strength() {
  const strength = useSelector((state) => state.strength);
  const preview = useSelector((state) => state.preview);
  const dispatch = useDispatch();

  function clickHandler(i) {
    if (i == 0) {
      dispatch({ type: "SET_STRENGTH", payload: { strength: i + 1, length: 6, checked: [false, true, true, false] } });
    }
    if (i == 1) {
      dispatch({ type: "SET_STRENGTH", payload: { strength: i + 1, length: 7, checked: [false, true, true, false] } });
    }
    if (i == 2) {
      dispatch({ type: "SET_STRENGTH", payload: { strength: i + 1, length: 10, checked: [true, true, true, false] } });
    }
    if (i == 3) {
      dispatch({ type: "SET_STRENGTH", payload: { strength: i + 1, length: 15, checked: [true, true, true, false] } });
    }
  }

  function enterHandler(i) {
    dispatch({ type: "SET_PREVIEW", payload: i + 1 });
  }

  function leaveHandler() {
    dispatch({ type: "PREVIEW_OFF" });
  }
  return (
    <S.Container color={preview ? color[preview - 1] : color[strength - 1]}>
      <p>STRENGTH</p>
      <div className="level">
        <p>{preview ? data[preview - 1] : data[strength - 1]}</p>
        <div className="bars">
          {data.map((__, i) => {
            return (
              <div key={i} onClick={() => clickHandler(i)} onMouseEnter={() => enterHandler(i)} onMouseLeave={() => leaveHandler()} className={`outer-bar ${i < (preview || strength) ? "active" : ""}`}>
                <div className="inner-bar"></div>
              </div>
            );
          })}
        </div>
      </div>
    </S.Container>
  );
}

const S = {};
S.Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  margin: 20px 0;
  border-radius: 0;
  background-color: ${root.color.medium_black};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 18px;
    color: ${root.color.white};
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
  }
  .level {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 6px;

    .bars {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;

      .outer-bar {
        width: 18px;
        height: 36px;
        border-radius: 0;
        background-color: transparent;
        cursor: pointer;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        &.active {
          .inner-bar {
            background-color: ${(prop) => prop.color};
            border: 2px solid ${(prop) => prop.color};
          }
        }

        .inner-bar {
          width: 12px;
          height: 100%;
          border: 1px solid ${root.color.white};
        }
      }
    }
  }
`;
