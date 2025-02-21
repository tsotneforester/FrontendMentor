import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchCountries() {
    setLoading(true);
    try {
      const { data } = await axios.get('https://restcountries.com/v3.1/all');
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
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return { countries, loading, error };
}
