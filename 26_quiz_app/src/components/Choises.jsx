import React from "react";
const ALPH = ["a", "b", "c", "d"];

export default function Choises({ data, dispatch, questionIndex, didScore, didNotScore, choise, submitted }) {
  return (
    <>
      {data.questions[questionIndex].options.map((e, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              if (!submitted) {
                dispatch({ type: "choiseSelected", payload: e });
              }
            }}
            className={`answer-choise ${didScore && e == data.questions[questionIndex].answer ? "correct" : ""} ${choise == e ? "version" : ""} ${didNotScore && choise == e ? "wrong" : ""}`}>
            <div className={`letter-box ${didScore && e == data.questions[questionIndex].answer ? "correct" : ""} ${choise == e ? "version" : ""} ${didNotScore && choise == e ? "wrong" : ""}`}>{ALPH[i]}</div>
            <p>{e}</p>
            <div className="correct-wrong">
              {didScore && e == data.questions[questionIndex].answer ? <img src="assets/images/icon-correct.svg" alt="" /> : ""} {didNotScore && choise == e ? <img src="assets/images/icon-error.svg" alt="" /> : ""}
              {didNotScore && e == data.questions[questionIndex].answer ? <img src="assets/images/icon-correct.svg" alt="" /> : ""}
            </div>
          </button>
        );
      })}
    </>
  );
}
