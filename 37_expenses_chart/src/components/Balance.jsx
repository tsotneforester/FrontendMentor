import styles from "./Balance.module.scss";

export default function Balance({ children }) {
  return (
    <div className={styles.container}>
      <p>My balance</p>
      <h1>$921.48</h1>
      <img src="/icons/logo.svg" alt="logo" />
    </div>
  );
}
