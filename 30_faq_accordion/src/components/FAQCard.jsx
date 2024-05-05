import React, { useState } from "react";
import data from "../data";
import styled from "styled-components";
import { root } from "../styled";
import Article from "./Article";

export default function FAQCard() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handler(i) {
    if (activeIndex == i) {
      setActiveIndex(null);
    } else {
      setActiveIndex(i);
    }
  }

  return (
    <S.Container role="faq-card">
      <S.Heading role="heading">
        <img src={`/assets/icon-star.svg`} />
        <h1>FAQs</h1>
      </S.Heading>
      {data.map((e, i) => {
        return <Article activeIndex={activeIndex} key={i} handler={() => handler(i)} index={i} {...e} />;
      })}
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 24px 0 24px;
  width: 100%;
  max-width: 340px;
  background: ${root.colors.white};
  box-shadow: 0px 32px 56px rgba(80, 0, 118, 0.1);
  border-radius: 8px;
  @media only screen and (min-width: ${root.media.tablet}) {
    max-width: 600px;
    padding: 40px 40px 0 40px;
    border-radius: 16px;
  }
`;
S.Heading = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  margin-bottom: 4px;
  @media only screen and (min-width: ${root.media.tablet}) {
    margin-bottom: 8px;
  }
  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: ${root.colors.dark_purple};

    @media only screen and (min-width: ${root.media.tablet}) {
      font-size: 56px;
      line-height: 66px;
    }
  }

  img {
    width: 24px;
    @media only screen and (min-width: ${root.media.tablet}) {
      width: 40px;
    }
  }
`;
