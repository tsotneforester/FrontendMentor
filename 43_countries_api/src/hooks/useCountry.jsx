import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useCountry(country) {
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasNeighbours, setHasNeighbours] = useState(false);

  async function fetchCountry(cnt) {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${cnt}?fullText=true`
      );
      let { data } = response;
      setCountryData(data[0]);
      if (data[0].borders) {
        setHasNeighbours(true);
      }
    } catch (error) {
      if (error.response) {
        //🔰 The request was made and the server responded with a status code
        setError({ name: 'data', message: error.response.data?.message });
      } else if (error.request) {
        //🔰 The request was made but no response was received
        setError({ name: 'server', message: error.request.data?.message });
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCountry(country);
  }, [country]);

  return { countryData, loading, error, hasNeighbours };
}
