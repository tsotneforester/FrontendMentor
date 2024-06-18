import styles from "./Wrapper.module.scss";

export default function Wrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
