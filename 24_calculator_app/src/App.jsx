import React, { useContext, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { root, device, theme1, theme2, theme3 } from "./theme";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

import { AppContext } from "./Context";

function calculate(string) {
  let num = eval(string.replace(/×/i, "*"));
  let numberString = num.toString();
  if (numberString.length - numberString.indexOf(".") > 5) {
    return parseFloat(num.toFixed(5));
  } else {
    return num;
  }
}

function App() {
  const { themeMode, setThemeMode } = useContext(AppContext);

  const [topLine, setTopLine] = useState("");
  const [mainLine, setMainLine] = useState("");
  const [symbol, setSymbol] = useState("");

  function digitHandler(e) {
    let tempString = mainLine;
    tempString += e.target.innerText;
    setMainLine(tempString);
  }
  function symbolHandler(e) {
    if (!topLine && !mainLine) return;
    setSymbol(e.target.dataset.symbol);
  }
  function deleteHandler() {
    let zorg = mainLine.slice(0, -1);
    setMainLine(zorg);
  }
  function equalsHandler() {
    if (topLine && mainLine) {
      setSymbol("");
      let text = topLine + mainLine;
      setMainLine(calculate(text));
      setTopLine("");
    }
  }
  function resetHandler() {
    setTopLine("");
    setMainLine("");
    setSymbol("");
  }

  useEffect(() => {
    if (!symbol) {
    } else {
      if (topLine && mainLine) {
        let text = topLine + mainLine;
        setTopLine(calculate(text) + symbol);
        setMainLine("");
        setSymbol("");
      } else if (topLine && !mainLine) {
        let str = topLine.slice(0, -1);
        setTopLine(str + symbol);
        setSymbol("");
      } else {
        let node = mainLine + symbol;
        setTopLine(node);
        setMainLine("");
        setSymbol("");
      }
    }
  }, [symbol]);

  return (
    <Wrapper>
      <Header />
      <Screen color={themeMode}>
        <div className="top-line">{topLine}</div>
        <div className="main-line">{mainLine}</div>
      </Screen>
      <Keyboard color={themeMode}>
        <button className="number-key" onClick={digitHandler}>
          7
        </button>
        <button className="number-key" onClick={digitHandler}>
          8
        </button>
        <button className="number-key" onClick={digitHandler}>
          9
        </button>
        <button className="del-key" onClick={deleteHandler}>
          DEL
        </button>
        <button className="number-key" onClick={digitHandler}>
          4
        </button>
        <button className="number-key" onClick={digitHandler}>
          5
        </button>
        <button className="number-key" onClick={digitHandler}>
          6
        </button>
        <button className="number-key" data-symbol="+" onClick={symbolHandler}>
          +
        </button>
        <button className="number-key" onClick={digitHandler}>
          1
        </button>
        <button className="number-key" onClick={digitHandler}>
          2
        </button>
        <button className="number-key" onClick={digitHandler}>
          3
        </button>
        <button className="number-key" data-symbol="-" onClick={symbolHandler}>
          -
        </button>
        <button className="number-key" onClick={digitHandler}>
          .
        </button>
        <button className="number-key" onClick={digitHandler}>
          0
        </button>
        <button className="number-key" data-symbol="/" onClick={symbolHandler}>
          /
        </button>
        <button className="number-key" data-symbol="×" onClick={symbolHandler}>
          ×
        </button>
        <button className="reset-key" onClick={resetHandler}>
          RESET
        </button>
        <button className="equals-key" onClick={equalsHandler}>
          =
        </button>
      </Keyboard>
    </Wrapper>
  );
}

export default App;

const Screen = styled.div`
  width: ${root.calculator_width};
  @media ${device.mobile} {
    width: ${root.calculator_width_mobile};
  }
  height: 80px;
  border-radius: 12px;
  background-color: ${(prop) => (prop.color == "theme1" ? theme1.screen : prop.color == "theme2" ? theme2.screen : theme3.screen)};
  margin-bottom: 24px;
  padding: 14px;
  & .top-line {
    color: ${(prop) => (prop.color == "theme1" ? theme1.text : prop.color == "theme2" ? theme2.text : theme3.text)};
    text-align: right;
    margin-bottom: 10px;
    font-weight: 700;
  }
  & .main-line {
    color: ${(prop) => (prop.color == "theme1" ? theme1.text : prop.color == "theme2" ? theme2.text : theme3.text)};
    font-size: 38px;
    text-align: right;
    font-weight: 700;
  }
`;
const Keyboard = styled.main`
  width: ${root.calculator_width};
  @media ${device.mobile} {
    width: ${root.calculator_width_mobile};
  }
  display: grid;
  grid-gap: 14px;
  background-color: ${(prop) => (prop.color == "theme1" ? theme1.keypad : prop.color == "theme2" ? theme2.keypad : theme3.keypad)};
  padding: 20px;
  border-radius: 8px;
  grid-template-columns: repeat(4, 1fr);
  font-weight: 700;
  @media ${device.mobile} {
    grid-gap: 18px;
  }

  & .number-key {
    width: 100%;
    height: 54px;
    border-radius: 6px;
    background-color: ${(prop) => (prop.color == "theme1" ? theme1.digit_bg : prop.color == "theme2" ? theme2.digit_bg : theme3.digit_bg)};
    border: none;
    box-shadow: 0px 5px 0px 0px ${(prop) => (prop.color == "theme1" ? theme1.digit_shadow : prop.color == "theme2" ? theme2.digit_shadow : theme3.digit_shadow)};
    color: ${(prop) => (prop.color == "theme1" ? theme1.digit : prop.color == "theme2" ? theme2.digit : theme3.digit)};
    font-size: 32px;
    display: flex;
    justify-content: center;
    padding-top: 6px;
    align-items: center;
    font-weight: inherit;

    &:hover {
      background-color: ${(prop) => (prop.color == "theme1" ? theme1.digit_hover : prop.color == "theme2" ? theme2.digit_hover : theme3.digit_hover)};
      cursor: pointer;
    }

    &:active {
      transform: translateY(3px);
    }
  }

  & .del-key {
    height: 54px;
    padding-top: 6px;
    border-radius: 8px;
    width: 100%;
    background-color: ${(prop) => (prop.color == "theme1" ? theme1.reset_bg : prop.color == "theme2" ? theme2.reset_bg : theme3.reset_bg)};
    border: none;
    box-shadow: 0px 5px 0px 0px ${(prop) => (prop.color == "theme1" ? theme1.reset_shadow : prop.color == "theme2" ? theme2.reset_shadow : theme3.reset_shadow)};
    color: ${root.white};
    font-size: 18px;
    font-weight: inherit;
    &:hover {
      background-color: ${(prop) => (prop.color == "theme1" ? theme1.reset_hover : prop.color == "theme2" ? theme2.reset_hover : theme3.reset_hover)};
      cursor: pointer;
    }
    &:active {
      transform: translateY(3px);
    }
  }

  & .reset-key {
    height: 54px;
    padding-top: 6px;
    border-radius: 6px;
    grid-row: 5/6;
    grid-column: 1/3;
    width: 100%;
    background-color: ${(prop) => (prop.color == "theme1" ? theme1.reset_bg : prop.color == "theme2" ? theme2.reset_bg : theme3.reset_bg)};
    border: none;
    box-shadow: 0px 5px 0px 0px ${(prop) => (prop.color == "theme1" ? theme1.reset_shadow : prop.color == "theme2" ? theme2.reset_shadow : theme3.reset_shadow)};
    color: ${root.white};
    font-size: 18px;
    font-weight: inherit;

    &:hover {
      background-color: ${(prop) => (prop.color == "theme1" ? theme1.reset_hover : prop.color == "theme2" ? theme2.reset_hover : theme3.reset_hover)};
      cursor: pointer;
    }

    &:active {
      transform: translateY(3px);
    }
  }
  & .equals-key {
    width: 100%;
    height: 54px;
    padding-top: 6px;
    border-radius: 6px;
    grid-row: 5/6;
    grid-column: 3/5;
    width: 100%;
    background-color: ${(prop) => (prop.color == "theme1" ? theme1.equals_bg : prop.color == "theme2" ? theme2.equals_bg : theme3.equals_bg)};
    border: none;
    box-shadow: 0px 5px 0px 0px ${(prop) => (prop.color == "theme1" ? theme1.equals_shadow : prop.color == "theme2" ? theme2.equals_shadow : theme3.equals_shadow)};
    color: ${(prop) => (prop.color == "theme1" ? theme1.equals : prop.color == "theme2" ? theme2.equals : theme3.equals)};
    font-size: 32px;
    &:active {
      transform: translateY(3px);
    }
    &:hover {
      background-color: ${(prop) => (prop.color == "theme1" ? theme1.equals_hover : prop.color == "theme2" ? theme2.equals_hover : theme3.equals_hover)};
      cursor: pointer;
    }
  }
`;
