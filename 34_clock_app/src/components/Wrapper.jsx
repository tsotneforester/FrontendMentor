import styles from "./Wrapper.module.scss";
import { useContext } from "react";
import { AppContext } from "../Context";

export default function Wrapper({ children }) {
  const { isDaytime, setIsDaytime } = useContext(AppContext);

  return <div className={isDaytime ? styles.wrapperLight : styles.wrapperDark}>{children}</div>;
}
