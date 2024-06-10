import styles from "./Fname.module.scss";
import { useContext } from "react";
import { AppContext } from "../Context";

export default function Fname() {
  const { inputFields, errors, changeHandler } = useContext(AppContext);

  return (
    <fieldset className={styles.container}>
      <label htmlFor="fname">
        First Name<span> *</span>
      </label>
      <input id="fname" name="fname" type="text" onChange={changeHandler} value={inputFields.fname} className={errors.fname ? styles.inputError : styles.input} />
      <p className={styles.validationError}>{errors.fname}</p>
    </fieldset>
  );
}
