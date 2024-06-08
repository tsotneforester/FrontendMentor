import styles from "./Location.module.scss";
import { useContext } from "react";
import { AppContext } from "../Context";

export default function Location() {
  const { isLoading, timeObject } = useContext(AppContext);

  return <h1 className={styles.location}>IN {isLoading ? "..." : timeObject?.city + ", " + timeObject?.country}</h1>;
}
