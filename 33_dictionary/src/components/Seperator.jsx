import React from "react";
import styles from "./Seperator.module.scss";

export default function Seperator({ title }) {
  return (
    <div className={styles.seperator}>
      <h1>{title}</h1>

      <div className={styles.hr}></div>
    </div>
  );
}
