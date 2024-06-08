import styles from "./Wrapper.module.scss";
import { useContext } from "react";
import { AppContext } from "../Context";

export default function Wrapper({ children }) {
  const { timeObject } = useContext(AppContext);

  let theme;

  if (timeObject?.lightTheme == undefined) {
    theme = styles.defaultBase;
  } else if (timeObject?.lightTheme == false) {
    theme = styles.wrapperDark;
  } else {
    theme = styles.wrapperLight;
  }

  return <div className={theme}>{children}</div>;
}
