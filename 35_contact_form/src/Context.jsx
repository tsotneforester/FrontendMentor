import React, { useState, useEffect } from "react";
const AppContext = React.createContext();

function Context({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [inputFields, setInputFields] = useState({ fname: "", lname: "", email: "", radio: null, message: "", conset: false });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function changeHandler(e) {
    // onchange handler for controlled inputs
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [showModal]);

  return <AppContext.Provider value={{ showModal, setShowModal, inputFields, setInputFields, errors, setErrors, submitting, setSubmitting, changeHandler }}>{children}</AppContext.Provider>;
}

export { Context, AppContext };
