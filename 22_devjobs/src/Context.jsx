import React, { useState, useContext, useEffect } from "react";
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

  return <ModalContext.Provider value={{ showModal, setShowModal, filter, setFilter, fields, setFields, data }}>{children}</ModalContext.Provider>;
}

export { Context, ModalContext };
