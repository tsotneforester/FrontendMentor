import styles from "./Lname.module.scss";
import { useContext } from "react";
import { AppContext } from "../Context";

export default function Lname() {
  const { inputFields, errors, changeHandler } = useContext(AppContext);

  return (
    <fieldset className={styles.container}>
      <label htmlFor="lname">
        First Name<span> *</span>
      </label>
      <input id="lname" name="lname" type="text" onChange={changeHandler} value={inputFields.lname} className={errors.lname ? styles.inputError : styles.input} />
      <p className={styles.validationError}>{errors.lname}</p>
    </fieldset>
  );
}
