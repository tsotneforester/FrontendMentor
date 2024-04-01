import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Controls, OptionTitle, OptionDesc } from "./";
import { formContainer, root, optionContainer } from "../Styled";

export default function PersonalForm() {
  const fname = useSelector((state) => state.form.fname);
  const fnameWarning = useSelector((state) => state.form.fnameWarning);
  const email = useSelector((state) => state.form.email);
  const emailWarning = useSelector((state) => state.form.emailWarning);
  const phone = useSelector((state) => state.form.phone);
  const phoneWarning = useSelector((state) => state.form.phoneWarning);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <div className="form">
        <OptionTitle>Peronal Info</OptionTitle>

        <OptionDesc>Please Provide your name, email adress and phone number</OptionDesc>
        <fieldset>
          <div className="text-line">
            <label htmlFor="">name</label>
            {fnameWarning ? <p className="warning"> {fnameWarning}</p> : <p> </p>}
          </div>
          <input
            type="text"
            value={fname}
            onChange={(e) => {
              dispatch({ type: "FNAME_INPUT", payload: e.target.value });
            }}
            onBlur={(e) => {
              if (!fname) {
                dispatch({ type: "FNAME_WARNING" });
              }
            }}
            name="fname"
            placeholder="e.g. Tsotne Meladze"
          />
        </fieldset>

        <fieldset>
          <div className="text-line">
            <label htmlFor="">email address</label>
            {emailWarning ? <p className="warning"> {emailWarning}</p> : <p> </p>}
          </div>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              dispatch({ type: "EMAIL_INPUT", payload: e.target.value });
            }}
            onBlur={(e) => {
              if (!isValidEmail(email)) {
                dispatch({ type: "EMAIL_WARNING", payload: "Email is invalid" });
              }
              if (!email) {
                dispatch({ type: "EMAIL_WARNING", payload: "This field is required" });
              }
            }}
            name="email"
            placeholder="e.g. tsotne.meladze@gpx.ge"
          />
        </fieldset>

        <fieldset>
          <div className="text-line">
            <label htmlFor="">phone number</label>
            {phoneWarning ? <p className="warning"> {phoneWarning}</p> : <p> </p>}
          </div>
          <input
            type="number"
            value={phone}
            onChange={(e) => {
              dispatch({ type: "PHONE_INPUT", payload: e.target.value });
            }}
            onBlur={(e) => {
              if (!isValidPhone(phone)) {
                dispatch({ type: "PHONE_WARNING", payload: "number is invalid" });
              }
              if (!phone) {
                dispatch({ type: "PHONE_WARNING", payload: "This field is required" });
              }
            }}
            name="phone"
            placeholder="e.g. 572 51 44 46"
          />
        </fieldset>
      </div>
      <Controls
        handleNext={() => {
          if (!fnameWarning && !emailWarning && !phoneWarning && email && phone && fname) {
            dispatch({ type: "NEXT_STEP" });
          }
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

    fieldset {
      width: 100%;
      border: none;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      margin: 12px 0;
      gap: 6px;

      & .text-line {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        gap: 4px;

        & .warning {
          color: ${root.color.strawberry_red};
          font-size: 14px;
          font-weight: 600;
          text-align: center;
        }

        label {
          color: ${root.color.marine_blue};
          font-size: 14px;
          text-transform: capitalize;
        }
      }

      input {
        width: 100%;
        padding: 12px 10px;
        border-radius: 8px;
        border: 1px ${root.color.light_gray} solid;
        color: ${root.color.marine_blue};
        font-size: 16px;
        font-weight: 600;
        &::placeholder {
          font-weight: 400;
        }
        &[type="number"]::-webkit-outer-spin-button,
        &[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
  }
`;

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^5\d{8}$/;
  return phoneRegex.test(phone);
}
