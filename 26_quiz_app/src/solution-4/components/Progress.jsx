import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";

export default function Progress() {
  const data = useSelector((state) => state.data);
  const questionIndex = useSelector((state) => state.questionIndex);
  const titleIndex = useSelector((state) => state.titleIndex);
  const { questions } = data[titleIndex];

  return (
    <progress value={(100 / questions.length) * (questionIndex + 1)} max="100">
      32%
    </progress>
  );
}
