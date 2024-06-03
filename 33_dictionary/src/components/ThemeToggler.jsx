import React, { useEffect, useState } from "react";
import styles from "./ThemeToggler.module.scss";
import Moon from "../assets/icon-moon.svg?react";

export default function ThemeToggler() {
  let storedTheme = localStorage.getItem("appTheme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("appTheme", theme);
  }, [theme]);

  function themeHandler() {
    let currentTheme = localStorage.getItem("appTheme");
    console.log("hi");

    if (currentTheme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <div className={styles.toggler}>
      <div className={styles.color} onClick={themeHandler}>
        <div className={styles.circle}></div>
      </div>
      <Moon className={styles.moon} />
    </div>
  );
}
