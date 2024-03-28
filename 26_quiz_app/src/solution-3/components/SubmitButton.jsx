import React from "react";
import { useContext } from "react";
import { DataContext } from "../index";

export default function SubmitButton() {
  const { data, dispatch, questionIndex, titleIndex, didScore, didNotScore, choise, submitted } = useContext(DataContext);

  return (
    <div
      className="purple-button"
      onClick={() => {
        if (!choise) {
          dispatch({
            type: "showSelectionError",
          });
        } else if (choise && !submitted) {
          dispatch({
            type: "submit",
          });

          if (choise == data[titleIndex].questions[questionIndex].answer) {
            dispatch({
              type: "scored",
            });
          } else {
            dispatch({
              type: "missed",
            });
          }
        } else if (choise && submitted) {
          if (questionIndex == data[titleIndex].questions.length - 1) {
            dispatch({
              type: "finished",
            });
          } else {
            dispatch({
              type: "nextQuestion",
            });
          }
        }
      }}>
      {submitted ? <p>Next</p> : <p>Submit</p>}
    </div>
  );
}
