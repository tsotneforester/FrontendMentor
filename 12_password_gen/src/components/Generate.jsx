import React from "react";
import styled from "styled-components";
import { root } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowForward } from "react-icons/io";
import { generatePassword } from "../passGen";

export default function Generate() {
  const length = useSelector((state) => state.length);
  const checked = useSelector((state) => state.checked);
  const strength = useSelector((state) => state.strength);
  const dispatch = useDispatch();

  return (
    <S.Button
      onClick={() => {
        if (strength) {
          dispatch({ type: "GENERATE_PASSWORD", payload: generatePassword(length, checked) });
        }
      }}
      className={`submit ${strength == 0 ? "disabled" : ""}`}>
      <p>GENERATE</p>
      <IoMdArrowForward />
    </S.Button>
  );
}

const S = {};

S.Button = styled.button`
  &.submit {
    width: 100%;
    height: auto;
    padding: 24px;
    border-radius: 0;
    background-color: ${root.color.green};
    font-size: 18px;
    color: ${root.color.black};
    font-weight: 400;
    text-align: center;
    border: 1px solid transparent;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 22px;

    &:hover {
      background-color: transparent;

      border: 1px solid ${root.color.green};
      p {
        color: ${root.color.green};
      }

      svg {
        fill: ${root.color.green};
      }
    }

    &.disabled {
      background-color: ${root.color.white};
      cursor: no-drop;
    }
    &.disabled:hover {
      border: 1px solid ${root.color.red};
      p {
        color: ${root.color.red};
      }

      svg {
        fill: ${root.color.red};
      }
    }
  }
`;
