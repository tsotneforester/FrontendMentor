import React from "react";
import { useContext } from "react";
import { DataContext } from "../index";

export default function CounterLine() {
  const { data, questionIndex, titleIndex } = useContext(DataContext);
  const { questions } = data[titleIndex];

  return (
    <div>
      <span>
        Question {questionIndex + 1} of {questions.length}
      </span>
      <h2 className="question">{questions[questionIndex].question}</h2>
    </div>
  );
}
