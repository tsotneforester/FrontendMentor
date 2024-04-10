import React from "react";
import { TitleWithIcon } from "./index";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ResultBoard() {
  const data = useSelector((state) => state.data);
  const score = useSelector((state) => state.score);
  const titleIndex = useSelector((state) => state.titleIndex);

  return (
    <div className="result-board">
      <TitleWithIcon data={data[titleIndex]} />
      <h1>{score}</h1>
      <span>Out of {data[titleIndex].questions.length}</span>
    </div>
  );
}
