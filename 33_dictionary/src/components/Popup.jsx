import React from "react";
import styles from "./Popup.module.scss";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../Context";

export const fontData = [
  {
    name: "Sans Serif",
    font: '"Inter", sans-serif',
  },
  {
    name: "Serif",
    font: '"Lora", serif',
  },
  {
    name: "Mono",
    font: '"Inconsolata", monospace',
  },
];

export default function Header() {
  const popupRef = useRef();

  const { openedModal, setOpenedModal, fontTheme, setFontTheme } = useContext(AppContext);

  function handler(e) {
    console.log(e);
    setFontTheme(e);
    setOpenedModal(false);
  }

  useEffect(() => {
    if (fontTheme) {
      localStorage.setItem("appFont", fontTheme);
      document.body.style.fontFamily = fontData[fontTheme - 1]?.font;
    }
  }, [fontTheme]);

  useEffect(() => {
    // Function to handle clicks outside the popup
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpenedModal(false);
      }
    };

    // Add event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openedModal]);

  return (
    <div ref={popupRef} className={`${styles.popup} ${openedModal ? styles.active : styles.closed}`}>
      <ul>
        {fontData.map((e, i) => {
          return (
            <li key={i} className={fontTheme == i ? styles.selected : null} onClick={() => handler(i + 1)}>
              {e.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
