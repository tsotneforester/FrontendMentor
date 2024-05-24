import React from "react";
import styles from "./Main.module.scss";
import { useState } from "react";

export default function Main() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const validateValues = (inputValue) => {
    let errors = "";
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!pattern.test(email)) {
      errors = "Please provide a valid email";
    }

    if (inputValue.length == 0) {
      errors = "Email is empty";
    }

    return errors;
  };

  function handler(e) {
    e.preventDefault();
    setError(validateValues(email));
  }

  return (
    <main className={styles.main}>
      <h1>We're</h1>
      <h2>Coming Soon</h2>
      <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>

      <form onSubmit={handler}>
        <fieldset className={error ? "invalid" : null}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" type="text" />
          {error && <img className={styles.error_icon} src="/assets/icon-error.svg" alt="" />}
          <button>
            <img src="/assets/icon-arrow.svg" alt="" />
          </button>
        </fieldset>

        <h3 className={styles.error_text}>{error}</h3>
      </form>
    </main>
  );
}
