import { useContext } from "react";
import { DataContext } from "./index";

import { ThemeToggler, Choises, Welcome, Titles, SubmitButton, SelectError, ReloadButton, ResultBoard, Progress, Loading, QuizCompleted, TitleWithIcon, CounterLine } from "./components/index";

function App() {
  const { status } = useContext(DataContext);

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
