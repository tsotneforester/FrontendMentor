import React from "react";
import styles from "./Error.module.scss";

export default function Header({ text }) {
  const { title, message, resolution } = text;
  return (
    <div className={styles.error}>
      <img src="./assets/smily.png" alt="" />
      <h1>{title}</h1>
      <p>
        {message}
        {resolution}
      </p>
    </div>
  );
}
