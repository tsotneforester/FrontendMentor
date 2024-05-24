import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { formContainer, optionContainer } from "../styled";
import { OptionTitle, OptionDesc } from "./";

export default function ThankYou() {
  const active = useSelector((state) => state.addon.active);
  console.log(active);

  const dispatch = useDispatch();
  return (
    <S.Container>
      <div className="form">
        <img src="images/icon-thank-you.svg" alt="" />
        <OptionTitle align="center">Thank you!</OptionTitle>

        <OptionDesc align="center" maxwidth="480px">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
        </OptionDesc>
      </div>
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  ${optionContainer}

  .form {
    ${formContainer}

    height: 100%;
    padding: 110px 14px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    img {
      margin-bottom: 20px;
    }
  }
`;
