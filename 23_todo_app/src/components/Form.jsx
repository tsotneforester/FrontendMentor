import React, { useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { device, root } from "../theme";

function Form({ data, dataSetter }) {
  let [input, setInput] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (input) {
      let foo = [...data, { id: nanoid(), task: input, status: "active" }];
      dataSetter(foo);
      setInput("");
    }
  }

  return (
    <S.Form onSubmit={submitHandler}>
      <label htmlFor="task">
        <span></span>
        <input type="text" id="task" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Create a new todo..." />
      </label>
    </S.Form>
  );
}

export default Form;

let S = {};
S.Form = styled.form`
  width: 100%;
  max-width: ${root.maxWidth};
  background-color: ${(prop) => prop.theme.formBg};
  padding: 12px;
  border-radius: ${root.br};
  transition: all ${root.time};
  margin-bottom: 20px;

  & span {
    width: 25px;
    height: 25px;
    border: 1px solid ${(prop) => prop.theme.checkBoxBorder};
    border-radius: 50%;
  }

  & label {
    display: flex;
    justify-content: stretch;
    align-items: center;
    gap: ${root.formGap};
  }

  & input {
    background-color: transparent;
    flex-grow: 1;
    font-size: 18px;
    border: none;
    color: ${(prop) => prop.theme.text};
    caret-color: ${root.caret};
  }
`;
