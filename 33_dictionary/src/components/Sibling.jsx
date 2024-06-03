import styles from "./Sibling.module.scss";
import { Link } from "react-router-dom";

export default function Sibling({ arr = [], name }) {
  return (
    arr.length > 0 && (
      <div className={styles.sibling}>
        <p>{name}</p>
        <div>
          {arr.map((e, i) => {
            return (
              <Link key={i} className={styles.link} to={`/${e}`}>
                {e}
              </Link>
            );
          })}
        </div>
      </div>
    )
  );
}
