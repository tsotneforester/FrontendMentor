import React, { useState, useEffect, useContext } from "react";
import { GlobalStyles } from "./styled";
const DataContext = React.createContext();

function Context({ children }) {
  const [email, setEmail] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <DataContext.Provider value={{ email, setEmail, formSubmitted, setFormSubmitted }}>
      <GlobalStyles />
      {children}
    </DataContext.Provider>
  );
}

export { Context, DataContext };
