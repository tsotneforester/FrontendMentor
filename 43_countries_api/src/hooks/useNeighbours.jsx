import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useNeighbours(country) {
  const [neighbours, setNeighbours] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchNeighbours(cnt) {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha?codes=${cnt.borders.join(',')}`
      );
      let { data } = response;

      setNeighbours(data);
    } catch (error) {
      if (error.response) {
        //🔰 The request was made and the server responded with a status code
        setError({ name: 'data', message: error.response.data?.message });
      } else if (error.request) {
        //🔰 The request was made but no response was received
        setError({ name: 'server', message: error.request.data?.message });
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }
  }
  useEffect(() => {
    fetchNeighbours(country);
  }, [country]);

  return { neighbours, loading, error };
}
