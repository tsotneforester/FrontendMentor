import { useEffect, useReducer } from "react";
import axios from "axios";

import { ThemeToggler, Choises, Welcome, Titles, SubmitButton, SelectError, ReloadButton, ResultBoard, Progress, Loading, QuizCompleted, TitleWithIcon, CounterLine } from "./components/index";

//npm json-server db.json
let URL = "http://localhost:3000/quizzes";

const initialState = {
  status: "loading",
  data: null,
  titleIndex: null,
  questionIndex: 0,
  choise: null,
  showSelectionError: false,
  submitted: false,
  score: 0,
  didNotScore: false,
  didScore: false,
};

function reducer(state, action) {
  //state = initialState
  if (action.type == "dataReceived") {
    return {
      ...state,
      status: "ready",
      data: action.payload,
    };
  }
  if (action.type == "titleSet") {
    return {
      ...state,
      status: "active",
      titleIndex: action.payload,
    };
  }
  if (action.type == "quizzStart") {
    return {
      ...state,
      status: "active",
      questions: action.payload,
    };
  }
  if (action.type == "choiseSelected") {
    return {
      ...state,
      choise: action.payload,
      showSelectionError: false,
    };
  }
  if (action.type == "showSelectionError") {
    return {
      ...state,
      showSelectionError: true,
    };
  }
  if (action.type == "submit") {
    return {
      ...state,
      submitted: true,
    };
  }
  if (action.type == "scored") {
    return {
      ...state,
      score: state.score + 1,
      didScore: true,
    };
  }

  if (action.type == "missed") {
    return {
      ...state,
      didNotScore: true,
    };
  }
  if (action.type == "nextQuestion") {
    return {
      ...state,
      didScore: false,
      didNotScore: null,
      choise: null,
      submitted: false,
      questionIndex: state.questionIndex + 1,
    };
  }

  if (action.type == "finished") {
    return {
      ...state,
      status: "finished",
      didScore: false,
      didNotScore: null,
      choise: null,
      submitted: false,
      questionIndex: 0,
    };
  }
}

function App() {
  const [{ status, data, titleIndex, questionIndex, choise, showSelectionError, submitted, didNotScore, score, didScore }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios(URL).then((e) => {
      dispatch({ type: "dataReceived", payload: e.data });
    });
  }, []);

  return (
    <>
      <header>
        {status == "active" && <TitleWithIcon data={data[titleIndex]} />}
        {(status == "finished" || status == "ready") && <div></div>}
        <ThemeToggler />
      </header>
      <aside>
        {/* |||||||||||||||||| ASIDE |||||||||||||||||||| */}
        {status == "loading" && <Loading />}
        {status == "ready" && <Welcome />}
        {status == "active" && (
          <>
            <CounterLine questionIndex={questionIndex} data={data[titleIndex]} />
            <Progress questionIndex={questionIndex} data={data[titleIndex]} />
          </>
        )}
        {status == "finished" && <QuizCompleted />}
      </aside>

      <main>
        {/* ||||||||||||||||||  MAIN |||||||||||||||||||| */}
        {status == "ready" && <Titles data={data} dispatch={dispatch} />}

        {status == "active" && (
          <>
            <Choises data={data[titleIndex]} didScore={didScore} didNotScore={didNotScore} choise={choise} dispatch={dispatch} questionIndex={questionIndex} submitted={submitted} />
            <SubmitButton data={data[titleIndex]} choise={choise} dispatch={dispatch} submitted={submitted} questionIndex={questionIndex} />

            <SelectError showSelectionError={showSelectionError} />
          </>
        )}

        {status == "finished" && (
          <>
            <ResultBoard data={data[titleIndex]} score={score} />
            <ReloadButton />
          </>
        )}
      </main>
    </>
  );
}

export default App;
