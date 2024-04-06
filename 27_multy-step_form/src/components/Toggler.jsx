import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { root } from "../styled";

export default function Toggler({ monthHandler, yearHandler }) {
  const plan = useSelector((state) => state.plan.period);
  return (
    <Container>
      <button className={plan == "month" ? "active" : ""} onClick={monthHandler}>
        Monthly
      </button>
      <div className="toggle">
        <div className={`circle ${plan}`}></div>
      </div>
      <button className={plan == "year" ? "active" : ""} onClick={yearHandler}>
        Yearly
      </button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 14px;
  background-color: ${root.color.alabaster};
  border-radius: 8px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
  button {
    font-size: 18px;
    color: ${root.color.cool_gray};
    background-color: transparent;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    &.active {
      color: ${root.color.marine_blue};
    }
  }

  & .toggle {
    width: 40px;
    height: 20px;
    border-radius: 12px;
    background-color: ${root.color.marine_blue};
    padding: 3px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    & .circle {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: ${root.color.white};
      transition: transform 1s;
      &.month {
        transform: translateX(-8px);
      }
      &.year {
        transform: translateX(8px);
      }
    }
  }
`;
