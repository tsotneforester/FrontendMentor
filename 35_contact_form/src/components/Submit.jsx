import styles from "./Submit.module.scss";
import { memo } from "react";

export default memo(function Submit() {
  return <button className={styles.container}>Submit</button>;
});
