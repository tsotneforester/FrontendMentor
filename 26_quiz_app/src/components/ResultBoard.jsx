import React from "react";
import { TitleWithIcon } from "./index";

export default function ResultBoard({ data, score }) {
  return (
    <div className="result-board">
      <TitleWithIcon data={data} />
      <h1>{score}</h1>
      <span>Out of {data.questions.length}</span>
    </div>
  );
}
