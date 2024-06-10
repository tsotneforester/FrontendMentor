import styles from "./Email.module.scss";
import { useContext } from "react";
import { AppContext } from "../Context";

export default function Email() {
  const { inputFields, errors, changeHandler } = useContext(AppContext);

  return (
    <fieldset className={styles.container}>
      <label htmlFor="email">
        Email Address<span> *</span>
      </label>
      <input id="email" name="email" type="text" onChange={changeHandler} value={inputFields.email} className={errors.email ? styles.inputError : styles.input} />
      <p className={styles.validationError}>{errors.email}</p>
    </fieldset>
  );
}
