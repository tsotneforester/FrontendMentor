import useFetch from "./components/useFetch";
import styles from "./App.module.scss";
import BeatLoader from "react-spinners/BeatLoader";

const URL = "https://api.adviceslip.com/advice";

function App() {
  const { data, refetch, loading, error } = useFetch(URL);

  return (
    <div className={styles.card}>
      <main>
        <BeatLoader color={"#7c8ba1"} loading={loading} size={15} aria-label="Loading Spinner" />

        {!loading && (
          <>
            <p>ADVICE #{data?.id}</p>
            <h1>“{error || data?.advice}”</h1>
          </>
        )}
      </main>

      <img src="/icons/pattern-divider-mobile.svg" alt="line" />
      <div className={styles.refreshButton}>
        <img src="/icons/icon-dice.svg" alt="dice" onClick={refetch} />
      </div>
    </div>
  );
}

export default App;
