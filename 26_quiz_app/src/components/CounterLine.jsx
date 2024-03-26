import React from "react";

export default function CounterLine({ questionIndex, data }) {
  return (
    <div>
      <span>
        Question {questionIndex + 1} of {data.questions.length}
      </span>
      <h2 className="question">{data.questions[questionIndex].question}</h2>
    </div>
  );
}
