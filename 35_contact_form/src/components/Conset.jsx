import styles from "./Conset.module.scss";
import { useState, useContext, useEffect, useCallback, useMemo } from "react";

import { AppContext } from "../Context";

export default function Conset() {
  const { inputFields, setInputFields, errors } = useContext(AppContext);

  function handler(e) {
    if (e.key === " ") {
      setInputFields((prev) => {
        return { ...prev, conset: !prev.conset };
      });
    }
  }

  return (
    <div
      className={styles.container}
      onClick={() =>
        setInputFields((e) => {
          return { ...e, conset: !e.conset };
        })
      }>
      <div className={inputFields?.conset ? styles.boxChecked : styles.boxEmpty} tabIndex="0" onKeyDown={handler}>
        {inputFields?.conset && <img src="/images/icon-checkbox-check.svg" alt="check" />}
      </div>
      <h1>
        I consent to being contacted by the team <span> *</span>
      </h1>
      <p className={styles.validationError}>{errors.conset}</p>
    </div>
  );
}
