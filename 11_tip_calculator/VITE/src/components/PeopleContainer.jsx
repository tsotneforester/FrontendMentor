import React from "react";
import personIcon from "../assets/person.svg";
import styled from "styled-components";

export default function PeopleContainer({ children, err }) {
  return (
    <S.PeopleContainer>
      <section>
        <h1>Num. of People</h1>
        {err ? <span className="error-title">Can’t be zero</span> : ""}
      </section>
      <div className="input">
        <img src={personIcon} alt="person" />
        {children}
      </div>
    </S.PeopleContainer>
  );
}

const S = {};

S.PeopleContainer = styled.div`
  position: relative;
  width: 100%;

  @media only screen and (min-width: 980px) {
    grid-area: 3/1 / span 1 / span 1;
  }

  & section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }
  & #person-input.errorborder {
    border: 2px #e17052 solid;
  }

  & .input {
    position: relative;
  }

  & img {
    position: absolute;
    top: 14px;
    left: 10px;
  }

  & .error-title {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: right;
    color: #e17457;
    display: inline-block;
  }
`;
