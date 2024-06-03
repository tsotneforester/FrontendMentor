import React from "react";
import ThemeToggler from "./ThemeToggler";
import Popup from "./Popup";
import styles from "./Header.module.scss";
import { useContext } from "react";
import { AppContext } from "../Context";
import { fontData } from "./Popup";

export default function Header() {
  const { openedModal, setOpenedModal, fontTheme } = useContext(AppContext);

  return (
    <div className={styles.header}>
      <img src="./assets/logo.svg" alt="" />
      <div className={styles.options}>
        <div className={styles.fontOptions}>
          <p onClick={() => setOpenedModal((e) => !e)}>{fontData[fontTheme]?.name}</p>
          <img onClick={() => setOpenedModal((e) => !e)} className={openedModal ? styles.active : styles.closed} src="./assets/icon-arrow-down.svg" />
          <Popup />
        </div>

        <div className={styles.divider}></div>
        <ThemeToggler />
      </div>
    </div>
  );
}
