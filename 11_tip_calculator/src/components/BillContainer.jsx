import React from "react";
import dollarIcon from "../assets/dollar.svg";
import styled from "styled-components";

export default function BillContainer({ children }) {
  return (
    <S.BillContainer>
      <h1>Bill</h1>
      <div className="input">
        <img src={dollarIcon} alt="" />
        {children}
      </div>
    </S.BillContainer>
  );
}

const S = {};

S.BillContainer = styled.div`
  & .input {
    position: relative;
  }

  & img {
    position: absolute;
    top: 14px;
    left: 10px;
  }
`;
