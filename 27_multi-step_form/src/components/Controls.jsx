import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { root } from "../styled";
import PulseLoader from "react-spinners/PulseLoader";

export default function Controls({ handleback, handleNext, handleConfirm }) {
  let step = useSelector((state) => state.app.step);
  const isLoading = useSelector((state) => state.form.isLoading);

  return (
    <S.Container>
      <div>
        {step > 1 ? (
          <button className="back" onClick={handleback}>
            Go Back
          </button>
        ) : (
          <div></div>
        )}

        {step < 4 ? (
          <button className="next" onClick={handleNext}>
            {isLoading ? <PulseLoader size={4} color="white" /> : "Next Step"}
          </button>
        ) : (
          <button className="confirm" onClick={handleConfirm}>
            Confirm
          </button>
        )}
      </div>
    </S.Container>
  );
}

const S = {};
S.Container = styled.div`
  width: 100%;
  max-width: 460px;
  height: ${root.gradient_height};
  grid-area: controls;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  @media only screen and (min-width: ${root.media}) {
    align-items: flex-end;
    height: auto;
  }

  & > div {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    & button {
      padding: 8px 10px;
      font-weight: 400;
      text-align: center;
      border-radius: 4px;
      font-size: 18px;
      &.next {
        background-color: ${root.color.marine_blue};
        color: ${root.color.white};
      }
      &.back {
        background-color: transparent;
        color: ${root.color.cool_gray};
      }
      &.confirm {
        background-color: ${root.color.purplish_blue};
        color: ${root.color.white};
      }
    }
  }
`;
