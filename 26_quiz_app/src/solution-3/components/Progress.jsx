import React from "react";
import { useContext } from "react";
import { DataContext } from "../index";

export default function Progress() {
  const { data, questionIndex, titleIndex } = useContext(DataContext);
  const { questions } = data[titleIndex];

  return (
    <progress value={(100 / questions.length) * (questionIndex + 1)} max="100">
      32%
    </progress>
  );
}
