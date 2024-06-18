import styles from "./Card.module.scss";
import Chart from "./Chart";

export default function Card() {
  return (
    <div className={styles.card}>
      <h1>Spending - Last 7 days</h1>
      <Chart />
      <div className={styles.seperator}></div>
      <div className={styles.total}>
        <p>Total this month</p>
        <div>
          <h1>$478.33</h1>
          <h6>+2.4% </h6>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
}
