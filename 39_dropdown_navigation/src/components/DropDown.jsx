import styles from "./DropDown.module.scss";

export default function DropDown({ items }) {
  return (
    <div className={styles.dropdown}>
      {items.map((e) => {
        return <p>{e.title}</p>;
      })}
    </div>
  );
}
