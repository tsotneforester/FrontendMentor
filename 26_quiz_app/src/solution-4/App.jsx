import { useContext, useEffect } from "react";
// import { DataContext } from "./index";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Welcome, Loading, ThemeToggler, Titles, TitleWithIcon, CounterLine, Progress, Choises, SubmitButton, SelectError, ReloadButton, ResultBoard, QuizCompleted } from "./components/index";
let URL = "http://localhost:3000/quizzes";

function App() {
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    axios(URL).then((e) => {
      dispatch({ type: "dataReceived", payload: e.data });
    });
  }, []);

  return (
    <>
      <header>
        {/* |||||||||||||||||| ASIDE |||||||||||||||||||| */}
        {status == "active" && <TitleWithIcon />}
        {(status == "finished" || status == "ready") && <div></div>}
        <ThemeToggler />
      </header>
      <aside>
        {/* |||||||||||||||||| ASIDE |||||||||||||||||||| */}
        {status == "loading" && <Loading />}
        {status == "ready" && <Welcome />}
        {status == "active" && (
          <>
            <CounterLine />
            <Progress />
          </>
        )}
        {status == "finished" && <QuizCompleted />}
      </aside>

      <main>
        {status == "ready" && <Titles />}

        {status == "active" && (
          <>
            <Choises />
            <SubmitButton />
            <SelectError />
          </>
        )}

        {status == "finished" && (
          <>
            <ResultBoard />
            <ReloadButton />
          </>
        )}
      </main>
    </>
  );
}

export default App;
