import styles from "./Card.module.scss";
import { useContext, useEffect } from "react";
import { AppContext } from "../Context";
import { Radio, Conset, Submit, Message, Fname, Lname, Email } from "./";

export default function Card() {
  const { setShowModal, inputFields, errors, setErrors, submitting, setSubmitting, setInputFields } = useContext(AppContext);

  const validateValues = (inputValues) => {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errors = {};
    if (inputValues.fname.length == 0) {
      errors.fname = "This field is required";
    }
    if (inputValues.lname.length == 0) {
      errors.lname = "This field is required";
    }
    if (!reg.test(inputValues.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (inputValues.email.length == 0) {
      errors.email = "This field is required";
    }

    if (inputValues.radio == null) {
      errors.radio = "Please select a query type";
    }

    if (inputValues.message.length == 0) {
      errors.message = "This field is required";
    }

    if (!inputValues.conset) {
      errors.conset = "To submit this form, please consent to being contacted";
    }
    return errors;
  };

  function handler(e) {
    e.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
    // setShowModal(true);
  }

  useEffect(() => {
    if (submitting && Object.keys(errors).length == 0) {
      setShowModal(true);
      setInputFields({ fname: "", lname: "", email: "", radio: null, message: "", conset: false });
      setSubmitting(false);
      console.log(inputFields);
    }
  }, [errors]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <form className={styles.form} onSubmit={handler}>
        <Fname />
        <Lname />
        <Email />
        <Radio />
        <Message />
        <Conset />
        <Submit />
      </form>
    </div>
  );
}
