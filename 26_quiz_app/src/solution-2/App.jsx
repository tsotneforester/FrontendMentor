import { useEffect, useReducer } from "react";
import axios from "axios";

import { ThemeToggler, Choises, Welcome, Titles, SubmitButton, SelectError, ReloadButton, ResultBoard, Progress, Loading, QuizCompleted, TitleWithIcon, CounterLine } from "./components/index";

//npm json-server db.json
let URL = "http://localhost:3000/quizzes";
import { reducer } from "./Reducer";
import { initialState } from "./Reducer";

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
        {/* |||||||||||||||||| Header |||||||||||||||||||| */}
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
