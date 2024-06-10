import styles from "./Radio.module.scss";
import { useContext } from "react";
import { AppContext } from "../Context";

export default function Radio() {
  const { inputFields, setInputFields, errors } = useContext(AppContext);
  const data = ["General Enquiry", "Support Request"];

  function handler(e, i) {
    if (e.key === " ") {
      setInputFields({ ...inputFields, radio: i });
    }
  }

  return (
    <div className={styles.container}>
      <label>
        Query Type<span> *</span>
      </label>
      {data.map((e, i) => {
        return (
          <div
            key={i}
            className={i == inputFields?.radio ? styles.radioChecked : styles.radioEmpty}
            onClick={() => {
              setInputFields({ ...inputFields, radio: i });
            }}>
            <div key={i} className={i == inputFields?.radio ? styles.circleChecked : styles.circleEmpty} tabIndex={0} onKeyDown={(e) => handler(e, i)}>
              {i == inputFields?.radio ? <img src="/images/icon-radio-selected.svg" alt="check" /> : null}
            </div>
            <p>{e}</p>
          </div>
        );
      })}
      <p className={styles.validationError}>{errors.radio}</p>
    </div>
  );
}
