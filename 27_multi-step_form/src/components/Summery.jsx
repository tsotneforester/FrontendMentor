import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import dataObject from "../data";
import { Controls, OptionTitle, OptionDesc } from "./";
import { formContainer, optionContainer, root } from "../styled";

const { addons: data } = dataObject;

export default function Summery() {
  const name = useSelector((state) => state.plan.name);
  const period = useSelector((state) => state.plan.period);
  const price = useSelector((state) => state.plan.price);
  const active = useSelector((state) => state.addon.active);
  console.log(active);

  const dispatch = useDispatch();
  return (
    <S.Container>
      <div className="form">
        <OptionTitle>Finishing up</OptionTitle>

        <OptionDesc>Double-check everything look OK before confirming</OptionDesc>
        <div className="summery">
          <div className="plan">
            <div className="text">
              <p>
                {name} ({period}ly)
              </p>
              <span
                onClick={() => {
                  dispatch({ type: "BACK_TO_PLAN" });
                }}>
                change
              </span>
            </div>
            <p>
              ${price}/{period == "month" ? "mo" : "yr"}
            </p>
          </div>
          {active
            .reduce((accumulator, curValue, index) => {
              if (curValue) {
                accumulator.push(index);
              }
              return accumulator;
            }, [])
            .map((e) => {
              return (
                <div className="add-on">
                  <p>{data[e].name}</p>
                  <p>
                    +${data[e].price[period]}/{price[period]}
                    {period == "month" ? "mo" : "yr"}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="total">
          <h1> total (per {period})</h1>
          <h2>
            ${price + CalculateAddonAggPrice(data, active, period)}/{period == "month" ? "mo" : "yr"}
          </h2>
        </div>
      </div>
      <Controls
        handleConfirm={() => {
          console.log("finish");
          dispatch({ type: "STATUS-FINISHED" });
        }}
        handleback={() => {
          dispatch({ type: "PREVIOUS_STEP" });
        }}
      />
    </S.Container>
  );
}

function CalculateAddonAggPrice(data, array, period) {
  return array.reduce((accumulator, curValue, i) => {
    console.log(data[i].price[period]);
    if (curValue) {
      accumulator += data[i].price[period];
    }
    return accumulator;
  }, 0);
}

const S = {};

S.Container = styled.div`
  ${optionContainer}

  .form {
    ${formContainer}

    .summery {
      width: 100%;
      padding: 18px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      border-radius: 8px;
      align-items: center;
      background-color: ${root.color.magnolia};
      .plan {
        width: 100%;
        display: flex;
        padding: 14px 0;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid ${root.color.light_gray};

        .text {
          font-size: 16px;
          color: ${root.color.light_gray};
          font-weight: 600;
          text-align: center;
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-start;
          align-items: flex-start;
          text-transform: capitalize;

          span {
            text-decoration: underline;
            color: ${root.color.cool_gray};
            font-weight: 400;
            cursor: pointer;
          }
        }

        p {
          font-size: 15px;
          color: ${root.color.marine_blue};
          font-weight: 600;
          text-align: center;
        }
      }

      .add-on {
        width: 100%;
        padding: 14px 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        p:nth-child(1) {
          font-size: 15px;
          color: ${root.color.cool_gray};
          font-weight: 400;
          text-align: center;
          text-transform: capitalize;
        }

        p:nth-child(2) {
          font-size: 15px;
          color: ${root.color.marine_blue};
          font-weight: 400;
          text-align: center;
        }
      }
    }
    .total {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      padding: 14px;
      h1 {
        font-size: 15px;
        color: ${root.color.cool_gray};
        font-weight: 400;
        text-align: left;
      }

      h2 {
        font-size: 17px;
        color: ${root.color.purplish_blue};
        font-weight: 600;
        text-align: left;
      }
    }
  }
`;
