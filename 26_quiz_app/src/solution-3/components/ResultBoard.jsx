import React from "react";
import { TitleWithIcon } from "./index";
import { useContext } from "react";
import { DataContext } from "../index";

export default function ResultBoard() {
  const { data, score, titleIndex } = useContext(DataContext);

  return (
    <div className="result-board">
      <TitleWithIcon data={data[titleIndex]} />
      <h1>{score}</h1>
      <span>Out of {data[titleIndex].questions.length}</span>
    </div>
  );
}
