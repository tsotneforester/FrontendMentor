import React, { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import styled, { ThemeProvider, css } from "styled-components";
import data from "./assets/data.json";
const ModalContext = React.createContext();

function Context({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [fields, setFields] = useState({
    position: "",
    company: "",
    location: "",
    contract: "",
  });
  const [filter, setFilter] = useState({
    position: "",
    company: "",
    location: "",
    contract: "",
  });

  let storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const [isDarkTheme, setIsDarkTheme] = useState(storedTheme == "dark" ? true : false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ModalContext.Provider value={{ isDarkTheme, setIsDarkTheme, showModal, setShowModal, filter, setFilter, fields, setFields, data }}>
        <GlobalStyles />
        {children}
      </ModalContext.Provider>
    </ThemeProvider>
  );
}

export { Context, ModalContext };
