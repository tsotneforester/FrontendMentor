import styles from "./Message.module.scss";
import { useContext } from "react";
import { AppContext } from "../Context";

export default function Message() {
  const { inputFields, errors, changeHandler } = useContext(AppContext);

  return (
    <fieldset className={styles.container}>
      <label htmlFor="message">
        Message <span> *</span>
      </label>
      <textarea id="message" name="message" value={inputFields.message} onChange={changeHandler} className={errors.message ? styles.inputError : styles.input}></textarea>
      <p className={styles.validationError}>{errors.message}</p>
    </fieldset>
  );
}
