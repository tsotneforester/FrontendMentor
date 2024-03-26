import React from "react";

export default function SubmitButton({ data, choise, dispatch, submitted, questionIndex }) {
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

          if (choise == data.questions[questionIndex].answer) {
            dispatch({
              type: "scored",
            });
          } else {
            dispatch({
              type: "missed",
            });
          }
        } else if (choise && submitted) {
          if (questionIndex == data.questions.length - 1) {
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
