import React, { useState, useEffect } from "react";
import { Header, Search, Avatar, UserInfo, Bio, Statistics, Social } from "./Main";
import "./style.css";

let storedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

console.log(storedTheme);

function Index() {
  const [user, setUser] = useState("tsotneforester");
  const [iserror, setIsError] = useState(false);
  const [newUser, setNewUser] = useState("");
  const [theme, setTheme] = useState(storedTheme);
  async function fetchApi(name) {
    try {
      let step1 = await fetch(`https://api.github.com/users/${name}`);
      if (step1.status == "404") {
        setIsError("No result");
        throw "No profile with this username";
      } else {
        let step2 = await step1.json();
        let result = { ...step2 };
        console.log(result);
        setUser(result);
      }
    } catch (e) {
      console.log(e);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    fetchApi(newUser);
    setNewUser("");
  }
  function inputHandler(e) {
    setNewUser(e.target.value);
  }

  function themeHandler() {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  useEffect(() => {
    fetchApi(user);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    console.log("useeffect - theme");
  }, [theme]);

  return (
    <>
      <Header themeName={theme == "dark" ? "LIGHT" : "DARK"} themeHandler={themeHandler} themeIcon={process.env.PUBLIC_URL + theme == "dark" ? "assets/light.png" : "assets/dark.png"} />

      <Search error={iserror} input={newUser} inputHandler={inputHandler} submitHandler={submitHandler} />

      <main>
        <Avatar {...user} />
        <UserInfo {...user} />

        <div className="details">
          <Bio {...user} />
          <Statistics {...user} />
          <Social {...user} />
          {/* <div className="social">
            <section>
              <div className={user.location ? "line" : "line gray"} id="town">
                <div className="img">
                  <img src="assets/pin.png" alt="pin" />
                </div>
                <span>{user.location ? user.location : "Unavalable"}</span>
              </div>
              <div className="line" id="url">
                <div className="img">
                  <img src="assets/url.png" alt="url" />
                </div>
                <a href={user.blog ? user.blog : user.html_url}>{user.blog ? http(user.blog) : "Github"}</a>
              </div>
            </section>
            <section>
              <div className={user.twitter_username ? "line" : "line gray"} id="twitter">
                <div className="img">
                  <img src="assets/twitter.png" alt="twitter" />
                </div>
                <span>{user.twitter_username ? user.twitter_username : "Not Available"}</span>
              </div>
              <div className="line" id="work">
                <div className="img">
                  <img src="assets/work.png" alt="work" />
                </div>
                <span>{user.company ? user.company : "@personal"}</span>
              </div>
            </section>
          </div> */}
        </div>
      </main>
    </>
  );
}

export default Index;
