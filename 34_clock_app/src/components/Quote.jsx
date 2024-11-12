import styles from './Quote.module.scss';
import { useState, useEffect } from 'react';

import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';

export default function Quote() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState('sfsdf');

  async function fetchQuote() {
    try {
      let { data } = await axios('https://programming-quotesapi.vercel.app/api/random');

      setData(data);
    } catch (error) {
      console.log(error);
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        setError(error.response.data.statusMessage);
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
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
      <p>“{data?.quote || error}”</p>
      <h1>{data?.author}</h1>
      <img
        src="./assets/icon-refresh.svg"
        onClick={() => {
          setIsLoading(true);
          setData(null);
          fetchQuote();
        }}
        alt="refresh"
      />
    </div>
  );
}
