import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchCountries() {
    setLoading(true);
    try {
      const { data } = await axios.get('https://restcountries.com/v3.1/all');

      data.sort((a, b) => {
        return b.population - a.population;
      });

      setCountries(data);
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
    fetchCountries();
  }, []);

  return { countries, loading, error };
}
