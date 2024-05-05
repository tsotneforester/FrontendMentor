import React, { useState, useEffect, useRef } from "react";
import { root } from "../styled";
import styled from "styled-components";

export default function Article({ question, answer, handler, activeIndex, index }) {
  const [h1Height, setH1Height] = useState(null);
  const [artHeight, setArtHeight] = useState(null);
  const refContainer = useRef([]);

  useEffect(() => {
    setH1Height(refContainer.current.children[0].scrollHeight);
    setArtHeight(refContainer.current.scrollHeight);

    if (!activeIndex) {
      window.addEventListener("resize", function () {
        setH1Height(refContainer.current.children[0].scrollHeight);
        setArtHeight(refContainer.current.scrollHeight);
      });

      return () => {
        window.removeEventListener("resize", function () {
          setH1Height(refContainer.current.children[0].scrollHeight);
          setArtHeight(refContainer.current.scrollHeight);
        });
      };
    }
  }, []);

  return (
    <S.Container ref={refContainer} height={activeIndex != index ? h1Height : artHeight}>
      <div role="question" className="question">
        <h1 onClick={handler}>{question}</h1>
        <img onClick={handler} src={`/assets/icon-${activeIndex == index ? "minus" : "plus"}.svg`} />
      </div>

      <p role="answer">{answer}</p>
    </S.Container>
  );
}

const S = {};

S.Container = styled.article`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  max-height: ${(prop) => prop.height}px;
  border-top: 1px solid ${root.colors.pink};
  transition: max-height 350ms;
  overflow: hidden;

  &:first-of-type {
    border-top: none;
  }

  .question {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    & {
      grid-area: question;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: ${root.colors.dark_purple};
      cursor: pointer;
      flex-grow: 1;
      padding: 20px 0;
      align-self: center;
      @media only screen and (min-width: ${root.media.tablet}) {
        font-size: 18px;
        line-height: 21px;
        padding: 24px 0;
      }
    }

    &:hover {
      color: ${root.colors.dark_pink};
    }
  }
  p {
    grid-area: answer;
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 20px;
    color: ${root.colors.light_purple};
    @media only screen and (min-width: ${root.media.tablet}) {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }
  img {
    width: 30px;
    grid-area: icon;
    cursor: pointer;
    flex-shrink: 0;
  }
`;
