import React from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

const ALPH = ["a", "b", "c", "d"];

export default function Choises() {
  const data = useSelector((state) => state.data);
  const questionIndex = useSelector((state) => state.questionIndex);
  const titleIndex = useSelector((state) => state.titleIndex);
  const didScore = useSelector((state) => state.didScore);
  const didNotScore = useSelector((state) => state.didNotScore);
  const choise = useSelector((state) => state.choise);
  const submitted = useSelector((state) => state.submitted);
  const dispatch = useDispatch();

  const { questions } = data[titleIndex];

  return (
    <>
      {questions[questionIndex].options.map((e, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              if (!submitted) {
                dispatch({ type: "choiseSelected", payload: e });
              }
            }}
            className={`answer-choise ${didScore && e == questions[questionIndex].answer ? "correct" : ""} ${choise == e ? "version" : ""} ${didNotScore && choise == e ? "wrong" : ""}`}>
            <div className={`letter-box ${didScore && e == questions[questionIndex].answer ? "correct" : ""} ${choise == e ? "version" : ""} ${didNotScore && choise == e ? "wrong" : ""}`}>{ALPH[i]}</div>
            <p>{e}</p>
            <div className="correct-wrong">
              {didScore && e == questions[questionIndex].answer ? <img src="assets/images/icon-correct.svg" alt="" /> : ""} {didNotScore && choise == e ? <img src="assets/images/icon-error.svg" alt="" /> : ""}
              {didNotScore && e == questions[questionIndex].answer ? <img src="assets/images/icon-correct.svg" alt="" /> : ""}
            </div>
          </button>
        );
      })}
    </>
  );
}
