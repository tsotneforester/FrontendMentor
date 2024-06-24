import styles from "./Header.module.scss";
import { useState, useContext, useEffect, useCallback, useMemo, useRef } from "react";

let path = ["feactures", "company", "careers", "about"];

export default function Header() {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [left, setLeft] = useState(-300);
  const refContainer = useRef(null);

  function handler(e) {
    console.log(e.target.getBoundingClientRect().x);
    setLeft(e.target.getBoundingClientRect().x);
  }

  return (
    <div className={styles.header}>
      <img src="/images/logo.svg" alt="" />
      <nav className={showMenuModal ? styles.navbar : styles.navbarHidden}>
        <div className={styles.routes}>
          {path.map((e) => {
            return (
              <p onMouseEnter={handler} ref={refContainer}>
                {e}
              </p>
            );
          })}
        </div>
        <div className={styles.user}>
          <p>login</p>
          <p>signup</p>
        </div>

        <img onClick={() => setShowMenuModal(false)} className={styles.closeModal} src="/images/icon-close-menu.svg" alt="" />
      </nav>

      <img onClick={() => setShowMenuModal(true)} className={styles.openModal} src="/images/icon-menu.svg" alt="" />

      <div className={styles.featureModal} style={{ left: left }}>
        <ul>
          <li>feature 1</li>
          <li>feature 1</li>
          <li>feature 1</li>
          <li>feature 1</li>
        </ul>
      </div>
    </div>
  );
}
