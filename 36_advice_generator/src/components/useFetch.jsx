import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    setError(null);
    try {
      const response = await axios(url);
      setData(response.data.slip);
    } catch (error) {
      // console.log(error);
      // console.log(error.response.data.message);
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        setError(error.response.data.message);
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return { data, setData, loading, setLoading, error, refetch: fetchData };
}

export default useFetch;
