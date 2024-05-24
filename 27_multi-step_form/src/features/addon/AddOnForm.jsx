import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import dataObject from "../../data";
import { Controls, OptionTitle, OptionDesc } from "../../components";
import { formContainer, optionContainer, baseBox, baseActiveBox, root } from "../../styled";

let { addons: data } = dataObject;

export default function AddOnForm() {
  const period = useSelector((state) => state.plan.period);
  const active = useSelector((state) => state.addon.active);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <div className="form">
        <OptionTitle>Pick add-ons</OptionTitle>

        <OptionDesc>Add-ons help enhance your gaming experience</OptionDesc>
        <div className="addon-boxes">
          {data.map((e, i) => {
            const { name, description, price } = e;
            return (
              <div
                className={`addon-box ${active[i] ? "active" : ""}`}
                key={i}
                onClick={() => {
                  let arr = Array.from(active);
                  arr[i] = !arr[i];
                  dispatch({ type: "ADDON_ACTIVATE", payload: arr });
                }}>
                <div className={`check-box ${active[i] ? "active" : ""}`}>
                  <img src="images/icon-checkmark.svg" alt="" />
                </div>
                <div className="addon-text">
                  <h1>{name}</h1>
                  <h2>{description}</h2>
                </div>
                <h3>
                  +${price[period]}/{period == "month" ? "mo" : "yr"}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      <Controls
        handleNext={() => {
          dispatch({ type: "NEXT_STEP" });
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

    .addon-boxes {
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      gap: 14px;

      .addon-box {
        ${baseBox}
        align-items: center;
        @media only screen and (min-width: ${root.media}) {
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;
        }

        &.active {
          ${baseActiveBox}
        }

        .check-box {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          border: 1px solid ${root.color.light_gray};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          transition: background-color 1s;
          &.active {
            background-color: ${root.color.purplish_blue};
          }
        }

        .addon-text {
          display: flex;
          flex-grow: 1;
          flex-flow: column nowrap;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 2px;
          h1 {
            font-size: 16px;
            color: ${root.color.marine_blue};
            font-weight: 600;
            text-align: left;
            text-transform: capitalize;
          }
          h2 {
            font-size: 14px;
            color: ${root.color.cool_gray};
            font-weight: 400;
            text-align: left;
          }
        }

        h3 {
          font-size: 14px;
          color: ${root.color.purplish_blue};
          font-weight: 400;
          text-align: left;
        }
      }
    }
  }
`;
