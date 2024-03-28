import React, { useEffect, useState } from "react";

export default function ThemeToggler() {
  let storedTheme = localStorage.getItem("appTheme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("appTheme", theme);
  }, [theme]);

  function themeHandler() {
    let currentTheme = localStorage.getItem("appTheme");

    if (currentTheme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <div className="theme-toggler">
      <img src={`./assets/images/icon-sun-${theme == "light" ? "dark" : "light"}.svg `} alt="" />
      <div className="color" onClick={themeHandler}>
        <div className={`circle ${theme == "light" ? "toggled" : ""}`}></div>
      </div>
      <img src={`./assets/images/icon-moon-${theme == "light" ? "dark" : "light"}.svg `} alt="" />
    </div>
  );
}
