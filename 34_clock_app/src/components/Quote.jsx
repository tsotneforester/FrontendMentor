import styles from "./Quote.module.scss";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Context";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

export default function Quote() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  async function fetchQuote() {
    let resp = await axios("https://api.quotable.io/quotes/random");

    const data = resp;
    console.log(data.data[0]);
    setData(data.data[0]);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return isLoading ? (
    <div className={styles.loading}>
      <BeatLoader color="white" margin={6} speedMultiplier={2} />
    </div>
  ) : (
    <div className={styles.quote}>
      <p>“{data?.content}”</p>
      <h1>{data?.author}</h1>
      <img
        src="./assets/icon-refresh.svg"
        onClick={() => {
          setIsLoading(true);
          fetchQuote();
        }}
      />
    </div>
  );
}
