import React from "react";
import styled from "styled-components";
import { root } from "../styled";

export default function Offer() {
  return (
    <S.Container>
      <p>
        Try it free 7 days <span>then $20/mo. thereafter</span>
      </p>
    </S.Container>
  );
}

const S = {};
S.Container = styled.div`
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
    @media only screen and (min-width: ${root.media.mobile}) {
      max-width: none;
    }
  }

  span {
    color: ${root.color.white};
    font-size: 15px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
  }
`;
