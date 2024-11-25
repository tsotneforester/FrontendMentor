import React from 'react';
import ArrowLeft from '../assets/icon-arrow-left.svg?react';
import ArrowRight from '../assets/icon-arrow-right.svg?react';
import styled from 'styled-components';
import { root } from '../styled';
import { Link } from 'react-router-dom';

export default function LinkButton({ string, route, arrowSide }) {
  return (
    <S.Link to={route} side={arrowSide}>
      <button className="string">{string}</button>
      <button className="arrow">{arrowSide == 'left' ? <ArrowLeft /> : <ArrowRight />}</button>
    </S.Link>
  );
}

const S = {};
S.Link = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  flex-direction: ${prop => (prop.side == 'left' ? 'row-reverse' : 'row')};
  justify-content: flex-start;
  align-items: center;

  button {
    height: 72px;
  }

  .string {
    width: 204px;
    order: 1;
    background-color: ${root.color.black};
    font-family: 'Big Shoulders Display', cursive;
    font-size: 20px;
    color: ${root.color.white};
    font-weight: 800;
    text-align: center;
    line-height: 24px;
    letter-spacing: 3.6px;
    transition: 1.3s;
  }

  .arrow {
    width: 56px;
    order: 2;
    background-color: ${root.color.black};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: ${root.color.orange};
    transition: 0.7s;
  }

  &:hover .string {
    background-color: ${root.color.orange};
    color: ${root.color.white};
  }

  &:hover .arrow {
    background-color: ${root.color.black};
  }
`;
