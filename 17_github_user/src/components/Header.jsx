import { useState, useEffect } from "react";

let storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

function Header() {
  const [theme, setTheme] = useState(storedTheme);

  function themeHandler() {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header>
      <h1>devfinder</h1>
      <div className="theme">
        <span className="theme-name">{theme == "dark" ? "LIGHT" : "DARK"}</span>
        <img onClick={themeHandler} className="theme-toggle" src={`./${theme == "dark" ? "assets/light.png" : "assets/dark.png"}`} alt="sun" />
      </div>
    </header>
  );
}

export default Header;
