import { useSelector } from "react-redux";

export default function CounterLine() {
  const data = useSelector((state) => state.data);
  const questionIndex = useSelector((state) => state.questionIndex);
  const titleIndex = useSelector((state) => state.titleIndex);
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
