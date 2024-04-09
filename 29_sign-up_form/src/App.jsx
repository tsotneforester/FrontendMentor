import React from "react";
import { useContext, useState } from "react";
import styled from "styled-components";
import { root } from "./styled";

//imrse
//rafce

//rfc
//imrr

function App() {
  return (
    <>
      <Heading>
        <h1>Learn to code by watching others</h1>
        <h2>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</h2>
      </Heading>

      <Main>
        <Try>
          <p>
            Try it free 7 days <span>then $20/mo. thereafter</span>
          </p>
        </Try>
        <Form>
          <fieldset>
            <div className="input">
              <input type="text" placeholder="First Name" />
              <img src="images/alert.png" alt="alert" />
            </div>
            <p>Looks like this is not an email</p>
          </fieldset>
          <fieldset>
            <div className="input">
              <input type="text" placeholder="Last Name" />
              <img src="images/alert.png" alt="alert" />
            </div>
            <p>Looks like this is not an email</p>
          </fieldset>
          <fieldset>
            <div className="input">
              <input type="text" placeholder="Email Address" />
              <img src="images/alert.png" alt="alert" />
            </div>
            <p>Looks like this is not an email</p>
          </fieldset>
          <fieldset>
            <div className="input">
              <input type="text" placeholder="Password" />
              <img src="images/alert.png" alt="alert" />
            </div>
            <p>Looks like this is not an email</p>
          </fieldset>

          <button>CLAIM YOUR FREE TRIAL</button>
          <p>
            By clicking the button, you are agreeing to our <span>Terms and Services</span>
          </p>
        </Form>
      </Main>
    </>
  );
}

export default App;

const Heading = styled.header`
  align-self: center;
  @media only screen and (min-width: ${root.media.mobile}) {
    max-width: ${root.max_width_l};
    flex-grow: 1;
  }

  h1 {
    width: 100%;
    max-width: ${root.max_width_s};
    color: ${root.color.white};
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
    @media only screen and (min-width: ${root.media.mobile}) {
      text-align: left;
      font-size: 50px;
      line-height: 55px;
    }
  }

  h2 {
    max-width: ${root.max_width_s};
    color: ${root.color.white};
    margin-top: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    text-align: center;
    @media only screen and (min-width: ${root.media.mobile}) {
      text-align: left;
      margin-top: 11px;
      max-width: ${root.max_width_l};
    }
  }
`;

const Main = styled.main`
  margin-top: 64px;
  @media only screen and (min-width: ${root.media.mobile}) {
    max-width: ${root.max_width_l};
    margin: 0;
    flex-grow: 1;
  }
`;

const Try = styled.div`
  width: 100%;
  max-width: ${root.max_width_s};
  padding: 18px;
  border-radius: 10px;
  background: ${root.color.blue};
  box-shadow: 0px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  max-width: ${root.color.max_width_s};
  @media only screen and (min-width: ${root.media.mobile}) {
    margin-top: 0;
    max-width: ${root.max_width_l};
  }

  p {
    color: ${root.color.white};
    font-size: 15px;
    font-weight: 700;
    line-height: 26px;
    text-align: center;
    max-width: 220px;
  }

  span {
    color: ${root.color.white};
    font-size: 15px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
  }
`;

const Form = styled.div`
  width: 100%;
  max-width: ${root.max_width_s};
  max-width: ${root.color.max_width_s};
  padding: 24px;
  border-radius: 10px;
  background: ${root.color.white};
  box-shadow: 0px 8px rgba(0, 0, 0, 0.15);
  margin-top: 24px;
  @media only screen and (min-width: ${root.media.mobile}) {
    max-width: ${root.max_width_l};
  }

  fieldset {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    border: none;
    margin-bottom: 16px;
    .input {
      width: 100%;
      border-radius: 5px;
      border: 1px solid ${root.color.border};
      background: ${root.color.white};
      padding: 15px 27px 15px 20px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;

      input {
        flex-grow: 1;
        opacity: 1;
        color: ${root.color.dark_blue};
        font-size: 14px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: 0.25px;
        border: none;

        &::placeholder {
          opacity: 0.75;
        }
      }
    }

    p {
      color: ${root.color.red};
      align-self: flex-end;
      font-size: 11px;
      font-style: italic;
      font-weight: 500;
      text-align: right;
    }
  }

  button {
    width: 100%;
    border-radius: 5px;
    background: ${root.color.green};
    box-shadow: inset 0px -4px rgba(0, 0, 0, 0.09);
    padding: 15px 20px;
    color: ${root.color.white};
    font-size: 15px;
    font-weight: 600;
    line-height: 26px;
    text-align: center;
    letter-spacing: 1px;
    margin-bottom: 8px;
    transition: background ${root.time};
    &:hover {
      background: ${root.color.light_green};
      box-shadow: inset 0px -4px rgba(0, 0, 0, 0.09);
    }
  }

  p {
    color: ${root.color.grayish_blue};
    font-size: 11px;
    font-weight: 500;
    line-height: 21px;
    text-align: center;
    span {
      color: ${root.color.red};
      font-size: 11px;
      font-weight: 700;
      line-height: 21px;
      text-align: center;
    }
  }
`;
