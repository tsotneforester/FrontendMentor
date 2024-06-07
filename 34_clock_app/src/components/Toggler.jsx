import styles from "./Toggler.module.scss";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Context";

export default function Toggler() {
  const [currentTime, setCurrentTime] = useState(null);
  const { isLoading, timeObject, showMore, setShowMore } = useContext(AppContext);

  return (
    <div className={styles.button} onClick={() => setShowMore((e) => !e)}>
      <h1>{showMore ? "less" : "more"}</h1>
      <div className={styles.circle}>
        <img className={showMore ? styles.iconTransformed : styles.icon} src="./assets/icon-arrow-down.svg" />
      </div>
    </div>
  );
}
