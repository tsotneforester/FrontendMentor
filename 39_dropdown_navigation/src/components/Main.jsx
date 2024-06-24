import styles from "./Main.module.scss";

export default function Main({ children }) {
  return <div className={styles.main}>{children}</div>;
}
