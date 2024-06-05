import React, { useState } from "react";
const AppContext = React.createContext();

function Context({ children }) {
  const [data, setData] = useState({});
  const [isLoading, setILoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [openedModal, setOpenedModal] = useState(false);

  let storedFontTheme = Number(localStorage.getItem("appFont")) || 1;
  const [fontTheme, setFontTheme] = useState(storedFontTheme);

  return <AppContext.Provider value={{ data, setData, isLoading, setILoading, apiError, setApiError, openedModal, setOpenedModal, fontTheme, setFontTheme }}>{children}</AppContext.Provider>;
}

export { Context, AppContext };
