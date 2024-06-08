import styles from "./Details.module.scss";
import { useContext } from "react";
import { AppContext } from "../Context";

export default function Time() {
  const { isLoading, timeObject, showMore } = useContext(AppContext);

  const classNames = [showMore ? styles.active : styles.hidden, timeObject?.lightTheme ? styles.light : styles.dark].join(" ");

  return (
    <div className={classNames}>
      <main className={styles.main}>
        <div>
          <p>Current timezone</p>
          <h1>{isLoading ? "..." : timeObject?.timezone}</h1>
        </div>
        <div>
          <p>Day of the year</p>
          <h1>{isLoading ? "..." : timeObject?.day_of_year}</h1>
        </div>
        <hr />
        <div>
          <p>Day of the week</p>
          <h1>{isLoading ? "..." : timeObject?.day_of_week}</h1>
        </div>
        <div>
          <p>Week number</p>
          <h1>{isLoading ? "..." : timeObject?.week_number}</h1>
        </div>
      </main>
    </div>
  );
}
