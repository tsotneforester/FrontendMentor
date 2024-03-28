import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";

export default function SubmitButton() {
  const data = useSelector((state) => state.data);
  const questionIndex = useSelector((state) => state.questionIndex);
  const titleIndex = useSelector((state) => state.titleIndex);
  const didScore = useSelector((state) => state.didScore);
  const didNotScore = useSelector((state) => state.didNotScore);
  const choise = useSelector((state) => state.choise);
  const submitted = useSelector((state) => state.submitted);

  const dispatch = useDispatch();

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
