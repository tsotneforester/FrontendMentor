import React, { useContext } from "react";
import styled from "styled-components";
import { root, h1, p, button } from "../styled";
import { DataContext } from "../Context";

export default function Thanks() {
  const { email } = useContext(DataContext);

  return (
    <>
      <S.Container>
        <img src="assets/icon-success.svg" alt="" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <span>{email}</span> . Please open it and click the button inside to confirm your subscription
        </p>

        <button>Dismiss message</button>
      </S.Container>
      <S.Footer>
        <button>Dismiss message</button>
      </S.Footer>
    </>
  );
}

const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: ${root.max_width};
  padding: 0 24px;
  @media only screen and (min-width: ${root.media}) {
    background-color: ${root.color.white};
    padding: 48px 64px 64px 64px;
    border-radius: 36px;
    max-width: 504px;
  }

  img {
    width: 64px;
  }

  h1 {
    ${h1}
  }

  p {
    ${p}

    span {
      font-weight: 700;
    }
  }

  button {
    ${button}
    display: none;
    @media only screen and (min-width: ${root.media}) {
      display: block;
      margin-top: 40px;
    }
  }
`;

S.Footer = styled.footer`
  position: absolute;
  bottom: 40px;
  width: 100%;
  padding: 24px 24px 0 24px;
  max-width: ${root.max_width};
  button {
    ${button}
    width: 100%;
    @media only screen and (min-width: ${root.media}) {
      display: none;
    }
  }
`;
