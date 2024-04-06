import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import dataObject from "../../data";
import { Controls, OptionTitle, OptionDesc, Toggler } from "../../components";
import { formContainer, optionContainer, baseBox, baseActiveBox, root } from "../../styled";

let { plan: data } = dataObject;

export default function PlanForm() {
  const period = useSelector((state) => state.plan.period);
  const nameIndex = useSelector((state) => state.plan.nameIndex);
  const name = useSelector((state) => state.plan.name);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <div className="form">
        <OptionTitle>Select Your Plan</OptionTitle>

        <OptionDesc>You have the option of monthly or yearly billing</OptionDesc>
        <div className="plan-boxes">
          {data.map((e, i) => {
            const { name, price } = e;
            return (
              <div
                className={`plan-box ${i == nameIndex ? "active" : ""}`}
                key={i}
                onClick={() => {
                  // console.log(data[i].name, i, data[i].price[period]);
                  dispatch({ type: "PLAN_NAME", payload: { name: data[i].name, index: i, price: data[i].price[period] } });
                }}>
                <img src={`images/icon-${data[i].name}.svg`} alt="" />
                <div className="info-box">
                  <h1>{name}</h1>
                  <h2>
                    ${price[period]}/{period == "month" ? "mo" : "yr"}
                  </h2>
                  {period == "year" && <h3>2 month free</h3>}
                </div>
              </div>
            );
          })}
        </div>
        <Toggler
          monthHandler={() => {
            dispatch({ type: "PLAN_PERIOD", payload: { period: "month", price: nameIndex ? data[nameIndex].price["month"] : 0 } });
          }}
          yearHandler={() => {
            dispatch({ type: "PLAN_PERIOD", payload: { period: "year", price: nameIndex ? data[nameIndex].price["year"] : 0 } });
          }}
        />
      </div>
      <Controls
        handleNext={() => {
          if (name) {
            dispatch({ type: "NEXT_STEP" });
          }
        }}
        handleback={() => {
          dispatch({ type: "PREVIOUS_STEP" });
        }}
      />
    </S.Container>
  );
}
const S = {};

S.Container = styled.div`
  ${optionContainer}

  .form {
    ${formContainer}
  }

  .plan-boxes {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    @media only screen and (min-width: ${root.media}) {
      flex-flow: row nowrap;
    }

    .plan-box {
      ${baseBox}
      &.active {
        ${baseActiveBox}
      }

      .info-box {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 5px;
        h1 {
          font-size: 18px;
          color: ${root.color.marine_blue};
          font-weight: 600;
          text-align: left;
          text-transform: capitalize;
          @media only screen and (min-width: ${root.media}) {
            font-size: 16px;
          }
        }
        h2 {
          font-size: 16px;
          color: ${root.color.cool_gray};
          font-weight: 400;
          text-align: left;
          @media only screen and (min-width: ${root.media}) {
            font-size: 14px;
          }
        }
        h3 {
          font-size: 14px;
          color: ${root.color.marine_blue};
          font-weight: 500;
          text-align: left;
          @media only screen and (min-width: ${root.media}) {
            font-size: 12px;
          }
        }
      }
    }
  }
`;
