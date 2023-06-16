import "./App.css";
import Logo from "./components/Logo";
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import TipContainer from "./components/TipContainer";
import Reset from "./components/Reset";
import BillContainer from "./components/BillContainer";
import CalculationContainer from "./components/CalculationContainer";
import PeopleContainer from "./components/PeopleContainer";

let percents = [5, 10, 15, 20, 30];
//imrse
//rafce
//imrr

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [person, setPerson] = useState("");
  const [err, setErr] = useState(false);

  const refContainer = useRef(null);

  function billHandler(e) {
    setBill(e.target.value.replace(/[^0-9]/g, "") * 1);
  }

  function billHandler1(e) {
    if (person == 0) {
      setErr(true);
    }
  }

  function personHandler(e) {
    setPerson(e.target.value.replace(/[^0-9]/g, "") * 1);
  }

  function personHandler1(e) {
    if (person == 0 || person == "") {
      setErr(true);
    } else {
      setErr(false);
    }
  }

  function tipHandler(e) {
    setTip(Number(e.target.value.slice(0, 2)));
    setCustomTip("");
  }

  function customTipHandler(e) {
    setCustomTip(Number(e.target.value.replace(/[^0-9]/g, "").slice(0, 2)));
    setTip(Number(e.target.value.replace(/[^0-9]/g, "").slice(0, 2)));
  }

  function resetHandler() {
    setTip("");
    setPerson("");
    setBill("");
    setCustomTip("");
  }

  let multipliersStatus = bill && tip && person;
  let tipPP = multipliersStatus ? ((tip * bill) / person / 100).toFixed(2) : "0.00";
  let totalPP = multipliersStatus ? (((tip / 100) * bill + bill) / person).toFixed(2) : "0.00";

  return (
    <>
      <Logo />

      <S.Main>
        <BillContainer>
          <S.PersonInput type="text" placeholder={0} value={bill} onChange={billHandler} onBlur={billHandler1} />
        </BillContainer>

        <TipContainer data={percents} handler={tipHandler} style={tip}>
          <input type="text" value={customTip} placeholder="Custom" onChange={customTipHandler} />
        </TipContainer>

        <PeopleContainer err={err}>
          <S.PersonInput bc={err} type="text" placeholder={0} value={person} onChange={personHandler} onBlur={personHandler1} />
        </PeopleContainer>

        <CalculationContainer totalPP={totalPP} tipPP={tipPP}>
          <Reset handler={resetHandler} style={multipliersStatus}></Reset>
        </CalculationContainer>
      </S.Main>
    </>
  );
}

export default App;

let S = {};

S.Main = styled.main`
  width: 375px;
  margin: 30px auto 0 auto;
  border-radius: 25px 25px 0px 0px;
  background-color: #ffffff;
  padding: 32px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  @media only screen and (min-width: 980px) {
    height: 481px;
    width: 920px;
    display: grid;
    -moz-column-gap: 48px;
    column-gap: 48px;
    border-radius: 25px;
  }
`;
S.PersonInput = styled.input`
  width: 311px;
  height: 48px;
  border-radius: 5px;
  background-color: #f3f9fa;
  font-size: 24px;
  color: var(--dark-green);
  font-weight: 700;
  text-align: right;
  border: none;
  border: 2px solid transparent;
  line-height: 36px;
  padding-right: 18px;
  caret-color: var(--bright-green-2);

  border-color: ${(props) => (props.bc ? "#e17052" : "none")};

  @media only screen and (min-width: 980px) {
    width: 379px;
    height: 48px;
    border-radius: 5px;
    background-color: #f3f9fa;
  }

  &::-moz-placeholder {
    opacity: 0.35;
    font-size: 24px;
    color: var(--dark-green);
    font-weight: 700;
    text-align: right;
  }

  &::placeholder {
    opacity: 0.35;
    font-size: 24px;
    color: var(--dark-green);
    font-weight: 700;
    text-align: right;
  }

  &:focus {
    border: 2px var(--bright-green-2) solid;
  }
`;
