import React, { useEffect } from "react";
import styled from "styled-components";
import { root } from "./styled";
import AOS from "aos";
import "aos/dist/aos.css";

export function Card({ data }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return data.map((card, i) => {
    let { header, desc, icon, color, grid, animation, self } = card;
    return (
      <S.Card key={i} data-aos={`fade-${animation}`} color={color} grid={grid} self={self}>
        <h1>{header}</h1>
        <p>{desc}</p>
        <img src={`./assets/${icon}`} alt="icon" />
      </S.Card>
    );
  });
}

const S = {};

S.Card = styled.div`
  width: 311px;
  height: 222px;
  border-radius: 8px;
  background-color: ${root.color.white};
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

  @media only screen and (min-width: ${root.media.desktop}) {
    width: 350px;
    height: 250px;
    border-radius: 8px;
    background-color: ${root.color.white};
  }

  & h1 {
    font-size: 20px;
    color: ${root.color.dark_gray};
    font-weight: 600;
    text-align: center;
  }
  & p {
    font-size: 13px;
    color: ${root.color.dark_gray};
    font-weight: 400;
    text-align: center;
    opacity: 0.5;
  }
  & img {
    align-self: end;
    margin-top: 30px;
  }
  @media only screen and (min-width: ${root.media.desktop}) {
    & img {
      margin-top: 60px;
    }
  }
`;
