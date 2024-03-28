import { useState, useEffect } from "react";
import axios from "axios";

const ALPH = ["a", "b", "c", "d"];
//npm json-server db.json
let URL = "http://localhost:3000/quizzes";

let storedTheme = localStorage.getItem("appTheme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

function App() {
  const [data, setData] = useState();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedChoise, setSelectedChoise] = useState(null);
  const [status, setStatus] = useState("loading");
  const [title, setTitle] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0);
  const [showError, setShowError] = useState(false);
  const [didScore, setDidScore] = useState(false);
  const [didNotScore, setDidNotScore] = useState(null);
  const [theme, setTheme] = useState(storedTheme);

  function themeHandler() {
    let currentTheme = localStorage.getItem("appTheme");

    if (currentTheme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  useEffect(() => {
    axios(URL).then((e) => {
      e.data;
      setData(e.data);
      setStatus("ready");
    });
  }, []);

  useEffect(() => {
    if (title) {
      let tempData = data.find((e) => e.title == title);
      setData(tempData);
      setStatus("active");
    }
  }, [title]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("appTheme", theme);
  }, [theme]);

  return (
    <>
      <header>
        {status == "active" ? (
          <div className="title-with-icon">
            <div style={{ backgroundColor: data.color }} className="icon-frame">
              <div className="icon">
                <img src={data.icon} alt="icon" />
              </div>
            </div>

            <h1>{data.title}</h1>
          </div>
        ) : (
          <div></div>
        )}

        <div className="theme-toggler">
          <img src={`./assets/images/icon-sun-${theme == "light" ? "dark" : "light"}.svg `} alt="" />
          <div className="color" onClick={themeHandler}>
            <div className={`circle ${theme == "light" ? "toggled" : ""}`}></div>
          </div>
          <img src={`./assets/images/icon-moon-${theme == "light" ? "dark" : "light"}.svg `} alt="" />
        </div>
      </header>
      <aside>
        {status == "loading" && (
          <>
            <h1>loadimg...</h1>
          </>
        )}
        {status == "ready" && (
          <>
            <h1>Welcome to the</h1>
            <h1 className="bold">Frontend Quiz!</h1>
            <span style={{ margin: "40px 0" }}>Pick a subject to get started.</span>
          </>
        )}
        {status == "active" && (
          <>
            <div>
              <span>
                Question {activeQuestion + 1} of {data.questions.length}
              </span>
              <h2 className="question">{data.questions[activeQuestion].question}</h2>
            </div>
            <progress value={(100 / data.questions.length) * (activeQuestion + 1)} max="100">
              32%
            </progress>
          </>
        )}
        {status == "finished" && (
          <>
            <h1>Quiz Completed</h1>
            <h1 className="bold">You scored...</h1>
          </>
        )}
      </aside>

      <main>
        {status == "ready" && (
          <>
            {data
              ? data.map((e, i) => {
                  return (
                    <button
                      key={i}
                      className="title-choise"
                      onClick={() => {
                        setTitle(e.title);
                      }}>
                      <div className="title-with-icon">
                        <div style={{ backgroundColor: e.color }} className="icon-frame">
                          <div className="icon">
                            <img src={e.icon} alt="icon" />
                          </div>
                        </div>

                        <h1>{e.title}</h1>
                      </div>
                    </button>
                  );
                })
              : ""}
          </>
        )}

        {status == "active" && (
          <>
            {data.questions[activeQuestion].options.map((e, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    if (!showNext) {
                      setSelectedChoise(e);
                      setShowError(false);
                    }
                  }}
                  className={`answer-choise ${didScore && e == data.questions[activeQuestion].answer ? "correct" : ""} ${selectedChoise == e ? "version" : ""} ${didNotScore && selectedChoise == e ? "wrong" : ""}`}>
                  <div className={`letter-box ${didScore && e == data.questions[activeQuestion].answer ? "correct" : ""} ${selectedChoise == e ? "version" : ""} ${didNotScore && selectedChoise == e ? "wrong" : ""}`}>{ALPH[i]}</div>
                  <p>{e}</p>
                  <div className="correct-wrong">
                    {didScore && e == data.questions[activeQuestion].answer ? <img src="assets/images/icon-correct.svg" alt="" /> : ""} {didNotScore && selectedChoise == e ? <img src="assets/images/icon-error.svg" alt="" /> : ""}
                    {didNotScore && e == data.questions[activeQuestion].answer ? <img src="assets/images/icon-correct.svg" alt="" /> : ""}
                  </div>
                </button>
              );
            })}
            <div
              className="purple-button"
              onClick={() => {
                if (!selectedChoise) {
                  setShowError(true);
                } else if (selectedChoise && !showNext) {
                  setShowNext(!showNext);

                  if (selectedChoise == data.questions[activeQuestion].answer) {
                    setScore((pre) => pre + 1);
                    setDidScore(true);
                  } else {
                    setDidNotScore(true);
                  }
                } else if (selectedChoise && showNext) {
                  setDidScore(false);
                  setDidNotScore(null);
                  setActiveQuestion((prev) => {
                    setSelectedChoise(null);
                    setShowNext(!showNext);
                    if (prev == data.questions.length - 1) {
                      setStatus("finished");
                      setSelectedChoise(null);
                      return 0;
                    }
                    return prev + 1;
                  });
                }
              }}>
              {showNext ? <p>Next</p> : <p>Submit</p>}
            </div>

            <div className={`select-error ${showError ? "active" : ""}`}>
              <img src="assets/images/icon-error.svg" alt="" />
              <p>Please select an answer</p>
            </div>
          </>
        )}

        {status == "finished" && (
          <>
            <div className="result-board">
              <div className="title-with-icon">
                <div style={{ backgroundColor: data.color }} className="icon-frame">
                  <div className="icon">
                    <img src={data.icon} alt="icon" />
                  </div>
                </div>

                <h1>{data.title}</h1>
              </div>
              <h1>{score}</h1>
              <span>Out of {data.questions.length}</span>
            </div>
            <div
              className="purple-button"
              onClick={() => {
                location.reload();
              }}>
              <p>play again</p>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
