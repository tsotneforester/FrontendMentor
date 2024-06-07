import styles from "./Location.module.scss";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Context";

export default function Location() {
  const [currentTime, setCurrentTime] = useState(null);
  const { isLoading, timeObject } = useContext(AppContext);
  console.log(timeObject);

  return <h1 className={styles.location}>IN {isLoading ? "..." : timeObject?.city + ", " + timeObject?.country}</h1>;
}
