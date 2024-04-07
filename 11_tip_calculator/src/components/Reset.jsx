import React from "react";
import styled from "styled-components";

export default function Reset({ handler, style }) {
  return (
    <Button onClick={handler} status={style}>
      RESET
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  background-color: ${(props) => (props.status ? "var(--bright-green-2)" : "var(--dis-green)")};
  color: ${(props) => (props.status ? "var(--dark-green)" : "var(--dark-green)")};
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  border: none;
  cursor: pointer;

  &.disabled {
    background-color: var(--dis-green);
    color: var(--dark-green);
    pointer-events: none;
  }
`;
