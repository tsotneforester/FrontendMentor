import styles from "./Chart.module.scss";
import { useContext, useState, useRef, useEffect } from "react";
import { AppContext } from "../Context";

export default function Chart() {
  const { data, maxAmount } = useContext(AppContext);

  const [barMaxHeight, setBarMaxHeight] = useState(null);
  const refContainer = useRef(null);

  useEffect(() => {
    if (refContainer.current) {
      setBarMaxHeight(refContainer.current.getBoundingClientRect().height);
    }
  }, [data]);

  return (
    <div className={styles.chart}>
      {data.map((e, i) => {
        return (
          <div key={i} className={styles.column}>
            <div className={styles.bar} ref={refContainer}>
              <div className={maxAmount == e.amount ? styles.highestFill : styles.fill} style={{ height: barMaxHeight * (e.amount / maxAmount) }}>
                <h5 className={styles.tooltip}>${e.amount}</h5>
              </div>
            </div>
            <p>{e.day}</p>
          </div>
        );
      })}
    </div>
  );
}
