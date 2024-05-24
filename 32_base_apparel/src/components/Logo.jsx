import React from "react";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src="/assets/logo.svg" alt="" />
    </div>
  );
}
