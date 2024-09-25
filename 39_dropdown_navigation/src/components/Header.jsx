import styles from "./Header.module.scss";
import { useState, useContext, useEffect, useCallback, useMemo, useRef } from "react";

import DropDown from "./DropDown";

import { menuItemsData } from "../menuItemsData";

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
        <ul className={styles.menus}>
          {menuItemsData.map((e) => {
            return (
              <li>
                <p>{e.title}</p>
                {e.submenu && <img src="/images/icon-arrow-down.svg" alt="" />}
                {e.submenu && <DropDown items={e.submenu} />}
              </li>
            );
          })}
        </ul>
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
