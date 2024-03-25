import React, { useState, useEffect } from "react";
import { Header, Search, Avatar, UserInfo, Bio, Statistics, Social } from "./Main";
import "./style.css";

let storedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

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
        </div>
      </main>
    </>
  );
}

export default Index;
