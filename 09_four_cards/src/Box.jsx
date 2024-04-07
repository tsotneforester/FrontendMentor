import React from "react";
import styled from "styled-components";

export function Box({ data }) {
  return data.map((box) => {
    let { header, desc, icon, color, grid, self } = box;
    return (
      <S.Box color={color} grid={grid} self={self}>
        <h1>{header}</h1>
        <p>{desc}</p>
        <img src={`./assets/${icon}`} alt="icon" />
      </S.Box>
    );
  });
}

const S = {};

S.Box = styled.div`
  width: 311px;
  height: 222px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0px 15px 30px -11px rgba(131, 166, 210, 0.5);
  border-radius: 8px;
  padding: 28px;
  border-top: 4px solid ${(props) => props.color};
  grid-area: ${(props) => props.grid};
  align-self: ${(props) => props.self};

  @media only screen and (min-width: 1200px) {
    width: 350px;
    height: 250px;
    border-radius: 8px;
    background-color: white;
  }
  & h1 {
    font-size: 20px;
    color: #4d4f62;
    font-weight: 600;
    text-align: center;
  }
  & p {
    font-size: 13px;
    color: #4d4f62;
    font-weight: 400;
    text-align: center;
    opacity: 0.5;
  }
  & img {
    align-self: end;
    margin-top: 30px;
  }
  @media only screen and (min-width: 1200px) {
    & img {
      margin-top: 60px;
    }
  }
`;
