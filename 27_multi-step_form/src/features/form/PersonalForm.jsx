import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";
import { setFname, setEmail, setPhone, bulkValidate } from "./formSlice";

import { phoneValidator } from "./formSlice";

import { Controls, OptionTitle, OptionDesc } from "../../components";
import { formContainer, root, optionContainer } from "../../styled";

export default function PersonalForm() {
  const fname = useSelector((state) => state.form.fname);
  const fnameWarning = useSelector((state) => state.form.fnameWarning);
  const email = useSelector((state) => state.form.email);
  const emailWarning = useSelector((state) => state.form.emailWarning);
  const phone = useSelector((state) => state.form.phone);
  const phoneWarning = useSelector((state) => state.form.phoneWarning);
  const flag = useSelector((state) => state.form.flag);

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
              dispatch(setFname(e.target.value));
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
              dispatch(setEmail(e.target.value));
            }}
            name="email"
            placeholder="e.g. tsotne.meladze@gpx.ge"
          />
        </fieldset>

        <fieldset>
          <div className="text-line">
            <label htmlFor="">
              <p>phone number </p>
              {flag ? <img src={flag} /> : ""}
            </label>
            {phoneWarning ? <p className="warning"> {phoneWarning}</p> : <p> </p>}
          </div>
          <input
            type="text"
            value={phone}
            onChange={(e) => {
              dispatch(setPhone(e.target.value));
            }}
            name="phone"
            placeholder="e.g. +995 572 51 44 46"
          />
        </fieldset>
      </div>
      <Controls
        handleNext={() => {
          if (!fnameWarning && !emailWarning && !phoneWarning && email && phone && fname) {
            dispatch(phoneValidator(phone));
          } else {
            dispatch(bulkValidate(fname, email, phone));
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
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;
          gap: 6px;
          img {
            width: 24px;
            height: auto;
            border-radius: 2px;
          }
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
      }
    }
  }
`;
