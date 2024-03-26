import React from "react";

export default function Progress({ questionIndex, data }) {
  return (
    <progress value={(100 / data.questions.length) * (questionIndex + 1)} max="100">
      32%
    </progress>
  );
}
