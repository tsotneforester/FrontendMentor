import styles from './Details.module.scss';
import { useContext } from 'react';
import { AppContext } from '../Context';

export default function Time() {
  const { isLoading, timeObject, showMore } = useContext(AppContext);

  const classNames = [showMore ? styles.active : styles.hidden, timeObject?.lightTheme ? styles.light : styles.dark].join(' ');

  return (
    <div className={classNames}>
      <main className={styles.main}>
        <div>
          <p>Current timezone</p>
          <h1>{isLoading ? '...' : timeObject?.timezone || 'unknown'}</h1>
        </div>
        <div>
          <p>Day of the year</p>
          <h1>{isLoading ? '...' : timeObject?.dayOfYear}</h1>
        </div>
        <hr />
        <div>
          <p>Day of the week</p>
          <h1>{isLoading ? '...' : timeObject?.dayOfWeek}</h1>
        </div>
        <div>
          <p>Week number</p>
          <h1>{isLoading ? '...' : timeObject?.weekNumber}</h1>
        </div>
      </main>
    </div>
  );
}
