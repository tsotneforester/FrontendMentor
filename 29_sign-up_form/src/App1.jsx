import { useEffect, useState } from "react";
import styled from "styled-components";
import { root } from "./styled";
import Heading from "./components/Heading";
import Offer from "./components/Offer";
import { S } from "./styled";

function App() {
  const [inputFields, setInputFields] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  //[Field Name] cannot be empty

  const validateValues = (inputFields) => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = {};

    if (!emailReg.test(inputFields.email)) {
      errors.email = "Looks like this is not an email";
    }
    if (!inputFields.fname) {
      errors.fname = `First Name cannot be empty`;
    }

    if (!inputFields.lname) {
      errors.lname = `Last Name cannot be empty`;
    }

    if (!inputFields.password) {
      errors.password = `Password cannot be empty`;
    }

    if (!inputFields.email) {
      errors.email = `Email cannot be empty`;
    }
    return errors;
  };

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  useEffect(() => {
    if (submitting) {
      setErrors(validateValues(inputFields));
    }
  }, [inputFields]);

  return (
    <>
      <Heading />
      <S.Main>
        <Offer />
        <form>
          <fieldset>
            <div className={`input ${errors.fname ? "alert" : ""}`}>
              <input className={errors.fname ? "alert" : ""} onChange={handleChange} name="fname" type="text" placeholder="First Name" />
              {errors.fname && <img src="images/alert.png" alt="alert" />}
            </div>
            <p>{errors.fname}</p>
          </fieldset>
          <fieldset>
            <div className={`input ${errors.lname ? "alert" : ""}`}>
              <input className={errors.lname ? "alert" : ""} onChange={handleChange} name="lname" type="text" placeholder="Last Name" />
              {errors.lname && <img src="images/alert.png" alt="alert" />}
            </div>
            <p>{errors.lname}</p>
          </fieldset>
          <fieldset>
            <div className={`input ${errors.email ? "alert" : ""}`}>
              <input className={errors.email ? "alert" : ""} onChange={handleChange} name="email" type="text" placeholder="Email Address" />
              {errors.email && <img src="images/alert.png" alt="alert" />}
            </div>
            <p>{errors.email}</p>
          </fieldset>
          <fieldset>
            <div className={`input ${errors.password ? "alert" : ""}`}>
              <input className={errors.password ? "alert" : ""} onChange={handleChange} type="password" name="password" placeholder="Password" />
              {errors.password && <img src="images/alert.png" alt="alert" />}
            </div>
            <p>{errors.password}</p>
          </fieldset>

          <button onClick={handleSubmit}>CLAIM YOUR FREE TRIAL</button>
          <p>
            By clicking the button, you are agreeing to our <span>Terms and Services</span>
          </p>
        </form>
      </S.Main>
    </>
  );
}

export default App;
