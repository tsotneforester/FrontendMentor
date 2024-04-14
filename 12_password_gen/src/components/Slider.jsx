import React from "react";
import styled from "styled-components";
import { root } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { calculateStrength } from "../reducer";

export default function Slider() {
  const length = useSelector((state) => state.length);
  const stepPercentage = useSelector((state) => state.stepPercentage);
  const checked = useSelector((state) => state.checked);
  const dispatch = useDispatch();

  function handler(e) {
    dispatch({ type: "RANGE_CHANGE", payload: { length: e.target.value, strength: calculateStrength(e.target.value, checked) } });
  }

  return (
    <S.Slider percentage={stepPercentage * length}>
      <input className="range-slider" onChange={handler} type="range" min="0" max="20" value={length} />
    </S.Slider>
  );
}

const S = {};

S.Slider = styled.div`
  width: 100%;
  margin: 42px 0;
  position: relative;

  .range-slider {
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background: ${root.color.medium_black};
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    position: relative;
    background: linear-gradient(to right, ${root.color.green} 0%, ${root.color.green} ${(prop) => prop.percentage}%, ${root.color.medium_black} ${(prop) => prop.percentage}%, ${root.color.medium_black} 100%);
  }

  .range-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${root.color.green};
    cursor: pointer;
  }

  .range-slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${root.color.green};
    cursor: pointer;
  }
`;
