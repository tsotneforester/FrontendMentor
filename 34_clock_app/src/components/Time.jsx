import styles from "./Time.module.scss";
import { useContext } from "react";
import { AppContext } from "../Context";

export default function Time() {
  const { isLoading, timeObject } = useContext(AppContext);

  return (
    <div className={styles.time}>
      <h1>{isLoading ? "..." : new Date(timeObject?.datetime).toLocaleString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })}</h1>
      <p>{isLoading ? "..." : "+04 UTC"}</p>
    </div>
  );
}
